# Foundry Vite Project

This README outlines the steps needed to set up and run the Foundry Vite project locally. Ensure you follow the installation instructions closely to get everything up and running without issues.

## Prerequisites

### Node.js

The project requires **Node.js v18** or higher. It is recommended to manage your Node.js versions using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm). This allows you to switch between Node versions without affecting other projects.

To install NVM and Node.js, follow these steps:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# Restart your terminal and then:
nvm install 18
nvm use 18
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

This will launch a Vite development server that is configured to intercept calls made to **systems/anarchy** and proxy them appropriately, while serving all other files directly from Foundry.

## Building for Production

If you need to build the project for production, use:

```
npx vite build
```

This command compiles your JavaScript and assets into static files ready for production deployment. These files are in `./dist` directory.

## Foundry Configuration

Ensure Foundry is running locally on port 30000 to allow seamless interaction between the Vite server and Foundry.

```
# Start Foundry command (Example)
node resources/app/main.js --dataPath=<path_to_foundry_data>/foundrydata --port=30000
```

You need to link `<foundrydata>/systems/anarchy` to the `public` directory of your repository.

When Foundry starts in the backend (Node.js), it will detect the necessary files in the public directory of the repository (these files are `systems/anarchy/index.mjs` and `systems/anarchy/style.css`).

When you connect to Foundry from a browser (frontend), Vite will intercept all requests and redirect them to Foundry, except for requests to `systems/anarchy`. These files will be served by the Vite project.

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

## Development

### Scripts

- `npm run` — start dev server on 30001 and proxy Foundry on 30000
- `npm run build` — build library into `dist/` (copied to `public/` via postbuild)
- `npm run import:anarchy-md` — import Anarchy Markdown content
- `npm run packCompendiumsToPublic` — compile `src/packs` into LevelDB packs under `public/packs`
- `npm run unpackCompendiumsFromPublic` — extract `public/packs` back into readable YAML under `src/packs`
- `npm run validate` — validate `public/system.json` and translation keys
- `npm run clean` — remove `dist` and `public/packs`

### Workflow

1. Edit source under `src/` and SCSS under `src/styles/`.
2. Author compendium content in `src/packs` (YAML). When ready, run `npm run packCompendiumsToPublic` to produce `public/packs`.
3. Build with `npm run build` (artifacts are copied into `public/`).
4. In Foundry, install the system from the local repo folder; Foundry will read from `public/`.

Compendiums loaded by Foundry are those present in `public/packs`. Only packs listed in `public/system.json` with a valid `path` will appear.

### Notes on structure (parity with SR5/SR6 systems)

- `public/system.json` contains explicit `packs[].path` entries.
- The authoritative shipped tree is `public/`.
- Source compendium YAMLs live in `src/packs`; LevelDB packs are generated to `public/packs` for runtime.


