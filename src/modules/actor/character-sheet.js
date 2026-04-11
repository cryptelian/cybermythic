import { templatePath } from "../core/constants.js";
import { CharacterBaseSheet } from "./character-base-sheet.js";

export class CharacterActorSheet extends CharacterBaseSheet {
  /** V2 PARTS - defines the template for this sheet */
  static PARTS = {
    main: {
      template: templatePath("actor", "character.hbs"),
      scrollable: [".window-content"],
    },
  };

  get template() {
    return templatePath("actor", "character.hbs");
  }

  /** @override */
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 720,
        height: 700,
      },
    });
  }
}
