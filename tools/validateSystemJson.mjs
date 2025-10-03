import { promises as fs } from 'fs';
import path from 'path';

async function readJson(p) {
  return JSON.parse(await fs.readFile(p, 'utf-8'));
}

async function main() {
  const repoRoot = process.cwd();
  const sysPath = path.join(repoRoot, 'public', 'system.json');
  const sys = await readJson(sysPath);

  const requiredTop = ['id', 'title', 'version', 'compatibility', 'esmodules', 'languages'];
  const missingTop = requiredTop.filter(k => !(k in sys));
  if (missingTop.length) {
    console.error('[validateSystemJson] Missing required fields:', missingTop);
    process.exit(1);
  }

  if (!Array.isArray(sys.languages) || sys.languages.length === 0) {
    console.error('[validateSystemJson] languages must be a non-empty array');
    process.exit(1);
  }
  for (const l of sys.languages) {
    if (!l.lang || !l.path) {
      console.error('[validateSystemJson] language entries must include lang and path:', l);
      process.exit(1);
    }
  }

  if (Array.isArray(sys.packs)) {
    for (const p of sys.packs) {
      const req = ['name', 'label', 'type'];
      const miss = req.filter(k => !(k in p));
      if (miss.length) {
        console.error(`[validateSystemJson] pack ${p.name || '(unnamed)'} missing:`, miss);
        process.exit(1);
      }
      if (!p.path) {
        console.error(`[validateSystemJson] pack ${p.name} missing path`);
        process.exit(1);
      }
    }
  }

  console.log('[validateSystemJson] OK');
}

main().catch(err => { console.error(err); process.exit(1); });

