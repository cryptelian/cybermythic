# Scripts Directory

This directory contains all build and utility scripts for the CyberMythic project, organized by function.

## Structure

- `build/` - Core build process scripts
- `compendium/` - Compendium management and packaging scripts
- `validation/` - Validation, linting, and testing scripts
- `utilities/` - General utility and helper scripts

## Migration Plan

1. Move build-related scripts from `tools/` -> `scripts/build/`
2. Move compendium scripts from `tools/` -> `scripts/compendium/`
3. Move validation scripts from `tools/` -> `scripts/validation/`
4. Move utility scripts to appropriate subdirectories

## Script Categories

### Build Scripts

- Build process automation
- Asset compilation and bundling
- Foundry VTT package creation
- `npm run build` and `npm run release:prepare` depend on this directory

### Compendium Scripts

- Compendium data management
- Pack compilation and optimization
- Data validation and transformation

### Validation Scripts

- Code quality checks
- System validation
- Internationalization validation

### Utility Scripts

- Development helpers
- Data transformation tools
- Project maintenance scripts

## Source-Control Note

The `scripts/build/` and `config/build/` directories are source inputs, not generated output.
They must remain tracked alongside `package.json` and the CI workflows or build and release
commands will succeed only on machines that already have local copies.
