import { resolve } from 'node:path';
import { stat } from 'node:fs/promises';

async function copyDistWatch() {
  const root = process.cwd();
  const copyScript = resolve(root, 'scripts', 'build', 'copyDist.mjs');
  
  const { spawn } = await import('node:child_process');
  
  // Use chokidar-like behavior or simple interval to run copyDist when things change
  // For simplicity and robustness, we'll just run copyDist once on start of watch
  // In a real watch scenario, vite build --watch handles the code, sass --watch handles styles
  // We just need to ensure the structure is correct initially.
  
  // However, since we moved to a "stable dist" model, we actually need to ensure
  // that when Vite rebuilds index.mjs, it goes to dist/dist/index.mjs (which it does via config)
  // and when Sass rebuilds, it goes to dist/dist/style.css (which we updated in package.json)
  
  // The only missing piece is if you add new files to 'public/'.
  // Ideally, you'd want a watcher on 'public/' to copy them to 'dist/'.
  // For now, let's just run the initial copy.
  
  console.log('[build:watch] Running initial asset assembly...');
  const cp = spawn('node', [copyScript], { stdio: 'inherit', shell: true });
  
  cp.on('close', (code) => {
    if (code !== 0) {
      console.error('[build:watch] Initial copy failed.');
      process.exit(code);
    } else {
      console.log('[build:watch] Initial assembly complete. Starting watchers...');
    }
  });
}

copyDistWatch();
