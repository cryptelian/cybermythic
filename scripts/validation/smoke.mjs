import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(process.cwd());

const targets = {
  loader: resolve(projectRoot, 'public', 'index.mjs'),
  bundleDir: resolve(projectRoot, 'dist', 'dist'),
};

const checks = [
  {
    file: 'loader',
    needle: "await import('/src/start.js')",
    message: 'Dev-mode import guard missing in loader.',
  },
  {
    file: 'loader',
    needle: 'game?.system?.anarchy',
    message: 'Loader no longer sets dev diagnostics on game.system.anarchy.',
  },
  {
    file: 'bundle',
    needle: 'Hooks.once("init"',
    message: 'Built bundle missing init hook registration.',
  },
  {
    file: 'bundle',
    needle: 'DocumentSheetConfig',
    message: 'Built bundle should reference DocumentSheetConfig to register sheets.',
  },
];

async function runChecks() {
  let bundleContents = null;
  for (const { file, needle, message } of checks) {
    try {
      let contents = '';
      let checkedTarget = '';

      if (file === 'bundle') {
        if (bundleContents == null) {
          const entries = await readdir(targets.bundleDir, { withFileTypes: true });
          const bundleFiles = entries
            .filter((entry) => entry.isFile() && entry.name.endsWith('.mjs'))
            .map((entry) => resolve(targets.bundleDir, entry.name));
          const loadedFiles = await Promise.all(
            bundleFiles.map(async (path) => [path, await readFile(path, 'utf8')]),
          );
          bundleContents = loadedFiles.map(([, source]) => source).join('\n');
          checkedTarget = bundleFiles.join(', ');
        } else {
          checkedTarget = targets.bundleDir;
        }
        contents = bundleContents;
      } else {
        checkedTarget = targets[file];
        contents = await readFile(checkedTarget, 'utf8');
      }

      if (!contents.includes(needle)) {
        throw new Error(`${message} (Checked ${checkedTarget})`);
        }
    } catch (e) {
        throw new Error(`Failed to check ${file}: ${e.message}`);
    }
  }
}

async function main() {
  await runChecks();
  console.log('[smoke] Core loader and bundle checks passed.');
}

main().catch((error) => {
  console.error('[smoke] FAIL:', error.message ?? error);
  process.exit(1);
});
