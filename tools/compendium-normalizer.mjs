import { promises as fs } from 'fs';
import path from 'path';
import process from 'process';
import { performance } from 'perf_hooks';
import YAML from 'yaml';

const PACK_DEFS = {
  actors: {
    src: '../cybermythic-ninjanarchy/src/packs/anarchy-actors',
    out: 'workspace/compendium/act',
    typeCodes: {
      pc: 'PC',
      npc: 'NPC',
    },
    classify(doc) {
      const name = doc.name || '';
      if (/contact|fixer|dealer|handler/i.test(name)) return { bucket: 'npc', subdir: 'contact' };
      if (/gang|thug|bruiser|guard|security/i.test(name)) return { bucket: 'npc', subdir: 'enemy' };
      if (/spirit|mage|shaman/i.test(name)) return { bucket: 'pc', subdir: 'adept' };
      if (/decker|hacker/i.test(name)) return { bucket: 'pc', subdir: 'matrix' };
      if (/rigger|vehicle|drone/i.test(name)) return { bucket: 'pc', subdir: 'rigger' };
      return { bucket: 'pc', subdir: 'general' };
    },
  },
  gear: {
    src: '../cybermythic-ninjanarchy/src/packs/anarchy-items-gear',
    out: 'workspace/compendium/itm/gear',
    typeCodes: { gear: 'GEAR' },
    classify(doc) {
      const name = doc.name || '';
      if (/grenade/i.test(name)) return { bucket: 'gear', subdir: 'grenades' };
      if (/patch|medkit|med.?kit|stim/i.test(name)) return { bucket: 'gear', subdir: 'medical' };
      if (/kit|tool|toolkit/i.test(name)) return { bucket: 'gear', subdir: 'kits' };
      if (/restraint|handcuff/i.test(name)) return { bucket: 'gear', subdir: 'restraints' };
      if (/goggles|vision|glasses/i.test(name)) return { bucket: 'gear', subdir: 'optics' };
      return { bucket: 'gear', subdir: 'general' };
    },
  },
  weapons: {
    src: '../cybermythic-ninjanarchy/src/packs/anarchy-items-weapons',
    out: 'workspace/compendium/itm/weap',
    typeCodes: { weapon: 'WPN' },
    classify(doc) {
      const name = doc.name || '';
      if (/bow|crossbow/i.test(name)) return { bucket: 'weapon', subdir: 'bows' };
      if (/knife|baton|staff|maul|blade|club|melee/i.test(name)) return { bucket: 'weapon', subdir: 'melee' };
      if (/pistol|revolver|smartgun|machine pistol|p93|ultra power/i.test(name)) return { bucket: 'weapon', subdir: 'pistols' };
      if (/rifle|ak|alpha|ar|har|raiden|remington|monsoon|crockett/i.test(name)) return { bucket: 'weapon', subdir: 'rifles' };
      if (/uzi|smg|smg/i.test(name)) return { bucket: 'weapon', subdir: 'smg' };
      return { bucket: 'weapon', subdir: 'other' };
    },
  },
  wiki: {
    src: '../cybermythic-ninjanarchy/src/packs/anarchy-wiki',
    out: 'workspace/compendium/wiki',
    typeCodes: { journal: 'JRNL' },
    classify() {
      return { bucket: 'journal', subdir: 'hub' };
    },
  },
};

const DEFAULT_PACK = 'actors';
const REPORT_ROOT = path.resolve('workspace/compendium/reports');

function slugify(name = '', max = 18) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, max);
}

