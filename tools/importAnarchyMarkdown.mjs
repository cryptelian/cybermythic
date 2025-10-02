import fs from 'fs/promises';
import path from 'path';
import YAML from 'yaml';

const SYSTEM_ID = 'anarchy';
const WORKSPACE_ROOT = process.cwd();

async function fileExists(absolutePath) {
  try {
    const stat = await fs.stat(absolutePath);
    return stat.isFile();
  } catch (_) {
    return false;
  }
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

function generateId(length = 16) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let out = '';
  for (let i = 0; i < length; i++) out += chars[(Math.random() * chars.length) | 0];
  return out;
}

function defaultIconFor(type, subtype) {
  // Foundry expects URLs relative to Foundry public root
  // Use system icon set shipped in this repo
  const base = `systems/${SYSTEM_ID}/icons`;
  if (type === 'Actor') {
    switch (subtype) {
      case 'vehicle': return `${base}/vehicles/city-car.svg`;
      case 'sprite':
      case 'ic': return `${base}/actors/spirit.svg`;
      case 'device': return `${base}/actors/cpu.svg`;
      default: return `${base}/vitruvian-man.svg`;
    }
  }
  if (type === 'Item') {
    switch (subtype) {
      case 'weapon': return `${base}/weapons/pistol-gun.svg`;
      case 'gear': return `${base}/gear/gear.svg`;
      case 'shadowamp': return `${base}/shadowamps/other.svg`;
      case 'contact': return `${base}/contacts/contact.svg`;
      case 'quality': return `${base}/quality-positive.svg`;
      case 'skill': return `${base}/skills/skills.svg`;
      case 'metatype': return `${base}/vitruvian-man.svg`;
      case 'cyberdeck': return `${base}/shadowamps/cyberdeck.svg`;
      default: return `${base}/misc/crossed-swords.svg`;
    }
  }
  return `${base}/misc/anarchy.svg`;
}

function baseActorDoc(name, actorType = 'character') {
  return {
    _id: generateId(),
    name,
    type: actorType,
    img: defaultIconFor('Actor', actorType),
    system: {},
    ownership: { default: 0 },
    flags: {},
    items: []
  };
}

function baseItemDoc(name, itemType) {
  return {
    _id: generateId(),
    name,
    type: itemType,
    img: defaultIconFor('Item', itemType),
    system: {},
    ownership: { default: 0 },
    flags: {}
  };
}

function parseKeyValue(line) {
  const m = line.match(/^\s*([A-Za-z][A-Za-z0-9 _-]*?)\s*:\s*(.+)$/);
  if (!m) return undefined;
  return { key: m[1].trim().toLowerCase(), value: m[2].trim() };
}

function toInt(val, fallback = 0) {
  const n = parseInt(String(val).replace(/[^0-9-]/g, ''), 10);
  return Number.isFinite(n) ? n : fallback;
}

function detectSectionType(heading, blockText) {
  const h = (heading || '').toLowerCase();
  const b = blockText.toLowerCase();
  if (/\b(character|pc|npc)\b/.test(h) || /\bagility\b/.test(b) && /\bwillpower\b/.test(b)) return { doc: 'Actor', type: 'character' };
  if (/\bvehicle\b/.test(h)) return { doc: 'Actor', type: 'vehicle' };
  if (/\bdevice\b/.test(h)) return { doc: 'Actor', type: 'device' };
  if (/\bsprite\b/.test(h)) return { doc: 'Actor', type: 'sprite' };
  if (/\bic\b/.test(h)) return { doc: 'Actor', type: 'ic' };
  if (/\bweapon\b/.test(h)) return { doc: 'Item', type: 'weapon' };
  if (/\bgear\b/.test(h)) return { doc: 'Item', type: 'gear' };
  if (/\bshadow ?amp(s)?\b/.test(h)) return { doc: 'Item', type: 'shadowamp' };
  if (/\bcontact(s)?\b/.test(h)) return { doc: 'Item', type: 'contact' };
  if (/\bquality|qualities\b/.test(h)) return { doc: 'Item', type: 'quality' };
  if (/\bskill(s)?\b/.test(h)) return { doc: 'Item', type: 'skill' };
  if (/\bmetatype\b/.test(h)) return { doc: 'Item', type: 'metatype' };
  if (/\bcyberdeck\b/.test(h)) return { doc: 'Item', type: 'cyberdeck' };
  // fallback: try to infer actor by presence of attribute keys
  if (/\bagility|strength|willpower|logic|charisma|edge\b/.test(b)) return { doc: 'Actor', type: 'character' };
  return undefined;
}

