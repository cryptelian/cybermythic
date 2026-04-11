import { ICONS_PATH } from "../core/constants.js";
import { AnarchyBaseItem } from "./document.js";

export class ShadowampItem extends AnarchyBaseItem {
  static get defaultIcon() {
    return `${ICONS_PATH}/shadowamps/other.svg`;
  }
}