function buildFileName(typeCode, name, id) {
  const slug = slugify(name || 'unnamed');
  const suffix = (id || '').slice(-6) || 'unknown';
  return `${typeCode}_${slug || 'unnamed'}_${suffix}.yml`;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function readYaml(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  return { raw, data: YAML.parse(raw) };
}

async function writeYaml(filePath, data) {
  const content = YAML.stringify(data, { indent: 2, lineWidth: 80 });
  await fs.writeFile(filePath, content, 'utf8');
}

function canonicalize(value) {
  if (Array.isArray(value)) return value.map((entry) => canonicalize(entry));
  if (value && typeof value === 'object') {
    const sorted = {};
    for (const key of Object.keys(value).sort()) {
      sorted[key] = canonicalize(value[key]);
    }
    return sorted;
  }
  return value;
}

function dedupeKey(data) {
  const copy = JSON.parse(JSON.stringify(data));
  delete copy._id;
  if (copy.flags) {
    delete copy.flags.cybermythic;
    if (!Object.keys(copy.flags).length) delete copy.flags;
  }
  return JSON.stringify(canonicalize(copy));
}

async function processFile(def, srcPath, outRoot, seen) {
  const { data } = await readYaml(srcPath);
  if (!data || !data._id) throw new Error('Missing _id');

  const key = dedupeKey(data);
  if (seen.has(key)) {
    return { duplicate: true, duplicateOf: seen.get(key), doc: data };
  }

  const classification = def.classify(data);
  const bucket = classification.bucket;
  const typeCode = def.typeCodes[bucket] || bucket.toUpperCase();
  const outDir = path.join(outRoot, bucket, classification.subdir);
  await ensureDir(outDir);
  const fileName = buildFileName(typeCode, data.name, data._id);
  const outPath = path.join(outDir, fileName);

  if (!data.flags) data.flags = {};
  if (!data.flags.cybermythic) data.flags.cybermythic = {};
  data.flags.cybermythic.origFile = path.relative(path.resolve(def.src), srcPath);
  data.flags.cybermythic.bucket = bucket;
  data.flags.cybermythic.variant = classification.subdir;

  await writeYaml(outPath, data);
  seen.set(key, { outPath, srcPath, name: data.name });

  return { duplicate: false, outPath, classification };
}

async function processDir(packId, def, srcDir, outRoot) {
  const start = performance.now();
  await ensureDir(outRoot);
  const files = await fs.readdir(srcDir);
  const seen = new Map();
  const duplicates = [];
  let processed = 0;
  let written = 0;

  for (const file of files) {
    if (!file.endsWith('.yml')) continue;
    processed += 1;
    const full = path.join(srcDir, file);
    try {
      const result = await processFile(def, full, outRoot, seen);
      if (result.duplicate) {
        duplicates.push({
          name: result.doc.name,
          source: path.relative(srcDir, full),
          duplicateOf: path.relative(outRoot, result.duplicateOf.outPath),
        });
        console.warn('[normalizer] duplicate dropped', result.doc.name, '->', file);
        continue;
      }
      written += 1;
      if (written % 50 === 0) {
        const elapsed = ((performance.now() - start) / 1000).toFixed(1);
        console.log(`[normalizer:${packId}] processed ${written}/${processed} files in ${elapsed}s`);
      }
    } catch (err) {
      console.error('[normalizer] failed for', file, err.message);
    }
  }

  const totalElapsed = ((performance.now() - start) / 1000).toFixed(1);
  console.log(`[normalizer:${packId}] wrote ${written} unique documents (${duplicates.length} duplicates) in ${totalElapsed}s`);

  await ensureDir(REPORT_ROOT);
  const reportPath = path.join(REPORT_ROOT, `${packId}.json`);
  const report = {
    pack: packId,
    stats: {
      processed,
      written,
      duplicates: duplicates.length,
      durationSeconds: Number(totalElapsed),
    },
    duplicates,
  };
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('[normalizer] report written', path.relative(process.cwd(), reportPath));
}

async function main() {
  const pack = process.env.CMP_PACK || DEFAULT_PACK;
  const def = PACK_DEFS[pack];
  if (!def) {
    console.error('[normalizer] unknown pack', pack);
    process.exit(1);
  }
  const srcDir = path.resolve(def.src);
  const outDir = path.resolve(def.out);
  console.log('[normalizer] start', { pack, srcDir, outDir });
  await processDir(pack, def, srcDir, outDir);
}

main().catch((err) => {
  console.error('[normalizer] fatal', err);
  process.exit(1);
});

