import { TEMPLATES_PATH } from "../core/constants.js";
import { CharacterBaseSheet } from "./character-base-sheet.js";

export class CharacterNPCSheet extends CharacterBaseSheet {
  /** V2 PARTS - defines the template for this sheet */
  static PARTS = {
    main: {
      template: "systems/anarchy/templates/actor/npc-sheet.hbs",
      scrollable: [".window-content"],
    },
  };

  get template() {
    return `${TEMPLATES_PATH}/actor/npc-sheet.hbs`;
  }

  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 450,
        height: 550,
      },
    });
  }

  getData(options) {
    let hbsData = super.getData(options);
    hbsData.options.classes.push("npc-sheet");
    return hbsData;
  }
}
