import { ICONS_PATH } from "../core/constants.js";
import { AnarchyBaseItem } from "./document.js";

export class QualityItem extends AnarchyBaseItem {
  static get defaultIcon() {
    return `${ICONS_PATH}/quality-positive.svg`;
  }
}
