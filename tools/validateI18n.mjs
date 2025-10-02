import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

async function loadJson(path) {
  const raw = await readFile(path, 'utf8');
  return JSON.parse(raw);
}

function flatten(obj, prefix = '') {
  const out = {};
  for (const [key, value] of Object.entries(obj || {})) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(out, flatten(value, newKey));
    } else {
      out[newKey] = value;
    }
  }
  return out;
}

async function main() {
  const enPath = resolve('public/lang/en.json');
  const frPath = resolve('public/lang/fr.json');
  const [en, fr] = await Promise.all([loadJson(enPath), loadJson(frPath)]);

  const enFlat = flatten(en);
  const frFlat = flatten(fr);

  const missingInFr = Object.keys(enFlat).filter((k) => !(k in frFlat));
  const extraInFr = Object.keys(frFlat).filter((k) => !(k in enFlat));

  let hasErrors = false;
  if (missingInFr.length) {
    hasErrors = true;
    console.error(`Missing ${missingInFr.length} fr keys vs en:`);
    for (const k of missingInFr) console.error(`- ${k}`);
  }

  // Treat extras as warnings, not errors
  if (extraInFr.length) {
    console.warn(`Extra ${extraInFr.length} fr keys not in en (warning):`);
    for (const k of extraInFr) console.warn(`- ${k}`);
  }

  if (hasErrors) process.exit(1);
  console.log('i18n keys validated.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

