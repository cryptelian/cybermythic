# Compendium Packaging Blueprint

This document maps the automation workflow we will follow to turn the private `ninjanarchy` compendium set into an installable bundle for the public/vanilla Anarchy system. The goals are:

- Consistent short file names and predictable subdirectories
- Duplicate detection with optional stat tweaks for variants
- Drop-in packaging that rewrites `systems/<id>` references and produces Foundry-ready `.db` packs

The process is divided into four phases that can run as discrete npm scripts.

## 1. Source Staging

- **Input:** `../cybermythic-ninjanarchy/src/packs/anarchy-*` YAML trees (or Foundry `.db` LevelDB folders).
- **Tasks:**
  - Mirror the source tree into a staging directory (`workspace/compendium-src`).
  - Ensure UTF-8, LF line endings, and `.yml` file extensions.
  - Inject a derived `slug` property if absent (used for deterministic naming).

> Optional future enhancement: emit a JSON manifest summarising document counts per archetype.

## 2. Normalisation & Naming

- **Output folders:**
  - `src/packs/act/player` – Player-facing archetypes & pregens (`PC_*.yml`).
  - `src/packs/act/npc` – Contacts, foes, ambient NPCs (`NPC_*.yml`).
  - `src/packs/itm/gear` – Gear & equipment (`GEAR_*.yml`).
  - `src/packs/itm/weap` – Weapons (`WPN_*.yml`).
  - `src/packs/wiki` – Journal/wiki content (`JRNL_*.yml`).

- **Filename recipe:**
  1. Determine the **type code** (`PC`, `NPC`, `GEAR`, `WPN`, `JRNL`).
  2. Generate a slug from `name`: lowercase, spaces → `-`, alphanumerics only, truncate to 18 chars.
  3. Append the last 6 characters of `_id` for uniqueness.
  4. Concatenate as `<type>_<slug>_<suffix>.yml` (e.g., `GEAR_trauma-pack_e0h2bp.yml`).

- **Metadata updates:** add `flags.cybermythic.origFile` pointing to the original path for traceability.

## 3. Duplicate Handling & Variant Injection

- **Exact duplicates:** hash the canonicalised YAML (sorted keys). Keep the first encounter, log the remainder to `reports/duplicates.json`.
- **Variant option:** if invoked with `--variants`, mutate duplicates before keeping them (e.g., bump heal values, add custom notes). Mutations are defined in a JSON recipe per item family.
- **Reporting:** produce `reports/normalisation-summary.json` with counts per archetype, dedup stats, and any skipped files.

## 4. Packaging & Manifest Updates

- **Script:** extend `tools/packCompendiumsWithRewrite.mjs` to accept `--srcDir` and `--outDir` so we can point at the reorganised tree.
- **Build command:**

  ```bash
  OUT_DIR=dist-compendiums \
  node tools/packCompendiumsWithRewrite.mjs --srcDir workspace/compendium-src-normalised
  ```

- **Outputs:** `dist-compendiums/packs/<pack-name>` leveldb folders plus a machine-readable manifest (`dist-compendiums/packs.manifest.json`).
- **Integration:** update `public/system.json` (or ship a module manifest) to register the new packs (`act.player`, `act.npc`, `itm.gear`, `itm.weap`, `wiki.hub`).

## CLI Skeleton

All tasks can be orchestrated via a single entry point (`node tools/compendium-normaliser.mjs`). High-level pseudocode:

```js
import { stageSources, normaliseTree, dedupeAndMutate, packagePacks } from './compendium-lib.js';

async function main() {
  const opts = parseArgs();
  const staged = await stageSources(opts);
  const normalised = await normaliseTree(staged, opts.naming);
  const deduped = await dedupeAndMutate(normalised, opts.variants);
  await packagePacks(deduped, opts.outDir);
}

main().catch((err) => {
  console.error('[compendium] failed', err);
  process.exit(1);
});
```

## Speed & Observability Notes

- Emit progress every 250 documents (counts + elapsed time). Warn when an operation exceeds 3s, suggesting `node --max-old-space-size` increases if needed.
- Keep intermediate directories so we can inspect YAML after each stage.
- Provide a `--dry-run` flag that creates reports without mutating/packaging.

---

**Next action:** implement the normalisation script against the staged `ninjanarchy` data, beginning with actors (largest volume) and extending to gear/weapons once the pipeline is proven.

## Deployment & Validation Checklist

1. **Package build**
   - Run the normaliser/packager with `OUT_DIR=dist-compendiums`.
   - Verify `dist-compendiums/packs` contains the expected LevelDB folders (`act-player`, `act-npc`, `itm-gear`, `itm-weap`, `wiki-hub`).
   - Confirm `packs.manifest.json` lists counts matching `reports/normalisation-summary.json`.

2. **Install into vanilla system**
   - Copy `dist-compendiums/packs` into `Data/systems/anarchy/packs` (or package as a module and install via Foundry).
   - Merge or append pack definitions into the vanilla `system.json`:
     - `act.player`, `act.npc`, `itm.gear`, `itm.weap`, `wiki.hub`.
   - Restart Foundry to pick up new packs.

3. **In-Foundry smoke tests**
   - Open each new compendium; ensure icons and ownership settings look correct.
   - Import one sample actor, gear item, and weapon; confirm custom sheets load and derived stats appear.
   - For wiki entries, open each hub journal and verify internal links resolve.

4. **CLI validation**
   - `npx @foundryvtt/foundryvtt-cli extract dist-compendiums/packs/act-player --yaml tmp/check-act-player`
   - Diff `tmp/check-act-player` against the normalised source tree to ensure stability.

5. **Regression guard (optional automation)**
   - Add a CI job that runs the normaliser in `--dry-run` mode and fails if duplicates or naming violations appear.
   - Include a smoke macro that iterates through 5 random actor IDs, calling `game.actors.fromCompendium(...)` to assert sheet class registration.

## CLI Reference: `tools/compendium-normalizer.mjs`

### Usage

```bash
# Actors (default)
node tools/compendium-normalizer.mjs

# Gear pack
CMP_PACK=gear node tools/compendium-normalizer.mjs

# Weapons pack with custom output dir
CMP_PACK=weapons CMP_OUT=workspace/custom/weapons node tools/compendium-normalizer.mjs
```

### Environment Variables

- `CMP_PACK` — one of `actors`, `gear`, `weapons`, `wiki`. Defaults to `actors`.
- `CMP_SRC` _(optional)_ — override source directory.
- `CMP_OUT` _(optional)_ — override output directory.

### Behaviour

- Reads YAML sources from the specified pack, classifies each document into a bucket/subfolder, and writes new files using the naming convention `<TYPE>_<slug>_<idSuffix>.yml`.
- Adds `flags.cybermythic` metadata (`origFile`, `bucket`, `variant`) for traceability.
- Drops exact duplicates after hashing canonicalised data; a report is written to `workspace/compendium/reports/<pack>.json` summarising processed counts and duplicates.
- Progress logs appear every 50 unique documents; duplicates emit warnings with the original reference.

### Validation Tips

- Inspect the output tree to ensure bucket/subdir assignments align with expectations (e.g., `workspace/compendium/itm/gear/gear/medical`).
- Review the duplicate report to confirm only true duplicates were dropped; tweak classification or variant recipes as needed.
- For regression safety, run the normaliser in CI with `CMP_OUT` pointing to a temporary directory and assert the report matches a stored snapshot.
