import { promises as fs } from "fs";
import path from "path";
import yaml from "yaml";

const SOURCE_ROOT = path.resolve("workspace", "compendium");
const OUTPUT_ROOT = path.resolve("CyberMythic");
const SKIP_DIRS = new Set(["packs", "reports", "_packs_tmp_src"]);

const toTitleCase = (value) => {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  const isAllCaps = /^[A-Z0-9\s\-'.]+$/.test(trimmed) && /[A-Z]/.test(trimmed);
  if (isAllCaps && trimmed.split(" ").length <= 3) {
    return trimmed
      .split(" ")
      .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(" ");
  }
  const lower = trimmed
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return lower.replace(/\b([a-z])/g, (match) => match.toUpperCase());
};

const tidySentence = (parts) =>
  parts
    .filter((part) => part && part.trim())
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

const sanitizeFileName = (value) => {
  const cleaned = value
    .replace(/[<>:"/\\|?*]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || "Untitled";
};

const stripHtml = (value) => {
  if (!value) return "";
  return value
    .replace(/<\/(p|div)>/gi, "\n\n")
    .replace(/<br\s*\/?\>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};

const collectYamlFiles = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      files.push(...(await collectYamlFiles(path.join(dir, entry.name))));
    } else if (entry.name.endsWith(".yml") || entry.name.endsWith(".yaml")) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
};

const describeRange = (range) => {
  if (!range) return "";
  const entries = ["short", "medium", "long"].map((band) => {
    if (range[band] === undefined || range[band] === null) return null;
    return `${band} modifier ${range[band]}`;
  });
  const filtered = entries.filter(Boolean);
  if (!filtered.length) return "";
  const maxText = range.max ? `Maximum effective range is ${range.max}.` : "";
  return `${filtered.join(", ")}. ${maxText}`.trim();
};

const describeModifiers = (mods) => {
  if (!Array.isArray(mods) || !mods.length) return "";
  const cleaned = mods.map((entry) => {
    if (!entry) return null;
    if (typeof entry === "string") return entry;
    if (typeof entry === "object") {
      const label = entry.label || entry.name;
      const value = entry.value ?? entry.bonus;
      if (label && value !== undefined) return `${label} (${value})`;
      if (label) return label;
      return JSON.stringify(entry);
    }
    return null;
  });
  const filtered = cleaned.filter(Boolean);
  if (!filtered.length) return "";
  return `Notable modifiers include ${filtered.join(", ")}.`;
};

const describeCounters = (obj) => {
  if (!obj || typeof obj !== "object") return [];
  const sentences = [];
  for (const [key, value] of Object.entries(obj)) {
    if (!value || typeof value !== "object") continue;
    const label = toTitleCase(key);
    if (value.value !== undefined && value.max !== undefined) {
      sentences.push(`${label} is ${value.value} out of ${value.max}.`);
      continue;
    }
    if (value.value !== undefined && value.total !== undefined) {
      sentences.push(`${label} is ${value.value} with a total of ${value.total}.`);
      continue;
    }
    if (value.value !== undefined) {
      sentences.push(`${label} is ${value.value}.`);
      continue;
    }
    sentences.push(...describeCounters(value));
  }
  return sentences;
};

const describeCharacter = (data, sourceName) => {
  const sys = data.system || {};
  const name = toTitleCase(data.name || "Unnamed Character");
  const bucket = toTitleCase(data.flags?.cybermythic?.bucket || "character");
  const variant = toTitleCase(data.flags?.cybermythic?.variant || "profile");

  const openingParts = [];
  openingParts.push(`${name} is a ${variant.toLowerCase()} record listed under ${bucket.toLowerCase()}.`);
  if (sourceName) {
    openingParts.push(`This profile appears in ${sourceName}.`);
  }
  const opening = tidySentence(openingParts);

  const details = [];
  if (sys.capacity || sys.connectionMode) {
    const bits = [];
    if (sys.capacity) bits.push(`classified as ${sys.capacity.toLowerCase()}`);
    if (sys.connectionMode) bits.push(`currently ${sys.connectionMode.toLowerCase()}`);
    if (bits.length) details.push(`The character is ${bits.join(" and ")}.`);
  }

  const attributes = sys.attributes || {};
  const attributeEntries = Object.entries(attributes).map(([key, value]) => {
    if (value && typeof value === "object") return `${toTitleCase(key)} ${value.value ?? value}`;
    return `${toTitleCase(key)} ${value}`;
  });
  if (attributeEntries.length) {
    details.push(`Attributes include ${attributeEntries.join(", ")}.`);
  }

  const monitors = sys.monitors || {};
  const monitorLines = Object.entries(monitors).map(([key, value]) => {
    if (!value || typeof value !== "object") return null;
    const pieces = [];
    if (value.value !== undefined && value.max !== undefined) {
      pieces.push(`${value.value} of ${value.max}`);
    } else if (value.max !== undefined) {
      pieces.push(`a maximum of ${value.max}`);
    }
    if (value.resistance !== undefined) {
      pieces.push(`resistance ${value.resistance}`);
    }
    if (!pieces.length) return null;
    return `${toTitleCase(key)} monitor starts at ${pieces.join(", ")}.`;
  }).filter(Boolean);
  details.push(...monitorLines);

  const counterLines = describeCounters(sys.counters);
  details.push(...counterLines);

  const stateLines = describeCounters(sys.state);
  if (stateLines.length) {
    details.push(`Current state readings indicate ${stateLines.join(" ")}`.trim());
  }

  const description = sys.description?.description;
  const descriptionText = description && description.trim() ? description.trim() : "";

  const parts = [opening];
  if (details.length) parts.push(details.join(" \n"));
  if (descriptionText) parts.push(descriptionText);
  return parts.filter(Boolean).join("\n\n");
};

const describeWeapon = (data, sourceName) => {
  const sys = data.system || {};
  const name = toTitleCase(data.name || "Unnamed Weapon");
  const bucket = toTitleCase(data.flags?.cybermythic?.variant || "Weapon");

  const openingParts = [`${name} is catalogued as a ${bucket.toLowerCase()} weapon.`];
  if (sourceName) openingParts.push(`It is listed in ${sourceName}.`);
  const opening = tidySentence(openingParts);

  const sentences = [];
  if (sys.skill) {
    sentences.push(`It relies on the ${sys.skill.toLowerCase()} skill.`);
  }
  if (sys.damage !== undefined) {
    const damageType = sys.monitor === "stun" ? "stun" : "physical";
    sentences.push(`It deals ${sys.damage} ${damageType} damage.`);
  }
  if (sys.noArmor) sentences.push(`The attack bypasses armor.`);
  if (sys.strength) sentences.push(`The wielder adds strength to the effect.`);
  if (sys.defense) sentences.push(`It alters defense by ${sys.defense}.`);
  if (sys.drain) sentences.push(`It carries a drain value of ${sys.drain}.`);
  if (sys.area) sentences.push(`The area of effect is ${sys.area}.`);

  const rangeLine = describeRange(sys.range);
  if (rangeLine) sentences.push(rangeLine);

  const modifiersLine = describeModifiers(sys.modifiers);
  if (modifiersLine) sentences.push(modifiersLine);

  const refDescription = sys.references?.description?.trim();
  if (refDescription) sentences.push(refDescription);

  const parts = [opening];
  if (sentences.length) parts.push(sentences.join(" \n"));
  return parts.join("\n\n");
};

const describeGear = (data, sourceName) => {
  const sys = data.system || {};
  const name = toTitleCase(data.name || "Unnamed Gear");
  const variant = toTitleCase(data.flags?.cybermythic?.variant || "Gear");

  const openingParts = [`${name} is recorded as ${variant.toLowerCase()} equipment.`];
  if (sourceName) openingParts.push(`It appears in ${sourceName}.`);
  const opening = tidySentence(openingParts);

  const sentences = [];
  sentences.push(sys.inactive ? "This item is currently inactive." : "This item is ready for use.");
  if (sys.cost) sentences.push(`Listed cost: ${sys.cost}.`);
  if (sys.availability) sentences.push(`Availability is noted as ${sys.availability}.`);
  if (sys.category) sentences.push(`Category: ${sys.category}.`);
  const refDescription = sys.references?.description?.trim();
  if (refDescription) sentences.push(refDescription);

  const parts = [opening];
  if (sentences.length) parts.push(sentences.join(" \n"));
  return parts.join("\n\n");
};

const describeJournal = (data, sourceName) => {
  const name = toTitleCase(data.name || "Journal Entry");
  const openingParts = [`${name} is a journal record.`];
  if (sourceName) openingParts.push(`It appears in ${sourceName}.`);
  const opening = tidySentence(openingParts);

  const pages = Array.isArray(data.pages) ? data.pages : [];
  const pageContent = pages
    .map((page) => {
      const title = page.name ? toTitleCase(page.name) : "Untitled Page";
      const markdown = page.text?.markdown?.trim();
      const html = page.text?.content?.trim();
      const body = markdown || stripHtml(html);
      return `${title}: ${body}`.trim();
    })
    .filter(Boolean)
    .join("\n\n");

  return [opening, pageContent].filter(Boolean).join("\n\n");
};

const renderHumanText = (data) => {
  const sourceName = data.system?.references?.sourceReference?.trim();
  switch (data.type) {
    case "character":
      return describeCharacter(data, sourceName);
    case "weapon":
      return describeWeapon(data, sourceName);
    case "gear":
      return describeGear(data, sourceName);
    case "journal":
      return describeJournal(data, sourceName);
    default:
      return describeGear(data, sourceName);
  }
};

const folderForEntry = (data) => {
  const topLevel = (() => {
    switch (data.type) {
      case "character":
        return "Characters";
      case "weapon":
        return "Weapons";
      case "gear":
        return "Gear";
      case "journal":
        return "Journals";
      default:
        return "Collections";
    }
  })();

  const bucket = toTitleCase(data.flags?.cybermythic?.bucket || "");
  const variant = toTitleCase(data.flags?.cybermythic?.variant || "");

  const parts = [OUTPUT_ROOT, topLevel];
  if (bucket) parts.push(bucket);
  if (variant) parts.push(variant);
  return path.join(...parts);
};

const generateUniqueFilename = (folder, baseName, tracker) => {
  const safeBase = sanitizeFileName(baseName);
  const key = path.join(folder, safeBase.toLowerCase());
  const count = tracker.get(key) || 0;
  tracker.set(key, count + 1);
  if (count === 0) return `${safeBase}.md`;
  return `${safeBase} (${count + 1}).md`;
};

const main = async () => {
  await fs.rm(OUTPUT_ROOT, { recursive: true, force: true });
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });

  const files = await collectYamlFiles(SOURCE_ROOT);
  const nameTracker = new Map();
  let exported = 0;

  for (const absolutePath of files) {
    const raw = await fs.readFile(absolutePath, "utf8");
    let data;
    try {
      data = yaml.parse(raw);
    } catch (error) {
      console.warn(`Skipped ${absolutePath}: ${error.message}`);
      continue;
    }
    if (!data || typeof data !== "object") continue;

    const humanTitle = toTitleCase(data.name || data.type || "Untitled");
    const folder = folderForEntry(data);
    await fs.mkdir(folder, { recursive: true });
    const fileName = generateUniqueFilename(folder, humanTitle, nameTracker);
    const outputPath = path.join(folder, fileName);

    const body = renderHumanText(data);
    const content = [`${humanTitle}`, "", body].filter(Boolean).join("\n");
    await fs.writeFile(outputPath, content.trim() + "\n", "utf8");
    exported += 1;
  }

  console.log(`Created ${exported} human-readable entries in ${OUTPUT_ROOT}`);
};

main().catch((error) => {
  console.error("Export failed:", error);
  process.exitCode = 1;
});

