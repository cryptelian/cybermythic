import { promises as fs } from "fs";
import path from "path";

const CYBERMYTHIC_ROOT = path.resolve("CyberMythic");

const CYBERPUNK_COLORS = {
  darkRed: "#8B0000",
  navyBlue: "#000080",
  neonGreen: "#39FF14",
  electricBlue: "#00BFFF",
  cyberPurple: "#8A2BE2",
  matrixGreen: "#00FF41",
  chromeSilver: "#C0C0C0"
};

const CYBERPUNK_EMOJIS = {
  weapon: "🔫",
  character: "🎭",
  gear: "⚙️",
  journal: "📋",
  matrix: "💻",
  biotech: "🧬",
  corporate: "🏢",
  street: "🌆",
  danger: "💀",
  power: "⚡",
  protection: "🛡️",
  stealth: "👤",
  magic: "🔮",
  combat: "⚔️",
  medical: "⚕️",
  tech: "🔌",
  anarchy: "🃏",
  edge: "💎"
};

const MEGACORPS = ["Ares", "Aztechnology", "Renraku", "Shiawase", "Mitsuhama", "NeoNET", "Evo", "Horizon"];
const METATYPES = ["Human", "Elf", "Dwarf", "Ork", "Troll"];
const MATRIX_HOSTS = ["Grid", "Host", "Nexus", "Node"];
const STREET_TERMS = ["Chummer", "Slot", "Frag", "Drek", "Nuyen", "Credstick", "SIN", "Jackpoint"];

const parseAttributeLine = (line) => {
  // Match patterns like "Agility 5", "Strength 4", etc.
  const match = line.match(/([A-Za-z]+)\s+(\d+)/);
  if (match && !['is', 'at'].includes(match[1].toLowerCase())) {
    return { name: match[1], value: parseInt(match[2]) };
  }
  return null;
};

const parseMonitorLine = (line) => {
  // Match patterns like "Physical monitor starts at 0 of 10"
  const match = line.match(/([A-Za-z]+)\s+monitor\s+starts?\s+at\s+(\d+)\s+of\s+(\d+)/i);
  if (match) return { name: match[1], current: parseInt(match[2]), max: parseInt(match[3]) };
  return null;
};

const parseResourceLine = (line) => {
  // Match patterns like "Essence is 6", "Karma is 0 with a total of 0"
  const match = line.match(/([A-Za-z]+(?:\s+[A-Za-z]+)*)\s+is\s+(\d+)(?:\s+out\s+of\s+(\d+)|(?:\s+with\s+a\s+total\s+of\s+(\d+)))?/i);
  if (match && !['at'].includes(match[1].toLowerCase())) {
    const [, name, value, max, total] = match;
    return { name, value: parseInt(value), max: max ? parseInt(max) : null, total: total ? parseInt(total) : null };
  }
  return null;
};

