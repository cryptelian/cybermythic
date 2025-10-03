# Shadowrun: Anarchy for Foundry VTT

A comprehensive implementation of the Shadowrun: Anarchy RPG system for Foundry Virtual Tabletop, featuring modern development practices and a robust build pipeline.

## 📚 Documentation

- [Build & Development Guide](docs/BUILD-INSTRUCTIONS.md) - Complete setup and build instructions
- [Foundry Best Practices](docs/FOUNDRY-BEST-PRACTICES.md) - System development best practices
- [Repository Structure](docs/REPOSITORY-STRUCTURE.md) - Project organization
- [Theming Guide](docs/theming.md) - UI customization options

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

## 🚀 Quick Start

### Installation

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

4. Link to Foundry:

```bash
ln -s $(pwd)/dist /path/to/foundry/Data/systems/anarchy
```

## 🔧 Development

### Development Server

Start the development environment with hot module replacement:

```bash
npm run dev
```

This starts:

- Vite dev server on port 30001
- SCSS watch compilation
- Hot Module Replacement (HMR)

Access Foundry at: http://localhost:30001

### Production Build

Build for deployment:

```bash
npm run build
```

Creates optimized production build in `/dist` directory.

### Troubleshooting dev (404 on ./src/start.js, base sheet shows)

If you see a console error like `GET /systems/anarchy/src/start.js 404 (Not Found)` and actor sheets revert to the base/core sheet:

- Ensure you opened Foundry via Vite: `http://localhost:30001` (not `30000`).
- Ensure Vite is running: `npm run dev`.
- Verify your data directory link: `<foundrydata>/systems/anarchy` should point to this repo's `public` directory.
- Our dev loader now attempts a fallback import from `http://localhost:30001`, but opening via 30001 is the most reliable flow.

## Building for Production

If you need to build the project for production, use:

```
npx vite build
```

This command compiles your JavaScript and assets into static files ready for production deployment. These files are in `./dist` directory.

### Releases & changelog

Releases are automated via Release Please. Merge the release PR it opens on `main`/`master` to tag a release and publish artifacts. The `download` URL in `public/system.json` is injected during the release job.

## Foundry Configuration

Ensure Foundry is running locally on port 30000 to allow seamless interaction between the Vite server and Foundry.

```
# Start Foundry command (Example)
node resources/app/main.js --dataPath=<path_to_foundry_data>/foundrydata --port=30000
```

You need to link `<foundrydata>/systems/anarchy` to the `public` directory of your repository.

When Foundry starts in the backend (Node.js), it will detect the necessary files in the public directory of the repository (these files are `systems/anarchy/index.mjs` and `systems/anarchy/style.css`).

When you connect to Foundry from a browser (frontend), Vite will intercept all requests and redirect them to Foundry, except for requests to `systems/anarchy`. These files will be served by the Vite project.

### Developer style guide

See `docs/style-guide.md` for tokens, naming, file layout, and lint/format rules.

### Accessibility

See `docs/a11y.md` for focus, contrast, and reduced motion guidance and tests.

### Theming & debugging

See `docs/theming.md` for token conventions and debugging tips. Visual tests capture screenshots for key themes.

## Note on Vite Server and Foundry Interaction

The Vite server is configured to handle specific API calls (e.g., to **systems/anarchy**) directly, enhancing development efficiency. All other requests are forwarded to the local Foundry server, ensuring that the environment replicates the production setup as closely as possible.

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
