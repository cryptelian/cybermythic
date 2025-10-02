// UI Customization Dialog - User interface for customizing UI/HUD elements
// This module provides a user-friendly interface for UI customization

import { LOG_HEAD, SYSTEM_NAME, TEMPLATES_PATH } from './constants.js';

/**
 * UI Customization Dialog - Provides user interface for customization
 */
export class UICustomizationDialog extends Dialog {
  constructor(uiCustomization, options = {}) {
    const dialogData = {
      title: 'UI/HUD Customization',
      content: '',
      buttons: {
        apply: {
          label: 'Apply',
          callback: (html) => this.onApply(html)
        },
        reset: {
          label: 'Reset All',
          callback: () => this.onReset()
        },
        export: {
          label: 'Export',
          callback: () => this.onExport()
        },
        import: {
          label: 'Import',
          callback: () => this.onImport()
        },
        close: {
          label: 'Close'
        }
      },
      default: 'apply'
    };

    const dialogOptions = {
      classes: ['anarchy-dialog', 'ui-customization-dialog'],
      width: 600,
      height: 'auto',
      resizable: true,
      ...options
    };

    super(dialogData, dialogOptions);
    
    this.uiCustomization = uiCustomization;
    this.currentSettings = {};
  }

  async getData() {
    // Load current customization settings
    await this.uiCustomization.loadUserCustomizations();
    this.currentSettings = this.uiCustomization.userCustomizations;
    
    return {
      customizations: this.uiCustomization.customizations,
      presets: this.uiCustomization.getAvailablePresets(),
      currentSettings: this.currentSettings,
      categories: Array.from(this.uiCustomization.customizations.entries())
    };
  }

