// UI Customization Dialog - User interface for customizing UI/HUD elements
// This module provides a user-friendly interface for UI customization

import {
  LOG_HEAD,
  SYSTEM_NAME,
  iconAssetPath,
  systemAssetPath,
  templatePath,
} from "./core/constants.js";
import { AnarchyApplicationV2 } from "./app/application-v2.js";
import { renderTemplateSafe } from "./handlebars-utils.js";

/**
 * UI Customization Dialog - Provides user interface for customization
 */
export class UICustomizationDialog extends AnarchyApplicationV2 {
  constructor(uiCustomization, options = {}) {
    super({
      ...options,
      window: {
        title: "UI/HUD Customization",
      },
      position: {
        width: options.width ?? 600,
      },
    });

    this.uiCustomization = uiCustomization;
    this.currentSettings = {};
  }

  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...(super.DEFAULT_OPTIONS.classes ?? []),
        "anarchy-dialog",
        "ui-customization-dialog",
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        positioned: true,
        resizable: true,
      },
      position: {
        height: "auto",
      },
    };
  }

  _configureRenderOptions(options) {
    super._configureRenderOptions(options);
    options.parts = {
      main: {
        template: templatePath("dialog", "ui-customization.hbs"),
        scrollable: [".window-content"],
      },
    };
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options);

    await this.uiCustomization.loadUserCustomizations();

    // Prepare data
    foundry.utils.mergeObject(context, {
      categories: this._prepareCategories(),
      isGM: game.user.isGM,
      preview: {
        actor:
          game.user.character ||
          game.actors.find((a) => a.isOwner) ||
          game.actors.contents[0],
        passportImage: `/${systemAssetPath("img", "sample-character.webp")}`,
        skillIcon: `/${iconAssetPath("skills", "athletics.svg")}`,
      },
    });

    return context;
  }

  _prepareCategories() {
    const customizations = this.uiCustomization.customizations;
    const categories = {};

    for (const [key, config] of Object.entries(customizations)) {
      const category = config.category || "general";
      if (!categories[category]) {
        categories[category] = {
          id: category,
          label: game.i18n.localize(
            `ANARCHY.uiCustomization.categories.${category}`,
          ),
          items: [],
        };
      }

      categories[category].items.push({
        key,
        ...config,
        value:
          this.uiCustomization.getCustomization(category, key) ??
          config.default,
      });
    }

    return Object.values(categories);
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);

    html
      .find("input, select")
      .on("change", (event) => this._onSettingChange(event));
    html
      .find('button[data-action="reset"]')
      .on("click", (event) => this._onReset(event));
    html
      .find('button[data-action="save"]')
      .on("click", (event) => this._onSave(event));
  }

  async _onSettingChange(event) {
    // Live preview logic can go here
  }

  async _onReset(event) {
    event.preventDefault();
    await this.uiCustomization.resetCustomizations();
    this.render();
  }

  async _onSave(event) {
    event.preventDefault();
    // Implementation of save logic
    const FormDataExtendedClass = globalThis.FormDataExtended;
    if (!FormDataExtendedClass) {
      throw new Error("FormDataExtended is unavailable");
    }
    const formData = new FormDataExtendedClass(
      this.element.querySelector("form"),
    ).object;

    for (const [key, value] of Object.entries(formData)) {
      // Parse key structure if needed, e.g., "category.setting"
      // This is a simplified example
    }

    await this.close();
  }
}
