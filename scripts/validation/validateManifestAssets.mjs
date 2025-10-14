import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(process.cwd());
const manifestPath = resolve(projectRoot, 'public', 'system.json');

const criticalFiles = [
  resolve(projectRoot, 'public', 'dist', 'index.mjs'),
  resolve(projectRoot, 'public', 'dist', 'style.css'),
];

async function ensureFile(path) {
  try {
    await stat(path);
    return true;
  } catch (error) {
    if (error?.code === 'ENOENT') {
      throw new Error(`Missing required build artifact: ${path}`);
    }
    throw error;
  }
}

async function validateManifestTargets() {
  const raw = await readFile(manifestPath, 'utf8');
  const manifest = JSON.parse(raw);

  const esmodules = Array.isArray(manifest.esmodules) ? manifest.esmodules : [];
  const styles = Array.isArray(manifest.styles) ? manifest.styles : [];

  if (!esmodules.length) {
    throw new Error('system.json.esmodules must reference at least one build artifact.');
  }
  if (!styles.length) {
    throw new Error('system.json.styles must reference at least one build artifact.');
  }

  const missing = [];

  for (const relPath of [...esmodules, ...styles]) {
    const absolute = resolve(projectRoot, 'public', relPath);
    try {
      await stat(absolute);
    } catch (error) {
      if (error?.code === 'ENOENT') {
        missing.push(relPath);
      } else {
        throw error;
      }
    }
  }

  if (missing.length) {
    throw new Error(
      `system.json references build assets that are missing from public/: ${missing.join(', ')}`,
    );
  }
}

async function main() {
  for (const file of criticalFiles) {
    await ensureFile(file);
  }
  await validateManifestTargets();
  console.log('[manifest-assets] OK');
}

main().catch((error) => {
  console.error('[manifest-assets] FAIL:', error.message ?? error);
  process.exit(1);
});


