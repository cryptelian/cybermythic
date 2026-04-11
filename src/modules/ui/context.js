import { ANARCHY } from "../core/config.js";
import { Enums } from "../core/enums.js";
import { Misc } from "../core/utils.js";

function mergeContext(base, extra = {}) {
  return foundry.utils.mergeObject(base, extra, { inplace: false });
}

function getThemeClass() {
  return (
    game.system.anarchy?.styles?.selectCssClass?.() ?? "style-anarchy-shadowrun"
  );
}

function getCustomizationClasses(scope) {
  return (
    game.system.anarchy?.uiCustomization?.getCustomizationClasses?.(scope) ?? []
  );
}

function getThemeContext() {
  if (!game.system.anarchy?.themeUtilities) {
    return {};
  }

  return {
    currentTheme: game.system.anarchy.styles?.currentTheme,
    availableThemes: game.system.anarchy.styles?.availableThemes,
    themeMetadata: game.system.anarchy.themeUtilities.getCurrentThemeMetadata(),
  };
}

function getUiCustomizationContext(scope) {
  if (!game.system.anarchy?.uiCustomization) {
    return {};
  }

  return {
    uiCustomizations:
      game.system.anarchy.uiCustomization.getActiveCustomizations(),
    customizationClasses: getCustomizationClasses(scope),
  };
}

export function createUiOptions(
  application,
  contextOptions = {},
  extraClasses = [],
) {
  const baseClasses = Array.isArray(contextOptions.classes)
    ? contextOptions.classes
    : [];
  const classes = Misc.distinct([
    getThemeClass(),
    ...baseClasses,
    ...extraClasses,
  ]);

  return {
    owner: application.document?.isOwner ?? false,
    editable: application.isEditable ?? false,
    limited: application.document?.limited ?? false,
    cssClass: application.isEditable ? "editable" : "locked",
    classes,
    ...contextOptions,
  };
}

export function createApplicationContext(
  application,
  context = {},
  scope = "application",
) {
  const uiCustomization = getUiCustomizationContext(scope);
  return mergeContext(
    {
      title: application.title,
      document: application.document,
      options: createUiOptions(
        application,
        context.options,
        uiCustomization.customizationClasses,
      ),
      ANARCHY,
      ...getThemeContext(),
    },
    {
      ...context,
      uiCustomizations: uiCustomization.uiCustomizations,
    },
  );
}

export function createActorSheetContext(sheet, context = {}) {
  const actor = sheet.actor;
  const uiCustomization = getUiCustomizationContext("actor");
  const options = createUiOptions(sheet, context.options, [
    `actor-${actor.type}`,
    ...uiCustomization.customizationClasses,
  ]);
  const enums = Enums.getEnums();

  const merged = mergeContext(
    {
      actor,
      document: sheet.document,
      data: sheet.document,
      system: actor.system,
      items: {},
      anarchy: actor.getAnarchy?.() ?? { value: 0, max: 0, scene: 0 },
      ownerActor: actor.getOwnerActor?.() ?? null,
      ownedActors: actor.getOwnedActors?.() ?? [],
      options,
      ENUMS: foundry.utils.mergeObject(
        {
          attributeAction: actor.getAttributeActions?.() ?? [],
          capacity: enums.capacities,
          shadowampCapacity: enums.capacities,
          defenses: Enums.mapObjetToKeyValue(ANARCHY.defense),
        },
        enums,
      ),
      ANARCHY,
      ...getThemeContext(),
    },
    {
      ...context,
      uiCustomizations: uiCustomization.uiCustomizations,
    },
  );

  Misc.classifyInto(merged.items, actor.items);
  return merged;
}

export function createItemSheetContext(sheet, context = {}, options = {}) {
  const item = sheet.item;
  const actorAttributes = item.actor?.getAttributes?.(item) ?? [];
  const usableAttribute =
    item.actor != null
      ? (attribute) => actorAttributes.includes(attribute)
      : () => true;
  const withKnowledge = options.withKnowledge ?? item.type === "skill";
  const uiCustomization = getUiCustomizationContext("item");
  const itemOptions = createUiOptions(
    sheet,
    context.options,
    uiCustomization.customizationClasses,
  );
  itemOptions.isGM = game.user.isGM;
  itemOptions.isOwned = item.actor != null;

  return mergeContext(
    {
      item,
      document: sheet.document,
      system: item.system,
      options: itemOptions,
      ENUMS: foundry.utils.mergeObject(
        Enums.getEnums(usableAttribute, withKnowledge),
        game.system.anarchy?.modifiers?.getEnums?.() ?? {},
      ),
      ANARCHY,
      ...getThemeContext(),
    },
    {
      ...context,
      uiCustomizations: uiCustomization.uiCustomizations,
    },
  );
}

export function applyThemeClass(element) {
  if (!element) {
    return;
  }

  const themeClass = getThemeClass();
  if (themeClass) {
    element.classList.add(themeClass);
  }
}

export function applyUiCustomization(element, scope) {
  const customizer = game.system.anarchy?.uiCustomization;
  if (!element || !customizer) {
    return;
  }

  try {
    customizer.applyCustomizationsToElement(element, scope);
  } catch (error) {
    console.warn("Anarchy | Failed to apply UI customizations", error);
  }
}
