# Migration Guide: Repository Reorganization

This guide helps existing developers understand the recent repository reorganization and how to adapt their workflows.

## What Changed

The repository has been reorganized from a scattered structure to an organized, functional architecture:

### Before (Scattered)

```
📁 cybermythic/
├── tools/                    # Mixed build/validation/utility scripts
├── dist/                     # Production builds
├── dist-compendiums/         # Compendium builds
├── dist-ninja/              # Development builds
├── vite.config.ts           # Build config in root
├── .editorconfig           # Config files in root
├── docs/                   # Mixed documentation
└── 25+ config files in root
```

### After (Organized)

```
📁 cybermythic/
├── build/                   # All build outputs
│   ├── output/             # Production builds (was dist/)
│   ├── compendiums/        # Compendium builds (was dist-compendiums/)
│   └── development/        # Dev builds (was dist-ninja/)
├── config/                 # All configuration files
│   ├── build/             # vite.config.ts, postcss.config.cjs
│   ├── code/              # .editorconfig, .prettier*, .stylelint*
│   └── ci/                # release-please-*, .lintstagedrc.json
├── scripts/               # Organized scripts
│   ├── build/            # Core build scripts (was tools/)
│   ├── compendium/       # Compendium management (was tools/)
│   ├── validation/       # Validation scripts (was tools/)
│   └── utilities/        # Development utilities (was tools/)
└── docs/                  # Organized documentation
    ├── development/       # Developer guides
    └── user/              # User documentation
```

## Updated File Paths

### Script References (package.json)

| Old Path                            | New Path                                      |
| ----------------------------------- | --------------------------------------------- |
| `./tools/copyDist.mjs`              | `./scripts/build/copyDist.mjs`                |
| `./tools/prepareRelease.mjs`        | `./scripts/build/prepareRelease.mjs`          |
| `./tools/packCompendiumsToDist.mjs` | `./scripts/build/packCompendiumsToDist.mjs`   |
| `./tools/validateSystemJson.mjs`    | `./scripts/validation/validateSystemJson.mjs` |
| `./tools/style-analyzer.js`         | `./scripts/validation/style-analyzer.js`      |
| `src/tools/qa-testing.js`           | `./scripts/utilities/qa-testing.js`           |

### Configuration Files

| Old Location          | New Location                  |
| --------------------- | ----------------------------- |
| Root `.editorconfig`  | `config/code/.editorconfig`   |
| Root `vite.config.ts` | `config/build/vite.config.ts` |
| Root `.prettier*`     | `config/code/`                |
| Root `.stylelint*`    | `config/code/`                |

### Build Outputs

| Old Location                      | New Location |
| --------------------------------- | ------------ |
| Vite bundle output                | `dist/dist/` |
| Assembled installable package     | `dist/`      |
| Legacy `build/output/` references | Retired      |

## Workflow Updates

### Development Commands (Unchanged)

```bash
# These npm scripts still work exactly the same:
npm run dev              # Start development
npm run build           # Build for production
npm run validate        # Run validations
npm run validate:dist   # Validate the assembled dist package after build
npm run release:prepare # Create .release artifacts from dist/
npm run lint            # Lint code
```

### Direct Script Calls (Updated)

```bash
# Old way:
node ./tools/packCompendiumsToDist.mjs

# New way:
node ./scripts/build/packCompendiumsToDist.mjs
```

## Benefits of New Structure

### 🔍 **Better Discoverability**

- Related files are co-located by function
- Clear separation of concerns
- Logical grouping of similar functionality

### 🚀 **Improved Maintainability**

- Configuration files centralized in `config/`
- Scripts organized by purpose in `scripts/`
- Build outputs clearly separated in `build/`

### 📚 **Enhanced Documentation**

- Each major directory has its own README
- Comprehensive contributor guide in `docs/development/`
- Clear migration path for new developers

### ⚙️ **Better Development Experience**

- VS Code workspace configuration optimized
- Extension recommendations organized
- Clear development workflow documentation

## For Existing Developers

### Immediate Actions Required

1. **Update bookmarks**: Any bookmarks to moved files need updating
2. **Check custom scripts**: Verify any personal scripts reference correct paths
3. **Update documentation**: Personal notes referencing old paths

### No Immediate Actions Required

- All `npm run` commands work unchanged
- Development server functionality unchanged
- Build processes work identically
- Validation and testing unchanged

## Troubleshooting

### "File not found" Errors

- Check if you're using old paths in scripts or commands
- Verify file exists in new location
- Update any hardcoded paths in your development setup

### Build Issues

- Build outputs now assemble into `dist/` after `npm run build`
- Source validation runs through `npm run validate`
- Packaged artifact validation runs through `npm run validate:dist`
- Update any scripts that still reference `build/output`
- Check that `public/` directory linking still works correctly

### IDE Issues

- VS Code workspace should automatically adapt
- If extension recommendations don't appear, reload VS Code window
- Check `.vscode/extensions/` for configuration issues

## Migration Verification

Run these commands to verify everything works:

```bash
# Test core functionality
npm run validate

# Test build system
npm run build:copy-dist

# Test compendium management
npm run packCompendiumsToDist
npm run unpackCompendiumsFromDist

# Test release packaging
npm run release:prepare

# Test development server
npm run dev
```

All commands should work exactly as before, just with files in their new organized locations.

## Long-term Benefits

This reorganization provides:

- **Scalability**: Easy to add new features in appropriate locations
- **Onboarding**: New developers can quickly understand project structure
- **Maintenance**: Easier to find and modify related functionality
- **Standards**: Follows modern project organization best practices

---

_This migration guide is maintained in `docs/development/migration-guide.md`_
