import { promises as fs } from 'fs';
import path from 'path';

async function main() {
  const systemId = (process.env.VITE_SYSTEM_ID && process.env.VITE_SYSTEM_ID.trim().length > 0)
    ? process.env.VITE_SYSTEM_ID.trim()
    : 'anarchy';
  const outDir = (process.env.OUT_DIR && process.env.OUT_DIR.trim().length > 0)
    ? process.env.OUT_DIR.trim()
    : 'dist';

  const manifestPath = path.resolve(process.cwd(), outDir, 'system.json');

  try {
    const raw = await fs.readFile(manifestPath, 'utf-8');
    const json = JSON.parse(raw);

    // Update identity
    json.id = systemId;
    if (typeof json.title === 'string' && systemId !== 'anarchy') {
      // keep original title if desired; otherwise annotate
      json.title = json.title.includes('(') ? json.title : `${json.title} (${systemId})`;
    }

    // Drop remote/public metadata for private builds
    delete json.manifest;
    delete json.download;
    delete json.url;
    delete json.bugs;

    // Fix media/background urls referencing the system path
    const replaceSystemPath = (value) => {
      if (typeof value !== 'string') return value;
      return value.replace(/(^|\b)systems\/anarchy\//g, `systems/${systemId}/`);
    };

    if (Array.isArray(json.media)) {
      json.media = json.media.map(m => {
        if (m && typeof m === 'object' && typeof m.url === 'string') {
          return { ...m, url: replaceSystemPath(m.url) };
        }
        return m;
      });
    }

    if (typeof json.background === 'string') {
      json.background = replaceSystemPath(json.background);
    }

    // Write back prettified
    await fs.writeFile(manifestPath, JSON.stringify(json, null, 2), 'utf-8');
    console.log(`[rewriteSystemJson] Updated ${manifestPath} for system id: ${systemId}`);
  } catch (err) {
    console.error(`[rewriteSystemJson] Failed to process ${manifestPath}:`, err.message);
    process.exitCode = 1;
  }
}

main();

