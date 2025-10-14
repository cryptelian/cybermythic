#!/usr/bin/env node
import { exec as execCb } from 'node:child_process';
import { promisify } from 'node:util';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const exec = promisify(execCb);

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true }).catch(() => {});
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir, predicate) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await walk(full, predicate);
      out.push(...nested);
    } else if (!predicate || predicate(full)) {
      out.push(full);
    }
  }
  return out;
}

async function readJson(p, fallback = {}) {
  try {
    const raw = await fs.readFile(p, 'utf8');
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

async function gitInfo() {
  const info = { tag: null, commit: null };
  try {
    const { stdout } = await exec('git describe --tags --abbrev=0');
    info.tag = stdout.trim();
  } catch {}
  try {
    const { stdout } = await exec('git rev-parse --short HEAD');
    info.commit = stdout.trim();
  } catch {}
  return info;
}

async function runBuild() {
  const startedAt = Date.now();
  await exec('npm run build');
  const buildMs = Date.now() - startedAt;
  return buildMs;
}

function gzipSize(buffer) {
  return zlib.gzipSync(buffer).length;
}

async function collectCssMetrics(distDir) {
  const cssFiles = (await fileExists(distDir)) ? await walk(distDir, f => f.endsWith('.css')) : [];
  let totalBytes = 0;
  let totalGzipBytes = 0;
  const files = [];
  for (const cssFile of cssFiles) {
    const buf = await fs.readFile(cssFile);
    const bytes = buf.length;
    const gz = gzipSize(buf);
    totalBytes += bytes;
    totalGzipBytes += gz;
    files.push({ path: path.relative(process.cwd(), cssFile), bytes, gzipBytes: gz });
  }
  return { files, totalBytes, totalGzipBytes };
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const shouldSkipBuild = args.has('--skip-build') || args.has('--no-build');

  const system = await readJson(path.join('public', 'system.json'));
  const distDir = path.join(process.cwd(), 'dist');

  let buildMs = null;
  if (!shouldSkipBuild) {
    buildMs = await runBuild();
  }

  const css = await collectCssMetrics(distDir);
  const git = await gitInfo();

  const metrics = {
    timestamp: new Date().toISOString(),
    buildMs,
    css,
    system: {
      id: system.id || null,
      version: system.version || null,
      compatibility: system.compatibility || null,
    },
    git,
  };

  const metricsDir = path.join(process.cwd(), 'metrics');
  await ensureDir(metricsDir);
  const outPath = path.join(metricsDir, 'baseline.json');
  await fs.writeFile(outPath, JSON.stringify(metrics, null, 2), 'utf8');
  console.log(`Baseline metrics written to ${outPath}`);
  console.log(JSON.stringify(metrics, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

