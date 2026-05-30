import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(process.cwd());
const manifestPath = resolve(projectRoot, 'dist', 'system.json');

const criticalFiles = [
  resolve(projectRoot, 'dist', 'dist', 'index.mjs'),
  resolve(projectRoot, 'dist', 'dist', 'style.css'),
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

  const manifestAssetPaths = [];
  if (typeof manifest.background === 'string') {
    manifestAssetPaths.push(manifest.background);
  }
  if (Array.isArray(manifest.media)) {
    manifest.media.forEach((media) => {
      if (typeof media?.url === 'string') {
        manifestAssetPaths.push(media.url);
      }
    });
  }

  const resolvePackageAsset = (assetPath) => {
    if (
      typeof assetPath !== 'string' ||
      assetPath.length === 0 ||
      assetPath.startsWith('http://') ||
      assetPath.startsWith('https://') ||
      assetPath.startsWith('data:')
    ) {
      return null;
    }

    const normalized = assetPath
      .replace(/^\/+/, '')
      .replace(/^systems\/[^/]+\//, '');
    return resolve(projectRoot, 'dist', normalized);
  };

  for (const relPath of [...esmodules, ...styles]) {
    const absolute = resolve(projectRoot, 'dist', relPath);
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

  for (const assetPath of manifestAssetPaths) {
    const absolute = resolvePackageAsset(assetPath);
    if (!absolute) continue;
    try {
      await stat(absolute);
    } catch (error) {
      if (error?.code === 'ENOENT') {
        missing.push(assetPath);
      } else {
        throw error;
      }
    }
  }

  if (missing.length) {
    throw new Error(
      `system.json references build assets that are missing from dist/: ${missing.join(', ')}`,
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


