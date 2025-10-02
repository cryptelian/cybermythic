# Ninjanarchy workflow

This document explains how to build and maintain a private, integrated variant of the system called `ninjanarchy` while keeping `main` clean.

## Concepts
- `VITE_SYSTEM_ID`: Build/runtime id. Defaults to `anarchy`. Set to `ninjanarchy` for the private variant.
- `OUT_DIR`: Build output directory (e.g., `dist-ninja` or an absolute path to your side repo).
- Integrations: Optional extra mechanics loaded only when enabled via env.

## One-time setup
- Create and track a long-lived branch:
  ```bash
  git switch -c ninjanarchy
  ```
- Keep lockfile committed for reproducibility on this branch.

## Build commands
- Private build (outputs to `dist-ninja`):
  ```bash
  npm run build:ninja
  ```
  What it does:
  - Builds with base `/systems/ninjanarchy/` into `dist-ninja`
  - Rewrites `system.json` to id `ninjanarchy` and fixes media paths
  - Rewrites compendium pack sources and compiles to `dist-ninja/packs`
  - Enables integrations (`VITE_ENABLE_INTEGRATIONS=1`)

- Dev server (proxying Foundry):
  ```bash
  npm run dev:ninja
  ```

## Installing into Foundry
- Copy or symlink `dist-ninja` into Foundry’s `Data/systems/ninjanarchy`.
- Open a world and select the `ninjanarchy` system.

## Integrations
- Place integration code under `src/integrations/` and wire initialization in `src/integrations/index.js`.
- Loaded only when `VITE_ENABLE_INTEGRATIONS=1` or `VITE_SYSTEM_ID=ninjanarchy`.

## Branch sync strategy
- Keep `ninjanarchy` rebased or merged from `main` regularly.
  - Merge:
    ```bash
    git switch ninjanarchy
    git merge main
    ```
  - Rebase:
    ```bash
    git switch ninjanarchy
    git rebase main
    # resolve conflicts, then
    git push --force-with-lease
    ```
- Why conflicts are minimal:
  - System id changes are env-driven (no source duplication)
  - Manifest and compendium rewrites happen at build-time
  - Integrations are isolated under `src/integrations/`

## Security & reproducibility
- `package.json` uses `overrides` to mitigate known advisories.
- Commit `package-lock.json` on `ninjanarchy`.

## Troubleshooting
- Missing assets under `systems/ninjanarchy/...`:
  - Ensure you used `npm run build:ninja` and installed `dist-ninja`.
- Compendium references still show `systems/anarchy`:
  - Rebuild; the pack rewrite runs as part of the build.