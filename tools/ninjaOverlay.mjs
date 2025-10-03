import { promises as fs } from 'fs';
import path from 'path';

const repoRoot = process.cwd();
const basePublicDir = path.join(repoRoot, 'public');
const ninjaDir = path.join(repoRoot, 'dist-ninja');

function parseArgs(argv) {
  const args = { dry: false, out: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry') args.dry = true;
    else if (a === '--out') { args.out = argv[++i]; }
  }
  return args;
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function readJson(p) {
  return JSON.parse(await fs.readFile(p, 'utf-8'));
}

async function writeJson(p, obj) {
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(obj, null, 2));
}

async function cpIfExists(src, dest) {
  if (await exists(src)) {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.cp(src, dest, { recursive: true });
    console.log(`[ninjaOverlay] Copied ${src} -> ${dest}`);
  } else {
    console.log(`[ninjaOverlay] Skipped (missing) ${src}`);
  }
}

function packExists(packs, name) {
  return !!packs.find(x => x.name === name);
}

async function mergeSystemJson(baseSystemPath, ninjaSystemPath, targetPath, dry) {
  const base = await readJson(baseSystemPath);
  let merged = { ...base };

  if (await exists(ninjaSystemPath)) {
    const ninja = await readJson(ninjaSystemPath);
    // Merge packs: union by name, prefer base entries, add missing from ninja
    if (Array.isArray(ninja.packs)) {
      const basePacks = Array.isArray(base.packs) ? [...base.packs] : [];
      for (const p of ninja.packs) {
        if (!packExists(basePacks, p.name)) {
          basePacks.push({ ...p, path: p.path || `packs/${p.name}` });
          console.log(`[ninjaOverlay] Added pack '${p.name}' from ninja system.json`);
        }
      }
      merged.packs = basePacks;
    }
    // Merge languages: add new language entries not present by lang code
    if (Array.isArray(ninja.languages)) {
      const baseLangs = Array.isArray(base.languages) ? [...base.languages] : [];
      for (const l of ninja.languages) {
        if (!baseLangs.find(x => x.lang === l.lang)) {
          baseLangs.push(l);
          console.log(`[ninjaOverlay] Added language '${l.lang}' from ninja system.json`);
        }
      }
      merged.languages = baseLangs;
    }
  } else {
    console.log('[ninjaOverlay] No dist-ninja/system.json found; packs/languages unchanged');
  }

  if (dry) {
    await writeJson(targetPath, merged);
    console.log(`[ninjaOverlay] Dry-run: wrote merged system.json to ${targetPath}`);
  } else {
    await writeJson(targetPath, merged);
    console.log(`[ninjaOverlay] Wrote merged system.json to ${targetPath}`);
  }
}

async function overlayFiles(targetDir, dry) {
  const overlayTargets = [
    'style', 'templates', 'packs', 'icons', 'assets', 'img', 'fonts', 'lang'
  ];
  for (const rel of overlayTargets) {
    const src = path.join(ninjaDir, rel);
    const dst = path.join(targetDir, rel);
    if (dry) {
      console.log(`[ninjaOverlay] (dry) would copy ${src} -> ${dst}`);
    } else {
      await cpIfExists(src, dst);
    }
  }
  // Common top-level files to overlay if present
  const files = ['index.mjs', 'style.css', 'compiled.css'];
  for (const f of files) {
    const src = path.join(ninjaDir, f);
    const dst = path.join(targetDir, f);
    if (dry) {
      console.log(`[ninjaOverlay] (dry) would copy ${src} -> ${dst}`);
    } else {
      await cpIfExists(src, dst);
    }
  }
}

async function main() {
  const args = parseArgs(process.argv);
  const dry = !!args.dry;
  const targetSystemPath = args.out || path.join(basePublicDir, dry ? 'system.ninja.json' : 'system.json');

  const ninjaPresent = await exists(ninjaDir);
  if (!ninjaPresent) {
    console.log('[ninjaOverlay] dist-ninja not found.');
    if (dry) {
      // In dry-run, still emit a merged system.json identical to base to allow downstream validation
      await mergeSystemJson(path.join(basePublicDir, 'system.json'), path.join(ninjaDir, 'system.json'), targetSystemPath, true);
      console.log('[ninjaOverlay] Dry-run completed without dist-ninja.');
      process.exit(0);
    } else {
      console.error('[ninjaOverlay] Aborting: dist-ninja directory is required for non-dry overlay.');
      process.exit(1);
    }
  }

  const targetDir = basePublicDir;
  await overlayFiles(targetDir, dry);
  await mergeSystemJson(path.join(basePublicDir, 'system.json'), path.join(ninjaDir, 'system.json'), targetSystemPath, dry);
  console.log('[ninjaOverlay] Overlay complete');
}

main().catch(err => { console.error(err); process.exit(1); });

