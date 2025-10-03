#!/usr/bin/env node

/**
 * Script to fix hardcoded system paths in the codebase
 * Replaces "systems/anarchy" with dynamic path resolution
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Patterns to replace
const replacements = [
  {
    pattern: /['"]systems\/anarchy\//g,
    replacement: '`systems/${game.system.id}/',
    fileTypes: ['.js', '.mjs', '.ts'],
  },
  {
    pattern: /src="systems\/anarchy\//g,
    replacement: 'src=`systems/${game.system.id}/',
    fileTypes: ['.yml', '.json'],
  },
];

function processFile(filePath) {
  const ext = path.extname(filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  for (const { pattern, replacement, fileTypes } of replacements) {
    if (fileTypes.includes(ext)) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        console.log(`Fixed paths in: ${filePath}`);
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and build directories
      if (!['node_modules', 'dist', 'dist-ninja', '.git'].includes(file)) {
        walkDir(filePath);
      }
    } else {
      processFile(filePath);
    }
  }
}

console.log('Fixing hardcoded system paths...');
walkDir(path.join(__dirname, '..', 'src'));
console.log('Done!');
