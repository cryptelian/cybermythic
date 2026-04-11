import { SYSTEM_NAME, templatePath } from "../core/constants.js";
import { actorTabClosed, ifTabClosed } from "../ui/section-state.js";
import { CharacterBaseSheet } from "./character-base-sheet.js";
// Styles are loaded through main.scss -> components/_character-enhanced.scss

export class CharacterEnhancedSheet extends CharacterBaseSheet {
  /** V2 PARTS - defines the template for this sheet */
  static PARTS = {
    main: {
      template: templatePath("actor", "character-enhanced.hbs"),
      scrollable: [".window-content"],
    },
  };

  get template() {
    return templatePath("actor", "character-enhanced.hbs");
  }

  /** @override */
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 800,
        height: 700,
      },
    });
  }

  async getData(options) {
    const data = (await super.getData(options)) ?? {};
    // Get user flags for this system (flags is an object, not async)
    data.flags = game.user.flags?.[SYSTEM_NAME] ?? {};
    return data;
  }

  async activateListeners(element) {
    // Normalize to jQuery for compatibility with parent class
    const html = element instanceof jQuery ? element : $(element);
    await super.activateListeners(html);

    const el = html[0];
    // Apply enhanced sheet specific UI customizations alongside ApplicationV2 mixin handling.
    if (el && game.system.anarchy?.uiCustomization) {
      game.system.anarchy.uiCustomization.applyCustomizationsToElement(
        el,
        "character-enhanced",
      );
    }

    const actorId = this.actor.id;

    html.find(".click-section").on("click", async (event) => {
      const sectionClass = $(event.currentTarget).data("class");
      const section = html.find(`.${sectionClass}`);
      section.toggleClass("closed");
      const state = section.hasClass("closed") ? "closed" : null;
      const sectionName = String(sectionClass).replace(/^section-/, "");
      await game.user.setFlag(
        SYSTEM_NAME,
        `${actorId}-section-${sectionName}`,
        state,
      );
    });
  }

  /**
   * Handlebars helper - returns 'closed' CSS class if section is collapsed.
   * Used as: {{actorTabClosed actor._id 'sectionName'}}
   */
  static actorTabClosed(id, sectionName, options) {
    return actorTabClosed(id, sectionName, options);
  }

  /**
   * Alias for actorTabClosed
   */
  static ifTabClosed(id, sectionName, options) {
    return ifTabClosed(id, sectionName, options);
  }
}