const enhanceDescription = (original, type, name) => {
  if (!original || original.includes("equipment") || original.includes("ready for use")) {
    const enhancements = {
      character: [
        `In the shadowed sprawl of ${getRandom(MEGACORPS)}'s corporate enclave, this ${getRandom(METATYPES).toLowerCase()} survivor navigates the neon-lit undergrid.`,
        `A veteran of the ${getRandom(STREET_TERMS)} wars, this operative has seen too many ${getRandom(METATYPES).toLowerCase()}s fall to corporate ${CYBERPUNK_EMOJIS.danger} death.`,
        `Enhanced by black-market ${CYBERPUNK_EMOJIS.biotech} biotech and street-forged ${CYBERPUNK_EMOJIS.tech} chrome, this runner dances on the edge of oblivion.`
      ],
      weapon: [
        `Forged in the underground fabs of ${getRandom(MEGACORPS)}'s black ops division, this piece brings ${getRandom(METATYPES).toLowerCase()} justice to the sprawl.`,
        `A trusted companion in countless ${CYBERPUNK_EMOJIS.combat} shadowruns, this weapon has tasted the blood of corporate ${CYBERPUNK_EMOJIS.danger} enforcers.`,
        `Street-modified and matrix-jacked, this ${CYBERPUNK_EMOJIS.weapon} tool ensures survival in the ${CYBERPUNK_EMOJIS.street} urban jungle.`
      ],
      gear: [
        `Essential ${CYBERPUNK_EMOJIS.gear} equipment scavenged from ${getRandom(MEGACORPS)}'s corporate waste streams.`,
        `Black-market ${CYBERPUNK_EMOJIS.tech} hardware that keeps runners one step ahead of the ${CYBERPUNK_EMOJIS.corporate} hounds.`,
        `Street-smart ${CYBERPUNK_EMOJIS.stealth} gear that has saved countless lives in the ${CYBERPUNK_EMOJIS.street} shadows.`
      ],
      journal: [
        `A digital archive of ${CYBERPUNK_EMOJIS.matrix} secrets and ${CYBERPUNK_EMOJIS.street} survival tactics.`,
        `Encrypted ${CYBERPUNK_EMOJIS.journal} knowledge passed between ${getRandom(METATYPES).toLowerCase()} survivors of the corporate wars.`,
        `A ${CYBERPUNK_EMOJIS.anarchy} manifesto of the undergrid resistance against ${getRandom(MEGACORPS)} oppression.`
      ]
    };
    return getRandom(enhancements[type] || enhancements.gear);
  }
  return original;
};

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const beautifyCharacter = (content, title) => {
  const enhancedDesc = enhanceDescription('', 'character', title);

  let result = `<div style="border: 2px solid ${CYBERPUNK_COLORS.darkRed}; background: linear-gradient(135deg, ${CYBERPUNK_COLORS.navyBlue} 0%, #1a0033 100%); padding: 20px; margin: 10px 0; border-radius: 10px; color: ${CYBERPUNK_COLORS.electricBlue}; font-family: 'Courier New', monospace;">\n\n`;
  result += `# 🎭 ${title}\n\n`;
  result += `<div style="background: rgba(139, 0, 0, 0.1); padding: 15px; border-radius: 5px; border-left: 4px solid ${CYBERPUNK_COLORS.darkRed};">\n`;
  result += `${CYBERPUNK_EMOJIS.character} **Profile**: ${enhancedDesc}\n\n`;
  result += `</div>\n\n`;

  // Add the original content in a formatted way
  result += `## 📋 **Character Data**\n`;
  result += `<div style="background: rgba(0, 0, 128, 0.1); padding: 15px; border-radius: 5px; border: 1px solid ${CYBERPUNK_COLORS.chromeSilver}; font-size: 0.9em;">\n`;
  result += `<pre style="color: ${CYBERPUNK_COLORS.matrixGreen}; margin: 0; white-space: pre-wrap;">${content.replace(/\n/g, '\n')}</pre>\n`;
  result += `</div>\n\n`;

  result += `</div>`;
  return result;
};

const beautifyWeapon = (content, title) => {
  const enhancedDesc = enhanceDescription('', 'weapon', title);

  let result = `<div style="border: 2px solid ${CYBERPUNK_COLORS.darkRed}; background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); padding: 20px; margin: 10px 0; border-radius: 10px; color: ${CYBERPUNK_COLORS.electricBlue}; font-family: 'Courier New', monospace;">\n\n`;
  result += `# ${CYBERPUNK_EMOJIS.weapon} ${title}\n\n`;

  result += `<div style="background: rgba(139, 0, 0, 0.1); padding: 15px; border-radius: 5px; border-left: 4px solid ${CYBERPUNK_COLORS.darkRed};">\n`;
  result += `${CYBERPUNK_EMOJIS.weapon} **Arsenal Entry**: ${enhancedDesc}\n\n`;
  result += `</div>\n\n`;

  // Add the original content in a formatted way
  result += `## 📋 **Weapon Data**\n`;
  result += `<div style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-radius: 5px; border: 1px solid ${CYBERPUNK_COLORS.chromeSilver}; font-size: 0.9em;">\n`;
  result += `<pre style="color: ${CYBERPUNK_COLORS.matrixGreen}; margin: 0; white-space: pre-wrap;">${content.replace(/\n/g, '\n')}</pre>\n`;
  result += `</div>\n\n`;

  result += `</div>`;
  return result;
};

