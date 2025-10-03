import { ANARCHY } from './config.js';
import { Enums } from './enums.js';
import { LOG_HEAD, SYSTEM_NAME } from './constants.js';
import { ChatManager } from './chat/chat-manager.js';
import { GMAnarchy } from './app/gm-anarchy.js';
import { GMManager } from './app/gm-manager.js';
import { HandlebarsManager } from './handlebars-manager.js';
import { RemoteCall } from './remotecall.js';
import { Styles } from './styles.js';
import { ThemeUtilities } from './theme-utilities.js';
import { UICustomization } from './ui-customization.js';
import { UICustomizationDialog } from './ui-customization-dialog.js';
import { UICustomizationCommands } from './ui-customization-commands.js';
import { PerformanceOptimizer } from './performance-optimizer.js';
import { AnarchyUsers } from './users.js';
import { HooksManager } from './hooks-manager.js';
import { AnarchyDice } from './roll/dice.js';
import { AnarchyRoll } from './roll/anarchy-roll.js';
import { Migrations } from './migrations.js';
import { Skills } from './skills.js';
import { AnarchyBaseItem } from './item/anarchy-base-item.js';
import { AnarchyBaseActor } from './actor/base-actor.js';
import { CharacterActor } from './actor/character-actor.js';
import { DeviceActor } from './actor/device-actor.js';
import { VehicleActor } from './actor/vehicle-actor.js';
import { CharacterActorSheet } from './actor/character-sheet.js';
import { DeviceSheet } from './actor/device-sheet.js';
import { VehicleSheet } from './actor/vehicle-sheet.js';
import { CharacterNPCSheet } from './actor/character-npc-sheet.js';
import { SkillItem } from './item/skill-item.js';
import { MetatypeItem } from './item/metatype-item.js';
import { CyberdeckItem } from './item/cyberdeck-item.js';
import { WeaponItem } from './item/weapon-item.js';
import { ContactItemSheet } from './item/contact-item-sheet.js';
import { CyberdeckItemSheet } from './item/cyberdeck-item-sheet.js';
import { GearItemSheet } from './item/gear-item-sheet.js';
import { MetatypeItemSheet } from './item/metatype-item-sheet.js';
import { QualityItemSheet } from './item/quality-item-sheet.js';
import { ShadowampItemSheet } from './item/shadowamp-item-sheet.js';
import { SkillItemSheet } from './item/skill-item-sheet.js';
import { WeaponItemSheet } from './item/weapon-item-sheet.js';
import { ContactItem } from './item/contact-item.js';
import { GearItem } from './item/gear-item.js';
import { QualityItem } from './item/quality-item.js';
import { ShadowampItem } from './item/shadowamp-item.js';
import { Checkbars } from './common/checkbars.js';
import { RollParameters } from './roll/roll-parameters.js';
import { RollDialog } from './roll/roll-dialog.js';
import { GMConvergence } from './app/gm-convergence.js';
import { AnarchyCombat } from './anarchy-combat.js';
import { ICSheet } from './actor/ic-sheet.js';
import { SpriteActorSheet } from './actor/sprite-sheet.js';
import { SpriteActor } from './actor/sprite-actor.js';
import { ICActor } from './actor/ic-actor.js';
import { HUDShortcuts } from './token/hud-shortcuts.js';
import { CombatManager } from './combat/combat-manager.js';
import { RollManager } from './roll/roll-manager.js';
import { CharacterTabbedSheet } from './actor/character-tabbed-sheet.js';
import { CharacterEnhancedSheet } from './actor/character-enhanced-sheet.js';
import { Modifiers } from './modifiers/modifiers.js';
import { ActorDamageManager } from './actor/actor-damage.js';
import { AttributeActions } from './attribute-actions.js';
import { DiceCursor } from './roll/dice-cursor.js';
import { loadIntegrationsIfEnabled } from '../integrations/index.js';

/* -------------------------------------------- */
/*  Foundry VTT AnarchySystem Initialization    */
/* -------------------------------------------- */

export class AnarchySystem {
  static start() {
    const anarchySystem = new AnarchySystem();
    Hooks.once('init', async () => await anarchySystem.onInit());
  }

