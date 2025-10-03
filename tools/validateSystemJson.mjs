import { promises as fs } from 'fs';
import path from 'path';

async function readJson(p) {
  return JSON.parse(await fs.readFile(p, 'utf-8'));
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

function parseArgs(argv) {
  const args = { sys: null, root: process.cwd() };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--system') args.sys = argv[++i];
    else if (a === '--root') args.root = argv[++i];
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv);
  const repoRoot = args.root;
  const sysPath = args.sys || path.join(repoRoot, 'public', 'system.json');
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
      // Best-effort existence check for non-dry runs
      const sysDir = path.dirname(sysPath);
      const packDir = path.join(sysDir, p.path);
      if (!await exists(packDir)) {
        console.warn(`[validateSystemJson] WARN: pack directory does not exist: ${packDir}`);
      }
    }
  }

  console.log('[validateSystemJson] OK');
}

main().catch(err => { console.error(err); process.exit(1); });

