import { ANARCHY } from "./config.js";
import { LOG_HEAD, SYSTEM_NAME } from "./constants.js";
import { ANARCHY_HOOKS, HooksManager } from "./hooks-manager.js";

const DEFAULT_CSS_CLASS = 'default-css-class';
const CSS_DEFAULT = 'style-anarchy-shadowrun';

// Enhanced theme definitions with metadata
const DEFAULT_STYLES = [
  {
    id: 'anarchy-shadowrun',
    name: 'Shadowrun Anarchy',
    cssClass: CSS_DEFAULT,
    description: 'The classic Shadowrun Anarchy theme with cyberpunk aesthetics',
    author: 'Anarchy System',
    version: '2.0.0',
    category: 'official',
    accessibility: {
      highContrast: false,
      reducedMotion: false,
      largeText: false
    },
    preview: {
      primaryColor: '#f4d03f',
      backgroundColor: '#ffffff',
      textColor: '#1a1a1a'
    }
  },
  {
    id: 'dark',
    name: 'Dark',
    cssClass: 'style-dark',
    description: 'A sleek dark theme optimized for low-light environments',
    author: 'Anarchy System',
    version: '2.0.0',
    category: 'official',
    accessibility: {
      highContrast: false,
      reducedMotion: false,
      largeText: false
    },
    preview: {
      primaryColor: '#f4d03f',
      backgroundColor: '#1a0f0f',
      textColor: '#e6d4a3'
    }
  },
  {
    id: 'darkglass',
    name: 'Dark Glass',
    cssClass: 'style-darkglass',
    description: 'A sophisticated dark theme with glass-like transparency effects',
    author: 'Anarchy System',
    version: '2.0.0',
    category: 'official',
    accessibility: {
      highContrast: false,
      reducedMotion: false,
      largeText: false
    },
    preview: {
      primaryColor: '#3498db',
      backgroundColor: '#0d0d0d',
      textColor: '#f2f2f2'
    }
  }
]

/**
 * The Styles class manages the addition of different styles
 */
export class Styles {
  constructor() {
    this.availableStyles = {};
    this.themeMetadata = new Map();
    this.themeSettings = new Map();
    this.currentTheme = null;
    this.themeChangeCallbacks = new Set();
    
    // Initialize enhanced theme system
    this.initializeThemes();
    
    HooksManager.register(ANARCHY_HOOKS.REGISTER_STYLES);

    Hooks.once(ANARCHY_HOOKS.REGISTER_STYLES, register => {
      DEFAULT_STYLES.forEach(theme => {
        register(theme.cssClass, theme.name);
        this.registerThemeMetadata(theme);
      });
    });
    Hooks.once('ready', () => this.onReady());
    
    // Listen for theme changes
    Hooks.on('updateSetting', (setting, update, options, id) => {
      if (setting.key === `${SYSTEM_NAME}.${DEFAULT_CSS_CLASS}`) {
        this.onThemeChanged(update);
      }
    });
  }

  async onReady() {
    console.groupCollapsed(LOG_HEAD + 'Styles.onReady');
    
    // Call original registration hooks
    Hooks.callAll(ANARCHY_HOOKS.REGISTER_STYLES, (style, name) => this.availableStyles[style] = name);
    console.info(LOG_HEAD + 'Styles.onReady | registered styles', this.availableStyles);

    // Register enhanced settings
    await this.registerEnhancedSettings();
    
    // Initialize current theme
    this.currentTheme = this.selectCssClass();
    this.applyTheme(this.currentTheme);
    
    console.groupEnd();
  }

  async registerEnhancedSettings() {
    // Main theme setting (enhanced)
    game.settings.register(SYSTEM_NAME, DEFAULT_CSS_CLASS, {
      scope: 'world',
      name: game.i18n.localize(ANARCHY.settings.defaultCssClass.name),
      hint: game.i18n.localize(ANARCHY.settings.defaultCssClass.hint),
      config: true,
      default: CSS_DEFAULT,
      choices: this.availableStyles,
      type: String,
      onChange: (value) => this.onThemeChanged(value)
    });

    // Theme customization settings
    game.settings.register(SYSTEM_NAME, 'theme-customizations', {
      scope: 'world',
      name: 'Theme Customizations',
      hint: 'Advanced theme customization settings',
      config: false,
      default: {},
      type: Object
    });

    // User theme preferences
    game.settings.register(SYSTEM_NAME, 'user-theme-preferences', {
      scope: 'client',
      name: 'User Theme Preferences',
      hint: 'Personal theme preferences and accessibility settings',
      config: false,
      default: {
        accessibility: {
          highContrast: false,
          reducedMotion: false,
          largeText: false
        },
        customizations: {}
      },
      type: Object
    });
  }

  selectCssClass() {
    const style = game.settings.get(SYSTEM_NAME, DEFAULT_CSS_CLASS);
    return this.availableStyles[style] ? style : CSS_DEFAULT;
  }

  // =============================================================================
  // ENHANCED THEME MANAGEMENT METHODS
  // =============================================================================

