# Configuration Directory

This directory contains all configuration files for the CyberMythic project, organized by function and scope.

## Structure

- nvironments/ - Environment-specific configurations (.env files, .nvmrc, etc.)
- uild/ - Build tool configurations (vite.config.ts, postcss.config.cjs, etc.)
- code/ - Code quality and formatting configs (.editorconfig, .prettier*, .stylelint*)
- ci/ - CI/CD configurations (release-please-*, .lintstagedrc.json)
- oundry/ - Foundry VTT specific configurations

## Migration Plan

1. Move .env.ninja → nvironments/
2. Move .nvmrc → nvironments/
3. Move ite.config.ts, postcss.config.cjs, playwright.config.ts → uild/
4. Move .editorconfig, .prettier*, .stylelint* → code/
5. Move elease-please-*, .lintstagedrc.json → ci/

## Essential Root Configs

These files remain at root for tool compatibility:
- .vscode/ - IDE configuration
- .github/ - GitHub workflows
- .gitignore - Git ignore patterns
- package.json - NPM package configuration
