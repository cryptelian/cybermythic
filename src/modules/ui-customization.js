// UI/HUD Customization System - User preference storage and runtime adjustments
// This module provides comprehensive UI/HUD customization capabilities

import { LOG_HEAD, SYSTEM_NAME } from './constants.js';

/**
 * UI Customization Manager - Handles all UI/HUD customization features
 */
export class UICustomization {
  constructor(stylesManager) {
    this.styles = stylesManager;
    this.customizations = new Map();
    this.presets = new Map();
    this.activeCustomizations = new Set();

    // Initialize customization system
    this.initializeCustomizations();

    Hooks.once('ready', () => this.onReady());
    Hooks.on('renderApplication', (app, html, data) => this.onRenderApplication(app, html, data));
  }

  async onReady() {
    console.groupCollapsed(LOG_HEAD + 'UICustomization.onReady');

    // Register UI customization settings
    await this.registerCustomizationSettings();

    // Load user customizations
    await this.loadUserCustomizations();

    // Apply saved customizations
    this.applyAllCustomizations();

    console.groupEnd();
  }

  // =============================================================================
  // CUSTOMIZATION SETTINGS REGISTRATION
  // =============================================================================

  async registerCustomizationSettings() {
    // UI Layout preferences
    game.settings.register(SYSTEM_NAME, 'ui-layout-preferences', {
      scope: 'client',
      name: 'UI Layout Preferences',
      hint: 'Customization settings for UI layout and positioning',
      config: false,
      default: {
        sheetWidth: 'auto',
        sheetHeight: 'auto',
        compactMode: false,
        hideUnusedSections: false,
        sectionOrder: 'default',
        tabLayout: 'horizontal',
      },
      type: Object,
    });

    // HUD customization preferences
    game.settings.register(SYSTEM_NAME, 'hud-customization', {
      scope: 'client',
      name: 'HUD Customization',
      hint: 'Customization settings for HUD elements and positioning',
      config: false,
      default: {
        hudPosition: 'default',
        hudSize: 'medium',
        showShortcuts: true,
        shortcutPosition: 'left',
        gmManagerPosition: 'top-left',
        gmManagerSize: 'medium',
        hideInactiveElements: false,
      },
      type: Object,
    });

    // Visual customization preferences
    game.settings.register(SYSTEM_NAME, 'visual-customization', {
      scope: 'client',
      name: 'Visual Customization',
      hint: 'Visual appearance customization settings',
      config: false,
      default: {
        animationSpeed: 'normal',
        shadowIntensity: 'medium',
        borderRadius: 'default',
        spacing: 'default',
        fontSize: 'default',
        iconSize: 'default',
        transparency: 'default',
      },
      type: Object,
    });

    // Component visibility preferences
    game.settings.register(SYSTEM_NAME, 'component-visibility', {
      scope: 'client',
      name: 'Component Visibility',
      hint: 'Show/hide specific UI components',
      config: false,
      default: {
        showPassportImages: true,
        showItemImages: true,
        showSkillIcons: true,
        showAttributeLabels: true,
        showTooltips: true,
        showAnimations: true,
        showShadows: true,
        showGradients: true,
      },
      type: Object,
    });

    // Advanced customization settings
    game.settings.register(SYSTEM_NAME, 'advanced-ui-settings', {
      scope: 'client',
      name: 'Advanced UI Settings',
      hint: 'Advanced UI customization options',
      config: false,
      default: {
        customCSS: '',
        componentOverrides: {},
        layoutTemplates: {},
        colorOverrides: {},
        fontOverrides: {},
      },
      type: Object,
    });
  }

  // =============================================================================
  // CUSTOMIZATION INITIALIZATION
  // =============================================================================

  initializeCustomizations() {
    console.groupCollapsed(LOG_HEAD + 'UICustomization.initializeCustomizations');

    // Register built-in customization presets
    this.registerBuiltInPresets();

    // Register customization categories
    this.registerCustomizationCategories();

    console.groupEnd();
  }

