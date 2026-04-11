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
  const systemPath = resolve('public/system.json');
  const system = await loadJson(systemPath);
  
  const langs = system.languages || [];
  const enLang = langs.find(l => l.lang === 'en');
  
  if (!enLang) {
    console.warn('No English language defined in system.json. Skipping validation.');
    return;
  }

  const enPath = resolve('public', enLang.path);
  const en = await loadJson(enPath);
  const enFlat = flatten(en);
  
  // Validate other languages against English
  const others = langs.filter(l => l.lang !== 'en');
  
  let hasErrors = false;

  for (const lang of others) {
    console.log(`Validating ${lang.name} (${lang.lang})...`);
    const langPath = resolve('public', lang.path);
    try {
        const other = await loadJson(langPath);
        const otherFlat = flatten(other);
        
        const missing = Object.keys(enFlat).filter((k) => !(k in otherFlat));
        // Optional: Check for extras
        // const extras = Object.keys(otherFlat).filter((k) => !(k in enFlat));

        if (missing.length) {
            hasErrors = true;
            console.error(`Missing ${missing.length} keys in ${lang.lang} vs en:`);
            for (const k of missing) console.error(`- ${k}`);
        }
    } catch (e) {
        console.error(`Failed to load or parse ${langPath}:`, e.message);
        hasErrors = true;
    }
  }

  if (hasErrors) process.exit(1);
  console.log('i18n keys validated.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
