import { TEMPLATES_PATH } from "../core/constants.js";
import { CharacterBaseSheet } from "./character-base-sheet.js";

export class CharacterTabbedSheet extends CharacterBaseSheet {
  /** V2 PARTS - defines the template for this sheet */
  static PARTS = {
    main: {
      template: "systems/anarchy/templates/actor/character-tabbed.hbs",
      scrollable: [".window-content"],
    },
  };

  get template() {
    return `${TEMPLATES_PATH}/actor/character-tabbed.hbs`;
  }

  /** @override */
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 720,
        height: 700,
      },
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main",
        },
      ],
    });
  }

  getData(options) {
    let hbsData = super.getData(options);
    hbsData.options.classes.push("tabbed-sheet");
    return hbsData;
  }
}