  registerBuiltInPresets() {
    // Compact layout preset
    this.presets.set('compact', {
      name: 'Compact Layout',
      description: 'Optimized for smaller screens and minimal space usage',
      settings: {
        'ui-layout-preferences': {
          compactMode: true,
          hideUnusedSections: true,
          tabLayout: 'vertical',
        },
        'visual-customization': {
          spacing: 'tight',
          fontSize: 'small',
          iconSize: 'small',
        },
        'component-visibility': {
          showPassportImages: false,
          showShadows: false,
          showGradients: false,
        },
      },
    });

    // Accessibility preset
    this.presets.set('accessibility', {
      name: 'Accessibility Enhanced',
      description: 'Optimized for accessibility and screen readers',
      settings: {
        'visual-customization': {
          fontSize: 'large',
          spacing: 'loose',
          shadowIntensity: 'none',
          borderRadius: 'minimal',
        },
        'component-visibility': {
          showTooltips: true,
          showAnimations: false,
          showShadows: false,
        },
      },
    });

    // Performance preset
    this.presets.set('performance', {
      name: 'Performance Optimized',
      description: 'Reduced visual effects for better performance',
      settings: {
        'visual-customization': {
          animationSpeed: 'fast',
          shadowIntensity: 'light',
          transparency: 'minimal',
        },
        'component-visibility': {
          showAnimations: false,
          showShadows: false,
          showGradients: false,
        },
      },
    });

    // Immersive preset
    this.presets.set('immersive', {
      name: 'Immersive Experience',
      description: 'Enhanced visual effects for maximum immersion',
      settings: {
        'visual-customization': {
          animationSpeed: 'slow',
          shadowIntensity: 'strong',
          transparency: 'enhanced',
        },
        'component-visibility': {
          showAnimations: true,
          showShadows: true,
          showGradients: true,
        },
      },
    });
  }

  registerCustomizationCategories() {
    this.customizations.set('layout', {
      name: 'Layout & Positioning',
      description: 'Customize sheet layouts, sizes, and positioning',
      options: [
        {
          key: 'sheetWidth',
          name: 'Sheet Width',
          type: 'select',
          values: ['auto', 'compact', 'wide', 'full'],
        },
        {
          key: 'sheetHeight',
          name: 'Sheet Height',
          type: 'select',
          values: ['auto', 'compact', 'tall', 'full'],
        },
        { key: 'compactMode', name: 'Compact Mode', type: 'boolean' },
        {
          key: 'tabLayout',
          name: 'Tab Layout',
          type: 'select',
          values: ['horizontal', 'vertical'],
        },
      ],
    });

    this.customizations.set('visual', {
      name: 'Visual Appearance',
      description: 'Customize colors, fonts, and visual effects',
      options: [
        {
          key: 'fontSize',
          name: 'Font Size',
          type: 'select',
          values: ['small', 'default', 'large', 'xl'],
        },
        {
          key: 'iconSize',
          name: 'Icon Size',
          type: 'select',
          values: ['small', 'default', 'large'],
        },
        {
          key: 'spacing',
          name: 'Element Spacing',
          type: 'select',
          values: ['tight', 'default', 'loose'],
        },
        {
          key: 'borderRadius',
          name: 'Border Radius',
          type: 'select',
          values: ['none', 'minimal', 'default', 'rounded'],
        },
        {
          key: 'shadowIntensity',
          name: 'Shadow Intensity',
          type: 'select',
          values: ['none', 'light', 'medium', 'strong'],
        },
        {
          key: 'animationSpeed',
          name: 'Animation Speed',
          type: 'select',
          values: ['none', 'fast', 'normal', 'slow'],
        },
      ],
    });

    this.customizations.set('components', {
      name: 'Component Visibility',
      description: 'Show or hide specific UI components',
      options: [
        { key: 'showPassportImages', name: 'Show Passport Images', type: 'boolean' },
        { key: 'showItemImages', name: 'Show Item Images', type: 'boolean' },
        { key: 'showSkillIcons', name: 'Show Skill Icons', type: 'boolean' },
        { key: 'showTooltips', name: 'Show Tooltips', type: 'boolean' },
        { key: 'showAnimations', name: 'Show Animations', type: 'boolean' },
        { key: 'showShadows', name: 'Show Shadows', type: 'boolean' },
      ],
    });

    this.customizations.set('hud', {
      name: 'HUD Elements',
      description: 'Customize HUD positioning and behavior',
      options: [
        { key: 'hudSize', name: 'HUD Size', type: 'select', values: ['small', 'medium', 'large'] },
        {
          key: 'shortcutPosition',
          name: 'Shortcut Position',
          type: 'select',
          values: ['left', 'right', 'top', 'bottom'],
        },
        {
          key: 'gmManagerPosition',
          name: 'GM Manager Position',
          type: 'select',
          values: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        },
        { key: 'hideInactiveElements', name: 'Hide Inactive Elements', type: 'boolean' },
      ],
    });
  }

