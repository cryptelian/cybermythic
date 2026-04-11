import { templatePath } from "../core/constants.js";
import { CharacterBaseSheet } from "./character-base-sheet.js";

/**
 * The active Foundry 13 character sheet.
 * Reuses the stable character data/actions contract while presenting a
 * single modern shell and tab structure.
 */
export class CharacterSheetV2 extends CharacterBaseSheet {
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...(super.DEFAULT_OPTIONS.classes ?? []),
        "anarchy-sheet-v2",
        "character",
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        title: "Character Sheet",
      },
      position: {
        width: 800,
        height: 700,
      },
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "overview",
        },
      ],
    };
  }

  static PARTS = {
    header: {
      template: templatePath("actor", "v2", "parts", "header.hbs"),
    },
    tabs: {
      template: templatePath("actor", "v2", "parts", "tabs.hbs"),
    },
    main: {
      template: templatePath("actor", "v2", "character.hbs"),
      scrollable: [".sheet-body"],
    },
  };

  get title() {
    return this.actor?.name || "Character Sheet";
  }
}