  initializeThemes() {
    console.groupCollapsed(LOG_HEAD + 'Styles.initializeThemes');
    
    // Register enhanced themes with metadata
    DEFAULT_STYLES.forEach(theme => {
      this.themeMetadata.set(theme.id, theme);
      this.themeSettings.set(theme.id, {
        customizations: {},
        userPreferences: {},
        lastUsed: null
      });
      console.info(LOG_HEAD + `Registered theme: ${theme.name} v${theme.version}`);
    });
    
    console.groupEnd();
  }

  registerThemeMetadata(theme) {
    this.themeMetadata.set(theme.id, theme);
    
    // Store theme-specific settings
    this.themeSettings.set(theme.id, {
      customizations: {},
      userPreferences: {},
      lastUsed: null
    });
  }

  // Enhanced theme application
  applyTheme(themeClass) {
    console.groupCollapsed(LOG_HEAD + 'Styles.applyTheme', themeClass);
    
    const themeId = this.getThemeIdFromClass(themeClass);
    const theme = this.themeMetadata.get(themeId);
    
    if (!theme) {
      console.warn(LOG_HEAD + 'Theme not found:', themeId);
      console.groupEnd();
      return;
    }

    // Apply theme class to relevant elements
    this.applyThemeClass(themeClass);
    
    // Apply user customizations
    this.applyUserCustomizations(themeId);
    
    // Apply accessibility settings
    this.applyAccessibilitySettings();
    
    // Update theme metadata
    this.updateThemeUsage(themeId);
    
    // Notify theme change callbacks
    this.notifyThemeChange(theme);
    
    console.info(LOG_HEAD + 'Applied theme:', theme.name);
    console.groupEnd();
  }

  applyThemeClass(themeClass) {
    // Remove existing theme classes
    const existingClasses = Array.from(document.body.classList)
      .filter(cls => cls.startsWith('style-'));
    
    existingClasses.forEach(cls => document.body.classList.remove(cls));
    
    // Apply new theme class
    document.body.classList.add(themeClass);
    
    // Apply to GM Manager if it exists
    const gmManager = document.getElementById('gm-manager');
    if (gmManager) {
      existingClasses.forEach(cls => gmManager.classList.remove(cls));
      gmManager.classList.add(themeClass);
    }
  }

  applyUserCustomizations(themeId) {
    const customizations = game.settings.get(SYSTEM_NAME, 'theme-customizations');
    const themeCustomizations = customizations[themeId];
    
    if (themeCustomizations) {
      // Apply CSS custom property overrides
      const root = document.documentElement;
      Object.entries(themeCustomizations).forEach(([property, value]) => {
        root.style.setProperty(`--${property}`, value);
      });
    }
  }

  applyAccessibilitySettings() {
    const preferences = game.settings.get(SYSTEM_NAME, 'user-theme-preferences');
    const accessibility = preferences.accessibility || {};
    
    const root = document.documentElement;
    
    // High contrast mode
    if (accessibility.highContrast) {
      root.classList.add('accessibility-high-contrast');
    } else {
      root.classList.remove('accessibility-high-contrast');
    }
    
    // Reduced motion
    if (accessibility.reducedMotion) {
      root.classList.add('accessibility-reduced-motion');
    } else {
      root.classList.remove('accessibility-reduced-motion');
    }
    
    // Large text
    if (accessibility.largeText) {
      root.classList.add('accessibility-large-text');
    } else {
      root.classList.remove('accessibility-large-text');
    }
  }

  updateThemeUsage(themeId) {
    const settings = this.themeSettings.get(themeId);
    if (settings) {
      settings.lastUsed = new Date().toISOString();
      this.themeSettings.set(themeId, settings);
    }
  }

  onThemeChanged(newThemeClass) {
    console.info(LOG_HEAD + 'Theme changed to:', newThemeClass);
    this.currentTheme = newThemeClass;
    this.applyTheme(newThemeClass);
  }

  notifyThemeChange(theme) {
    this.themeChangeCallbacks.forEach(callback => {
      try {
        callback(theme);
      } catch (error) {
        console.error(LOG_HEAD + 'Theme change callback error:', error);
      }
    });
  }

  // =============================================================================
  // THEME METADATA AND UTILITIES
  // =============================================================================

  getThemeIdFromClass(cssClass) {
    return cssClass.replace('style-', '');
  }

  getThemeMetadata(themeId) {
    return this.themeMetadata.get(themeId);
  }

  getAllThemes() {
    return Array.from(this.themeMetadata.values());
  }

  getThemesByCategory(category) {
    return this.getAllThemes().filter(theme => theme.category === category);
  }

  // =============================================================================
  // THEME CUSTOMIZATION METHODS
  // =============================================================================

  setThemeCustomization(themeId, property, value) {
    const customizations = game.settings.get(SYSTEM_NAME, 'theme-customizations');
    
    if (!customizations[themeId]) {
      customizations[themeId] = {};
    }
    
    customizations[themeId][property] = value;
    game.settings.set(SYSTEM_NAME, 'theme-customizations', customizations);
    
    // Apply immediately if it's the current theme
    if (this.getThemeIdFromClass(this.currentTheme) === themeId) {
      document.documentElement.style.setProperty(`--${property}`, value);
    }
    
    console.info(LOG_HEAD + `Theme customization set: ${themeId}.${property} = ${value}`);
  }

