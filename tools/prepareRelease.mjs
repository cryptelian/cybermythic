import { mkdir, rm, cp, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
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
    // /OWNER/REPO
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
  const projectRoot = resolve(__dirname, '..');
  const publicDir = resolve(projectRoot, 'public');
  const distDir = resolve(projectRoot, 'dist');

  const { version: cliVersion, repo: cliRepo } = parseArgs();
  const tag = ensureStartsWithV(cliVersion || process.env.GITHUB_REF_NAME);

  const systemPath = resolve(publicDir, 'system.json');
  const system = JSON.parse(await readFile(systemPath, 'utf8'));

  const ownerRepo = cliRepo || process.env.GITHUB_REPOSITORY || parseRepoFromUrl(system.url);
  if (!ownerRepo) {
    console.error('Cannot determine owner/repo; pass --repo OWNER/REPO or set url in system.json');
    process.exit(1);
  }
  if (!tag) {
    console.error('Cannot determine version tag; pass --version vX.Y.Z or set GITHUB_REF_NAME');
    process.exit(1);
  }

  const releaseDir = resolve(projectRoot, '.release');
  const stagingDir = resolve(releaseDir, system.id || 'system');
  await rm(releaseDir, { recursive: true, force: true });
  await mkdir(stagingDir, { recursive: true });

  // Copy public into staging
  await cp(publicDir, stagingDir, { recursive: true });

  // Ensure dist assets exist and copy to staging/dist
  await mkdir(join(stagingDir, 'dist'), { recursive: true });
  await cp(join(distDir, 'index.mjs'), join(stagingDir, 'dist', 'index.mjs'));
  try {
    await cp(join(distDir, 'style.css'), join(stagingDir, 'dist', 'style.css'));
  } catch (_) {
    // style.css may not exist if no SCSS compiled; ignore
  }

  // Update system.json for release
  const releaseSystem = { ...system };
  releaseSystem.version = stripLeadingV(tag);
  // Ensure production paths
  releaseSystem.esmodules = ['dist/index.mjs'];
  const styles = Array.isArray(releaseSystem.styles) ? [...releaseSystem.styles] : [];
  if (!styles.includes('dist/style.css')) styles.push('dist/style.css');
  releaseSystem.styles = styles;

  // Inject download URL
  const zipName = `foundry-${releaseSystem.id || 'system'}-${tag}.zip`;
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
