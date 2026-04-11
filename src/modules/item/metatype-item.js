import { ICONS_PATH } from "../core/constants.js";
import { AnarchyBaseItem } from "./document.js";

export class MetatypeItem extends AnarchyBaseItem {
  static get defaultIcon() {
    return `${ICONS_PATH}/vitruvian-man.svg`;
  }

  async onCreateItem(options, id) {
    this.parent?.removeOtherMetatype(this);
  }
}