const beautifyGear = (content, title) => {
  const enhancedDesc = enhanceDescription('', 'gear', title);

  let result = `<div style="border: 2px solid ${CYBERPUNK_COLORS.darkRed}; background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%); padding: 20px; margin: 10px 0; border-radius: 10px; color: ${CYBERPUNK_COLORS.electricBlue}; font-family: 'Courier New', monospace;">\n\n`;
  result += `# ${CYBERPUNK_EMOJIS.gear} ${title}\n\n`;

  result += `<div style="background: rgba(139, 0, 0, 0.1); padding: 15px; border-radius: 5px; border-left: 4px solid ${CYBERPUNK_COLORS.darkRed};">\n`;
  result += `${CYBERPUNK_EMOJIS.gear} **Equipment Profile**: ${enhancedDesc}\n\n`;
  result += `</div>\n\n`;

  // Add the original content in a formatted way
  result += `## 📋 **Gear Data**\n`;
  result += `<div style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-radius: 5px; border: 1px solid ${CYBERPUNK_COLORS.chromeSilver}; font-size: 0.9em;">\n`;
  result += `<pre style="color: ${CYBERPUNK_COLORS.matrixGreen}; margin: 0; white-space: pre-wrap;">${content.replace(/\n/g, '\n')}</pre>\n`;
  result += `</div>\n\n`;

  result += `</div>`;
  return result;
};

const beautifyJournal = (content, title) => {
  const enhancedDesc = enhanceDescription('', 'journal', title);

  let result = `<div style="border: 2px solid ${CYBERPUNK_COLORS.darkRed}; background: linear-gradient(135deg, #1a0033 0%, #000000 100%); padding: 20px; margin: 10px 0; border-radius: 10px; color: ${CYBERPUNK_COLORS.electricBlue}; font-family: 'Courier New', monospace;">\n\n`;
  result += `# ${CYBERPUNK_EMOJIS.journal} ${title}\n\n`;

  result += `<div style="background: rgba(139, 0, 0, 0.1); padding: 15px; border-radius: 5px; border-left: 4px solid ${CYBERPUNK_COLORS.darkRed};">\n`;
  result += `${CYBERPUNK_EMOJIS.journal} **Data Archive**: ${enhancedDesc}\n\n`;
  result += `</div>\n\n`;

  // Add the original content in a formatted way
  result += `## 📋 **Journal Data**\n`;
  result += `<div style="background: rgba(0, 0, 0, 0.3); padding: 15px; border-radius: 5px; border: 1px solid ${CYBERPUNK_COLORS.chromeSilver}; font-size: 0.9em;">\n`;
  result += `<pre style="color: ${CYBERPUNK_COLORS.matrixGreen}; margin: 0; white-space: pre-wrap;">${content.replace(/\n/g, '\n')}</pre>\n`;
  result += `</div>\n\n`;

  result += `</div>`;
  return result;
};

const beautifyFile = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf8');
  const title = path.basename(filePath, '.md');

  // Strip HTML styling from the original content to get clean text
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with spaces
    .replace(/&amp;/g, '&') // Replace &amp; with &
    .replace(/&lt;/g, '<') // Replace &lt; with <
    .replace(/&gt;/g, '>') // Replace &gt; with >
    .trim();

  // Determine type based on folder structure
  const relativePath = path.relative(CYBERMYTHIC_ROOT, filePath);
  let type = 'gear';

  if (relativePath.includes('Characters')) type = 'character';
  else if (relativePath.includes('Weapons')) type = 'weapon';
  else if (relativePath.includes('Collections')) type = 'journal';

  let beautified = '';
  switch (type) {
    case 'character':
      beautified = beautifyCharacter(cleanContent, title);
      break;
    case 'weapon':
      beautified = beautifyWeapon(cleanContent, title);
      break;
    case 'journal':
      beautified = beautifyJournal(cleanContent, title);
      break;
    default:
      beautified = beautifyGear(cleanContent, title);
  }

  return beautified;
};

const processAllFiles = async () => {
  const files = await collectMarkdownFiles(CYBERMYTHIC_ROOT);
  let processed = 0;

  for (const file of files) {
    try {
      const beautified = await beautifyFile(file);
      await fs.writeFile(file, beautified, 'utf8');
      processed++;
      console.log(`✨ Beautified: ${path.relative(CYBERMYTHIC_ROOT, file)}`);
    } catch (error) {
      console.error(`❌ Failed to beautify ${file}:`, error.message);
    }
  }

  console.log(`\n🎨 Cyberpunk beautification complete! Processed ${processed} files.`);
};

const collectMarkdownFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
};

processAllFiles().catch(console.error);
