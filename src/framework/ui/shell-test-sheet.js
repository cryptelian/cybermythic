// src/framework/ui/shell-test-sheet.js
const { HandlebarsApplicationMixin } = foundry.applications.api;
const { DocumentSheetV2 } = foundry.applications.sheets;

/**
 * A test sheet for visualizing and testing the AnarchyShell UI container.
 * Only available when Developer Mode is enabled.
 *
 * This sheet displays:
 * - Header with avatar and identity
 * - Collapsible sections
 * - Monitor components (mockup)
 * - Various layout patterns
 *
 * NOTE: This extends DocumentSheetV2 (not AnarchyShell) because actor sheets
 * MUST extend DocumentSheetV2 to work with Foundry's actor system.
 * The AnarchyShell styling is applied via the 'anarchy-framework' CSS class.
 */
export class ShellTestSheet extends HandlebarsApplicationMixin(
  DocumentSheetV2,
) {
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      classes: ["anarchy-framework", "window-app", "shell-test"],
      window: {
        resizable: true,
      },
      position: {
        width: 800,
        height: 700,
      },
      form: {
        submitOnChange: true,
        closeOnSubmit: false,
      },
    });
  }

  static PARTS = {
    header: {
      template: "systems/anarchy/templates/framework/shell-test-header.hbs",
    },
    body: {
      template: "systems/anarchy/templates/framework/shell-test-body.hbs",
      scrollable: [".framework-body"],
    },
  };

  /** @override */
  get title() {
    return `🧪 ${this.document?.name || "Shell Test"} - Framework Preview`;
  }

  /** @override */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const actor = this.document;

    return {
      ...context,
      actor: {
        name: actor?.name || "Test Actor",
        img: actor?.img || "icons/svg/mystery-man.svg",
        type: actor?.type || "shell-test",
      },
      // Mock data for testing UI components
      mockMonitors: [
        { label: "Physical", value: 3, max: 10, type: "physical" },
        { label: "Stun", value: 1, max: 10, type: "stun" },
        { label: "Armor", value: 0, max: 9, type: "armor" },
      ],
      mockAttributes: [
        { label: "Strength", value: 4, abbrev: "STR" },
        { label: "Agility", value: 5, abbrev: "AGI" },
        { label: "Willpower", value: 3, abbrev: "WIL" },
        { label: "Logic", value: 4, abbrev: "LOG" },
        { label: "Charisma", value: 2, abbrev: "CHA" },
        { label: "Edge", value: 3, abbrev: "EDG" },
      ],
      mockSkills: [
        { name: "Athletics", value: 3, attribute: "AGI" },
        { name: "Firearms", value: 4, attribute: "AGI" },
        { name: "Hacking", value: 2, attribute: "LOG" },
        { name: "Negotiation", value: 1, attribute: "CHA" },
      ],
      mockGear: [
        { name: "Ares Predator V", type: "weapon", icon: "fa-crosshairs" },
        { name: "Armor Jacket", type: "gear", icon: "fa-shield" },
        { name: "Commlink", type: "gear", icon: "fa-mobile-alt" },
      ],
      sections: {
        identity: { open: true, label: "Identity" },
        attributes: { open: true, label: "Attributes" },
        monitors: { open: true, label: "Condition Monitors" },
        skills: { open: false, label: "Skills" },
        gear: { open: false, label: "Gear & Equipment" },
        debug: { open: false, label: "Debug Info" },
      },
      isEditable: this.isEditable,
      debug: true,
    };
  }
}
