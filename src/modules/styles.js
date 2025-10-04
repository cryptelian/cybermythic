import { ANARCHY } from './config.js';
import { LOG_HEAD, SYSTEM_NAME } from './constants.js';
import { ANARCHY_HOOKS, HooksManager } from './hooks-manager.js';

const DEFAULT_CSS_CLASS = 'default-css-class';
const CSS_DEFAULT = 'style-anarchy-shadowrun';

const DEFAULT_STYLES = [
  { name: 'Shadowrun Anarchy', cssClass: CSS_DEFAULT },
  { name: 'Dark', cssClass: 'style-dark' },
  { name: 'Dark glass', cssClass: 'style-darkglass' },
];

/**
 * The Styles class manages the addition of different styles
 */
export class Styles {
  constructor() {
    this.availableStyles = {};
    HooksManager.register(ANARCHY_HOOKS.REGISTER_STYLES);

    Hooks.once(ANARCHY_HOOKS.REGISTER_STYLES, (register) =>
      DEFAULT_STYLES.forEach((it) => register(it.cssClass, it.name)),
    );
    Hooks.once('ready', () => this.onReady());
  }

  async onReady() {
    Hooks.callAll(
      ANARCHY_HOOKS.REGISTER_STYLES,
      (style, name) => (this.availableStyles[style] = name),
    );
    console.log(LOG_HEAD + 'Loaded styles', this.availableStyles);

    game.settings.register(SYSTEM_NAME, DEFAULT_CSS_CLASS, {
      scope: 'world',
      name: game.i18n.localize(ANARCHY.settings.defaultCssClass.name),
      hint: game.i18n.localize(ANARCHY.settings.defaultCssClass.hint),
      config: true,
      default: CSS_DEFAULT,
      choices: this.availableStyles,
      type: String,
    });
  }

  selectCssClass() {
    const style = game.settings.get(SYSTEM_NAME, DEFAULT_CSS_CLASS);
    return this.availableStyles[style] ? style : CSS_DEFAULT;
  }

  /**
   * Extract theme ID from a CSS class name
   * @param {string} cssClass - The CSS class name
   * @returns {string} The theme ID
   */
  getThemeIdFromClass(cssClass) {
    if (!cssClass) return 'default';

    // Map CSS classes to theme IDs
    const themeMap = {
      'style-anarchy-shadowrun': 'shadowrun',
      'style-dark': 'dark',
      'style-darkglass': 'darkglass',
      'default-css-class': 'default',
    };

    return themeMap[cssClass] || cssClass.replace(/^style-/, '').replace(/-/g, '_');
  }

  /**
   * Get the current theme ID
   * @returns {string} The current theme ID
   */
  getCurrentThemeId() {
    const cssClass = this.selectCssClass();
    return this.getThemeIdFromClass(cssClass);
  }
}
