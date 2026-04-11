import { readdir, stat as statFs } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';

const projectRoot = resolve(process.cwd());

const requiredFiles = [
  'dist/system.json',
  'dist/dist/index.mjs',
  'dist/templates',
  'dist/lang/en.json',
];

const forbiddenRoots = new Set(['dist-compendiums', 'dist-ninja']);
const skipRoots = new Set(['node_modules', '.git', '.release', 'build', 'public']);

async function ensureRequired() {
  for (const entry of requiredFiles) {
    const target = resolve(projectRoot, entry);
    try {
      await statFs(target);
    } catch (error) {
      throw new Error(`Missing required path: ${entry}`);
    }
  }
}

async function walkForForbidden(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const relPath = relative(projectRoot, resolve(dir, entry.name));
    const topSegment = relPath.split(sep)[0];
    if (topSegment && forbiddenRoots.has(topSegment)) {
      throw new Error(`Disallowed path present: ${topSegment} (found under ${relPath})`);
    }
    if (entry.isDirectory()) {
      if (topSegment && skipRoots.has(topSegment)) continue;
      await walkForForbidden(resolve(dir, entry.name));
    }
  }
}

async function main() {
  await ensureRequired();
  await walkForForbidden(projectRoot);
  console.log('[structure] OK');
}

main().catch((error) => {
  console.error('[structure] FAIL:', error.message ?? error);
  process.exit(1);
});

