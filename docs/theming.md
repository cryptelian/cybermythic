### Theming tokens and conventions

- Prefer CSS variables for tokens (colors, spacing, radii)
- Import theme CSS under `public/style/*.css` for Foundry compatibility; build outputs in `dist/style.css`
- Component class naming follows BEM-like patterns

### Debugging tips

- Use `.a11y-contrast` to validate readability
- Toggle `prefers-reduced-motion` in OS to test transitions
- Use the visual tests (`npm run test:visual`) and inspect snapshots for diffs
