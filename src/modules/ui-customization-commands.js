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
      setThemeCustomization: (themeId, property, value) => this.setThemeCustomization(themeId, property, value),
      previewTheme: (themeClass) => this.previewTheme(themeClass)
    };

    console.info(LOG_HEAD + 'UI Customization commands registered. Use anarchyUI.listCommands() to see available commands.');
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
      'anarchyUI.previewTheme(themeClass) - Preview a theme temporarily'
    ];

    console.group(LOG_HEAD + 'Available UI Customization Commands:');
    commands.forEach(cmd => console.info(cmd));
    console.groupEnd();
    
    return commands;
  }
}
