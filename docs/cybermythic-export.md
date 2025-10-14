# CyberMythic Personal Export Guide

## Purpose

Capture a human-readable notebook of the Anarchy compendium content for private Obsidian use. The generated files live under `CyberMythic/`, which is git-ignored so nothing leaks into releases.

## Prerequisites

- Node.js installed (same toolchain used for the system).
- Working tree rooted at `C:\Users\thewa\OneDrive\Documents\GitHub\cybermythic`.

## Run the exporter

```powershell
npm install        # first run, or when dependencies change
node tools/exportCyberMythicHuman.mjs
```

What happens:

- The script removes any existing `CyberMythic/` tree.
- Every YAML asset under `workspace/compendium/` (except packed copies) is parsed.
- Files are grouped by type (`Characters/`, `Weapons/`, `Gear/`, `Collections/…`).
- Names are converted to plain language; duplicate names get `(2)`, `(3)`, etc.
- Each Markdown file contains natural-language summaries only—no tables, no IDs.

## Consume in Obsidian

1. Point Obsidian at the repository root (or add `CyberMythic/` as a vault folder).
2. Optional: create a vault filter for `Characters`, `Weapons`, `Gear`, and `Collections`.
3. Use Obsidian’s graph/metadata features for tagging; the exporter intentionally leaves the Markdown free of YAML front-matter.

## Updating content

- Whenever compendium YAML changes, rerun the exporter.
- The script is idempotent; it always rewrites the entire `CyberMythic/` tree.
- If you need bespoke edits, copy the file elsewhere before regenerating.

## Troubleshooting

- **Script fails to parse**: check the console log for the YAML path; fix the source file and rerun.
- **Unexpected duplicates**: rename the `name` field in the source YAML or move the Markdown out of `CyberMythic/` before regenerating.
- **Obsidian can’t resolve art paths**: the Markdown uses Foundry system paths (e.g., `/systems/anarchy/...`). Mirror the assets locally or remove the lines manually.

## Future enhancements (optional)

- Add an npm script alias (`npm run export:cybermythic`) for convenience.
- Generate tag suggestions or cross-links once Obsidian taxonomy stabilises.

