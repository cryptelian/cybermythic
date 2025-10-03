import { promises as fs } from 'fs';
import path from 'path';

function flattenKeys(obj, prefix = '', out = new Set()) {
  if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      const p = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === 'object') flattenKeys(v, p, out);
      else out.add(p);
    }
  }
  return out;
}

function collectTranslationKeysFromConfig(configObj, out = new Set()) {
  if (configObj && typeof configObj === 'object') {
    for (const v of Object.values(configObj)) {
      if (typeof v === 'string') {
        // Only consider typical translation-style keys
        if (/^[A-Z][A-Z0-9_.]+$/.test(v)) out.add(v);
      } else if (v && typeof v === 'object') collectTranslationKeysFromConfig(v, out);
    }
  }
  return out;
}

async function readJson(p) {
  return JSON.parse(await fs.readFile(p, 'utf-8'));
}

async function main() {
  const repoRoot = process.cwd();
  const enPath = path.join(repoRoot, 'public', 'lang', 'en.json');
  const frPath = path.join(repoRoot, 'public', 'lang', 'fr.json');
  const { ANARCHY } = await import(path.join(repoRoot, 'src', 'modules', 'config.js'));

  const en = await readJson(enPath);
  const fr = await readJson(frPath);
  const enKeys = flattenKeys(en);
  const frKeys = flattenKeys(fr);

  const required = collectTranslationKeysFromConfig(ANARCHY);

  const missingEn = [];
  const missingFr = [];
  for (const key of required) {
    if (!enKeys.has(key)) missingEn.push(key);
    if (!frKeys.has(key)) missingFr.push(key);
  }

  if (missingEn.length || missingFr.length) {
    console.error('[validateI18n] Missing keys');
    if (missingEn.length) console.error('  EN missing:', missingEn);
    if (missingFr.length) console.error('  FR missing:', missingFr);
    process.exit(1);
  }

  console.log(`[validateI18n] OK - ${required.size} keys present in EN & FR`);
}

main().catch(err => { console.error(err); process.exit(1); });

