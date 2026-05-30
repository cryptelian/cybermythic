import { ANARCHY } from "../core/config.js";
import { Enums } from "../core/enums.js";
import { LOG_HEAD, SYSTEM_NAME } from "../core/constants.js";
import { ChatManager } from "../chat/chat-manager.js";
import { GMAnarchy } from "../app/gm-anarchy.js";
import { GMManager } from "../app/gm-manager.js";
import { ChatControls } from "../app/chat-controls.js";
import { HandlebarsManager } from "../handlebars-manager.js";
import { RemoteCall } from "../remotecall.js";
import { Styles } from "../core/styles.js";
import { ThemeUtilities } from "../core/theme.js";
import { UICustomization } from "../ui-customization.js";
import { UICustomizationDialog } from "../ui-customization-dialog.js";
import { UICustomizationCommands } from "../ui-customization-commands.js";
import { AnarchyUsers } from "../users.js";
import { HooksManager } from "../hooks-manager.js";
import { AnarchyDice } from "../roll/dice.js";
import { AnarchyRoll } from "../roll/roll.js";
import { Migrations } from "../migrations.js";
import { Skills } from "../skills.js";
import { AnarchyBaseItem } from "../item/document.js";
import { AnarchyBaseActor } from "../actor/document.js";
import { CharacterActor } from "../actor/character-actor.js";
import { DeviceActor } from "../actor/device-actor.js";
import { VehicleActor } from "../actor/vehicle-actor.js";
import { SkillItem } from "../item/skill-item.js";
import { MetatypeItem } from "../item/metatype-item.js";
import { CyberdeckItem } from "../item/cyberdeck-item.js";
import { WeaponItem } from "../item/weapon-item.js";
import { ContactItem } from "../item/contact-item.js";
import { GearItem } from "../item/gear-item.js";
import { QualityItem } from "../item/quality-item.js";
import { ShadowampItem } from "../item/shadowamp-item.js";
import { Checkbars } from "../common/checkbars.js";
import { RollParameters } from "../roll/roll-parameters.js";
import { RollDialog } from "../roll/roll-dialog.js";
import { GMConvergence } from "../app/gm-convergence.js";
import { AnarchyCombat } from "../combat/document.js";
import { SpriteActor } from "../actor/sprite-actor.js";
import { ICActor } from "../actor/ic-actor.js";
import { HUDShortcuts } from "../token/hud-shortcuts.js";
import { CombatManager } from "../combat/combat-manager.js";
import { RollManager } from "../roll/roll-manager.js";
import { Modifiers } from "../modifiers/modifiers.js";
import { ActorDamageManager } from "../actor/actor-damage.js";
import { AttributeActions } from "../attribute-actions.js";
import { DiceCursor } from "../roll/dice-cursor.js";
import { loadIntegrationsIfEnabled } from "../../integrations/index.js";
import { getDocumentSheetConfig } from "../document-sheet-config.js";
import { DeveloperMode } from "../developer-mode.js";
import { toElement } from "../ui/dom.js";
import {
  ACTIVE_ACTOR_SHEETS,
  ACTIVE_ITEM_SHEETS,
  LEGACY_ACTOR_SHEETS,
  LEGACY_UI_SETTING,
  getActiveActorSheetClass,
  getActiveActorSheetId,
  getActiveItemSheetClass,
  getActiveItemSheetId,
  getLegacyActorSheetsEnabled,
  getSheetId,
} from "../ui/registry.js";

/* -------------------------------------------- */
/*  Foundry VTT AnarchySystem Initialization    */
/* -------------------------------------------- */

export class AnarchySystem {
  static start() {
    const anarchySystem = new AnarchySystem();
    Hooks.once("init", async () => await anarchySystem.onInit());
  }

