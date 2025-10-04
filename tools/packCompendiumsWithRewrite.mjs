import { promises as fs } from 'fs';
import path from 'path';
import process from 'process';
import { compilePack } from '@foundryvtt/foundryvtt-cli';

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyAndRewrite(src, dest, replacers) {
  const stat = await fs.stat(src);
  if (stat.isDirectory()) {
    await ensureDir(dest);
    const entries = await fs.readdir(src);
    for (const entry of entries) {
      if (entry === '.gitattributes') continue;
      await copyAndRewrite(path.join(src, entry), path.join(dest, entry), replacers);
    }
  } else if (stat.isFile()) {
    const raw = await fs.readFile(src, 'utf-8');
    const rewritten = replacers.reduce((acc, [pattern, replacement]) => acc.replace(pattern, replacement), raw);
    await fs.writeFile(dest, rewritten, 'utf-8');
  }
}

async function compileAllPacks({ tmpSrcRoot, packsOutRoot }) {
  const packs = await fs.readdir(tmpSrcRoot);
  for (const pack of packs) {
    const packTmpDir = path.join(tmpSrcRoot, pack);
    const stat = await fs.stat(packTmpDir);
    if (!stat.isDirectory()) continue;
    console.log(`[packs] Packing ${pack}`);
    await compilePack(packTmpDir, path.join(packsOutRoot, pack), { yaml: true });
  }
}

async function main() {
  const systemId = (process.env.VITE_SYSTEM_ID && process.env.VITE_SYSTEM_ID.trim().length > 0)
    ? process.env.VITE_SYSTEM_ID.trim()
    : 'anarchy';
  const outDir = (process.env.OUT_DIR && process.env.OUT_DIR.trim().length > 0)
    ? process.env.OUT_DIR.trim()
    : 'dist';
  const srcDir = (process.env.PACK_SRC && process.env.PACK_SRC.trim().length > 0)
    ? process.env.PACK_SRC.trim()
    : 'src/packs';

  const packsSrcRoot = path.resolve(process.cwd(), srcDir);
  const tmpSrcRoot = path.resolve(process.cwd(), outDir, '_packs_tmp_src');
  const packsOutRoot = path.resolve(process.cwd(), outDir, 'packs');

  console.log('[packs] start', { src: packsSrcRoot, out: packsOutRoot, systemId });

  await ensureDir(tmpSrcRoot);
  await ensureDir(packsOutRoot);

  const replacers = [
    [/(^|\b)systems\/anarchy\//g, `systems/${systemId}/`],
    [/Compendium\.anarchy\./g, `Compendium.${systemId}.`],
  ];

  await copyAndRewrite(packsSrcRoot, tmpSrcRoot, replacers);
  await compileAllPacks({ tmpSrcRoot, packsOutRoot });

  console.log(`[packs] Completed packaging to ${packsOutRoot}`);
}

main().catch((err) => {
  console.error('[packs] Failed:', err);
  process.exitCode = 1;
});

