// UI Customization Commands - Console commands for UI customization
// This module provides console commands for easy access to customization features

import { LOG_HEAD } from './constants.js';
import { UICustomizationDialog } from './ui-customization-dialog.js';

/**
 * UI Customization Commands - Console interface for customization
 */
export class UICustomizationCommands {
  constructor(uiCustomization) {
    this.uiCustomization = uiCustomization;
    this.registerCommands();
  }

  registerCommands() {
    // Register global console commands
    globalThis.anarchyUI = {
      // Open customization dialog
      customize: () => this.openCustomizationDialog(),

      // Quick customization methods
      setFontSize: (size) => this.setFontSize(size),
      setIconSize: (size) => this.setIconSize(size),
      setSpacing: (spacing) => this.setSpacing(spacing),
      setAnimationSpeed: (speed) => this.setAnimationSpeed(speed),

      // Component visibility toggles
      togglePassportImages: () => this.toggleComponent('showPassportImages'),
      toggleItemImages: () => this.toggleComponent('showItemImages'),
      toggleAnimations: () => this.toggleComponent('showAnimations'),
      toggleShadows: () => this.toggleComponent('showShadows'),

      // Preset application
      applyCompactMode: () => this.applyPreset('compact'),
      applyAccessibilityMode: () => this.applyPreset('accessibility'),
      applyPerformanceMode: () => this.applyPreset('performance'),
      applyImmersiveMode: () => this.applyPreset('immersive'),

      // HUD positioning
      moveGMManager: (position) => this.moveGMManager(position),
      moveShortcuts: (position) => this.moveShortcuts(position),
      setHUDSize: (size) => this.setHUDSize(size),

      // Advanced operations
      injectCSS: (css) => this.injectCustomCSS(css),
      exportSettings: () => this.exportSettings(),
      importSettings: (data) => this.importSettings(data),
      resetAll: () => this.resetAll(),

      // Debugging
      debug: () => this.debugCustomizations(),
      listCommands: () => this.listCommands(),

      // Theme integration
      setThemeCustomization: (themeId, property, value) =>
        this.setThemeCustomization(themeId, property, value),
      previewTheme: (themeClass) => this.previewTheme(themeClass),

      // Background helpers
      listBackgrounds: () => globalThis.__anarchyBackgroundCandidates ?? [],
      setBackground: (urlOrName) => this.setBackground(urlOrName),

      // Sheet management and diagnostics
      fixSheets: () => this.fixSheets(),
      debugSheets: () => this.debugSheets(),
    };

    console.info(
      LOG_HEAD +
        'UI Customization commands registered. Use anarchyUI.listCommands() to see available commands.',
    );
  }

  // =============================================================================
  // COMMAND IMPLEMENTATIONS
  // =============================================================================

  openCustomizationDialog() {
    return UICustomizationDialog.show(this.uiCustomization);
  }

  setFontSize(size) {
    const validSizes = ['small', 'default', 'large', 'xl'];
    if (!validSizes.includes(size)) {
      console.error(LOG_HEAD + `Invalid font size. Valid options: ${validSizes.join(', ')}`);
      return;
    }

    this.uiCustomization.setCustomization('visual', 'fontSize', size);
    console.info(LOG_HEAD + `Font size set to: ${size}`);
  }

  setIconSize(size) {
    const validSizes = ['small', 'default', 'large'];
    if (!validSizes.includes(size)) {
      console.error(LOG_HEAD + `Invalid icon size. Valid options: ${validSizes.join(', ')}`);
      return;
    }

    this.uiCustomization.setCustomization('visual', 'iconSize', size);
    console.info(LOG_HEAD + `Icon size set to: ${size}`);
  }

  setSpacing(spacing) {
    const validSpacing = ['tight', 'default', 'loose'];
    if (!validSpacing.includes(spacing)) {
      console.error(LOG_HEAD + `Invalid spacing. Valid options: ${validSpacing.join(', ')}`);
      return;
    }

    this.uiCustomization.setCustomization('visual', 'spacing', spacing);
    console.info(LOG_HEAD + `Spacing set to: ${spacing}`);
  }

