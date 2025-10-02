# Developer Style Guide

## CSS/SCSS tokens

- Prefer CSS custom properties for theme tokens at component or :root scope
- Example token names: --color-accent, --border-radius-sm, --space-md
- Use postcss/autoprefixer; avoid vendor prefixes in source
- Keep dynamic Foundry/Handlebars classes in a safelist file (to be used in Phase 4 purge)

## Naming conventions

- BEM-inspired: .component, .component\_\_element, .component--modifier
- JS: variables and functions use descriptive full-word names
- Files: kebab-case for assets; camelCase for JS modules already present

## File layout

- App code: `src/modules/**`
- Styles: `src/styles/**` imported by `src/start.js`
- Public system assets: `public/**` with `system.json`, `style/*.css`, `lang/*.json`
- Tests: `tests/**`

## Linting & formatting

- Run `npm run format:check` and `npm run lint:css` locally or via CI
- Fix with `npm run format` and `npm run lint:css:fix`

## Internationalization

- Add English keys first in `public/lang/en.json`
- Mirror keys in `public/lang/fr.json`; CI fails if fr is missing keys

## Commit hygiene

- Prefer conventional-style messages; CI runs on PRs and pushes