  async _renderInner(data) {
    const template = `
      <div class="ui-customization-content">
        <div class="customization-tabs">
          <nav class="tab-navigation">
            <button class="tab-button active" data-tab="presets">Presets</button>
            <button class="tab-button" data-tab="layout">Layout</button>
            <button class="tab-button" data-tab="visual">Visual</button>
            <button class="tab-button" data-tab="components">Components</button>
            <button class="tab-button" data-tab="hud">HUD</button>
            <button class="tab-button" data-tab="advanced">Advanced</button>
          </nav>
          
          <div class="tab-content">
            <!-- Presets Tab -->
            <div class="tab-panel active" data-tab="presets">
              <h3>Quick Presets</h3>
              <p>Apply pre-configured customization sets for common use cases.</p>
              <div class="preset-grid">
                {{#each presets}}
                <div class="preset-card" data-preset="{{id}}">
                  <h4>{{name}}</h4>
                  <p>{{description}}</p>
                  <button class="apply-preset-btn" data-preset="{{id}}">Apply</button>
                </div>
                {{/each}}
              </div>
            </div>
            
            <!-- Layout Tab -->
            <div class="tab-panel" data-tab="layout">
              <h3>Layout & Positioning</h3>
              <div class="customization-grid">
                <div class="setting-group">
                  <label>Sheet Width</label>
                  <select name="layout.sheetWidth">
                    <option value="auto">Auto</option>
                    <option value="compact">Compact</option>
                    <option value="wide">Wide</option>
                    <option value="full">Full Width</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Sheet Height</label>
                  <select name="layout.sheetHeight">
                    <option value="auto">Auto</option>
                    <option value="compact">Compact</option>
                    <option value="tall">Tall</option>
                    <option value="full">Full Height</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="layout.compactMode"> Compact Mode
                  </label>
                </div>
                <div class="setting-group">
                  <label>Tab Layout</label>
                  <select name="layout.tabLayout">
                    <option value="horizontal">Horizontal</option>
                    <option value="vertical">Vertical</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Visual Tab -->
            <div class="tab-panel" data-tab="visual">
              <h3>Visual Appearance</h3>
              <div class="customization-grid">
                <div class="setting-group">
                  <label>Font Size</label>
                  <select name="visual.fontSize">
                    <option value="small">Small</option>
                    <option value="default">Default</option>
                    <option value="large">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Icon Size</label>
                  <select name="visual.iconSize">
                    <option value="small">Small</option>
                    <option value="default">Default</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Element Spacing</label>
                  <select name="visual.spacing">
                    <option value="tight">Tight</option>
                    <option value="default">Default</option>
                    <option value="loose">Loose</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Animation Speed</label>
                  <select name="visual.animationSpeed">
                    <option value="none">None</option>
                    <option value="fast">Fast</option>
                    <option value="normal">Normal</option>
                    <option value="slow">Slow</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Shadow Intensity</label>
                  <select name="visual.shadowIntensity">
                    <option value="none">None</option>
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                    <option value="strong">Strong</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Components Tab -->
            <div class="tab-panel" data-tab="components">
              <h3>Component Visibility</h3>
              <div class="customization-grid">
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showPassportImages"> Show Passport Images
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showItemImages"> Show Item Images
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showSkillIcons"> Show Skill Icons
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showTooltips"> Show Tooltips
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showAnimations"> Show Animations
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showShadows"> Show Shadows
                  </label>
                </div>
              </div>
            </div>
            
            <!-- HUD Tab -->
            <div class="tab-panel" data-tab="hud">
              <h3>HUD Elements</h3>
              <div class="customization-grid">
                <div class="setting-group">
                  <label>HUD Size</label>
                  <select name="hud.hudSize">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>GM Manager Position</label>
                  <select name="hud.gmManagerPosition">
                    <option value="top-left">Top Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="bottom-right">Bottom Right</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Shortcut Position</label>
                  <select name="hud.shortcutPosition">
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="hud.hideInactiveElements"> Hide Inactive Elements
                  </label>
                </div>
              </div>
            </div>
            
            <!-- Advanced Tab -->
            <div class="tab-panel" data-tab="advanced">
              <h3>Advanced Customization</h3>
              <div class="customization-grid">
                <div class="setting-group full-width">
                  <label>Custom CSS</label>
                  <textarea name="advanced.customCSS" rows="10" placeholder="Enter custom CSS rules..."></textarea>
                  <small>Advanced users can add custom CSS rules here. Use with caution.</small>
                </div>
                <div class="setting-group">
                  <button type="button" class="validate-css-btn">Validate CSS</button>
                  <button type="button" class="clear-css-btn">Clear CSS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="customization-preview">
          <h4>Live Preview</h4>
          <div class="preview-area">
            <div class="preview-sheet">
              <div class="preview-header">
                <div class="preview-passport">
                  <img src="systems/anarchy/img/sample-character.webp" alt="Preview">
                </div>
                <div class="preview-info">
                  <h3>Sample Character</h3>
                  <div class="preview-attributes">
                    <div class="attribute-box">
                      <span class="attribute-label">AGI</span>
                      <span class="attribute-value">4</span>
                    </div>
                    <div class="attribute-box">
                      <span class="attribute-label">STR</span>
                      <span class="attribute-value">3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="preview-content">
                <div class="preview-section">
                  <h4>Skills</h4>
                  <div class="preview-item">
                    <img src="systems/anarchy/icons/skills/athletics.svg" alt="Athletics">
                    <span>Athletics</span>
                    <span class="skill-rating">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    return template;
  }

  activateListeners(html) {
    super.activateListeners(html);
    
    // Tab navigation
    html.find('.tab-button').click(event => {
      const tabId = $(event.currentTarget).data('tab');
      this.switchTab(html, tabId);
    });
    
    // Preset application
    html.find('.apply-preset-btn').click(event => {
      const presetId = $(event.currentTarget).data('preset');
      this.applyPreset(presetId);
    });
    
    // Live preview updates
    html.find('select, input[type="checkbox"], textarea').change(event => {
      this.updateLivePreview(html);
    });
    
    // CSS validation
    html.find('.validate-css-btn').click(() => {
      this.validateCustomCSS(html);
    });
    
    // Clear CSS
    html.find('.clear-css-btn').click(() => {
      html.find('textarea[name="advanced.customCSS"]').val('');
      this.updateLivePreview(html);
    });
  }

  switchTab(html, tabId) {
    // Update tab buttons
    html.find('.tab-button').removeClass('active');
    html.find(`.tab-button[data-tab="${tabId}"]`).addClass('active');
    
    // Update tab panels
    html.find('.tab-panel').removeClass('active');
    html.find(`.tab-panel[data-tab="${tabId}"]`).addClass('active');
  }

  updateLivePreview(html) {
    // Collect current form values
    const formData = new FormData(html.find('form')[0]);
    const settings = {};
    
    for (let [key, value] of formData.entries()) {
      const [category, setting] = key.split('.');
      if (!settings[category]) settings[category] = {};
      
      // Handle different input types
      if (html.find(`input[name="${key}"]`).attr('type') === 'checkbox') {
        settings[category][setting] = html.find(`input[name="${key}"]`).is(':checked');
      } else {
        settings[category][setting] = value;
      }
    }
    
    // Apply to preview area
    this.applyPreviewSettings(html, settings);
  }

  applyPreviewSettings(html, settings) {
    const previewArea = html.find('.preview-area');
    
    // Apply font scaling
    if (settings.visual?.fontSize) {
      const fontScale = { small: '0.85', default: '1', large: '1.15', xl: '1.3' }[settings.visual.fontSize];
      previewArea.css('--font-scale', fontScale);
    }
    
    // Apply icon scaling
    if (settings.visual?.iconSize) {
      const iconScale = { small: '0.8', default: '1', large: '1.2' }[settings.visual.iconSize];
      previewArea.css('--icon-scale', iconScale);
    }
    
    // Apply spacing
    if (settings.visual?.spacing) {
      const spacingScale = { tight: '0.75', default: '1', loose: '1.25' }[settings.visual.spacing];
      previewArea.css('--spacing-scale', spacingScale);
    }
    
    // Apply component visibility
    if (settings.components) {
      Object.entries(settings.components).forEach(([key, visible]) => {
        const className = `hide-${key.replace(/([A-Z])/g, '-$1').toLowerCase().replace('show-', '')}`;
        
        if (!visible) {
          previewArea.addClass(className);
        } else {
          previewArea.removeClass(className);
        }
      });
    }
  }

  async onApply(html) {
    console.groupCollapsed(LOG_HEAD + 'UICustomizationDialog.onApply');
    
    // Collect all form data
    const formData = new FormData(html.find('form')[0]);
    const settings = {};
    
    for (let [key, value] of formData.entries()) {
      const [category, setting] = key.split('.');
      if (!settings[category]) settings[category] = {};
      
      // Handle different input types
      if (html.find(`input[name="${key}"]`).attr('type') === 'checkbox') {
        settings[category][setting] = html.find(`input[name="${key}"]`).is(':checked');
      } else {
        settings[category][setting] = value;
      }
    }
    
    // Apply each category of settings
    Object.entries(settings).forEach(([category, categorySettings]) => {
      Object.entries(categorySettings).forEach(([key, value]) => {
        this.uiCustomization.setCustomization(category, key, value);
      });
    });
    
    ui.notifications.info('UI customizations applied successfully.');
    console.groupEnd();
  }

  onReset() {
    Dialog.confirm({
      title: 'Reset All Customizations',
      content: '<p>Are you sure you want to reset all UI customizations to defaults? This cannot be undone.</p>',
      yes: () => {
        this.uiCustomization.resetAllCustomizations();
        this.render(true); // Re-render dialog with default values
      }
    });
  }

  onExport() {
    const exportData = this.uiCustomization.exportCustomizations();
    const dataStr = JSON.stringify(exportData, null, 2);
    
    // Create download link
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `anarchy-ui-customizations-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    ui.notifications.info('UI customizations exported successfully.');
  }