  setAnimationSpeed(speed) {
    const validSpeeds = ['none', 'fast', 'normal', 'slow'];
    if (!validSpeeds.includes(speed)) {
      console.error(LOG_HEAD + `Invalid animation speed. Valid options: ${validSpeeds.join(', ')}`);
      return;
    }

    this.uiCustomization.setCustomization('visual', 'animationSpeed', speed);
    console.info(LOG_HEAD + `Animation speed set to: ${speed}`);
  }

  toggleComponent(componentKey) {
    const current = this.uiCustomization.getCustomization('components', componentKey);
    const newValue = !current;

    this.uiCustomization.setCustomization('components', componentKey, newValue);
    console.info(LOG_HEAD + `${componentKey} ${newValue ? 'enabled' : 'disabled'}`);
  }

  applyPreset(presetId) {
    try {
      this.uiCustomization.applyPreset(presetId);
      console.info(LOG_HEAD + `Applied preset: ${presetId}`);
    } catch (error) {
      console.error(LOG_HEAD + `Failed to apply preset: ${error.message}`);
    }
  }

  moveGMManager(position) {
    const validPositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    if (!validPositions.includes(position)) {
      console.error(LOG_HEAD + `Invalid position. Valid options: ${validPositions.join(', ')}`);
      return;
    }

    this.uiCustomization.setCustomization('hud', 'gmManagerPosition', position);
    console.info(LOG_HEAD + `GM Manager moved to: ${position}`);
  }

  moveShortcuts(position) {
    const validPositions = ['left', 'right', 'top', 'bottom'];
    if (!validPositions.includes(position)) {
      console.error(LOG_HEAD + `Invalid position. Valid options: ${validPositions.join(', ')}`);
      return;
    }

    this.uiCustomization.setCustomization('hud', 'shortcutPosition', position);
    console.info(LOG_HEAD + `Shortcuts moved to: ${position}`);
  }

  setHUDSize(size) {
    const validSizes = ['small', 'medium', 'large'];
    if (!validSizes.includes(size)) {
      console.error(LOG_HEAD + `Invalid HUD size. Valid options: ${validSizes.join(', ')}`);
      return;
    }

    this.uiCustomization.setCustomization('hud', 'hudSize', size);
    console.info(LOG_HEAD + `HUD size set to: ${size}`);
  }

  injectCustomCSS(css) {
    this.uiCustomization.setCustomization('advanced', 'customCSS', css);
    console.info(LOG_HEAD + 'Custom CSS injected');
  }

  exportSettings() {
    const data = this.uiCustomization.exportCustomizations();
    console.info(LOG_HEAD + 'Customization data:', data);
    return data;
  }

  importSettings(data) {
    try {
      this.uiCustomization.importCustomizations(data);
      console.info(LOG_HEAD + 'Settings imported successfully');
    } catch (error) {
      console.error(LOG_HEAD + `Import failed: ${error.message}`);
    }
  }

  resetAll() {
    this.uiCustomization.resetAllCustomizations();
    console.info(LOG_HEAD + 'All customizations reset');
  }

  debugCustomizations() {
    return this.uiCustomization.debugCustomizations();
  }

  setThemeCustomization(themeId, property, value) {
    this.uiCustomization.styles.setThemeCustomization(themeId, property, value);
    console.info(LOG_HEAD + `Theme customization set: ${themeId}.${property} = ${value}`);
  }

  previewTheme(themeClass) {
    this.uiCustomization.styles.previewTheme(themeClass);
    console.info(LOG_HEAD + `Previewing theme: ${themeClass}`);
  }