  async onInit() {
    console.log(LOG_HEAD + 'AnarchySystem.onInit');
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
    this.styles = new Styles();
    this.themeUtilities = new ThemeUtilities(this.styles);
    this.uiCustomization = new UICustomization(this.styles);
    this.uiCustomizationCommands = new UICustomizationCommands(this.uiCustomization);
    this.performanceOptimizer = new PerformanceOptimizer(this.styles, this.uiCustomization);
    this.handlebarsManager = new HandlebarsManager();
    this.gmAnarchy = new GMAnarchy();
    this.gmConvergence = new GMConvergence();
    Enums.init();

    this.skills = new Skills();
    this.modifiers = new Modifiers();
    this.rollParameters = new RollParameters();
    this.rollManager = new RollManager();
    this.hudShortcuts = new HUDShortcuts();
    this.combatManager = new CombatManager();

    console.log(LOG_HEAD + 'AnarchySystem.onInit | loading system');
    CONFIG.ANARCHY = ANARCHY;
    CONFIG.Combat.documentClass = AnarchyCombat;
    CONFIG.Combat.initiative = { formula: '2d6' };
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
      game.settings.register(SYSTEM_NAME, 'anarchy-first-mode', {
        scope: 'world',
        config: true,
        name: game.i18n.localize(ANARCHY.settings.anarchyFirstMode.name),
        hint: game.i18n.localize(ANARCHY.settings.anarchyFirstMode.hint),
        default: true,
        type: Boolean,
      });
      game.settings.register(SYSTEM_NAME, 'allow-core-fallback', {
        scope: 'world',
        config: true,
        name: game.i18n.localize(ANARCHY.settings.allowCoreFallback.name),
        hint: game.i18n.localize(ANARCHY.settings.allowCoreFallback.hint),
        default: false,
        type: Boolean,
      });
      game.settings.register(SYSTEM_NAME, 'prefer-core-sheets', {
        scope: 'client',
        config: true,
        name: game.i18n.localize(ANARCHY.settings.preferCoreSheets.name),
        hint: game.i18n.localize(ANARCHY.settings.preferCoreSheets.hint),
        default: false,
        type: Boolean,
      });
    } catch (e) {
      console.warn(LOG_HEAD + 'Settings registration failed', e);
    }

    // Register sheets as early and as safely as possible so we never fall back to core sheets
    this.sheetsRegistered = false;
    this._ensureSheetsWhenAvailable();

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
    console.log(LOG_HEAD + 'AnarchySystem.onInit | done');
    try {
      await loadIntegrationsIfEnabled();
    } catch (e) {
      console.warn(LOG_HEAD + 'Optional integrations failed to load. Continuing without them.', e);
    }
    Hooks.once('ready', () => this.onReady());

    // Register unconditional render-safety to enforce Anarchy sheets
    this._registerRenderSafety();

    // Ensure newly created docs default to Anarchy sheets
    this._registerCreationBias();

