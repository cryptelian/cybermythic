import { templatePath } from "../core/constants.js";
import { AnarchyActorSheet } from "./sheet.js";

export class DeviceSheet extends AnarchyActorSheet {
  /** V2 PARTS - defines the template for this sheet */
  static PARTS = {
    main: {
      template: templatePath("actor", "device.hbs"),
      scrollable: [".window-content"],
    },
  };

  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 450,
        height: 550,
      },
    });
  }

  async getData(options) {
    const data = super.getData ? await super.getData(options) : {};
    return foundry.utils.mergeObject({}, data, { inplace: false });
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);
  }
}