  listCommands() {
    const commands = [
      'anarchyUI.customize() - Open customization dialog',
      'anarchyUI.setFontSize(size) - Set font size (small, default, large, xl)',
      'anarchyUI.setIconSize(size) - Set icon size (small, default, large)',
      'anarchyUI.setSpacing(spacing) - Set spacing (tight, default, loose)',
      'anarchyUI.setAnimationSpeed(speed) - Set animation speed (none, fast, normal, slow)',
      'anarchyUI.togglePassportImages() - Toggle passport images',
      'anarchyUI.toggleItemImages() - Toggle item images',
      'anarchyUI.toggleAnimations() - Toggle animations',
      'anarchyUI.toggleShadows() - Toggle shadows',
      'anarchyUI.applyCompactMode() - Apply compact preset',
      'anarchyUI.applyAccessibilityMode() - Apply accessibility preset',
      'anarchyUI.applyPerformanceMode() - Apply performance preset',
      'anarchyUI.applyImmersiveMode() - Apply immersive preset',
      'anarchyUI.moveGMManager(position) - Move GM manager (top-left, top-right, bottom-left, bottom-right)',
      'anarchyUI.moveShortcuts(position) - Move shortcuts (left, right, top, bottom)',
      'anarchyUI.setHUDSize(size) - Set HUD size (small, medium, large)',
      'anarchyUI.injectCSS(css) - Inject custom CSS',
      'anarchyUI.exportSettings() - Export customization settings',
      'anarchyUI.importSettings(data) - Import customization settings',
      'anarchyUI.resetAll() - Reset all customizations',
      'anarchyUI.debug() - Debug current customizations',
      'anarchyUI.setThemeCustomization(themeId, property, value) - Set theme-specific customization',
      'anarchyUI.previewTheme(themeClass) - Preview a theme temporarily',
      'anarchyUI.listBackgrounds() - List probed background image URLs',
      'anarchyUI.setBackground(urlOrName) - Force a background from list or full URL',
      'anarchyUI.fixSheets() - Fix all world actors/items to use Anarchy sheets',
      'anarchyUI.debugSheets() - Debug current sheet registrations and assignments',
    ];

    console.group(LOG_HEAD + 'Available UI Customization Commands:');
    commands.forEach((cmd) => console.info(cmd));
    console.groupEnd();

    return commands;
  }

  setBackground(urlOrName) {
    const root = document.documentElement;
    const list = globalThis.__anarchyBackgroundCandidates ?? [];
    const match = list.find((u) => u.endsWith(urlOrName)) ?? urlOrName;
    if (!match) {
      console.error(LOG_HEAD + 'No background match');
      return;
    }
    const cssValue = `repeat center/50% url("${match}")`;
    root.style.setProperty('--anarchy-background', cssValue);
    console.info(LOG_HEAD + 'Background set:', match);
  }

  // =============================================================================
  // SHEET MANAGEMENT AND DIAGNOSTICS
  // =============================================================================