    // Expose console commands for maintenance and diagnostics
    this._registerConsoleCommands();
  }

  async onReady() {
    console.log(LOG_HEAD + 'AnarchySystem.onReady');
    // As a backstop, ensure sheets are registered if init-time registration raced core
    if (!this.sheetsRegistered) {
      this._ensureSheetsWhenAvailable();
    }
    if (game.user.isGM) {
      new Migrations().migrate();

      // Optional safety migration: sweep world overrides pointing to core sheets
      const DSC = foundry.applications.api.DocumentSheetConfig;
      const ActorDoc = CONFIG.Actor.documentClass || Actor;
      const ItemDoc = CONFIG.Item.documentClass || Item;
      try {
        // Set Anarchy Enhanced as world default for characters if not already
        DSC.setDefaultSheet(ActorDoc, SYSTEM_NAME, CharacterEnhancedSheet);
      } catch (_) {}

      // Clear per-document overrides that point to core for active actors/items
      try {
        const actorUpdates = [];
        for (const a of game.actors.contents) {
          if (a.type === 'character') {
            const current = a.getFlag('core', 'sheetClass');
            const should = `${SYSTEM_NAME}.CharacterEnhancedSheet`;
            if (!current || String(current).startsWith('core.')) {
              actorUpdates.push(a.update({ 'flags.core.sheetClass': should }));
            }
          }
        }
        const itemUpdates = [];
        for (const it of game.items.contents) {
          const current = it.getFlag('core', 'sheetClass');
          let desired = undefined;
          switch (it.type) {
            case 'contact':
              desired = `${SYSTEM_NAME}.ContactItemSheet`;
              break;
            case 'cyberdeck':
              desired = `${SYSTEM_NAME}.CyberdeckItemSheet`;
              break;
            case 'gear':
              desired = `${SYSTEM_NAME}.GearItemSheet`;
              break;
            case 'metatype':
              desired = `${SYSTEM_NAME}.MetatypeItemSheet`;
              break;
            case 'quality':
              desired = `${SYSTEM_NAME}.QualityItemSheet`;
              break;
            case 'shadowamp':
              desired = `${SYSTEM_NAME}.ShadowampItemSheet`;
              break;
            case 'skill':
              desired = `${SYSTEM_NAME}.SkillItemSheet`;
              break;
            case 'weapon':
              desired = `${SYSTEM_NAME}.WeaponItemSheet`;
              break;
          }
          if (desired && (!current || String(current).startsWith('core.'))) {
            itemUpdates.push(it.update({ 'flags.core.sheetClass': desired }));
          }
        }
        await Promise.allSettled([...actorUpdates, ...itemUpdates]);
      } catch (e) {
        console.warn(LOG_HEAD + 'Sheet override cleanup skipped', e);
      }
    }
  }

  _registerRenderSafety() {
    // Avoid infinite loops by tracking documents we already swapped in this tick
    this._renderSafetySeen = new WeakSet();
    const DSC = foundry.applications.api.DocumentSheetConfig;

    const desiredActorSheetClassFor = (actor) => {
      switch (actor.type) {
        case 'character':
          return CharacterEnhancedSheet;
        case 'vehicle':
          return VehicleSheet;
        case 'device':
          return DeviceSheet;
        case 'sprite':
          return SpriteActorSheet;
        case 'ic':
          return ICSheet;
      }
      return undefined;
    };

    const desiredItemSheetClassFor = (item) => {
      switch (item.type) {
        case 'contact':
          return ContactItemSheet;
        case 'cyberdeck':
          return CyberdeckItemSheet;
        case 'gear':
          return GearItemSheet;
        case 'metatype':
          return MetatypeItemSheet;
        case 'quality':
          return QualityItemSheet;
        case 'shadowamp':
          return ShadowampItemSheet;
        case 'skill':
          return SkillItemSheet;
        case 'weapon':
          return WeaponItemSheet;
      }
      return undefined;
    };

    const swapToSheetIfNeeded = async (doc, app, desiredClass) => {
      try {
        if (!desiredClass) return;
        if (app instanceof desiredClass) return; // already correct
        if (this._renderSafetySeen.has(doc)) return; // prevent loop
        this._renderSafetySeen.add(doc);

        // Persist override so subsequent opens use Anarchy directly
        const desiredName = `${SYSTEM_NAME}.${desiredClass.name}`;
        try {
          await doc.update({ 'flags.core.sheetClass': desiredName });
        } catch (_) {}

        // Close and reopen with the new sheet (explicitly instantiate to avoid registry timing issues)
        try {
          app.close({ force: true });
        } catch (_) {}
        // Using next frame prevents immediate re-entry
        requestAnimationFrame(() => {
          try {
            new desiredClass(doc, {}).render(true);
          } catch (_) {
            try {
              doc.sheet?.render(true);
            } catch (_) {}
          }
        });
        console.warn(LOG_HEAD + 'Render safety swapped sheet to Anarchy', {
          doc: doc.name,
          type: doc.type,
          desired: desiredName,
        });
      } catch (e) {
        console.warn(LOG_HEAD + 'Render safety swap failed', e);
      } finally {
        // allow future renders to evaluate again
        setTimeout(() => this._renderSafetySeen.delete(doc), 0);
      }
    };

    Hooks.on('renderActorSheet', (app) => {
      const actor = app?.object;
      if (!actor) return;
      const desired = desiredActorSheetClassFor(actor);
      swapToSheetIfNeeded(actor, app, desired);
    });

    Hooks.on('renderItemSheet', (app) => {
      const item = app?.object;
      if (!item) return;
      const desired = desiredItemSheetClassFor(item);
      swapToSheetIfNeeded(item, app, desired);
    });
  }

  _ensureSheetsWhenAvailable() {
    const attempt = () => {
      try {
        const DSC = foundry.applications?.api?.DocumentSheetConfig;
        if (!DSC) return false;
        if (this.sheetsRegistered) return true;
        this.loadActorSheets();
        this.loadItemSheets();
        try {
          const ActorDoc = CONFIG.Actor?.documentClass || Actor;
          DSC.setDefaultSheet(ActorDoc, SYSTEM_NAME, CharacterEnhancedSheet);
        } catch (_) {}
        this.sheetsRegistered = true;
        console.log(LOG_HEAD + 'Sheets registered');
        return true;
      } catch (e) {
        console.error(LOG_HEAD + 'Failed to register sheets', e);
        return false;
      }
    };

    if (attempt()) return;
    Hooks.once('setup', () => attempt() || Hooks.once('ready', attempt));
  }

  _registerCreationBias() {
    const desiredActorSheetClassFor = (type) => {
      switch (type) {
        case 'character':
          return CharacterEnhancedSheet;
        case 'vehicle':
          return VehicleSheet;
        case 'device':
          return DeviceSheet;
        case 'sprite':
          return SpriteActorSheet;
        case 'ic':
          return ICSheet;
      }
      return undefined;
    };

    const desiredItemSheetClassFor = (type) => {
      switch (type) {
        case 'contact':
          return ContactItemSheet;
        case 'cyberdeck':
          return CyberdeckItemSheet;
        case 'gear':
          return GearItemSheet;
        case 'metatype':
          return MetatypeItemSheet;
        case 'quality':
          return QualityItemSheet;
        case 'shadowamp':
          return ShadowampItemSheet;
        case 'skill':
          return SkillItemSheet;
        case 'weapon':
          return WeaponItemSheet;
      }
      return undefined;
    };

    Hooks.on('preCreateActor', (doc, data, options, userId) => {
      try {
        const Desired = desiredActorSheetClassFor(data.type ?? doc.type);
        if (!Desired) return;
        const desiredName = `${SYSTEM_NAME}.${Desired.name}`;
        doc.updateSource({ flags: { core: { sheetClass: desiredName } } });
      } catch (_) {}
    });

    Hooks.on('preCreateItem', (doc, data, options, userId) => {
      try {
        const Desired = desiredItemSheetClassFor(data.type ?? doc.type);
        if (!Desired) return;
        const desiredName = `${SYSTEM_NAME}.${Desired.name}`;
        doc.updateSource({ flags: { core: { sheetClass: desiredName } } });
      } catch (_) {}
    });

    // Bias the generic create dialog toward Anarchy-supported types
    Hooks.on('renderDocumentCreateDialog', (app, html, data) => {
      try {
        const isActor =
          data?.documentClass?.name === (CONFIG.Actor?.documentClass?.name || 'Actor');
        const isItem = data?.documentClass?.name === (CONFIG.Item?.documentClass?.name || 'Item');
        if (!isActor && !isItem) return;
        const select = html[0]?.querySelector?.('select[name="type"]');
        if (!select) return;
        const preferredActorTypes = ['character', 'vehicle', 'device', 'sprite', 'ic'];
        const preferredItemTypes = [
          'contact',
          'cyberdeck',
          'gear',
          'metatype',
          'quality',
          'shadowamp',
          'skill',
          'weapon',
        ];
        const preferred = isActor ? preferredActorTypes : preferredItemTypes;
        const options = Array.from(select.options);
        const firstPreferred = options.find((opt) => preferred.includes(opt.value));
        if (firstPreferred) {
          select.value = firstPreferred.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      } catch (_) {}
    });
  }

  _registerConsoleCommands() {
    try {
      const api = {
        fixSheets: async () => await this.fixSheets(),
        debugSheets: () => this.debugSheets(),
      };
      if (!window.anarchyUI) window.anarchyUI = {};
      Object.assign(window.anarchyUI, api);
      console.info(
        LOG_HEAD + 'Console commands available: anarchyUI.fixSheets(), anarchyUI.debugSheets()',
      );
    } catch (_) {}
  }

  async fixSheets() {
    const DSC = foundry.applications.api.DocumentSheetConfig;
    const summary = { actorsUpdated: 0, itemsUpdated: 0 };
    try {
      const ActorDoc = CONFIG.Actor.documentClass || Actor;
      DSC.setDefaultSheet(ActorDoc, SYSTEM_NAME, CharacterEnhancedSheet);
    } catch (_) {}
    try {
      const actorUpdates = [];
      for (const a of game.actors.contents) {
        const desired =
          a.type === 'character' ? `${SYSTEM_NAME}.CharacterEnhancedSheet` : undefined;
        if (!desired) continue;
        const current = a.getFlag('core', 'sheetClass');
        if (!current || String(current).startsWith('core.')) {
          summary.actorsUpdated++;
          actorUpdates.push(a.update({ 'flags.core.sheetClass': desired }));
        }
      }
      const itemUpdates = [];
      for (const it of game.items.contents) {
        let desired = undefined;
        switch (it.type) {
          case 'contact':
            desired = `${SYSTEM_NAME}.ContactItemSheet`;
            break;
          case 'cyberdeck':
            desired = `${SYSTEM_NAME}.CyberdeckItemSheet`;
            break;
          case 'gear':
            desired = `${SYSTEM_NAME}.GearItemSheet`;
            break;
          case 'metatype':
            desired = `${SYSTEM_NAME}.MetatypeItemSheet`;
            break;
          case 'quality':
            desired = `${SYSTEM_NAME}.QualityItemSheet`;
            break;
          case 'shadowamp':
            desired = `${SYSTEM_NAME}.ShadowampItemSheet`;
            break;
          case 'skill':
            desired = `${SYSTEM_NAME}.SkillItemSheet`;
            break;
          case 'weapon':
            desired = `${SYSTEM_NAME}.WeaponItemSheet`;
            break;
        }
        const current = it.getFlag('core', 'sheetClass');
        if (desired && (!current || String(current).startsWith('core.'))) {
          summary.itemsUpdated++;
          itemUpdates.push(it.update({ 'flags.core.sheetClass': desired }));
        }
      }
      await Promise.allSettled([...actorUpdates, ...itemUpdates]);
    } catch (e) {
      console.warn(LOG_HEAD + 'fixSheets encountered errors', e);
    }
    console.table(summary);
    return summary;
  }

  debugSheets() {
    try {
      const defaults = {};
      try {
        const ActorDoc = CONFIG.Actor.documentClass || Actor;
        const ItemDoc = CONFIG.Item.documentClass || Item;
        // Best effort: Foundry API does not publicly expose defaults by type; report our intended targets
        defaults.actor = { character: `${SYSTEM_NAME}.CharacterEnhancedSheet` };
        defaults.item = {
          contact: `${SYSTEM_NAME}.ContactItemSheet`,
          cyberdeck: `${SYSTEM_NAME}.CyberdeckItemSheet`,
          gear: `${SYSTEM_NAME}.GearItemSheet`,
          metatype: `${SYSTEM_NAME}.MetatypeItemSheet`,
          quality: `${SYSTEM_NAME}.QualityItemSheet`,
          shadowamp: `${SYSTEM_NAME}.ShadowampItemSheet`,
          skill: `${SYSTEM_NAME}.SkillItemSheet`,
          weapon: `${SYSTEM_NAME}.WeaponItemSheet`,
        };
        console.info(LOG_HEAD + 'Intended Anarchy defaults', defaults, { ActorDoc, ItemDoc });
      } catch (_) {}
      const sampleActors = (game.actors?.contents || [])
        .slice(0, 20)
        .map((a) => ({ name: a.name, type: a.type, sheet: a.getFlag('core', 'sheetClass') }));
      const sampleItems = (game.items?.contents || [])
        .slice(0, 20)
        .map((i) => ({ name: i.name, type: i.type, sheet: i.getFlag('core', 'sheetClass') }));
      console.table(sampleActors);
      console.table(sampleItems);
      return { defaults, sampleActors, sampleItems };
    } catch (e) {
      console.warn(LOG_HEAD + 'debugSheets failed', e);
      return null;
    }
  }

  loadActorSheets() {
    const DSC = foundry.applications.api.DocumentSheetConfig;
    const ActorDoc = CONFIG.Actor.documentClass || Actor;
    // Ensure core sheet is removed so Foundry cannot fall back
    try {
      DSC.unregisterSheet(ActorDoc, 'core');
    } catch (e) {
      /* ignore */
    }
    DSC.registerSheet(ActorDoc, SYSTEM_NAME, CharacterActorSheet, {
      label: game.i18n.localize(ANARCHY.actor.characterSheet),
      makeDefault: false,
      types: ['character'],
    });
    DSC.registerSheet(ActorDoc, SYSTEM_NAME, CharacterNPCSheet, {
      label: game.i18n.localize(ANARCHY.actor.characterNPCSheet),
      makeDefault: false,
      types: ['character'],
    });
    DSC.registerSheet(ActorDoc, SYSTEM_NAME, CharacterTabbedSheet, {
      label: game.i18n.localize(ANARCHY.actor.characterTabbedSheet),
      makeDefault: false,
      types: ['character'],
    });
    DSC.registerSheet(ActorDoc, SYSTEM_NAME, CharacterEnhancedSheet, {
      label: game.i18n.localize(ANARCHY.actor.characterEnhancedSheet),
      makeDefault: true,
      types: ['character'],
    });
    DSC.registerSheet(ActorDoc, SYSTEM_NAME, VehicleSheet, {
      label: game.i18n.localize(ANARCHY.actor.vehicleSheet),
      makeDefault: true,
      types: ['vehicle'],
    });
    DSC.registerSheet(ActorDoc, SYSTEM_NAME, DeviceSheet, {
      label: game.i18n.localize(ANARCHY.actor.deviceSheet),
      makeDefault: true,
      types: ['device'],
    });
    DSC.registerSheet(ActorDoc, SYSTEM_NAME, SpriteActorSheet, {
      label: game.i18n.localize(ANARCHY.actor.spriteSheet),
      makeDefault: true,
      types: ['sprite'],
    });
    DSC.registerSheet(ActorDoc, SYSTEM_NAME, ICSheet, {
      label: game.i18n.localize(ANARCHY.actor.icSheet),
      makeDefault: true,
      types: ['ic'],
    });
  }

  loadItemSheets() {
    const DSC = foundry.applications.api.DocumentSheetConfig;
    const ItemDoc = CONFIG.Item.documentClass || Item;
    try {
      DSC.unregisterSheet(ItemDoc, 'core');
    } catch (e) {
      /* ignore */
    }
    DSC.registerSheet(ItemDoc, SYSTEM_NAME, ContactItemSheet, {
      types: ['contact'],
      makeDefault: true,
    });
    DSC.registerSheet(ItemDoc, SYSTEM_NAME, CyberdeckItemSheet, {
      types: ['cyberdeck'],
      makeDefault: true,
    });
    DSC.registerSheet(ItemDoc, SYSTEM_NAME, GearItemSheet, { types: ['gear'], makeDefault: true });
    DSC.registerSheet(ItemDoc, SYSTEM_NAME, MetatypeItemSheet, {
      types: ['metatype'],
      makeDefault: true,
    });
    DSC.registerSheet(ItemDoc, SYSTEM_NAME, QualityItemSheet, {
      types: ['quality'],
      makeDefault: true,
    });
    DSC.registerSheet(ItemDoc, SYSTEM_NAME, ShadowampItemSheet, {
      types: ['shadowamp'],
      makeDefault: true,
    });
    DSC.registerSheet(ItemDoc, SYSTEM_NAME, SkillItemSheet, {
      types: ['skill'],
      makeDefault: true,
    });
    DSC.registerSheet(ItemDoc, SYSTEM_NAME, WeaponItemSheet, {
      types: ['weapon'],
      makeDefault: true,
    });
  }
}
