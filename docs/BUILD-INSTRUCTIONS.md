# Shadowrun: Anarchy Build & Development Guide

## Prerequisites

- Node.js v20+ and npm
- Foundry VTT v11+ installed locally
- Git

## Initial Setup

1. Clone the repository:

```bash
git clone https://github.com/VincentVk9373/anarchy.git
cd anarchy
```

2. Install dependencies:

```bash
npm install
```

3. Build the system:

```bash
npm run build
```

## Development Mode

### Option 1: Vite Dev Server (Recommended for Development)

1. Start the development server:

```bash
npm run dev
```

This starts:

- Vite dev server on port 30001
- SCSS watch compilation
- Hot Module Replacement (HMR)

2. Configure Foundry:

- Run Foundry on port 30000 (default)
- Install the system by symlinking or copying the `dist/` folder to:
  ```
  {FoundryData}/Data/systems/anarchy/
  ```

3. Access Foundry:

- Navigate to http://localhost:30001 (Vite will proxy to Foundry)
- Or use http://localhost:30000 with the same-origin proxy setup

### Option 2: Build Watch Mode

For a simpler setup without HMR:

```bash
npm run build:watch
```

This continuously rebuilds to `dist/` on file changes.

### Option 3: Same-Origin Proxy (Advanced)

Set up a reverse proxy on port 30000 that routes:

- `/@vite/*` and `/systems/anarchy/src/*` → Vite (30001)
- Everything else → Foundry (30010)

This eliminates CORS issues and provides the smoothest development experience.

## Production Build

### Building for Release

1. Clean and build for production:

```bash
npm run build
```

This will:

- Clean the dist directory
- Compile and minify SCSS
- Build JavaScript with tree-shaking
- Copy all static assets
- Generate source maps

2. The built system will be in the `dist/` directory with:

```
dist/
├── index.mjs          # Main entry point
├── index.mjs.map      # Source map
├── style.css          # Compiled styles
├── system.json        # System manifest
├── template.json      # Data model
├── assets/            # Images and media
├── fonts/             # Font files
├── icons/             # System icons
├── lang/              # Localization files
├── packs/             # Compendium packs
├── style/             # Additional styles
└── templates/         # Handlebars templates
```

### Creating a Release Package

1. Build and package:

```bash
npm run build
npm run release:package
```

This creates `anarchy-release.zip` ready for distribution.

2. For GitHub releases:

```bash
npm run release:prepare
```

## Testing

### Smoke Tests

After building, verify:

1. **System Loads**: Copy `dist/` to Foundry's systems folder
2. **No Dev Dependencies**: System works without running dev server
3. **Sheets Open**: Character sheets and items load correctly
4. **No Console Errors**: Check browser console for errors
5. **Assets Load**: Images and styles display properly

### Test Commands

```bash
# Run tests
npm test

# Visual regression tests
npm run test:visual

# Validate system.json
npm run validate:system

# Validate translations
npm run validate:i18n

# Check code style
npm run lint
npm run stylelint
```

## File Structure

```
anarchy/
├── src/               # Source code
│   ├── modules/       # JavaScript modules
│   ├── styles/        # SCSS styles
│   └── start.js       # Entry point
├── public/            # Static assets (copied to dist)
│   ├── assets/        # Images
│   ├── fonts/         # Fonts
│   ├── icons/         # Icons
│   ├── lang/          # Translations
│   ├── system.json    # Manifest template
│   └── templates/     # Handlebars templates
├── dist/              # Built output (git-ignored)
├── tools/             # Build tools and scripts
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies and scripts
```

## Important Notes

### System ID Must Match Folder Name

The system folder in Foundry Data must be named `anarchy` to match the system ID in `system.json`.

### Dynamic Path Resolution

Never hardcode paths. Always use:

```javascript
`/systems/${game.system.id}/path/to/resource`;
```

### Production Manifest

The `system.json` in production must reference only built files:

- ✅ `"esmodules": ["index.mjs"]`
- ❌ `"esmodules": ["src/start.js"]`

### Asset References

All asset paths should be relative to the system root:

- ✅ `"systems/anarchy/icons/icon.svg"`
- ❌ `"/absolute/path/to/icon.svg"`

## Troubleshooting

### System Won't Load

1. Check that `dist/` contains all necessary files
2. Verify `system.json` points to `index.mjs` not `src/`
3. Ensure folder name matches system ID
4. Check browser console for 404 errors

### Dev Server Issues

1. Ensure ports 30000 and 30001 are available
2. Check that Vite dev server is running
3. Verify proxy configuration in `vite.config.ts`

### Build Failures

1. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear dist folder: `npm run build:clean`
3. Check for TypeScript errors: `npx tsc --noEmit`

## CI/CD

The project includes GitHub Actions for:

- Automated testing on pull requests
- Building and validating the system
- Creating releases with proper versioning

See `.github/workflows/` for configuration details.

## Contributing

1. Create a feature branch
2. Make changes following the style guide
3. Test thoroughly in both dev and production modes
4. Submit a pull request with clear description

For more details, see [CONTRIBUTING.md](../CONTRIBUTING.md)
