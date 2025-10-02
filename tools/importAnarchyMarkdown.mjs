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
  const attributes = parseAttributesFromText(section.text);
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

  // Heuristic: parse Skills block bullets like "Skill (attribute) value [specialization]"
  const skills = parseListAfterHeading(section.text, /^(skills|competences)\s*:/i);
  for (const line of skills) {
    const skillNameMatch = line.match(/^([^()\[]+?)(?:\s*\(([^)]+)\))?(?:\s*(\d+))?/i);
    const name = skillNameMatch?.[1]?.trim();
    if (!name) continue;
    const attribute = (skillNameMatch?.[2]?.trim() || 'knowledge').toLowerCase();
    const value = toInt(skillNameMatch?.[3] ?? '0');
    actor.items.push({
      ...baseItemDoc(name, 'skill'),
      system: { code: name.toLowerCase().replace(/\s+/g, ''), attribute, value, specialization: '', hasDrain: false, hasConvergence: false, isSocial: false, listspecialization: [] }
    });
  }

  // Heuristic: shadow amps
  const amps = parseListAfterHeading(section.text, /^(amps|shadow\s*amps|augmentations)\s*:/i);
  for (const amp of amps) {
    const m = amp.match(/^([^\[]+?)(?:\s*\[(level|lvl)\s*(\d+)\])?/i);
    const name = (m?.[1] ?? amp).trim();
    const level = toInt(m?.[3] ?? '1', 1);
    actor.items.push({
      ...baseItemDoc(name, 'shadowamp'),
      system: { category: 'special', capacity: actor.system.capacity ?? 'mundane', level, essence: 0, modifiers: [], inactive: false, references: { sourceReference: '', description: '', gmnotes: '' } }
    });
  }

  // Heuristic: weapons
  const weapons = parseListAfterHeading(section.text, /^(weapons|armes)\s*:/i);
  for (const w of weapons) {
    // Example: "Ares Predator V (Agility) 3P, range short"
    const name = w.replace(/\(.+?\)/, '').replace(/,.*$/, '').trim();
    actor.items.push({
      ...baseItemDoc(name, 'weapon'),
      system: { skill: '', specialization: '', strength: true, damage: 0, damageAttribute: '', noArmor: false, monitor: 'stun', defense: '', area: '', drain: 0, range: { max: 'short', short: 0, medium: 0, long: 0 }, modifiers: [], inactive: false, references: { sourceReference: '', description: w.trim(), gmnotes: '' } }
    });
  }

  // Heuristic: gear
  const gear = parseListAfterHeading(section.text, /^(gear|equipment|equipement)\s*:/i);
  for (const g of gear) {
    actor.items.push({
      ...baseItemDoc(g, 'gear'),
      system: { inactive: false, references: { sourceReference: '', description: '', gmnotes: '' } }
    });
  }

  // Heuristic: contacts
  const contacts = parseListAfterHeading(section.text, /^(contacts?)\s*:/i);
  for (const c of contacts) {
    actor.items.push({
      ...baseItemDoc(c, 'contact'),
      system: { inactive: false, references: { sourceReference: '', description: '', gmnotes: '' } }
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
  const sections = splitMarkdownIntoSections(md);
  const actors = [];
  const items = [];

  for (const section of sections) {
    const kind = detectSectionType(section.heading, section.text);
    if (!kind) continue;
    if (kind.doc === 'Actor') {
      if (kind.type === 'character') {
        actors.push(buildCharacterFromSection(section));
      } else {
        const actor = baseActorDoc(section.heading || kind.type, kind.type);
        actors.push(actor);
      }
    } else if (kind.doc === 'Item') {
      items.push(buildItemFromSection(section, kind.type));
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

