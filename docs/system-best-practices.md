# Foundry VTT System Best Practices (from DnD5e, PF2e, SWADE)

## Manifest and IDs

- system.json id must match folder name exactly.
- esmodules: only built dist entry (e.g., `dist/index.mjs`). No `/src` in prod.
- styles: list theme CSS plus built bundle (e.g., `dist/style.css`).
- media/background: reference under `systems/<id>/...`.
- keep dev-only metadata out of prod manifest; release process injects `download`/tagged `manifest`.

## Structure

- Source in `src/`; static in `public/` (icons, img, lang, templates, CSS themes).
- Build to `dist/` with a single ES module entry and optional CSS bundle.
- `system.json` lives in `public/`; release packaging copies `public/` + `dist/`.

## Dev vs Prod

- Dev: optional Vite server. A dev loader in `public/index.mjs` conditionally imports `/src/start.js` when Vite is present.
- Prod: Foundry loads only `dist/index.mjs` from `system.json`.
- Avoid cross-origin imports; prefer same-origin proxy to expose `/@vite/*` via Foundry origin.

## Paths

- Compute `SYSTEM_NAME` at build/runtime; form `SYSTEM_PATH = systems/${SYSTEM_NAME}`.
- Never hardcode `systems/anarchy/...`.
- All template and asset refs should use `SYSTEM_PATH`, `TEMPLATES_PATH`, and icon helpers.

## Hooks and Registration

- Register sheets/items in `init`; avoid timing races by retrying on `setup/ready`.
- Never crash if integrations or dev server missing; catch and continue.
- Provide a console API to repair defaults and debug sheet registration.

## Build

- Single-file ES module output via Vite/Rollup library mode.
- Expose `__SYSTEM_ID__` define from Vite; default to `anarchy`.
- CSS built separately (Sass) into `public/style/compiled.css`; optionally emit `dist/style.css`.

## Packaging/Release

- Package: `public/` + `dist/` into zip. Ensure `system.json` points to `dist/*` and `systems/<id>/*`.
- CI injects versioned `manifest` and `download` URLs.
- Validate manifest schema and i18n before releasing.

## Testing

- Smoke test opens a character; asserts custom sheet root present.
- In dev, assert `game.system.<id>.proxyDetected === true` when using same-origin proxy.