  async onInit() {
    console.log(
      `${LOG_HEAD} Initializing ${game.system.title} | Version: ${game.system.version} | Foundry: ${game.version}`,
    );
    game.system.anarchy = this;
    this.remoteCall = new RemoteCall(); // initialize remote calls registry first: used by other singleton managers

    this.actorClasses = {
      character: CharacterActor,
      vehicle: VehicleActor,
      device: DeviceActor,
      sprite: SpriteActor,
      ic: ICActor,
    };
    this.itemClasses = {
      contact: ContactItem,
      cyberdeck: CyberdeckItem,
      gear: GearItem,
      metatype: MetatypeItem,
      quality: QualityItem,
      shadowamp: ShadowampItem,
      skill: SkillItem,
      weapon: WeaponItem,
    };

    this.hooks = new HooksManager();
    DeveloperMode.init();
    this.styles = new Styles();
    this.themeUtilities = new ThemeUtilities(this.styles);
    this.uiCustomization = new UICustomization(this.styles);
    this.uiCustomizationCommands = new UICustomizationCommands(
      this.uiCustomization,
    );
    this.handlebarsManager = new HandlebarsManager();
    this.gmAnarchy = new GMAnarchy();
    this.gmConvergence = new GMConvergence();
    Enums.init();

    this.skills = new Skills();
    this.modifiers = new Modifiers();
    this.rollParameters = new RollParameters();
    this.rollManager = new RollManager();
    this.AnarchyRoll = AnarchyRoll;
    this.hudShortcuts = new HUDShortcuts();
    this.combatManager = new CombatManager();

    CONFIG.ANARCHY = ANARCHY;
    CONFIG.Combat.documentClass = AnarchyCombat;
    CONFIG.Combat.initiative = { formula: "2d6" };
    CONFIG.Actor.documentClass = AnarchyBaseActor;
    CONFIG.Item.documentClass = AnarchyBaseItem;

    // Detect same-origin proxy: public/index.mjs sets __ANARCHY_PROXY__ when /@vite/client resolves on 30000
    try {
      this.proxyDetected = !!window.__ANARCHY_PROXY__;
    } catch (_) {
      this.proxyDetected = false;
    }
    game.system.anarchy.proxyDetected = this.proxyDetected;

    // Register Anarchy-first settings
    try {
      game.settings.register(SYSTEM_NAME, "anarchy-first-mode", {
        scope: "world",
        config: true,
        name: game.i18n.localize(ANARCHY.settings.anarchyFirstMode.name),
        hint: game.i18n.localize(ANARCHY.settings.anarchyFirstMode.hint),
        default: true,
        type: Boolean,
      });
      game.settings.register(SYSTEM_NAME, "allow-core-fallback", {
        scope: "world",
        config: true,
        name: game.i18n.localize(ANARCHY.settings.allowCoreFallback.name),
        hint: game.i18n.localize(ANARCHY.settings.allowCoreFallback.hint),
        default: false,
        type: Boolean,
      });
      game.settings.register(SYSTEM_NAME, "prefer-core-sheets", {
        scope: "client",
        config: true,
        name: game.i18n.localize(ANARCHY.settings.preferCoreSheets.name),
        hint: game.i18n.localize(ANARCHY.settings.preferCoreSheets.hint),
        default: false,
        type: Boolean,
      });
    } catch (e) {
      console.warn(LOG_HEAD + "Settings registration failed", e);
    }

    // Register Developer Mode separately with hardcoded fallbacks
    // i18n may not be ready during init, so use fallback pattern
    try {
      const devName =
        game.i18n?.localize?.(ANARCHY.settings.developerMode.name) ||
        "Developer Mode";
      const devHint =
        game.i18n?.localize?.(ANARCHY.settings.developerMode.hint) ||
        "Enable developer options and the Anarchy Shell in the sidebar.";
      game.settings.register(SYSTEM_NAME, "developer-mode", {
        scope: "world",
        config: true,
        name: devName,
        hint: devHint,
        default: false,
        type: Boolean,
        onChange: () => window.location.reload(),
      });
      game.settings.register(SYSTEM_NAME, LEGACY_UI_SETTING, {
        scope: "world",
        config: true,
        name: "Enable legacy UI",
        hint: "Expose retired legacy character sheets for manual opt-in during the V13 UI transition.",
        default: false,
        type: Boolean,
        onChange: () => window.location.reload(),
      });
    } catch (e) {
      console.warn(LOG_HEAD + "Developer settings registration failed", e);
    }

    // Register sheets as early and as safely as possible so we never fall back to core sheets
    this.sheetsRegistered = false;
    Hooks.once("setup", () => {
      void this._ensureSheetsWhenAvailable();
    });

    // Remaining feature initialization should not gate sheet availability
    Checkbars.init();

    WeaponItem.init();
    DiceCursor.init();
    RollDialog.init();
    AttributeActions.init();
    AnarchyCombat.init();
    AnarchyUsers.init();
    AnarchyDice.init();
    AnarchyRoll.init();
    AnarchyBaseItem.init();
    AnarchyBaseActor.init();
    ActorDamageManager.init();
    ChatManager.init();
    this.gmManager = new GMManager(this.gmAnarchy, this.gmConvergence);
    this.chatControls = new ChatControls();
    try {
      await loadIntegrationsIfEnabled();
    } catch (e) {
      console.warn(
        LOG_HEAD +
          "Optional integrations failed to load. Continuing without them.",
        e,
      );
    }
    Hooks.once("ready", () => this.onReady());

    // Ensure newly created docs default to Anarchy sheets
    this._registerCreationBias();

    // Expose console commands for maintenance and diagnostics
    this._registerConsoleCommands();
  }