  // =============================================================================
  // CUSTOMIZATION APPLICATION
  // =============================================================================

  async loadUserCustomizations() {
    const layoutPrefs = game.settings.get(SYSTEM_NAME, 'ui-layout-preferences');
    const hudCustomization = game.settings.get(SYSTEM_NAME, 'hud-customization');
    const visualCustomization = game.settings.get(SYSTEM_NAME, 'visual-customization');
    const componentVisibility = game.settings.get(SYSTEM_NAME, 'component-visibility');
    const advancedSettings = game.settings.get(SYSTEM_NAME, 'advanced-ui-settings');

    // Store loaded customizations
    this.userCustomizations = {
      layout: layoutPrefs,
      hud: hudCustomization,
      visual: visualCustomization,
      components: componentVisibility,
      advanced: advancedSettings,
    };
  }

  applyAllCustomizations() {
    console.groupCollapsed(LOG_HEAD + 'UICustomization.applyAllCustomizations');

    // Apply each customization category
    this.applyLayoutCustomizations();
    this.applyVisualCustomizations();
    this.applyComponentVisibility();
    this.applyHUDCustomizations();
    this.applyAdvancedCustomizations();

    // Apply background rotation after other visual settings
    this.applyBackgroundRotation();

    console.groupEnd();
  }

  /**
   * Background rotation and fallback
   * Priority:
   * 1) files under systems/anarchy/img/backgrounds/
   * 2) fallback file systems/anarchy/img/2025.10_Bckgrnd.img.01.png if present
   * 3) transparent 1x1 png data URI
   */
  async applyBackgroundRotation() {
    try {
      const root = document.documentElement;

      // Candidate list
      const base = '/systems/anarchy/img';
      const dir = `${base}/backgrounds/`;

      // Probe a list of common names plus any numbered backgrounds we know about
      const candidates = ['2025.10_Bckgrnd.img.01.png', '2025.10_Bckgrnd.img.02.png'];

      // Try to list a few expected files in backgrounds/. We can't read the directory,
      // but we can probe a small fixed set of names to avoid 404 spam.
      const backgroundNames = ['01.webp', '02.webp', '03.webp', '01.png', '02.png', '03.png'];

      const probeUrls = backgroundNames.map((n) => `${dir}${n}`);

      const existing = await this.#probeImages([
        ...probeUrls,
        ...candidates.map((n) => `${base}/${n}`),
      ]);

      let chosen =
        existing.length > 0 ? existing[Math.floor(Math.random() * existing.length)] : undefined;
      if (!chosen) {
        // Final blank fallback: 1x1 transparent PNG
        chosen =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';
      }

