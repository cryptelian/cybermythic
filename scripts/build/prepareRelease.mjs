import { mkdir, rm, cp, readFile, writeFile, stat } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import archiver from 'archiver';
import { createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--version') out.version = args[++i];
    else if (a === '--repo') out.repo = args[++i];
  }
  return out;
}

function ensureStartsWithV(tag) {
  if (!tag) return undefined;
  return tag.startsWith('v') ? tag : `v${tag}`;
}

function stripLeadingV(tag) {
  return tag?.startsWith('v') ? tag.slice(1) : tag;
}

function parseRepoFromUrl(url) {
  try {
    const u = new URL(url);
    const parts = u.pathname.replace(/^\//, '').split('/');
    if (parts.length >= 2) return `${parts[0]}/${parts[1]}`.replace(/\.git$/, '');
  } catch (_) {}
  return undefined;
}

async function zipDirectory(sourceDir, outPath) {
  await mkdir(dirname(outPath), { recursive: true });
  const output = createWriteStream(outPath);
  const archive = archiver('zip', { zlib: { level: 9 } });
  const done = new Promise((resolvePromise, reject) => {
    output.on('close', resolvePromise);
    archive.on('error', reject);
  });
  archive.pipe(output);
  archive.directory(sourceDir, false);
  await archive.finalize();
  await done;
}

async function main() {
  const projectRoot = resolve(__dirname, '..', '..');
  const distDir = resolve(projectRoot, 'dist');
  
  // Verify dist exists
  try {
    await stat(distDir);
  } catch (e) {
    console.error('Build output missing – expected dist/ to exist. Run npm run build first.');
    process.exit(1);
  }

  const { version: cliVersion, repo: cliRepo } = parseArgs();
  const requestedVersion =
    cliVersion || process.env.GITHUB_REF_NAME || process.env.npm_package_version;

  // Read system.json from the build output
  const systemPath = resolve(distDir, 'system.json');
  let system;
  try {
    system = JSON.parse(await readFile(systemPath, 'utf8'));
  } catch (e) {
    console.error('system.json missing in dist/. Did the build complete successfully?');
    process.exit(1);
  }

  const ownerRepo =
    cliRepo || process.env.GITHUB_REPOSITORY || parseRepoFromUrl(system.url);
  if (!ownerRepo) {
    console.error('Cannot determine owner/repo; pass --repo OWNER/REPO or set url in system.json');
    process.exit(1);
  }
  const tag = ensureStartsWithV(requestedVersion || system.version);
  if (!tag) {
    console.error(
      'Cannot determine version tag; pass --version vX.Y.Z, set GITHUB_REF_NAME, or ensure system.json has a version',
    );
    process.exit(1);
  }

  const releaseDir = resolve(projectRoot, '.release');
  const stagingDir = resolve(releaseDir, system.id || 'system');
  
  // Clean release directory
  await rm(releaseDir, { recursive: true, force: true });
  await mkdir(stagingDir, { recursive: true });

  // Copy fully assembled dist to staging
  console.log(`[release] Copying assembled system from ${distDir} to staging...`);
  await cp(distDir, stagingDir, { recursive: true });

  // Update system.json for release
  const releaseSystem = { ...system };
  releaseSystem.version = stripLeadingV(tag);
  
  // Ensure production paths (should be correct already, but enforcing just in case)
  releaseSystem.esmodules = ['dist/index.mjs'];
  const styles = Array.isArray(releaseSystem.styles) ? [...releaseSystem.styles] : [];
  if (!styles.includes('dist/style.css')) styles.push('dist/style.css');
  releaseSystem.styles = styles;

  // Inject download URL
  const zipName = `cybermythic-${stripLeadingV(tag)}.zip`;
  releaseSystem.download = `https://github.com/${ownerRepo}/releases/download/${tag}/${zipName}`;

  // Optionally update manifest to point to tag
  try {
    releaseSystem.manifest = `https://raw.githubusercontent.com/${ownerRepo}/${tag}/public/system.json`;
  } catch (_) {}

  // Write updated system.json in staging and as release asset
  await writeFile(join(stagingDir, 'system.json'), JSON.stringify(releaseSystem, null, 2), 'utf8');
  await writeFile(join(releaseDir, 'system.json'), JSON.stringify(releaseSystem, null, 2), 'utf8');

  // Zip the staging directory contents
  const zipPath = resolve(releaseDir, zipName);
  await zipDirectory(stagingDir, zipPath);

  console.log('Release prepared:');
  console.log(' tag:', tag);
  console.log(' repo:', ownerRepo);
  console.log(' zip:', zipPath);
  console.log(' manifest:', releaseSystem.manifest);
  console.log(' download:', releaseSystem.download);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
