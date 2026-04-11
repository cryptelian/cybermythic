import { ICONS_PATH } from "../core/constants.js";
import { AnarchyBaseItem } from "./document.js";

export class GearItem extends AnarchyBaseItem {
  static get defaultIcon() {
    return `${ICONS_PATH}/gear/gear.svg`;
  }
}
