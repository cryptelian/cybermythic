// src/framework/ui/anarchy-shell.js
const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * The bedrock UI container for the Cybermythic system.
 * Enforces standardized layout, scrolling, and theme injection.
 */
export class AnarchyShell extends HandlebarsApplicationMixin(ApplicationV2) {
  static get DEFAULT_OPTIONS() {
    return {
      tag: "form",
      classes: ["anarchy-framework", "window-app"], // 'window-app' ensures Foundry window styling
      window: {
        frame: true,
        positioned: true,
        resizable: true,
        controls: [], // To be populated by subclasses
      },
      position: {
        width: 800,
        height: 700,
      },
      actions: {
        // Standard framework actions (collapse, expand, etc.)
      },
    };
  }

  static PARTS = {
    // Standard shell layout: Header -> Body (Scrollable) -> Footer (Optional)
    header: { template: "systems/anarchy/templates/framework/header.hbs" },
    body: {
      template: "systems/anarchy/templates/framework/body.hbs",
      scrollable: [".framework-body"],
    },
  };

  async _prepareContext(options) {
    // Base context for all Shell apps
    return {
      title: this.title,
      isEditable: this.isEditable,
      // Debug/Knob data placeholders
      debug: true,
    };
  }
}