function splitMarkdownIntoSections(md) {
  // Split on ATX headings, keep heading line with section
  const lines = md.split(/\r?\n/);
  const sections = [];
  let current = { heading: '', content: [] };
  for (const line of lines) {
    const isHeading = /^(#{1,6})\s+/.test(line);
    if (isHeading) {
      if (current.content.length) sections.push(current);
      current = { heading: line.replace(/^#{1,6}\s+/, '').trim(), content: [] };
    } else {
      current.content.push(line);
    }
  }
  if (current.content.length) sections.push(current);
  return sections.map(s => ({ heading: s.heading, text: s.content.join('\n') }));
}

function normalizeSpaces(str) {
  return str.replace(/[\t ]+/g, ' ').trim();
}

function findAllIndexes(text, search) {
  const idxs = [];
  let idx = 0;
  while ((idx = text.indexOf(search, idx)) !== -1) {
    idxs.push(idx);
    idx += search.length;
  }
  return idxs;
}

function parseAttributesFromText(text) {
  const result = {};
  const map = {
    agility: 'agility',
    strength: 'strength',
    willpower: 'willpower',
    logic: 'logic',
    charisma: 'charisma',
    edge: 'edge',
  };
  for (const key of Object.keys(map)) {
    const rx = new RegExp(`${key}[^0-9-]*(-?\\d+)`, 'i');
    const m = text.match(rx);
    if (m) {
      result[key] = toInt(m[1]);
    }
  }
  return result;
}

function parseListAfterHeading(text, headingLabelRegex) {
  // Returns array of lines under a subheading matching the regex, until next heading or empty line block
  const lines = text.split(/\r?\n/);
  const out = [];
  let inSection = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*#{1,6}\s+/.test(line)) break;
    if (!inSection && headingLabelRegex.test(line)) { inSection = true; continue; }
    if (inSection) {
      if (/^\s*$/.test(line)) break;
      const bullet = line.replace(/^\s*[-*]\s*/, '').trim();
      if (bullet) out.push(bullet);
    }
  }
  return out;
}

function buildCharacterFromSection(section) {
  const nameMatch = section.heading?.trim() ? section.heading.trim() : 'Character';
  const actor = baseActorDoc(nameMatch, 'character');
  // Prefer specific table parsing if present
  const attrTableRx = /(STRENGTH\s+AGILITY\s+WILLPOWER\s+LOGIC\s+CHARISMA\s+EDGE)[\s\S]*?(\n\s*([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s*)/i;
  const attrTable = section.text.match(attrTableRx);
  let attributes = {};
  if (attrTable) {
    attributes = {
      strength: toInt(attrTable[3], 1),
      agility: toInt(attrTable[4], 1),
      willpower: toInt(attrTable[5], 1),
      logic: toInt(attrTable[6], 1),
      charisma: toInt(attrTable[7], 1),
      edge: toInt(attrTable[8], 1),
    };
  } else {
    attributes = parseAttributesFromText(section.text);
  }
  actor.system = {
    description: { ownerId: '', description: '', gmnotes: '', favorites: [], state: { matrix: { value: 0, max: 0 }, physical: { value: 0, max: 0 } } },
    counters: { essence: { value: 6 }, karma: { value: 0, total: 0 }, anarchy: { value: 3, max: 6 }, sceneAnarchy: { value: 0, max: 3 }, social: { celebrity: { value: 0 }, credibility: { value: 0, max: 1 }, rumor: { value: 0, max: 1 } } },
    monitors: { physical: { value: 0, max: 10, resistance: 0 }, stun: { value: 0, max: 10, resistance: 0 }, armor: { label: 'Armor', value: 0, max: 9 } },
    attributes: {
      agility: { value: attributes.agility ?? 1 },
      strength: { value: attributes.strength ?? 1 },
      willpower: { value: attributes.willpower ?? 1 },
      logic: { value: attributes.logic ?? 1 },
      charisma: { value: attributes.charisma ?? 1 },
      edge: { value: attributes.edge ?? 1 },
    },
    style: '',
    genre: '',
    capacity: /\b(emerged)\b/i.test(section.text) ? 'emerged' : (/\b(awakened|mag|mage|adept)\b/i.test(section.text) ? 'awakened' : 'mundane'),
    connectionMode: 'disconnected',
    ownAnarchy: false,
    keywords: [],
    dispositions: [],
    cues: []
  };

  // Parse Skills lines like "FIREARMS 3+A" or "STREET GANGS (K)"
  const skillsBlockRx = /(\nSKILLS\s*\n)([\s\S]*?)(\n(SHADOW\s*AMPS|CUES|QUALITIES|WEAPONS|UNARMED|ARMOR|GEAR|CONTACTS)\b)/i;
  const skillsBlock = section.text.match(skillsBlockRx)?.[2] ?? '';
  const rawSkillLines = skillsBlock.split(/\r?\n/);
  const attrLetterToKey = { A: 'agility', W: 'willpower', L: 'logic', C: 'charisma', S: 'strength', E: 'edge', K: 'knowledge' };
  function toSkillCode(name) {
    const n = name.toLowerCase().trim();
    const map = {
      'close combat': 'closeCombat',
      'projectile weapons': 'projectileWeapons',
      'firearms': 'firearms',
      'heavy weapons': 'heavyWeapons',
      'vehicle weapons': 'vehicleWeapons',
      'piloting ground': 'pilotingGround',
      'piloting (ground)': 'pilotingGround',
      'piloting other': 'pilotingOther',
      'escape artist': 'escapeArtist',
      'astral combat': 'astralCombat',
      'conjuring': 'conjuring',
      'sorcery': 'sorcery',
      'survival': 'survival',
      'biotech': 'biotech',
      'hacking': 'hacking',
      'electronics': 'electronics',
      'engineering': 'engineering',
      'tasking': 'tasking',
      'tracking': 'tracking',
      'animals': 'animals',
      'con': 'con',
      'etiquette': 'etiquette',
      'intimidation': 'intimidation',
      'negotiation': 'negotiation',
      'disguise': 'disguise'
    };
    if (map[n]) return map[n];
    return n.replace(/[^a-z0-9]+/g, ' ').replace(/\b(\w)/g, (_, c) => c.toUpperCase()).replace(/\s+/g, '');
  }
  for (let i = 0; i < rawSkillLines.length; i++) {
    let raw = normalizeSpaces(rawSkillLines[i] || '');
    if (!raw) continue;
    if (/^(TOTAL\s+KARMA|KARMA\s+BALANCE)$/i.test(raw)) continue;
    // Name and optional rating + attribute letter like "4+W"
    const nm = raw.match(/^([A-Z][A-Z '\-\/]+?)(?:\s+([0-9]+)\+([AWLCS]))?$/i);
    if (!nm) continue;
    const nameText = nm[1].trim();
    const value = toInt(nm[2] ?? '0');
    const attrLetter = (nm[3] ?? '').toUpperCase();
    // Specialization on same or next line in parentheses
    let spec = (raw.match(/\(([^)]+)\)/)?.[1] ?? '').trim();
    if (!spec) {
      const next = normalizeSpaces(rawSkillLines[i + 1] || '');
      if (/^\([^)]*\)$/.test(next)) { spec = next.replace(/^\(|\)$/g, ''); i++; }
    }
    const isKnowledge = /\(K\)/i.test(raw) || spec.toUpperCase() === 'K';
    const attribute = isKnowledge ? 'knowledge' : (attrLetterToKey[attrLetter] ?? 'knowledge');
    const code = toSkillCode(nameText);
    const isSocial = /\b(con|etiquette|intimidation|negotiation)\b/i.test(nameText);
    const hasDrain = /(conjuring|sorcery|tasking|astralcombat)/i.test(code);
    const hasConvergence = /hacking/i.test(code);
    actor.items.push({
      ...baseItemDoc(nameText.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()), 'skill'),
      system: { code, attribute, value, specialization: (!isKnowledge && spec && spec.toUpperCase() !== 'K') ? spec : '', hasDrain, hasConvergence, isSocial, listspecialization: [] }
    });
  }

  // Parse Shadow Amps section simple lines (names and descriptions)
  const ampsBlockRx = /(\nSHADOW\s*AMPS[\s\S]*?)(\nCUES\b|\nQUALITIES\b|\nWEAPONS\b|\nUNARMED\b|\nARMOR\b|\nGEAR\b|\nCONTACTS\b)/i;
  const ampsBlock = section.text.match(ampsBlockRx)?.[1] ?? '';
  if (ampsBlock) {
    const rawLines = ampsBlock.split(/\r?\n/);
    // Skip header and essence line
    const entries = [];
    let i = 0;
    while (i < rawLines.length) {
      let line = normalizeSpaces(rawLines[i]);
      if (!line || /^SHADOW\s*AMPS/i.test(line) || /^ESSENCE/i.test(line)) { i++; continue; }
      // Expect a name line like "LIGHTNING BOLT (SPELL)" possibly followed by a level line (e.g., "3")
      const nameMatch = line.match(/^([A-Z][A-Z '\-]+?)(?:\s*\([^)]+\))?\s*$/i);
      if (nameMatch) {
        const nameRaw = nameMatch[1].trim();
        // Next line may be a level number
        let level = 1;
        let desc = '';
        const next = normalizeSpaces(rawLines[i + 1] || '');
        if (/^\d+\b/.test(next)) {
          level = toInt(next, 1);
          // Description starts at i+2
          let j = i + 2;
          const descLines = [];
          while (j < rawLines.length) {
            const dl = rawLines[j];
            if (!dl.trim()) break;
            // Stop if next entry begins (uppercase with parenthesis)
            if (/^[A-Z][A-Z '\-]+\s*\(/.test(dl.trim())) break;
            descLines.push(dl.trim());
            j++;
          }
          desc = descLines.join(' ').trim();
          i = j;
        } else {
          // No explicit level; treat the next non-empty line as description
          let j = i + 1;
          const descLines = [];
          while (j < rawLines.length) {
            const dl = rawLines[j];
            if (!dl.trim()) break;
            if (/^[A-Z][A-Z '\-]+\s*\(/.test(dl.trim())) break;
            descLines.push(dl.trim());
            j++;
          }
          desc = descLines.join(' ').trim();
          i = j;
        }
        const niceName = nameRaw.replace(/\s+/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
        actor.items.push({
          ...baseItemDoc(niceName, 'shadowamp'),
          system: { category: 'magical', capacity: actor.system.capacity ?? 'mundane', level, essence: 0, modifiers: [], inactive: false, references: { sourceReference: 'Anarchy Full.md', description: desc, gmnotes: '' } }
        });
        continue;
      }
      i++;
    }
  }

  // Parse Weapons table subset if present (keep UNARMED within the weapons block)
  const weaponsBlockRx = /(\nWEAPONS\s*\n)([\s\S]*?)(\n(ARMOR|GEAR|CONTACTS|CUES|QUALITIES)\b)/i;
  const weaponsBlock = section.text.match(weaponsBlockRx)?.[2] ?? '';
  const lines = weaponsBlock.split(/\r?\n/).map(l => l.replace(/[\t ]+/g, ' ').trim()).filter(Boolean);
  let pendingName = '';
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^WEAPONS$/i.test(line) || /^DAMAGE\s+CLOSE\s+NEAR\s+FAR$/i.test(line)) continue;
    if (/^UNARMED$/i.test(line)) { pendingName = 'Unarmed'; continue; }
    // If line contains both name and damage columns
    let m = line.match(/^(.*?)[\s]+((?:STR\/2)(?:\s*\+\s*\d+)?|\d+)([PS])\s+(OK|\-\d+|\-)\s+(OK|\-\d+|\-)\s+(OK|\-\d+|\-)$/i);
    let name = undefined; let dmgBase = undefined; let monitor = 'stun'; let short = 0; let medium = 0; let longVal = 0; let damageAttribute = '';
    if (m) {
      name = m[1].trim();
      dmgBase = m[2];
      monitor = (m[3] || 'S').toUpperCase() === 'P' ? 'physical' : 'stun';
      const toVal = v => (v.toUpperCase() === 'OK' ? 0 : (/^\-\d+$/.test(v) ? parseInt(v, 10) : 0));
      short = toVal(m[4]); medium = toVal(m[5]); longVal = toVal(m[6]);
    }
    else {
      // Maybe a pure damage line following a header name (e.g., UNARMED)
      const dm = line.match(/^((?:STR\/2)(?:\s*\+\s*\d+)?|\d+)([PS])\s+(OK|\-\d+|\-)\s+(OK|\-\d+|\-)\s+(OK|\-\d+|\-)$/i);
      if (dm && pendingName) {
        name = pendingName;
        dmgBase = dm[1];
        monitor = (dm[2] || 'S').toUpperCase() === 'P' ? 'physical' : 'stun';
        const toVal = v => (v.toUpperCase() === 'OK' ? 0 : (/^\-\d+$/.test(v) ? parseInt(v, 10) : 0));
        short = toVal(dm[3]); medium = toVal(dm[4]); longVal = toVal(dm[5]);
        pendingName = '';
      }
      else {
        // This might be a name-only line; set as pending
        if (!/^ARMOR$|^GEAR$|^CONTACTS$|^CUES$|^QUALITIES$/i.test(line)) {
          pendingName = line;
        }
        continue;
      }
    }
    // Compute damage numeric and attribute
    let damage = 0;
    if (/^STR\/2/i.test(dmgBase)) {
      damageAttribute = 'strength';
      const add = dmgBase.match(/\+\s*(\d+)/);
      damage = toInt(add?.[1] ?? '0');
    }
    else {
      damage = toInt(dmgBase);
    }
    const max = longVal === 0 && (m ? m[6] : '') === '-' ? 'medium' : 'long';
    actor.items.push({
      ...baseItemDoc(name, 'weapon'),
      system: {
        skill: /knife|sword|axe|club|unarmed|staff|baton/i.test(name) ? 'closeCombat' : (/bow|crossbow|thrown/i.test(name) ? 'projectileWeapons' : 'firearms'),
        specialization: '',
        strength: damageAttribute === 'strength',
        damage,
        damageAttribute,
        noArmor: false,
        monitor,
        defense: '',
        area: '',
        drain: 0,
        range: { max, short, medium, long: longVal },
        modifiers: [],
        inactive: false,
        references: { sourceReference: 'Anarchy Full.md', description: line.trim(), gmnotes: '' }
      }
    });
  }

  // Parse Qualities section (names only if present)
  const qualBlockRx = /(\nQUALITIES\s*\n)([\s\S]*?)(\n(WEAPONS|ARMOR|GEAR|CONTACTS|CUES)\b)/i;
  const qualBlock = section.text.match(qualBlockRx)?.[2] ?? '';
  qualBlock.split(/\r?\n/).map(normalizeSpaces).filter(Boolean).forEach(q => {
    if (q && !/^\(.*\)$/.test(q)) {
      actor.items.push({
        ...baseItemDoc(q, 'quality'),
        system: { modifiers: [], inactive: false, references: { sourceReference: 'Anarchy Full.md', description: '', gmnotes: '' }, positive: true }
      });
    }
  });

  // Parse GEAR block as lines
  const gearBlockRx = /(\nGEAR\s*\n)([\s\S]*?)(\n(CONTACTS|CUES|QUALITIES|WEAPONS|ARMOR)\b)/i;
  const gearBlock = section.text.match(gearBlockRx)?.[2] ?? '';
  const gearLines = gearBlock.split(/\r?\n/).map(normalizeSpaces).filter(Boolean);
  for (const g of gearLines) {
    if (/^-\d+/.test(g)) continue;
    actor.items.push({
      ...baseItemDoc(g, 'gear'),
      system: { inactive: false, references: { sourceReference: 'Anarchy Full.md', description: '', gmnotes: '' } }
    });
  }

  // Parse CONTACTS block
  const contactsBlockRx = /(\nCONTACTS\s*\n)([\s\S]*?)(\n([A-Z][A-Z \-]{2,}|\n\s*$))/i;
  const contactsBlock = section.text.match(contactsBlockRx)?.[2] ?? '';
  const contactLines = contactsBlock.split(/\r?\n/).map(normalizeSpaces).filter(Boolean);
  for (const c of contactLines) {
    actor.items.push({
      ...baseItemDoc(c, 'contact'),
      system: { inactive: false, references: { sourceReference: 'Anarchy Full.md', description: c, gmnotes: '' } }
    });
  }

  return actor;
}

function buildItemFromSection(section, itemType) {
  const name = section.heading?.trim() || (itemType.charAt(0).toUpperCase() + itemType.slice(1));
  const item = baseItemDoc(name, itemType);
  switch (itemType) {
    case 'weapon':
      item.system = { modifiers: [], inactive: false, references: { sourceReference: '', description: section.text.trim(), gmnotes: '' }, skill: '', specialization: '', strength: true, damage: 0, damageAttribute: '', noArmor: false, monitor: 'stun', defense: '', area: '', drain: 0, range: { max: 'short', short: 0, medium: 0, long: 0 } };
      break;
    case 'gear':
      item.system = { inactive: false, references: { sourceReference: '', description: section.text.trim(), gmnotes: '' } };
      break;
    case 'shadowamp':
      item.system = { modifiers: [], inactive: false, references: { sourceReference: '', description: section.text.trim(), gmnotes: '' }, category: 'special', capacity: 'mundane', level: 1, essence: 0 };
      break;
    case 'contact':
      item.system = { inactive: false, references: { sourceReference: '', description: section.text.trim(), gmnotes: '' } };
      break;
    case 'quality':
      item.system = { modifiers: [], inactive: false, references: { sourceReference: '', description: section.text.trim(), gmnotes: '' }, positive: !/\bnegative\b/i.test(section.text) };
      break;
    case 'skill':
      item.system = { inactive: false, references: { sourceReference: '', description: section.text.trim(), gmnotes: '' }, code: name.toLowerCase().replace(/\s+/g, ''), attribute: 'knowledge', value: 0, specialization: '', hasDrain: false, hasConvergence: false, isSocial: false, listspecialization: [] };
      break;
    case 'metatype':
      item.system = { modifiers: [], references: { sourceReference: '', description: section.text.trim(), gmnotes: '' } };
      break;
    case 'cyberdeck':
      item.system = { modifiers: [], inactive: false, references: { sourceReference: '', description: section.text.trim(), gmnotes: '' }, attributes: { firewall: { value: 1 } }, monitors: { matrix: { canMark: true, marks: [], value: 0, max: 6, resistance: 0 } }, programs: 1, processing: 1, connectionMode: 'disconnected' };
      break;
  }
  return item;
}

function parseMarkdown(md) {
  const actors = [];
  const items = [];

  // 1) Parse sample characters blocks in STREET PEOPLE/CHARACTERS
  const charSectionIdx = md.search(/\n\s*CHARACTERS\b/i);
  const streetPeopleIdx = md.search(/\n\s*STREET\s+PEOPLE\b/i);
  const startIdx = charSectionIdx >= 0 ? charSectionIdx : (streetPeopleIdx >= 0 ? streetPeopleIdx : -1);
  let endIdxRel = startIdx >= 0 ? md.slice(startIdx).search(/\n\s*ANARCHY\s+CATALOG\b/i) : -1;
  let endIdx = endIdxRel >= 0 ? startIdx + endIdxRel : md.length;
  if (startIdx >= 0 && endIdx > startIdx) {
    const region = md.substring(startIdx, endIdx);
    const lines = region.split(/\r?\n/);
    const isAllCaps = l => /^\s*[A-Z][A-Z '\-]{2,}\s*$/.test(l);
    const isSubHeading = l => /^(BACKGROUND|DISPOSITIONS|SKILLS|CUES|QUALITIES|WEAPONS|UNARMED|ARMOR|GEAR|CONTACTS|CHARACTERS|STREET\s+PEOPLE)\s*$/.test(l.trim());
    const candidateIdxs = [];
    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i];
      if (isAllCaps(ln) && !isSubHeading(ln)) candidateIdxs.push(i);
    }
    candidateIdxs.sort((a, b) => a - b);
    for (let c = 0; c < candidateIdxs.length; c++) {
      const hIdx = candidateIdxs[c];
      const nIdx = candidateIdxs[c + 1] ?? lines.length;
      const heading = lines[hIdx].trim();
      const content = lines.slice(hIdx + 1, nIdx).join('\n');
      if (/STRENGTH\s+AGILITY\s+WILLPOWER\s+LOGIC\s+CHARISMA\s+EDGE/i.test(content)) {
        const actor = buildCharacterFromSection({ heading, text: content });
        // Attach simple gear items from GEAR section comma list
        const gearMatch = content.match(/\nGEAR[\s\S]*?\n([^\n]+)\n\s*CONTACTS/i);
        if (gearMatch) {
          const gearList = gearMatch[1].split(/,\s*/).map(s => s.trim()).filter(Boolean);
          for (const g of gearList) {
            actor.items.push({
              ...baseItemDoc(g, 'gear'),
              system: { inactive: false, references: { sourceReference: 'Anarchy Full.md', description: '', gmnotes: '' } }
            });
          }
        }
        // Attach contacts lines under CONTACTS until next blank or next all-caps
        const contactsMatch = content.match(/\nCONTACTS\s*\n([\s\S]*?)\n\s*[A-Z][A-Z ]{2,}\s*$/i);
        if (contactsMatch) {
          const clines = contactsMatch[1].split(/\r?\n/).map(s => s.trim()).filter(Boolean);
          for (const cLine of clines) {
            actor.items.push({
              ...baseItemDoc(cLine, 'contact'),
              system: { inactive: false, references: { sourceReference: 'Anarchy Full.md', description: cLine, gmnotes: '' } }
            });
          }
        }
        actors.push(actor);
      }
    }
  }

  // 2) Parse Anarchy Catalog for global items and weapons
  const catAll = [...md.matchAll(/\n\s*ANARCHY\s+CATALOG[^\n]*\n/gi)];
  const catalogStart = catAll.length ? catAll[catAll.length - 1].index : -1;
  if (catalogStart >= 0) {
    const endRel = md.slice(catalogStart).search(/\n\s*INDEX\s+OF\s+ANARCHY\b/i);
    const catalogEnd = endRel >= 0 ? catalogStart + endRel : md.length;
    const catalog = md.substring(catalogStart, catalogEnd);
    // debug
    console.log(`[importAnarchyMarkdown] Catalog region bytes: ${catalog.length}`);

    // Parse Qualities
    const posQualBlock = catalog.match(/\n\s*POSITIVE\s+QUALITIES[\s\S]*?(?=\n\s*NEGATIVE\s+QUALITIES|\n\s*[A-Z ]{3,}\b)/i)?.[0] ?? '';
    const negQualBlock = catalog.match(/\n\s*NEGATIVE\s+QUALITIES[\s\S]*?(?=\n\s*[A-Z ]{3,}\b)/i)?.[0] ?? '';
    console.log(`[importAnarchyMarkdown] Qualities blocks sizes: +${posQualBlock.length} / -${negQualBlock.length}`);
    const qualityLineRx = /^\s*([A-Z][A-Za-z0-9 '\-\/\(\)]+):\s*(.+)$/gm;
    let m;
    while ((m = qualityLineRx.exec(posQualBlock))) {
      const name = m[1].trim();
      const desc = m[2].trim();
      items.push({ ...baseItemDoc(name, 'quality'), system: { modifiers: [], inactive: false, references: { sourceReference: 'Anarchy Catalog', description: desc, gmnotes: '' }, positive: true } });
    }
    while ((m = qualityLineRx.exec(negQualBlock))) {
      const name = m[1].trim();
      const desc = m[2].trim();
      items.push({ ...baseItemDoc(name, 'quality'), system: { modifiers: [], inactive: false, references: { sourceReference: 'Anarchy Catalog', description: desc, gmnotes: '' }, positive: false } });
    }

    // Parse Gear bullets
    const gearBlock = catalog.match(/\n\s*GEAR\s*[\r\n]+[\s\S]*?(?=\n\s*[A-Z ]{3,}\b)/i)?.[0] ?? '';
    console.log(`[importAnarchyMarkdown] Gear block size: ${gearBlock.length}`);
    gearBlock.split(/\r?\n/).forEach(line => {
      const l = normalizeSpaces(line);
      if (/^\•|^\-/.test(l) || /^\w/.test(l)) {
        const name = l.replace(/^\•\s*/, '').trim();
        if (!name || /\(|\)|:|\[/.test(name)) return; // skip complex lines and headings
        items.push({ ...baseItemDoc(name, 'gear'), system: { inactive: false, references: { sourceReference: 'Anarchy Catalog', description: '', gmnotes: '' } } });
      }
    });

    // Parse Weapon tables (robust join of brand lines and variable spacing)
    const startDamageHeader = catalog.search(/\n\s*Damage\s+Close\s+Near\s+Far\s*\n/i);
    const weaponAreaStart = startDamageHeader >= 0 ? startDamageHeader : catalog.search(/\n\s*WEAPONS\s*\n/i);
    const armorHeaderIdx = catalog.search(/\n\s*ARMOR\b/i);
    const weaponTableRegion = weaponAreaStart >= 0 && armorHeaderIdx > weaponAreaStart
      ? catalog.substring(weaponAreaStart, armorHeaderIdx)
      : '';
    if (weaponTableRegion) {
      const groupNames = [
        'Heavy Pistols', 'Machine Pistols', 'Light Pistols', 'Submachine Guns', 'Assault Rifles', 'Sniper Rifles', 'Shotguns',
        'Unarmed Combat', 'Knives/knucks/spurs', 'Staff/baton/club', 'Stun baton/staff', 'Swords/axes',
        'Thrown weapon', 'Bow and arrow', 'Crossbow', 'Grenades'
      ];
      const groupSet = new Set(groupNames.map(g => g.toLowerCase()));
      const rawLines = weaponTableRegion.split(/\r?\n/);
      const joined = [];
      let buffer = '';
      let parenOpen = false;
      const openParenCount = s => (s.match(/\(/g) || []).length;
      const closeParenCount = s => (s.match(/\)/g) || []).length;
      for (let li = 0; li < rawLines.length; li++) {
        const cur = rawLines[li];
        if (!cur.trim()) continue;
        if (!buffer) buffer = cur.trim();
        else buffer += ' ' + cur.trim();
        parenOpen = (openParenCount(buffer) > closeParenCount(buffer));
        if (!parenOpen) {
          joined.push(buffer);
          buffer = '';
        }
      }
      const seenWeapon = new Set();
      let joinedCount = 0;
      for (const entry of joined) {
        joinedCount++;
        // Identify a known group at start
        const grp = groupNames.find(g => entry.toLowerCase().startsWith(g.toLowerCase() + ' '));
        if (!grp) continue;
        // Extract optional brand list at end
        const brandsMatch = entry.match(/\(([A-Za-z0-9 ,\-\/'"\.]+)\)\s*$/);
        const brandList = (brandsMatch?.[1] ?? '').split(/,\s*/).filter(Boolean);
        const rest = (brandsMatch ? entry.slice(0, entry.lastIndexOf('(')) : entry).slice(grp.length).trim();
        // Tokenize rest by whitespace (tabs/spaces)
        const cols = rest.split(/\s+/).filter(Boolean);
        if (cols.length < 4) continue;
        // Damage token may be two tokens (STR/2 +1P) or one (6P)
        let dmgTok = cols[0];
        let idxTok = 1;
        if (/^STR\/2$/i.test(cols[0]) && /^\+?\d+[PS]$/i.test(cols[1])) { dmgTok = cols[0] + ' ' + cols[1]; idxTok = 2; }
        const clean = v => v.replace(/\*$/, '').toUpperCase();
        const toVal = v => (v === 'OK' ? 0 : (/^\-\d+$/.test(v) ? parseInt(v, 10) : 0));
        const rClose = clean(cols[idxTok] ?? 'OK');
        const rNear = clean(cols[idxTok + 1] ?? 'OK');
        const rFar = clean(cols[idxTok + 2] ?? '-');
        const short = toVal(rClose);
        const medium = toVal(rNear);
        const longVal = toVal(rFar);
        const max = rFar === '-' ? 'medium' : 'long';
        // Parse damage/monitor
        let damageAttribute = '';
        let damage = 0;
        let monitor = 'stun';
        const dm = dmgTok.match(/^(STR\/2)(?:\s*\+\s*(\d+))?([PS])?$/i) || dmgTok.match(/^(\d+)([PS])$/i);
        if (dm) {
          if ((dm[1] || '').toUpperCase() === 'STR/2') {
            damageAttribute = 'strength';
            damage = toInt(dm[2] ?? '0');
            monitor = (dm[3] ?? 'S').toUpperCase() === 'P' ? 'physical' : 'stun';
          } else {
            damage = toInt(dm[1]);
            monitor = (dm[2] ?? 'S').toUpperCase() === 'P' ? 'physical' : 'stun';
          }
        }
        const skill = /Thrown|Bow|Crossbow/i.test(grp) ? 'projectileWeapons' : (/Unarmed|Knives|Staff|Stun baton|Swords/i.test(grp) ? 'closeCombat' : 'firearms');
        const names = brandList.length ? brandList : [grp];
        for (const n of names) {
          const nm = n.trim();
          const key = nm + '|' + short + '|' + medium + '|' + longVal + '|' + monitor + '|' + damage + '|' + damageAttribute;
          if (!nm || seenWeapon.has(key)) continue;
          seenWeapon.add(key);
          items.push({
            ...baseItemDoc(nm, 'weapon'),
            system: { skill, specialization: '', strength: damageAttribute === 'strength', damage, damageAttribute, noArmor: false, monitor, defense: '', area: '', drain: 0, range: { max, short, medium, long: longVal }, modifiers: [], inactive: false, references: { sourceReference: 'Anarchy Catalog', description: entry.trim(), gmnotes: '' } }
          });
        }
      }
      console.log(`[importAnarchyMarkdown] Weapon entries scanned: ${joinedCount}, created: ${[...seenWeapon].length}`);
    }

    // Parse Shadow Amps categories into items (MAGICAL, ADEPT, BIOWARE, CYBERWARE, MATRIX, TECHNOMANCER, DRONE, GEAR AMPS, SOCIAL/OTHER, CRITTER)
    const ampCategories = [
      { key: 'MAGICAL AMPS', category: 'magical' },
      { key: 'ADEPT AMPS', category: 'adept' },
      { key: 'BIOWARE AMPS', category: 'bioware' },
      { key: 'CYBERWARE AMPS', category: 'cyberware' },
      { key: 'MATRIX AMPS', category: 'matrix' },
      { key: 'TECHNOMANCER AMPS', category: 'technomancer' },
      { key: 'DRONE AMPS', category: 'drone' },
      { key: 'GEAR AMPS', category: 'gear' },
      { key: 'SOCIAL/OTHER AMPS', category: 'social' },
      { key: 'CRITTER AMPS', category: 'critter' },
    ];
    for (const cat of ampCategories) {
      const block = catalog.match(new RegExp(`\\n${cat.key}[\\s\\S]*?(?=\\n[A-Z ]{3,}\\n)`, 'i'))?.[0] ?? '';
      const lines = block.split(/\r?\n/).map(normalizeSpaces).filter(l => l && !new RegExp(cat.key, 'i').test(l));
      for (const line of lines) {
        // name up to colon or first parenthesis; level from "(Amp Level N)" when present
        const name = (line.match(/^([^:]+?)(?:\(|:|$)/)?.[1] ?? '').trim();
        if (!name || name.length < 2) continue;
        const level = toInt((line.match(/Amp\s+Level\s+(\d+)/i) ?? [])[1] ?? '1', 1);
        let essence = 0;
        const essm = line.match(/(-?\d+(?:\.\d+)?)\s*Essence/i);
        if (essm) {
          essence = parseFloat(essm[1]);
        }
        items.push({
          ...baseItemDoc(name, 'shadowamp'),
          system: { category: cat.category, capacity: 'mundane', level, essence, modifiers: [], inactive: false, references: { sourceReference: 'Anarchy Catalog', description: line, gmnotes: '' } }
        });
      }
    }
  }

  // 3) Build skills compendium from encountered actor skills
  const skillIndex = new Map();
  for (const actor of actors) {
    for (const it of actor.items ?? []) {
      if (it.type === 'skill') {
        const key = (it.system?.code || it.name || '').toLowerCase();
        if (!skillIndex.has(key)) {
          const compSkill = baseItemDoc(it.name, 'skill');
          compSkill.system = {
            inactive: false,
            references: { sourceReference: 'Built from character sheets', description: '', gmnotes: '' },
            code: it.system?.code || key.replace(/[^a-z0-9]+/g, ''),
            attribute: it.system?.attribute || 'knowledge',
            value: 0,
            specialization: '',
            hasDrain: !!it.system?.hasDrain,
            hasConvergence: !!it.system?.hasConvergence,
            isSocial: !!it.system?.isSocial,
            listspecialization: []
          };
          items.push(compSkill);
          skillIndex.set(key, compSkill._id);
        }
      }
    }
  }

  return { actors, items };
}

async function writeYamlDocs(docs, outDir) {
  await ensureDir(outDir);
  for (const doc of docs) {
    const safe = (doc.name || doc._id).replace(/[^a-zA-Z0-9А-я]/g, '_');
    const typePrefix = doc.type || 'doc';
    const filename = `${typePrefix}_${safe}_${doc._id}.yml`;
    const yaml = YAML.stringify(doc);
    await fs.writeFile(path.join(outDir, filename), yaml, 'utf8');
  }
}

async function updateSystemPacksManifest(packDefs) {
  const systemManifestPath = path.join(WORKSPACE_ROOT, 'public', 'system.json');
  const content = await fs.readFile(systemManifestPath, 'utf8');
  const json = JSON.parse(content);
  json.packs = json.packs || [];

  const byName = new Map(json.packs.map(p => [p.name, p]));
  for (const pack of packDefs) {
    if (!byName.has(pack.name)) {
      json.packs.push(pack);
    }
  }

  // Sort by label for consistency
  json.packs.sort((a, b) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0));
  await fs.writeFile(systemManifestPath, JSON.stringify(json, null, 2), 'utf8');
}

function plannedPacks() {
  return [
    { name: 'anarchy-actors', label: 'Anarchy: Actors', type: 'Actor', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-items-weapons', label: 'Anarchy: Weapons', type: 'Item', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-items-gear', label: 'Anarchy: Gear', type: 'Item', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-items-shadowamps', label: 'Anarchy: Shadow Amps', type: 'Item', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-items-contacts', label: 'Anarchy: Contacts', type: 'Item', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-items-qualities', label: 'Anarchy: Qualities', type: 'Item', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-items-skills', label: 'Anarchy: Skills', type: 'Item', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-items-metatypes', label: 'Anarchy: Metatypes', type: 'Item', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-items-cyberdecks', label: 'Anarchy: Cyberdecks', type: 'Item', system: SYSTEM_ID, ownership: { PLAYER: 'NONE', ASSISTANT: 'OWNER' } },
    { name: 'anarchy-wiki', label: 'Anarchy: Wiki', type: 'JournalEntry', system: SYSTEM_ID, ownership: { PLAYER: 'OBSERVER', ASSISTANT: 'OWNER' } },
  ];
}

function targetPackDirFor(doc) {
  if (doc.type && ['character', 'vehicle', 'device', 'sprite', 'ic'].includes(doc.type)) return 'anarchy-actors';
  switch (doc.type) {
    case 'weapon': return 'anarchy-items-weapons';
    case 'gear': return 'anarchy-items-gear';
    case 'shadowamp': return 'anarchy-items-shadowamps';
    case 'contact': return 'anarchy-items-contacts';
    case 'quality': return 'anarchy-items-qualities';
    case 'skill': return 'anarchy-items-skills';
    case 'metatype': return 'anarchy-items-metatypes';
    case 'cyberdeck': return 'anarchy-items-cyberdecks';
  }
  return 'anarchy-items-gear';
}

async function main() {
  const args = new Map();
  for (let i = 2; i < process.argv.length; i++) {
    const a = process.argv[i];
    if (a.startsWith('--')) {
      const [k, v] = a.replace(/^--/, '').split('=');
      args.set(k, v ?? 'true');
    }
  }

  // Defaults
  const source = args.get('source') || path.join(WORKSPACE_ROOT, 'Anarchy Full.md');
  const outRoot = args.get('out') || path.join(WORKSPACE_ROOT, 'src', 'packs');
  const updateManifest = args.get('updateManifest') !== 'false';

  const exists = await fileExists(source);
  if (!exists) {
    console.warn(`[importAnarchyMarkdown] Source markdown not found at: ${source}. Nothing to import.`);
    console.warn(`[importAnarchyMarkdown] Provide --source=/absolute/path/to/Anarchy Full.md and run again.`);
    return;
  }

  const markdown = await fs.readFile(source, 'utf8');
  const { actors, items } = parseMarkdown(markdown);

  const packs = plannedPacks();
  // Ensure pack directories exist
  for (const pack of packs) {
    await ensureDir(path.join(outRoot, pack.name));
  }

  // Write docs into their respective pack dirs
  const writeOps = [];
  for (const doc of actors.concat(items)) {
    const dir = path.join(outRoot, targetPackDirFor(doc));
    writeOps.push(writeYamlDocs([doc], dir));
  }
  // Seed wiki hub if missing
  const wikiDir = path.join(outRoot, 'anarchy-wiki');
  await ensureDir(wikiDir);
  const wikiHubPath = path.join(wikiDir, `journal_Anarchy_Wiki_Hub_${generateId().slice(0,8)}.yml`);
  if (!(await fileExists(wikiHubPath))) {
    const wikiDoc = {
      _id: generateId(),
      name: 'Anarchy Wiki Hub',
      folder: null,
      sort: 0,
      flags: {},
      pages: [
        {
          name: 'Welcome',
          type: 'text',
          title: { show: true, level: 1 },
          text: { format: 1, content: '<p>Use this wiki to centralize rules, gear, amps, and NPC notes. Tag pages and cross-link to items and actors via UUID.</p>', markdown: '' },
          _id: generateId(),
          image: {},
          video: { controls: true, volume: 0.5 },
          src: null,
          system: {},
          sort: 0,
          ownership: { default: -1 },
          flags: {}
        }
      ],
      ownership: { default: 0 }
    };
    await fs.writeFile(wikiHubPath, YAML.stringify(wikiDoc), 'utf8');
  }
  await Promise.all(writeOps);

  if (updateManifest) {
    await updateSystemPacksManifest(packs);
    console.log('[importAnarchyMarkdown] Updated public/system.json with new packs (if missing).');
  }

  console.log(`[importAnarchyMarkdown] Import complete. Actors: ${actors.length}, Items: ${items.length}.`);
}

main().catch(err => {
  console.error('[importAnarchyMarkdown] Failed:', err);
  process.exitCode = 1;
});