  async onReady() {
    // As a backstop, ensure sheets are registered if init-time registration raced core
    if (!this.sheetsRegistered) {
      await this._ensureSheetsWhenAvailable();
    }

    // Fix truncated sheet names and other database issues
    await this._fixDatabaseCorruption();

    if (game.user.isGM) {
      await new Migrations().migrate();

      // Optional safety migration: sweep world overrides pointing to core sheets
      const DSC = getDocumentSheetConfig();
      const ActorDoc = CONFIG.Actor.documentClass || Actor;
      try {
        const ActiveCharacterSheet = getActiveActorSheetClass("character");
        if (ActiveCharacterSheet) {
          DSC?.setDefaultSheet?.(ActorDoc, SYSTEM_NAME, ActiveCharacterSheet);
        }
      } catch (_) {}

      // Clear per-document overrides that point away from the active runtime sheets.
      try {
        const actorUpdates = [];
        for (const a of game.actors.contents) {
          const should = getActiveActorSheetId(a.type);
          const current = a.getFlag("core", "sheetClass");
          if (should && current !== should) {
            actorUpdates.push(a.update({ "flags.core.sheetClass": should }));
          }
        }
        const itemUpdates = [];
        for (const it of game.items.contents) {
          const current = it.getFlag("core", "sheetClass");
          const desired = getActiveItemSheetId(it.type);
          if (desired && current !== desired) {
            itemUpdates.push(it.update({ "flags.core.sheetClass": desired }));
          }
        }
        await Promise.allSettled([...actorUpdates, ...itemUpdates]);
      } catch (e) {
        console.warn(LOG_HEAD + "Sheet override cleanup skipped", e);
      }
    }
  }

  _registerRenderSafety() {
    console.info(
      LOG_HEAD +
        "Render safety hook retired; registry-driven defaults are authoritative.",
    );
  }

  async _ensureSheetsWhenAvailable() {
    try {
      if (this.sheetsRegistered) return true;
      this.loadActorSheets();
      this.loadItemSheets();
      const DSC = getDocumentSheetConfig();
      if (typeof DSC?.initializeSheets === "function") {
        await DSC.initializeSheets();
      }
      this.sheetsRegistered = true;
      return true;
    } catch (e) {
      console.error(LOG_HEAD + "Failed to register sheets", e);
      return false;
    }
  }