  onImport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importData = JSON.parse(e.target.result);
          this.uiCustomization.importCustomizations(importData);
          this.render(true); // Re-render dialog with imported values
        } catch (error) {
          ui.notifications.error('Failed to import customizations: Invalid file format.');
          console.error(LOG_HEAD + 'Import error:', error);
        }
      };
      reader.readAsText(file);
    };
    
    input.click();
  }

  applyPreset(presetId) {
    Dialog.confirm({
      title: 'Apply Preset',
      content: `<p>Apply the "${this.uiCustomization.presets.get(presetId).name}" preset? This will override your current customizations.</p>`,
      yes: () => {
        this.uiCustomization.applyPreset(presetId);
        this.render(true); // Re-render dialog with preset values
      }
    });
  }

  validateCustomCSS(html) {
    const css = html.find('textarea[name="advanced.customCSS"]').val();
    
    if (!css.trim()) {
      ui.notifications.info('No custom CSS to validate.');
      return;
    }
    
    try {
      // Basic CSS validation
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
      document.head.removeChild(style);
      
      ui.notifications.info('Custom CSS is valid.');
    } catch (error) {
      ui.notifications.error('Custom CSS contains errors. Please check your syntax.');
      console.error(LOG_HEAD + 'CSS validation error:', error);
    }
  }

  // =============================================================================
  // STATIC METHODS
  // =============================================================================

  static async show(uiCustomization) {
    const dialog = new UICustomizationDialog(uiCustomization);
    return dialog.render(true);
  }
}
