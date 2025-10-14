# Contributing to CyberMythic

This guide provides comprehensive information for developers who want to contribute to the CyberMythic Foundry VTT system.

## Project Overview

CyberMythic is a Foundry Virtual Tabletop system for Shadowrun: Anarchy roleplaying game. The project emphasizes:
- Organized development workflow
- Automated builds and validation
- Comprehensive testing
- Accessibility and theming support

## Development Setup

### Prerequisites
- Node.js 20 LTS (use `.nvmrc` for version management)
- Foundry VTT installed and running on port 30000

### Initial Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access Foundry at http://localhost:30001
```

## Project Structure Deep Dive

### 📁 src/ - Source Code
The heart of the system containing:
- `modules/` - Core system modules and functionality
- `styles/` - SCSS styling and theming
- `packs/` - Compendium data sources (YAML format)
- `start.js` - Main entry point

### 📁 scripts/ - Build & Development Scripts
Organized by function:
- `build/` - Core build processes (compilation, bundling)
- `compendium/` - Compendium data management
- `validation/` - System and i18n validation
- `utilities/` - Development helper tools

### 📁 config/ - Configuration Management
Centralized configuration:
- `build/` - Vite, PostCSS, Playwright configs
- `code/` - ESLint, Prettier, Stylelint configs
- `environments/` - Environment-specific settings

### 📁 build/ - Build Outputs
All build artifacts organized by type:
- `output/` - Production builds for Foundry
- `compendiums/` - Compiled compendium data
- `development/` - Development-specific builds

## Development Workflow

### Code Quality
```bash
# Lint JavaScript
npm run lint

# Format code
npm run format

# Lint styles
npm run lint:css

# Full validation
npm run validate
```

### Building
```bash
# Development build
npm run build

# Production build
npm run build:production

# Ninja build (special mode)
npm run build:ninja
```

### Testing
```bash
# Run unit tests
npm test

# Run visual regression tests
npm run test:visual

# Run full QA suite
npm run qa:full
```

### Compendium Management
```bash
# Compile compendiums
npm run packCompendiumsToDist

# Extract compendiums (reverse operation)
npm run unpackCompendiumsFromPublic
```

## Validation & Quality Assurance

### System Validation
- **System Configuration**: Validates `system.json` structure
- **Internationalization**: Checks translation completeness
- **Build Integrity**: Ensures all build outputs are valid

### Code Quality Checks
- ESLint for JavaScript code quality
- Stylelint for SCSS styling
- Prettier for code formatting
- Automated formatting on save (in VS Code)

## File Organization Guidelines

### Adding New Files
1. **Configuration files** → `config/` subdirectory
2. **Build scripts** → `scripts/build/`
3. **Validation scripts** → `scripts/validation/`
4. **Utility scripts** → `scripts/utilities/`
5. **Documentation** → Appropriate `docs/` subdirectory

### Naming Conventions
- Use kebab-case for files and directories
- Use PascalCase for classes and components
- Use camelCase for functions and variables
- Include file type in script names (`.mjs` for ES modules)

## IDE Configuration

The project includes optimized VS Code configuration:
- Extension recommendations in `.vscode/extensions.json`
- Workspace settings in `.vscode/extensions/workspace-settings.json`
- Organized configuration in `.vscode/extensions/coordinator.json`

## Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed: `npm install`
- Check that build outputs are not corrupted
- Verify configuration files are valid

**Compendium Issues**
- Validate YAML syntax in source files
- Check compendium compilation logs
- Ensure proper file permissions

**Development Server Issues**
- Verify Foundry is running on port 30000
- Check Vite development server logs
- Ensure proper data directory linking

### Getting Help
- Check existing documentation in `docs/`
- Review closed issues on GitHub
- Ask in Foundry VTT community channels

## Release Process

Releases are automated via Release Please:
1. Release PRs are automatically created on main branch
2. Merge release PR to create tagged release
3. CI/CD builds and publishes release artifacts
4. Download URLs are automatically injected into `system.json`

## Security Considerations

- Never commit copyrighted Shadowrun content to main branch
- Private content belongs only in ninjanarchy branch
- Validate all external dependencies regularly
- Keep Node.js and dependencies updated

---
*This guide is maintained in `docs/development/contributing.md`*