  async fixSheets() {
    if (!game.user.isGM) {
      console.error(LOG_HEAD + 'fixSheets() requires GM permissions');
      return;
    }

    console.group(LOG_HEAD + 'Fixing world sheets to use Anarchy defaults');

    const SYSTEM_NAME = 'anarchy';
    let actorCount = 0;
    let itemCount = 0;

    try {
      // Fix actors
      const actorUpdates = [];
      for (const actor of game.actors.contents) {
        const current = actor.getFlag('core', 'sheetClass');
        let desired = undefined;

        switch (actor.type) {
          case 'character':
            desired = `${SYSTEM_NAME}.CharacterEnhancedSheet`;
            break;
          case 'vehicle':
            desired = `${SYSTEM_NAME}.VehicleSheet`;
            break;
          case 'device':
            desired = `${SYSTEM_NAME}.DeviceSheet`;
            break;
          case 'sprite':
            desired = `${SYSTEM_NAME}.SpriteActorSheet`;
            break;
          case 'ic':
            desired = `${SYSTEM_NAME}.ICSheet`;
            break;
        }

        if (desired && (!current || String(current).startsWith('core.') || current !== desired)) {
          actorUpdates.push(actor.update({ 'flags.core.sheetClass': desired }));
          actorCount++;
          console.info(`  Actor: ${actor.name} (${actor.type}) → ${desired}`);
        }
      }

      // Fix items
      const itemUpdates = [];
      for (const item of game.items.contents) {
        const current = item.getFlag('core', 'sheetClass');
        let desired = undefined;

        switch (item.type) {
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

        if (desired && (!current || String(current).startsWith('core.') || current !== desired)) {
          itemUpdates.push(item.update({ 'flags.core.sheetClass': desired }));
          itemCount++;
          console.info(`  Item: ${item.name} (${item.type}) → ${desired}`);
        }
      }

      // Execute updates
      await Promise.allSettled([...actorUpdates, ...itemUpdates]);

      console.info(LOG_HEAD + `Fixed ${actorCount} actors and ${itemCount} items`);
      ui.notifications.info(
        `Fixed ${actorCount} actors and ${itemCount} items to use Anarchy sheets`,
      );
    } catch (error) {
      console.error(LOG_HEAD + 'Error fixing sheets:', error);
      ui.notifications.error('Failed to fix some sheets. Check console for details.');
    }

    console.groupEnd();
    return { actorCount, itemCount };
  }

  debugSheets() {
    console.group(LOG_HEAD + 'Sheet Registration Debug');

    const DSC = foundry.applications?.api?.DocumentSheetConfig;
    if (!DSC) {
      console.error('DocumentSheetConfig not available');
      console.groupEnd();
      return;
    }

    // Get registered sheets
    const ActorDoc = CONFIG.Actor?.documentClass || Actor;
    const ItemDoc = CONFIG.Item?.documentClass || Item;

    console.group('Registered Actor Sheets:');
    const actorSheets = DSC.getSheetClasses(ActorDoc);
    Object.entries(actorSheets).forEach(([type, sheets]) => {
      console.info(`${type}:`, sheets);
    });
    console.groupEnd();

    console.group('Registered Item Sheets:');
    const itemSheets = DSC.getSheetClasses(ItemDoc);
    Object.entries(itemSheets).forEach(([type, sheets]) => {
      console.info(`${type}:`, sheets);
    });
    console.groupEnd();

    // Sample world documents
    console.group('Sample World Documents (first 10):');
    const sampleActors = game.actors.contents.slice(0, 10);
    sampleActors.forEach((actor) => {
      const sheetClass = actor.getFlag('core', 'sheetClass') || 'default';
      const sheetConstructor = actor.sheet?.constructor?.name || 'unknown';
      console.info(
        `Actor: ${actor.name} (${actor.type}) | Flag: ${sheetClass} | Constructor: ${sheetConstructor}`,
      );
    });

    const sampleItems = game.items.contents.slice(0, 10);
    sampleItems.forEach((item) => {
      const sheetClass = item.getFlag('core', 'sheetClass') || 'default';
      const sheetConstructor = item.sheet?.constructor?.name || 'unknown';
      console.info(
        `Item: ${item.name} (${item.type}) | Flag: ${sheetClass} | Constructor: ${sheetConstructor}`,
      );
    });
    console.groupEnd();

    // System status
    console.group('System Status:');
    console.info('Anarchy System:', game.system.anarchy);
    console.info('Proxy Detected:', game.system.anarchy?.proxyDetected);
    console.info('Sheets Registered:', game.system.anarchy?.sheetsRegistered);
    console.info('Settings:');
    console.info('  anarchy-first-mode:', game.settings.get('anarchy', 'anarchy-first-mode'));
    console.info('  allow-core-fallback:', game.settings.get('anarchy', 'allow-core-fallback'));
    console.info('  prefer-core-sheets:', game.settings.get('anarchy', 'prefer-core-sheets'));
    console.groupEnd();

    console.groupEnd();

    return {
      actorSheets,
      itemSheets,
      sampleActors: sampleActors.map((a) => ({
        name: a.name,
        type: a.type,
        sheetFlag: a.getFlag('core', 'sheetClass'),
        sheetConstructor: a.sheet?.constructor?.name,
      })),
      sampleItems: sampleItems.map((i) => ({
        name: i.name,
        type: i.type,
        sheetFlag: i.getFlag('core', 'sheetClass'),
        sheetConstructor: i.sheet?.constructor?.name,
      })),
      systemStatus: {
        proxyDetected: game.system.anarchy?.proxyDetected,
        sheetsRegistered: game.system.anarchy?.sheetsRegistered,
        settings: {
          anarchyFirstMode: game.settings.get('anarchy', 'anarchy-first-mode'),
          allowCoreFallback: game.settings.get('anarchy', 'allow-core-fallback'),
          preferCoreSheets: game.settings.get('anarchy', 'prefer-core-sheets'),
        },
      },
    };
  }
}