  _registerCreationBias() {
    Hooks.on("preCreateActor", (doc, data, options, userId) => {
      try {
        const desiredName = getActiveActorSheetId(data.type ?? doc.type);
        if (!desiredName) return;
        doc.updateSource({ flags: { core: { sheetClass: desiredName } } });
      } catch (_) {}
    });

    Hooks.on("preCreateItem", (doc, data, options, userId) => {
      try {
        const desiredName = getActiveItemSheetId(data.type ?? doc.type);
        if (!desiredName) return;
        doc.updateSource({ flags: { core: { sheetClass: desiredName } } });
      } catch (_) {}
    });

    // Bias the generic create dialog toward Anarchy-supported types
    Hooks.on("renderDocumentCreateDialog", (app, html, data) => {
      try {
        const isActor =
          data?.documentClass?.name ===
          (CONFIG.Actor?.documentClass?.name || "Actor");
        const isItem =
          data?.documentClass?.name ===
          (CONFIG.Item?.documentClass?.name || "Item");
        if (!isActor && !isItem) return;
        const root = toElement(html);
        const select = root?.querySelector?.('select[name="type"]');
        if (!select) return;
        const preferredActorTypes = [
          "character",
          "vehicle",
          "device",
          "sprite",
          "ic",
        ];
        const preferredItemTypes = [
          "contact",
          "cyberdeck",
          "gear",
          "metatype",
          "quality",
          "shadowamp",
          "skill",
          "weapon",
        ];
        const preferred = isActor ? preferredActorTypes : preferredItemTypes;
        const options = Array.from(select.options);
        const firstPreferred = options.find((opt) =>
          preferred.includes(opt.value),
        );
        if (firstPreferred) {
          select.value = firstPreferred.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      } catch (_) {}
    });
  }

  _registerConsoleCommands() {
    try {
      const api = {
        fixSheets: async () => await this.fixSheets(),
        debugSheets: () => this.debugSheets(),
        styleGuide: async () => {
          try {
            const { StyleGuideApp } = await import(
              "../../framework/ui/style-guide.js"
            );
            new StyleGuideApp().render(true);
          } catch (e) {
            console.error(LOG_HEAD + "Failed to load Style Guide", e);
          }
        },
        openActiveCharacterSheet: async () => {
          const actor = game.actors.find((a) => a.type === "character");
          if (actor) {
            actor.sheet?.render(true);
          } else {
            console.warn("No character found to open.");
          }
        },
      };
      if (!window.anarchyUI) window.anarchyUI = {};
      Object.assign(window.anarchyUI, api);
      console.info(
        LOG_HEAD +
          "Console commands available: anarchyUI.fixSheets(), anarchyUI.debugSheets(), anarchyUI.openActiveCharacterSheet()",
      );
    } catch (_) {}
  }

  async _fixDatabaseCorruption() {
    if (!game.user.isGM) return;

    if (game.actors.size === 0 && game.items.size === 0) {
      return;
    }

    let fixedCount = 0;

    const actorUpdates = [];
    for (const actor of game.actors.contents) {
      const currentSheet = actor.getFlag("core", "sheetClass");
      const expectedSheet = getActiveActorSheetId(actor.type);
      if (!expectedSheet) continue;

      if (
        !currentSheet ||
        currentSheet.length < 20 ||
        currentSheet.startsWith("core.")
      ) {
        actorUpdates.push(
          actor.update({ "flags.core.sheetClass": expectedSheet }),
        );
        fixedCount++;
      }
    }

    const itemUpdates = [];
    for (const item of game.items.contents) {
      const currentSheet = item.getFlag("core", "sheetClass");
      const expectedSheet = getActiveItemSheetId(item.type);
      if (!expectedSheet) continue;

      if (
        !currentSheet ||
        currentSheet.length < 20 ||
        currentSheet.startsWith("core.")
      ) {
        itemUpdates.push(
          item.update({ "flags.core.sheetClass": expectedSheet }),
        );
        fixedCount++;
      }
    }

    // Apply all updates
    if (actorUpdates.length || itemUpdates.length) {
      await Promise.all([...actorUpdates, ...itemUpdates]);
      console.log(LOG_HEAD + `Fixed ${fixedCount} corrupted sheet assignments`);
      ui.notifications.info(
        `Anarchy System: Fixed ${fixedCount} corrupted sheet assignments`,
      );
    }
  }

  async fixSheets() {
    const DSC = getDocumentSheetConfig();
    const summary = { actorsUpdated: 0, itemsUpdated: 0 };
    try {
      const ActorDoc = CONFIG.Actor.documentClass || Actor;
      const ActiveCharacterSheet = getActiveActorSheetClass("character");
      if (ActiveCharacterSheet) {
        DSC?.setDefaultSheet?.(ActorDoc, SYSTEM_NAME, ActiveCharacterSheet);
      }
    } catch (_) {}
    try {
      const actorUpdates = [];
      for (const a of game.actors.contents) {
        const desired = getActiveActorSheetId(a.type);
        if (!desired) continue;
        const current = a.getFlag("core", "sheetClass");
        if (current !== desired) {
          summary.actorsUpdated++;
          actorUpdates.push(a.update({ "flags.core.sheetClass": desired }));
        }
      }
      const itemUpdates = [];
      for (const it of game.items.contents) {
        const desired = getActiveItemSheetId(it.type);
        const current = it.getFlag("core", "sheetClass");
        if (desired && current !== desired) {
          summary.itemsUpdated++;
          itemUpdates.push(it.update({ "flags.core.sheetClass": desired }));
        }
      }
      await Promise.allSettled([...actorUpdates, ...itemUpdates]);
    } catch (e) {
      console.warn(LOG_HEAD + "fixSheets encountered errors", e);
    }
    console.table(summary);
    return summary;
  }

  debugSheets() {
    try {
      const defaults = {
        actor: Object.fromEntries(
          ACTIVE_ACTOR_SHEETS.flatMap((sheetConfig) =>
            sheetConfig.types.map((type) => [
              type,
              getSheetId(sheetConfig.class),
            ]),
          ),
        ),
        item: Object.fromEntries(
          ACTIVE_ITEM_SHEETS.flatMap((sheetConfig) =>
            sheetConfig.types.map((type) => [
              type,
              getSheetId(sheetConfig.class),
            ]),
          ),
        ),
      };
      try {
        const ActorDoc = CONFIG.Actor.documentClass || Actor;
        const ItemDoc = CONFIG.Item.documentClass || Item;
        console.info(LOG_HEAD + "Intended active defaults", defaults, {
          ActorDoc,
          ItemDoc,
          legacyEnabled: getLegacyActorSheetsEnabled(),
        });
      } catch (_) {}
      const sampleActors = (game.actors?.contents || [])
        .slice(0, 20)
        .map((a) => ({
          name: a.name,
          type: a.type,
          sheet: a.getFlag("core", "sheetClass"),
        }));
      const sampleItems = (game.items?.contents || [])
        .slice(0, 20)
        .map((i) => ({
          name: i.name,
          type: i.type,
          sheet: i.getFlag("core", "sheetClass"),
        }));
      console.table(sampleActors);
      console.table(sampleItems);
      return { defaults, sampleActors, sampleItems };
    } catch (e) {
      console.warn(LOG_HEAD + "debugSheets failed", e);
      return null;
    }
  }

  loadActorSheets() {
    const sheets = getLegacyActorSheetsEnabled()
      ? [...ACTIVE_ACTOR_SHEETS, ...LEGACY_ACTOR_SHEETS]
      : ACTIVE_ACTOR_SHEETS;
    this._registerSheetConfigs(
      "Actor",
      CONFIG.Actor?.documentClass || Actor,
      sheets,
    );
  }

  loadItemSheets() {
    this._registerSheetConfigs(
      "Item",
      CONFIG.Item?.documentClass || Item,
      ACTIVE_ITEM_SHEETS,
    );
  }

  _registerSheetConfigs(documentType, DocumentClass, sheets) {
    const DSC = getDocumentSheetConfig();
    const registerViaDSC = typeof DSC?.registerSheet === "function";
    const configRoot = documentType === "Actor" ? CONFIG.Actor : CONFIG.Item;
    const coreSheets = this._safeGetCoreSheetSettings();
    const defaultsToApply = foundry.utils.duplicate(coreSheets) ?? {};
    if (!defaultsToApply[documentType]) {
      defaultsToApply[documentType] = {};
    }
    let hasDefaultUpdates = false;
    const fallbackCoreUpdates = {};

    sheets.forEach((sheetConfig) => {
      const sheetId = getSheetId(sheetConfig.class);
      const label =
        sheetConfig.label != null
          ? game.i18n.localize(sheetConfig.label)
          : this._makeSheetLabel(sheetConfig.types[0]);

      if (registerViaDSC) {
        DSC.registerSheet(DocumentClass, SYSTEM_NAME, sheetConfig.class, {
          id: sheetId,
          label,
          types: sheetConfig.types,
          canBeDefault: true,
          canConfigure: true,
          makeDefault: sheetConfig.makeDefault,
        });
      }

      sheetConfig.types.forEach((type) => {
        if (!registerViaDSC) {
          if (!configRoot.sheetClasses) configRoot.sheetClasses = {};
          if (!configRoot.sheetClasses[type])
            configRoot.sheetClasses[type] = {};
          if (!configRoot.sheetClasses[type][SYSTEM_NAME]) {
            configRoot.sheetClasses[type][SYSTEM_NAME] = {};
          }

          configRoot.sheetClasses[type][SYSTEM_NAME][sheetId] = {
            id: sheetId,
            cls: sheetConfig.class,
            label,
            canBeDefault: true,
            canConfigure: true,
          };

          if (
            !configRoot.sheetClasses[type].default ||
            !configRoot.sheetClasses[type].default.startsWith(`${SYSTEM_NAME}.`)
          ) {
            configRoot.sheetClasses[type].default = sheetId;
          }
        }

        const coreDefault = coreSheets?.[documentType]?.[type];
        if (sheetConfig.makeDefault && coreDefault !== sheetId) {
          defaultsToApply[documentType][type] = sheetId;
          hasDefaultUpdates = true;
          if (!registerViaDSC) fallbackCoreUpdates[type] = sheetId;
        }
      });
    });

    if (typeof DSC?.updateDefaultSheets === "function" && hasDefaultUpdates) {
      DSC.updateDefaultSheets(defaultsToApply);
    } else if (!registerViaDSC && Object.keys(fallbackCoreUpdates).length) {
      try {
        const updated = foundry.utils.duplicate(coreSheets) ?? {};
        if (!updated[documentType]) updated[documentType] = {};
        Object.assign(updated[documentType], fallbackCoreUpdates);
        game.settings.set("core", "sheetClasses", updated);
      } catch (error) {
        console.warn(
          LOG_HEAD +
            `Failed to persist ${documentType.toLowerCase()} default sheets`,
          error,
        );
      }
    }
  }

  _makeSheetLabel(type) {
    if (!type) return "Sheet";
    return `${type.charAt(0).toUpperCase()}${type.slice(1)} Sheet`;
  }

  _safeGetCoreSheetSettings() {
    try {
      return game.settings.get("core", "sheetClasses");
    } catch (_) {
      return null;
    }
  }
}
