# Foundry Vite Project

This README outlines the steps needed to set up and run the Foundry Vite project locally. Ensure you follow the installation instructions closely to get everything up and running without issues.

## Prerequisites

### Node.js

Target **Node.js 20 LTS**. A `.nvmrc` file is provided so `nvm use` (or `fnm use`) automatically selects the supported version.

To install NVM and Node.js:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# Restart your terminal and then:
nvm install 20
nvm use
```

## Installation

Once the prerequisites are met, you can install the project dependencies by running:

```bash
npm install
```

This command will fetch and install all necessary packages required for the project to run.

## Running the Project

### Development Mode

To start the project in development mode, run:

```bash
npx vite serve
```

This launches Vite on 30001 with a proxy to Foundry 30000. Open `http://localhost:30001` so `systems/<id>/*` are served by Vite and everything else proxies to Foundry.

### Troubleshooting dev (404 on ./src/start.js, base sheet shows)

If you see a console error like `GET /systems/<id>/src/start.js 404 (Not Found)` and actor sheets revert to the base/core sheet:

- Ensure you opened via Vite: `http://localhost:30001` (not `30000`).
- Ensure Vite is running: `npm run dev`.
- Verify your data directory link: `<foundrydata>/systems/<id>` points to `./public`.
- Our dev loader now attempts a fallback import from `http://localhost:30001`, but opening via 30001 is the most reliable flow.

## Building for Production

If you need to build the project for production, use:

```
npx vite build
```

This compiles to `./dist` and production loads only `dist/index.mjs` (plus static assets under `public/`).
Checklist:

- `public/system.json` esmodules → `dist/index.mjs`
- No `/src` paths in manifest
- Styles include `dist/style.css` if emitted
- `media/background` use `systems/<id>/*`

### Releases & changelog

Releases are automated via Release Please. Merge the release PR it opens on `main`/`master` to tag a release and publish artifacts. The `download` URL in `public/system.json` is injected during the release job.

## Foundry Configuration

Ensure Foundry is running locally on port 30000 to allow seamless interaction between the Vite server and Foundry.

```
# Start Foundry command (Example)
node resources/app/main.js --dataPath=<path_to_foundry_data>/foundrydata --port=30000
```

Link `<foundrydata>/systems/<id>` to this repo's `public` directory. The folder name must equal the `id` in `public/system.json`.

Production: Foundry loads `systems/<id>/dist/index.mjs` as defined in `public/system.json`.
Development: `public/index.mjs` detects Vite and imports `/src/start.js`; otherwise it shows a clear banner with remediation steps.

### Developer style guide

See `docs/style-guide.md` for tokens, naming, file layout, and lint/format rules.

### Accessibility

See `docs/a11y.md` for focus, contrast, and reduced motion guidance and tests.

### Theming & debugging

See `docs/theming.md` for token conventions and debugging tips. Visual tests capture screenshots for key themes.

## Note on Vite Server and Foundry Interaction

The Vite server serves `systems/<id>/*` and proxies all other requests to the local Foundry server for a same-origin experience.

## Compendiums management

Compendium sources are located in `src/packs`. Content are written in a yaml format.

Commands are available to manage them:

Compile compendiums to the dist folder:

```bash
node ./tools/packCompendiumsToDist.mjs
```

Extract compendiums from the dist folder (for example, after changing the content on the running server, to update the source files):

```bash
node ./tools/unpackCompendiumsFromDist.mjs
```
