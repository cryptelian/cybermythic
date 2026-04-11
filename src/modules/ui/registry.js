import { SYSTEM_NAME } from "../core/constants.js";
import { CharacterActorSheet } from "../actor/character-sheet.js";
import { CharacterSheetV2 } from "../actor/character-sheet-v2.js";
import { CharacterNPCSheet } from "../actor/character-npc-sheet.js";
import { CharacterTabbedSheet } from "../actor/character-tabbed-sheet.js";
import { CharacterEnhancedSheet } from "../actor/character-enhanced-sheet.js";
import { VehicleSheet } from "../actor/vehicle-sheet.js";
import { DeviceSheet } from "../actor/device-sheet.js";
import { SpriteActorSheet } from "../actor/sprite-sheet.js";
import { ICSheet } from "../actor/ic-sheet.js";
import { ContactItemSheet } from "../item/contact-item-sheet.js";
import { CyberdeckItemSheet } from "../item/cyberdeck-item-sheet.js";
import { GearItemSheet } from "../item/gear-item-sheet.js";
import { MetatypeItemSheet } from "../item/metatype-item-sheet.js";
import { QualityItemSheet } from "../item/quality-item-sheet.js";
import { ShadowampItemSheet } from "../item/shadowamp-item-sheet.js";
import { SkillItemSheet } from "../item/skill-item-sheet.js";
import { WeaponItemSheet } from "../item/weapon-item-sheet.js";

export const LEGACY_UI_SETTING = "enable-legacy-ui";

export const ACTIVE_ACTOR_SHEETS = [
  {
    class: CharacterSheetV2,
    types: ["character"],
    makeDefault: true,
    label: "ANARCHY.actor.characterSheetV2",
  },
  {
    class: VehicleSheet,
    types: ["vehicle"],
    makeDefault: true,
    label: "ANARCHY.actor.vehicleSheet",
  },
  {
    class: DeviceSheet,
    types: ["device"],
    makeDefault: true,
    label: "ANARCHY.actor.deviceSheet",
  },
  {
    class: SpriteActorSheet,
    types: ["sprite"],
    makeDefault: true,
    label: "ANARCHY.actor.spriteSheet",
  },
  {
    class: ICSheet,
    types: ["ic"],
    makeDefault: true,
    label: "ANARCHY.actor.icSheet",
  },
];

export const LEGACY_ACTOR_SHEETS = [
  {
    class: CharacterActorSheet,
    types: ["character"],
    makeDefault: false,
    label: "ANARCHY.actor.characterSheet",
  },
  {
    class: CharacterNPCSheet,
    types: ["character"],
    makeDefault: false,
    label: "ANARCHY.actor.characterNPCSheet",
  },
  {
    class: CharacterTabbedSheet,
    types: ["character"],
    makeDefault: false,
    label: "ANARCHY.actor.characterTabbedSheet",
  },
  {
    class: CharacterEnhancedSheet,
    types: ["character"],
    makeDefault: false,
    label: "ANARCHY.actor.characterEnhancedSheet",
  },
];

export const ACTIVE_ITEM_SHEETS = [
  { class: ContactItemSheet, types: ["contact"], makeDefault: true },
  { class: CyberdeckItemSheet, types: ["cyberdeck"], makeDefault: true },
  { class: GearItemSheet, types: ["gear"], makeDefault: true },
  { class: MetatypeItemSheet, types: ["metatype"], makeDefault: true },
  { class: QualityItemSheet, types: ["quality"], makeDefault: true },
  { class: ShadowampItemSheet, types: ["shadowamp"], makeDefault: true },
  { class: SkillItemSheet, types: ["skill"], makeDefault: true },
  { class: WeaponItemSheet, types: ["weapon"], makeDefault: true },
];

const actorSheetMap = new Map();
const itemSheetMap = new Map();

ACTIVE_ACTOR_SHEETS.forEach((sheetConfig) => {
  sheetConfig.types.forEach((type) =>
    actorSheetMap.set(type, sheetConfig.class),
  );
});

ACTIVE_ITEM_SHEETS.forEach((sheetConfig) => {
  sheetConfig.types.forEach((type) =>
    itemSheetMap.set(type, sheetConfig.class),
  );
});

export function getSheetId(sheetClass) {
  return `${SYSTEM_NAME}.${sheetClass.name}`;
}

export function getActiveActorSheetClass(type) {
  return actorSheetMap.get(type);
}

export function getActiveItemSheetClass(type) {
  return itemSheetMap.get(type);
}

export function getActiveActorSheetId(type) {
  const sheetClass = getActiveActorSheetClass(type);
  return sheetClass ? getSheetId(sheetClass) : undefined;
}

export function getActiveItemSheetId(type) {
  const sheetClass = getActiveItemSheetClass(type);
  return sheetClass ? getSheetId(sheetClass) : undefined;
}

export function getLegacyActorSheetsEnabled() {
  try {
    return !!game.settings.get(SYSTEM_NAME, LEGACY_UI_SETTING);
  } catch (_) {
    return false;
  }
}
