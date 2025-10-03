#!/usr/bin/env node

/**
 * Validates that the build output is complete and ready for production
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '..', 'dist');

// Required files in dist
const requiredFiles = [
  'index.mjs',
  'style.css',
  'system.json',
  'template.json',
  'LICENSE.md',
  'lang/en.json',
];

// Required directories
const requiredDirs = ['assets', 'fonts', 'icons', 'lang', 'style', 'templates'];

let hasErrors = false;

console.log('🔍 Validating build output...\n');

// Check dist exists
if (!fs.existsSync(distPath)) {
  console.error('❌ ERROR: dist/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Check required files
console.log('Checking required files:');
for (const file of requiredFiles) {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.error(`  ❌ ${file} - MISSING`);
    hasErrors = true;
  }
}

console.log('\nChecking required directories:');
for (const dir of requiredDirs) {
  const dirPath = path.join(distPath, dir);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    const fileCount = fs.readdirSync(dirPath).length;
    console.log(`  ✅ ${dir}/ (${fileCount} items)`);
  } else {
    console.error(`  ❌ ${dir}/ - MISSING`);
    hasErrors = true;
  }
}

// Validate system.json
console.log('\nValidating system.json:');
const systemJsonPath = path.join(distPath, 'system.json');
if (fs.existsSync(systemJsonPath)) {
  const systemJson = JSON.parse(fs.readFileSync(systemJsonPath, 'utf8'));

  // Check esmodules points to dist file
  if (systemJson.esmodules && systemJson.esmodules[0] === 'index.mjs') {
    console.log('  ✅ esmodules points to index.mjs');
  } else {
    console.error('  ❌ esmodules should be ["index.mjs"]');
    hasErrors = true;
  }

  // Check id matches expected value
  if (systemJson.id === 'anarchy') {
    console.log('  ✅ System ID is "anarchy"');
  } else {
    console.error(`  ❌ System ID should be "anarchy", got "${systemJson.id}"`);
    hasErrors = true;
  }

  // Check no src/ references
  const jsonString = JSON.stringify(systemJson);
  if (!jsonString.includes('/src/')) {
    console.log('  ✅ No /src/ references found');
  } else {
    console.error('  ❌ Found /src/ references in system.json');
    hasErrors = true;
  }
}

// Check for development artifacts
console.log('\nChecking for dev artifacts:');
const devFiles = ['stats.html', '.map'];
let hasDevArtifacts = false;
for (const file of fs.readdirSync(distPath)) {
  if (devFiles.some((dev) => file.includes(dev))) {
    console.log(`  ⚠️  ${file} - Development file present`);
    hasDevArtifacts = true;
  }
}
if (!hasDevArtifacts) {
  console.log('  ✅ No problematic dev artifacts');
}

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.error('\n❌ Build validation FAILED - Fix the errors above');
  process.exit(1);
} else {
  console.log('\n✅ Build validation PASSED - Ready for production!');
  console.log('\nNext steps:');
  console.log('  1. Test in Foundry: Copy dist/ to Data/systems/anarchy/');
  console.log('  2. Create release: npm run release:package');
  console.log('  3. Tag version: git tag v13.0.1 && git push --tags');
}
