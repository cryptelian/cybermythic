import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function loadJson(path) {
  const raw = await readFile(path, 'utf8');
  return JSON.parse(raw);
}

async function main() {
  const systemPath = resolve(__dirname, '../public/system.json');
  const schemaPath = resolve(__dirname, './system.schema.json');

  const [system, schema] = await Promise.all([
    loadJson(systemPath),
    loadJson(schemaPath),
  ]);

  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  const validate = ajv.compile(schema);
  const valid = validate(system);
  if (!valid) {
    console.error('system.json failed schema validation:');
    for (const err of validate.errors ?? []) {
      console.error(`- ${err.instancePath || '<root>'} ${err.message}`);
    }
    process.exit(1);
  }

  console.log('system.json is valid.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

