import { promises as fs } from 'fs';
import path from 'path';
import process from 'process';
import { spawn } from 'child_process';
import { performance } from 'perf_hooks';

const PROJECT_ROOT = process.cwd();
const COMP_ROOT = path.resolve(PROJECT_ROOT, 'workspace', 'compendium');
const PACKS_ROOT = path.join(COMP_ROOT, 'packs');
const REPORT_ROOT = path.join(COMP_ROOT, 'reports');

const NORMALIZE_ORDER = ['actors', 'gear', 'weapons', 'wiki'];

const PACK_MAPPINGS = [
  { name: 'act-player', source: ['act', 'pc'] },
  { name: 'act-npc', source: ['act', 'npc'] },
  { name: 'itm-gear', source: ['itm', 'gear', 'gear'] },
  { name: 'itm-weap', source: ['itm', 'weap', 'weapon'] },
  { name: 'wiki-hub', source: ['wiki', 'journal', 'hub'] },
];

function execNode(script, options = {}) {
  const env = { ...process.env, ...options.env };
  return new Promise((resolve, reject) => {
    const child = spawn('node', [script], {
      cwd: PROJECT_ROOT,
      env,
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${script} exited with code ${code}`));
    });
  });
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function removeIfExists(dir) {
  await fs.rm(dir, { recursive: true, force: true });
}

async function copyDir(src, dest) {
  const stat = await fs.stat(src);
  if (!stat.isDirectory()) throw new Error(`Expected directory: ${src}`);
  await ensureDir(dest);

  const entries = await fs.readdir(src);
  for (const entry of entries) {
    if (entry === '.gitattributes') continue;
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    const entryStat = await fs.stat(srcPath);
    if (entryStat.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      const data = await fs.readFile(srcPath);
      await fs.writeFile(destPath, data);
    }
  }
}

async function runNormalizers() {
  const start = performance.now();
  for (const pack of NORMALIZE_ORDER) {
    console.log(`[bundle] normalizing pack: ${pack}`);
    await execNode('tools/compendium-normalizer.mjs', { env: { CMP_PACK: pack } });
  }
  const elapsed = ((performance.now() - start) / 1000).toFixed(1);
  console.log(`[bundle] normalization complete in ${elapsed}s`);
}

async function stagePackDirs() {
  await ensureDir(PACKS_ROOT);
  for (const mapping of PACK_MAPPINGS) {
    const srcDir = path.join(COMP_ROOT, ...mapping.source);
    const destDir = path.join(PACKS_ROOT, mapping.name);

    try {
      await fs.access(srcDir);
    } catch (error) {
      console.warn(`[bundle] source missing for ${mapping.name}: ${srcDir}`);
      continue;
    }

    await removeIfExists(destDir);
    await ensureDir(destDir);
    await copyDir(srcDir, destDir);
    console.log(`[bundle] staged pack ${mapping.name} from ${srcDir}`);
  }
}

async function packagePacks() {
  await execNode('tools/packCompendiumsWithRewrite.mjs', {
    env: {
      PACK_SRC: PACKS_ROOT,
      OUT_DIR: 'dist-compendiums',
    },
  });
}

async function main() {
  const skipNormalize = process.env.SKIP_NORMALIZE === 'true';

  console.log('[bundle] starting compendium bundle build');
  await ensureDir(COMP_ROOT);
  await ensureDir(REPORT_ROOT);

  if (!skipNormalize) {
    await runNormalizers();
  } else {
    console.log('[bundle] SKIP_NORMALIZE=true; reusing existing normalized data');
  }

  await stagePackDirs();
  await packagePacks();
  console.log('[bundle] bundle build complete');
}

main().catch((err) => {
  console.error('[bundle] failed', err);
  process.exit(1);
});

