import { resolve, join, basename } from 'node:path';
import { cp, mkdir, readdir, stat } from 'node:fs/promises';

function isVolatilePackFile(pathOrName) {
  const name = basename(pathOrName);
  return (
    name === 'LOCK' ||
    name === 'LOG' ||
    name === 'LOG.old' ||
    name === 'CURRENT' ||
    /^MANIFEST-\d+$/i.test(name) ||
    /^\d+\.log$/i.test(name)
  );
}

async function copyEntry(src, dest) {
  if (isVolatilePackFile(src)) {
    return;
  }

  const sourceStat = await stat(src);
  if (sourceStat.isDirectory()) {
    await mkdir(dest, { recursive: true });
    const entries = await readdir(src, { withFileTypes: true });
    for (const entry of entries) {
      await copyEntry(join(src, entry.name), join(dest, entry.name));
    }
    return;
  }

  try {
    await cp(src, dest, { force: true });
  } catch (error) {
    if (error?.code === 'EBUSY' && isVolatilePackFile(error.path ?? '')) {
      console.warn(`[copyDist] Skipping locked pack file: ${error.path}`);
      return;
    }
    throw error;
  }
}

async function copyDist() {
  const root = process.cwd();
  const distRoot = resolve(root, 'dist');
  const publicDir = resolve(root, 'public');

  console.log('[copyDist] Assembling system in dist/...');

  try {
    // Check if dist/dist exists (Vite output)
    await stat(resolve(distRoot, 'dist'));
  } catch (e) {
    console.error('[copyDist] Build output missing – expected dist/dist/ to exist. Run vite build first.');
    process.exit(1);
  }

  // Copy all files from public/ to dist/ (excluding 'dist' to avoid conflicts/legacy junk)
  const entries = await readdir(publicDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'dist') continue; // Skip legacy public/dist folder
    
    const src = join(publicDir, entry.name);
    const dest = join(distRoot, entry.name);

    await copyEntry(src, dest);
  }

  console.log(`[copyDist] System successfully assembled in: ${distRoot}`);
  console.log(`[copyDist] You can now symlink this folder to your Foundry/Data/systems/anarchy/ directory.`);
}

copyDist().catch((error) => {
  console.error('[copyDist] Failed:', error);
  process.exit(1);
});
