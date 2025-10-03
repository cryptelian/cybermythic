# Foundry VTT System Best Practices Reference

## Executive Summary

Based on analysis of leading Foundry VTT systems (D&D5e, PF2e, SR5), this document outlines the best practices for structuring, building, and deploying a production-ready Foundry system.

## 1. System Manifest (system.json) Best Practices

### Structure & Paths

```json
{
  "id": "system-name", // Must match folder name exactly
  "title": "System Full Name",
  "version": "1.0.0",
  "esmodules": ["dist/index.mjs"], // Points to built files, NOT src/
  "styles": ["dist/styles.css"], // Points to built CSS, NOT scss/
  "manifest": "https://raw.../system.json",
  "download": "https://.../releases/download/v1.0.0/system.zip"
}
```

### Key Observations from Leading Systems:

**D&D5e (Official)**:

- Single entry point: `"esmodules": ["dnd5e.mjs"]`
- Single compiled CSS: `"styles": ["dnd5e.css"]`
- Uses rollup for build, outputs to root directory
- Clean separation: source in `/module/`, built files at root

**PF2e (Community)**:

- Multiple JS files: `"esmodules": ["vendor.mjs", "pf2e.mjs"]`
- Single CSS: `"styles": ["styles/pf2e.css"]`
- TypeScript + Vite build system
- Source in `/src/`, static files in `/static/`, build outputs to `/dist/`

**SR5 (Community)**:

- Single entry: `"esmodules": ["dist/bundle.js"]`
- Single CSS: `"styles": ["dist/bundle.css"]`
- TypeScript + esbuild/gulp
- Clear dist-only exports in manifest

## 2. Directory Structure

### Recommended Production Structure:

```
system-name/
├── dist/                # Built/compiled files (git-ignored)
│   ├── index.mjs       # Main entry point
│   ├── index.mjs.map   # Source maps
│   └── styles.css      # Compiled CSS
├── public/             # Static assets (copied to dist)
│   ├── assets/         # Images, backgrounds
│   ├── fonts/          # Font files
│   ├── icons/          # System icons
│   └── lang/           # Localization files
├── src/                # Source code
│   ├── modules/        # JavaScript/TypeScript modules
│   ├── styles/         # SCSS/CSS source
│   └── index.js        # Entry point
├── templates/          # Handlebars templates
├── packs/              # Compendium data
├── system.json         # System manifest
└── template.json       # Data model definition
```

## 3. Build Pipeline Best Practices

### Development vs Production Modes

**Development Mode:**

- Vite dev server provides HMR at localhost:30001
- Proxy to Foundry at localhost:30000
- Source maps enabled
- No minification

**Production Mode:**

- Build outputs to `/dist/`
- Minification and tree-shaking
- system.json points ONLY to dist files
- No source file references

### Vite Configuration (Recommended)

```typescript
// vite.config.ts
export default defineConfig({
  base: '/systems/system-id/', // Dynamic paths
  server: {
    port: 30001,
    proxy: {
      '^(?!/systems/system-id/)': 'http://localhost:30000/',
      '/socket.io': { target: 'ws://localhost:30000', ws: true },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
      fileName: 'index',
    },
  },
});
```

## 4. Asset Management

### Path Resolution

- **Never hardcode**: `systems/anarchy/icons/icon.svg`
- **Always dynamic**: `/systems/${game.system.id}/icons/icon.svg`

### Asset Organization

```
public/
├── assets/          # General images
├── icons/           # Game icons
│   ├── skills/
│   ├── items/
│   └── actors/
├── fonts/           # Custom fonts
└── lang/            # i18n JSON files
```

### Media Declaration

```json
"media": [{
  "type": "cover",
  "url": "systems/system-id/assets/cover.webp"
}]
```

## 5. Module Loading & Registration

### Entry Point Pattern (from D&D5e)

```javascript
// index.mjs - Main entry point
Hooks.once('init', () => {
  // Register sheets
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('system-id', CharacterSheet, {
    types: ['character'],
    makeDefault: true,
  });

  // Load templates
  loadTemplates([
    'systems/system-id/templates/actor/character.hbs',
    // ...
  ]);
});

Hooks.once('ready', () => {
  // System ready initialization
});
```

### No Conditional Imports

```javascript
// ❌ BAD - Causes failures
if (isDev) {
  import('/src/dev-tools.js'); // Will 404 in production
}

// ✅ GOOD - Check before import
if (await canReachDevServer()) {
  import('http://localhost:30001/@vite/client');
}
```

## 6. Compendium Packs

### Structure

```
packs/
├── _source/           # YAML source files (optional)
│   └── items/
│       └── item.yml
└── items/             # Compiled LevelDB
    ├── 000003.log
    └── MANIFEST-000002
```

### Build Scripts

```json
"scripts": {
  "build:packs": "fvtt package pack --type System",
  "unpack:packs": "fvtt package unpack --type System"
}
```

## 7. Release Management

### GitHub Release Structure

```
releases/
└── v1.0.0/
    └── system-name.zip
        ├── dist/          # Built files only
        ├── templates/     # Templates
        ├── packs/         # Compiled packs
        ├── system.json    # Manifest
        └── template.json  # Data model
```

### Manifest URLs

```json
{
  "manifest": "https://raw.githubusercontent.com/user/repo/main/system.json",
  "download": "https://github.com/user/repo/releases/download/v1.0.0/system.zip"
}
```

## 8. Common Pitfalls to Avoid

1. **System ID Mismatch**: Folder name MUST match system.json "id"
2. **Source Imports in Production**: Never reference /src/ in production manifest
3. **Hardcoded Paths**: Always use `game.system.id` for paths
4. **Missing Build Step**: Ensure `npm run build` creates all necessary files
5. **Dev Dependencies in Prod**: Don't ship with dev server requirements
6. **Speculative Imports**: Always check server availability before importing

## 9. Testing & Validation

### Smoke Tests

1. System loads without dev server
2. Character sheet opens correctly
3. Items can be created and edited
4. Compendiums are accessible
5. No console errors on load

### Build Validation

```bash
# Build for production
npm run build

# Copy to Foundry data
cp -r dist/ /path/to/foundry/Data/systems/system-id/

# Test without dev server
# Should load completely from dist/ files
```

## 10. Migration Guide for Shadowrun: Anarchy

### Immediate Actions Required:

1. **Fix system.json**:
   - Change `esmodules` from `["index.mjs"]` to `["dist/index.mjs"]`
   - Ensure all paths are relative to system root

2. **Update Vite Config**:
   - Set proper `base` path
   - Configure `build.outDir` to 'dist'
   - Set up proper library mode

3. **Reorganize Assets**:
   - Move to `/public/` for static copy
   - Update all references to use dynamic paths

4. **Build Pipeline**:
   - Create clear dev vs prod modes
   - Ensure dist/ contains everything needed
   - Test without dev server

5. **Documentation**:
   - Add build instructions to README
   - Document dev server setup
   - Include troubleshooting guide

## Appendix: Tool Comparison

| System | Build Tool   | Language   | Entry Strategy     |
| ------ | ------------ | ---------- | ------------------ |
| D&D5e  | Rollup       | JavaScript | Single bundle      |
| PF2e   | Vite         | TypeScript | Vendor + App split |
| SR5    | esbuild/gulp | TypeScript | Single bundle      |

## Conclusion

The key to a reliable Foundry system is clear separation between development and production environments, with the manifest always pointing to stable, built assets. Follow the patterns established by official systems like D&D5e for maximum compatibility and reliability.
