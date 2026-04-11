import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(process.cwd());

const targets = {
  loader: resolve(projectRoot, 'public', 'index.mjs'),
  bundle: resolve(projectRoot, 'dist', 'dist', 'index.mjs'), // Updated path
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
  for (const { file, needle, message } of checks) {
    const absolute = targets[file];
    try {
        const contents = await readFile(absolute, 'utf8');
        if (!contents.includes(needle)) {
        throw new Error(`${message} (Checked ${absolute})`);
        }
    } catch (e) {
        throw new Error(`Failed to check ${file} at ${absolute}: ${e.message}`);
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
