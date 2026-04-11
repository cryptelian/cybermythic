# UI Runtime Authority

This document describes the active runtime authority for the Foundry 13 UI replatform.

## Single Sources Of Truth

- Active sheet registration lives in `src/modules/ui/registry.js`.
- Runtime sheet registration and default persistence live in `src/modules/system/anarchy.js`.
- Shared V13 application behavior lives in `src/modules/app/application-v2.js`.
- Shared V13 document-sheet behavior lives in `src/modules/ui/document-sheet-v2.js`.
- Shared actor/item/app context shaping lives in `src/modules/ui/context.js`.
- Legacy character section-collapse helpers live independently in `src/modules/ui/section-state.js`.

## Active Runtime UI

### Actor Sheets

- `character` -> `CharacterSheetV2`
- `vehicle` -> `VehicleSheet`
- `device` -> `DeviceSheet`
- `sprite` -> `SpriteActorSheet`
- `ic` -> `ICSheet`

### Item Sheets

- `contact` -> `ContactItemSheet`
- `cyberdeck` -> `CyberdeckItemSheet`
- `gear` -> `GearItemSheet`
- `metatype` -> `MetatypeItemSheet`
- `quality` -> `QualityItemSheet`
- `shadowamp` -> `ShadowampItemSheet`
- `skill` -> `SkillItemSheet`
- `weapon` -> `WeaponItemSheet`

### Applications And Dialogs

- Shared non-document base: `AnarchyApplicationV2`
- Roll dialog: `RollDialog`
- Confirmation dialog: `SimpleConfirmDialog`
- Actor picker: `SelectActor`
- Celebrity dialog: `RollCelebrity`
- GM manager: `GMManager`
- GM dice dialog: `GMRollDiceDialog`

## Legacy Access

- Retired legacy character sheets remain defined in `src/modules/actor/`.
- They are only registered when the world setting `enable-legacy-ui` is enabled.
- They are never registered as defaults.
- Runtime sheet swapping is retired; the registry-driven default is authoritative.

## Operational Rules

- New actors/items receive their active sheet assignment during creation bias in `AnarchySystem._registerCreationBias()`.
- Existing world documents are normalized by `AnarchySystem.fixSheets()` and `_fixDatabaseCorruption()`.
- The old render-time sheet swapping hook is intentionally retired to avoid hidden authority conflicts.

## Packaging Contract

- Source validation runs through `npm run validate`.
- Dist/package validation runs through `npm run build` followed by `npm run validate:dist`.
- CI and release workflows are aligned to the assembled `dist/` package, not the retired `build/output/` path.
