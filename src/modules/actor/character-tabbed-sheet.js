import { templatePath } from "../core/constants.js";
import { CharacterBaseSheet } from "./character-base-sheet.js";

export class CharacterTabbedSheet extends CharacterBaseSheet {
  /** V2 PARTS - defines the template for this sheet */
  static PARTS = {
    main: {
      template: templatePath("actor", "character-tabbed.hbs"),
      scrollable: [".window-content"],
    },
  };

  get template() {
    return templatePath("actor", "character-tabbed.hbs");
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

  async getData(options) {
    let hbsData = await super.getData(options);
    hbsData.options.classes.push("tabbed-sheet");
    return hbsData;
  }
}