      // Set CSS var used by themes
      const cssValue = `repeat center/50% url("${chosen}")`;
      root.style.setProperty('--anarchy-background', cssValue);

      // Expose for console force change support
      globalThis.__anarchyBackgroundCandidates = existing;
      console.debug('[Anarchy] Background applied:', chosen);
    } catch (e) {
      console.warn('[Anarchy] Failed to apply background rotation', e);
    }
  }

  async #probeImages(urls) {
    const checks = await Promise.allSettled(
      urls.map((u) => fetch(u, { method: 'HEAD', cache: 'no-store' })),
    );
    const ok = [];
    checks.forEach((r, idx) => {
      if (r.status === 'fulfilled' && r.value.ok) ok.push(urls[idx]);
    });
    return ok;
  }

  applyLayoutCustomizations() {
    const layout = this.userCustomizations.layout;
    const root = document.documentElement;

    // Sheet sizing
    if (layout.sheetWidth !== 'auto') {
      const widthMap = {
        compact: '600px',
        wide: '900px',
        full: '100vw',
      };
      root.style.setProperty('--sheet-width', widthMap[layout.sheetWidth]);
    }

    if (layout.sheetHeight !== 'auto') {
      const heightMap = {
        compact: '500px',
        tall: '800px',
        full: '100vh',
      };
      root.style.setProperty('--sheet-height', heightMap[layout.sheetHeight]);
    }

    // Compact mode
    if (layout.compactMode) {
      document.body.classList.add('ui-compact-mode');
    } else {
      document.body.classList.remove('ui-compact-mode');
    }

    // Tab layout
    if (layout.tabLayout === 'vertical') {
      document.body.classList.add('ui-vertical-tabs');
    } else {
      document.body.classList.remove('ui-vertical-tabs');
    }

    console.info(LOG_HEAD + 'Applied layout customizations:', layout);
  }

  applyVisualCustomizations() {
    const visual = this.userCustomizations.visual;
    const root = document.documentElement;

    // Font size scaling
    const fontSizeMap = {
      small: '0.85',
      default: '1',
      large: '1.15',
      xl: '1.3',
    };
    if (visual.fontSize !== 'default') {
      root.style.setProperty('--font-scale', fontSizeMap[visual.fontSize]);
    }

    // Icon size scaling
    const iconSizeMap = {
      small: '0.8',
      default: '1',
      large: '1.2',
    };
    if (visual.iconSize !== 'default') {
      root.style.setProperty('--icon-scale', iconSizeMap[visual.iconSize]);
    }

    // Spacing adjustments
    const spacingMap = {
      tight: '0.75',
      default: '1',
      loose: '1.25',
    };
    if (visual.spacing !== 'default') {
      root.style.setProperty('--spacing-scale', spacingMap[visual.spacing]);
    }

    // Border radius adjustments
    const radiusMap = {
      none: '0px',
      minimal: '2px',
      default: '6px',
      rounded: '12px',
    };
    if (visual.borderRadius !== 'default') {
      root.style.setProperty('--border-radius-override', radiusMap[visual.borderRadius]);
    }

    // Shadow intensity
    const shadowMap = {
      none: '0',
      light: '0.5',
      medium: '1',
      strong: '1.5',
    };
    if (visual.shadowIntensity !== 'medium') {
      root.style.setProperty('--shadow-intensity', shadowMap[visual.shadowIntensity]);
    }

    // Animation speed
    const animationMap = {
      none: '0ms',
      fast: '100ms',
      normal: '200ms',
      slow: '400ms',
    };
    if (visual.animationSpeed !== 'normal') {
      root.style.setProperty('--animation-duration', animationMap[visual.animationSpeed]);
    }

    console.info(LOG_HEAD + 'Applied visual customizations:', visual);
  }

  applyComponentVisibility() {
    const components = this.userCustomizations.components;
    const root = document.documentElement;

    // Component visibility classes
    Object.entries(components).forEach(([key, visible]) => {
      const className = `hide-${key
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace('show-', '')}`;

      if (!visible) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });

    console.info(LOG_HEAD + 'Applied component visibility:', components);
  }

  applyHUDCustomizations() {
    const hud = this.userCustomizations.hud;

    // HUD size scaling
    const hudSizeMap = {
      small: '0.8',
      medium: '1',
      large: '1.2',
    };
    if (hud.hudSize !== 'medium') {
      document.documentElement.style.setProperty('--hud-scale', hudSizeMap[hud.hudSize]);
    }

    // GM Manager positioning
    const gmManager = document.getElementById('gm-manager');
    if (gmManager && hud.gmManagerPosition !== 'top-left') {
      gmManager.classList.remove(
        'position-top-left',
        'position-top-right',
        'position-bottom-left',
        'position-bottom-right',
      );
      gmManager.classList.add(`position-${hud.gmManagerPosition}`);
    }

    // Shortcut positioning
    const shortcuts = document.querySelector('.anarchy-shortcuts');
    if (shortcuts && hud.shortcutPosition !== 'left') {
      shortcuts.classList.remove(
        'position-left',
        'position-right',
        'position-top',
        'position-bottom',
      );
      shortcuts.classList.add(`position-${hud.shortcutPosition}`);
    }

    console.info(LOG_HEAD + 'Applied HUD customizations:', hud);
  }

  applyAdvancedCustomizations() {
    const advanced = this.userCustomizations.advanced;
    const root = document.documentElement;

    // Custom CSS injection
    if (advanced.customCSS) {
      this.injectCustomCSS(advanced.customCSS);
    }

    // Component overrides
    if (advanced.componentOverrides) {
      Object.entries(advanced.componentOverrides).forEach(([component, styles]) => {
        Object.entries(styles).forEach(([property, value]) => {
          root.style.setProperty(`--${component}-${property}`, value);
        });
      });
    }

    // Color overrides
    if (advanced.colorOverrides) {
      Object.entries(advanced.colorOverrides).forEach(([colorVar, value]) => {
        root.style.setProperty(`--${colorVar}`, value);
      });
    }

    console.info(LOG_HEAD + 'Applied advanced customizations:', advanced);
  }

  // =============================================================================
  // CUSTOMIZATION METHODS
  // =============================================================================

  setCustomization(category, key, value) {
    const settingKey = this.getCategorySettingKey(category);
    const currentSettings = game.settings.get(SYSTEM_NAME, settingKey);

    currentSettings[key] = value;
    game.settings.set(SYSTEM_NAME, settingKey, currentSettings);

    // Update local cache
    this.userCustomizations[category][key] = value;

    // Apply immediately
    this.applySpecificCustomization(category, key, value);

    console.info(LOG_HEAD + `Customization set: ${category}.${key} = ${value}`);
  }

  getCustomization(category, key) {
    return this.userCustomizations[category]?.[key];
  }

  applySpecificCustomization(category, key, value) {
    const root = document.documentElement;

    switch (category) {
      case 'visual':
        this.applyVisualCustomization(key, value);
        break;
      case 'layout':
        this.applyLayoutCustomization(key, value);
        break;
      case 'components':
        this.applyComponentCustomization(key, value);
        break;
      case 'hud':
        this.applyHUDCustomization(key, value);
        break;
    }
  }

  applyVisualCustomization(key, value) {
    const root = document.documentElement;

    switch (key) {
      case 'fontSize':
        const fontScale = { small: '0.85', default: '1', large: '1.15', xl: '1.3' }[value];
        root.style.setProperty('--font-scale', fontScale);
        break;
      case 'iconSize':
        const iconScale = { small: '0.8', default: '1', large: '1.2' }[value];
        root.style.setProperty('--icon-scale', iconScale);
        break;
      case 'spacing':
        const spacingScale = { tight: '0.75', default: '1', loose: '1.25' }[value];
        root.style.setProperty('--spacing-scale', spacingScale);
        break;
      case 'animationSpeed':
        const duration = { none: '0ms', fast: '100ms', normal: '200ms', slow: '400ms' }[value];
        root.style.setProperty('--animation-duration', duration);
        break;
    }
  }

  applyLayoutCustomization(key, value) {
    switch (key) {
      case 'compactMode':
        if (value) {
          document.body.classList.add('ui-compact-mode');
        } else {
          document.body.classList.remove('ui-compact-mode');
        }
        break;
      case 'tabLayout':
        if (value === 'vertical') {
          document.body.classList.add('ui-vertical-tabs');
        } else {
          document.body.classList.remove('ui-vertical-tabs');
        }
        break;
    }
  }

  applyComponentCustomization(key, value) {
    const className = `hide-${key
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace('show-', '')}`;

    if (!value) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }

  applyHUDCustomization(key, value) {
    switch (key) {
      case 'gmManagerPosition':
        const gmManager = document.getElementById('gm-manager');
        if (gmManager) {
          gmManager.classList.remove(
            'position-top-left',
            'position-top-right',
            'position-bottom-left',
            'position-bottom-right',
          );
          gmManager.classList.add(`position-${value}`);
        }
        break;
      case 'hudSize':
        const hudScale = { small: '0.8', medium: '1', large: '1.2' }[value];
        document.documentElement.style.setProperty('--hud-scale', hudScale);
        break;
    }
  }

  // =============================================================================
  // PRESET MANAGEMENT
  // =============================================================================

  applyPreset(presetId) {
    const preset = this.presets.get(presetId);
    if (!preset) {
      throw new Error(`Preset ${presetId} not found`);
    }

    console.groupCollapsed(LOG_HEAD + `Applying preset: ${preset.name}`);

    // Apply all preset settings
    Object.entries(preset.settings).forEach(([settingKey, settingValue]) => {
      game.settings.set(SYSTEM_NAME, settingKey, settingValue);

      // Update local cache
      const category = this.getSettingCategory(settingKey);
      if (category) {
        this.userCustomizations[category] = {
          ...this.userCustomizations[category],
          ...settingValue,
        };
      }
    });

    // Reapply all customizations
    this.applyAllCustomizations();

    ui.notifications.info(`Applied preset: ${preset.name}`);
    console.groupEnd();
  }

  getAvailablePresets() {
    return Array.from(this.presets.entries()).map(([id, preset]) => ({
      id,
      ...preset,
    }));
  }

  // =============================================================================
  // UTILITY METHODS
  // =============================================================================

  getCategorySettingKey(category) {
    const categoryMap = {
      layout: 'ui-layout-preferences',
      hud: 'hud-customization',
      visual: 'visual-customization',
      components: 'component-visibility',
      advanced: 'advanced-ui-settings',
    };
    return categoryMap[category];
  }

  getSettingCategory(settingKey) {
    const settingMap = {
      'ui-layout-preferences': 'layout',
      'hud-customization': 'hud',
      'visual-customization': 'visual',
      'component-visibility': 'components',
      'advanced-ui-settings': 'advanced',
    };
    return settingMap[settingKey];
  }

  injectCustomCSS(css) {
    // Remove existing custom CSS
    const existingStyle = document.getElementById('anarchy-custom-css');
    if (existingStyle) {
      existingStyle.remove();
    }

    // Inject new custom CSS
    if (css.trim()) {
      const style = document.createElement('style');
      style.id = 'anarchy-custom-css';
      style.textContent = css;
      document.head.appendChild(style);
    }
  }

  onRenderApplication(app, html, data) {
    // Apply customizations to newly rendered applications
    if (app.constructor.name.includes('Sheet') || app.constructor.name.includes('Dialog')) {
      this.applyCustomizationsToElement(html[0]);
    }
  }

  applyCustomizationsToElement(element) {
    // Apply current customizations to a specific element
    const visual = this.userCustomizations.visual;

    if (visual.fontSize !== 'default') {
      element.style.setProperty('--local-font-scale', `var(--font-scale, 1)`);
    }

    if (visual.spacing !== 'default') {
      element.style.setProperty('--local-spacing-scale', `var(--spacing-scale, 1)`);
    }
  }

  // =============================================================================
  // EXPORT/IMPORT CUSTOMIZATIONS
  // =============================================================================

  exportCustomizations() {
    return {
      customizations: this.userCustomizations,
      presets: Array.from(this.presets.entries()),
      metadata: {
        exportedAt: new Date().toISOString(),
        systemVersion: game.system.version,
        foundryVersion: game.version,
      },
    };
  }

  importCustomizations(data) {
    if (!data.customizations) {
      throw new Error('Invalid customization data');
    }

    // Import each category
    Object.entries(data.customizations).forEach(([category, settings]) => {
      const settingKey = this.getCategorySettingKey(category);
      if (settingKey) {
        game.settings.set(SYSTEM_NAME, settingKey, settings);
      }
    });

    // Reload and apply
    this.loadUserCustomizations();
    this.applyAllCustomizations();

    ui.notifications.info('UI customizations imported successfully.');
  }

  resetAllCustomizations() {
    // Reset all customization settings to defaults
    const settingKeys = [
      'ui-layout-preferences',
      'hud-customization',
      'visual-customization',
      'component-visibility',
      'advanced-ui-settings',
    ];

    settingKeys.forEach((key) => {
      const setting = game.settings.settings.get(`${SYSTEM_NAME}.${key}`);
      if (setting) {
        game.settings.set(SYSTEM_NAME, key, setting.default);
      }
    });

    // Remove custom CSS
    this.injectCustomCSS('');

    // Remove customization classes
    document.body.classList.remove('ui-compact-mode', 'ui-vertical-tabs');

    // Reset CSS variables
    const root = document.documentElement;
    const customProperties = [
      '--font-scale',
      '--icon-scale',
      '--spacing-scale',
      '--border-radius-override',
      '--shadow-intensity',
      '--animation-duration',
    ];
    customProperties.forEach((prop) => root.style.removeProperty(prop));

    // Reload and apply defaults
    this.loadUserCustomizations();
    this.applyAllCustomizations();

    ui.notifications.info('All UI customizations reset to defaults.');
  }

  // =============================================================================
  // DEBUGGING AND ANALYSIS
  // =============================================================================

  debugCustomizations() {
    console.group(LOG_HEAD + 'UI Customization Debug');
    console.info('Current Customizations:', this.userCustomizations);
    console.info('Available Presets:', this.getAvailablePresets());
    console.info('Active CSS Variables:', this.getActiveCustomizationVariables());
    console.info('Applied Classes:', this.getAppliedCustomizationClasses());
    console.groupEnd();

    return {
      customizations: this.userCustomizations,
      presets: this.getAvailablePresets(),
      cssVariables: this.getActiveCustomizationVariables(),
      appliedClasses: this.getAppliedCustomizationClasses(),
    };
  }

  getActiveCustomizationVariables() {
    const root = getComputedStyle(document.documentElement);
    const customizationVars = {};

    const varNames = [
      '--font-scale',
      '--icon-scale',
      '--spacing-scale',
      '--border-radius-override',
      '--shadow-intensity',
      '--animation-duration',
      '--hud-scale',
    ];

    varNames.forEach((varName) => {
      const value = root.getPropertyValue(varName);
      if (value) {
        customizationVars[varName] = value.trim();
      }
    });

    return customizationVars;
  }

  getAppliedCustomizationClasses() {
    return Array.from(document.body.classList).filter(
      (cls) => cls.startsWith('ui-') || cls.startsWith('hide-') || cls.startsWith('position-'),
    );
  }
}