  getThemeCustomization(themeId, property) {
    const customizations = game.settings.get(SYSTEM_NAME, 'theme-customizations');
    return customizations[themeId]?.[property];
  }

  resetThemeCustomizations(themeId) {
    const customizations = game.settings.get(SYSTEM_NAME, 'theme-customizations');
    delete customizations[themeId];
    game.settings.set(SYSTEM_NAME, 'theme-customizations', customizations);
    
    // Reapply theme if it's current
    if (this.getThemeIdFromClass(this.currentTheme) === themeId) {
      this.applyTheme(this.currentTheme);
    }
    
    console.info(LOG_HEAD + `Reset customizations for theme: ${themeId}`);
  }

  // =============================================================================
  // ACCESSIBILITY METHODS
  // =============================================================================

  setAccessibilitySetting(setting, value) {
    const preferences = game.settings.get(SYSTEM_NAME, 'user-theme-preferences');
    preferences.accessibility[setting] = value;
    game.settings.set(SYSTEM_NAME, 'user-theme-preferences', preferences);
    
    this.applyAccessibilitySettings();
    console.info(LOG_HEAD + `Accessibility setting changed: ${setting} = ${value}`);
  }

  getAccessibilitySetting(setting) {
    const preferences = game.settings.get(SYSTEM_NAME, 'user-theme-preferences');
    return preferences.accessibility?.[setting] || false;
  }

  // =============================================================================
  // CSS CUSTOM PROPERTY UTILITIES
  // =============================================================================

  getCSSVariable(property) {
    return getComputedStyle(document.documentElement).getPropertyValue(`--${property}`).trim();
  }

  setCSSVariable(property, value) {
    document.documentElement.style.setProperty(`--${property}`, value);
    console.info(LOG_HEAD + `CSS variable set: --${property} = ${value}`);
  }

  // =============================================================================
  // THEME VALIDATION AND DEBUGGING
  // =============================================================================

  validateTheme(themeId) {
    const theme = this.themeMetadata.get(themeId);
    if (!theme) {
      return { valid: false, errors: ['Theme not found'] };
    }

    const errors = [];
    
    // Check required fields
    if (!theme.name) errors.push('Theme name is required');
    if (!theme.cssClass) errors.push('Theme CSS class is required');
    if (!theme.version) errors.push('Theme version is required');
    
    // Check CSS class exists in DOM
    const testElement = document.createElement('div');
    testElement.className = theme.cssClass;
    document.body.appendChild(testElement);
    
    const hasStyles = getComputedStyle(testElement).getPropertyValue('--anarchy-background-attributes');
    document.body.removeChild(testElement);
    
    if (!hasStyles) {
      errors.push('Theme CSS not loaded or invalid');
    }

    return {
      valid: errors.length === 0,
      errors,
      theme
    };
  }

  debugCurrentTheme() {
    const themeId = this.getThemeIdFromClass(this.currentTheme);
    const theme = this.themeMetadata.get(themeId);
    const validation = this.validateTheme(themeId);
    
    console.group(LOG_HEAD + 'Theme Debug Info');
    console.info('Current Theme:', theme);
    console.info('Validation:', validation);
    console.info('CSS Variables:', this.getCurrentThemeVariables());
    console.info('Customizations:', this.themeSettings.get(themeId));
    console.groupEnd();
    
    return {
      theme,
      validation,
      variables: this.getCurrentThemeVariables(),
      customizations: this.themeSettings.get(themeId)
    };
  }

  getCurrentThemeVariables() {
    const root = getComputedStyle(document.documentElement);
    const variables = {};
    
    // Get all CSS custom properties
    for (let i = 0; i < root.length; i++) {
      const property = root[i];
      if (property.startsWith('--')) {
        variables[property] = root.getPropertyValue(property).trim();
      }
    }
    
    return variables;
  }

  // =============================================================================
  // THEME CHANGE CALLBACK SYSTEM
  // =============================================================================

  onThemeChange(callback) {
    this.themeChangeCallbacks.add(callback);
    return () => this.themeChangeCallbacks.delete(callback);
  }

  // =============================================================================
  // IMPORT/EXPORT UTILITIES
  // =============================================================================

  exportThemeData() {
    return {
      themes: Array.from(this.themeMetadata.values()),
      currentTheme: this.currentTheme,
      customizations: game.settings.get(SYSTEM_NAME, 'theme-customizations'),
      userPreferences: game.settings.get(SYSTEM_NAME, 'user-theme-preferences'),
      systemInfo: {
        version: game.system.version,
        timestamp: new Date().toISOString()
      }
    };
  }

  importThemeCustomizations(data) {
    if (data.customizations) {
      game.settings.set(SYSTEM_NAME, 'theme-customizations', data.customizations);
    }
    
    if (data.userPreferences) {
      game.settings.set(SYSTEM_NAME, 'user-theme-preferences', data.userPreferences);
    }
    
    // Reapply current theme
    this.applyTheme(this.currentTheme);
    
    ui.notifications.info('Theme customizations imported successfully.');
  }

}