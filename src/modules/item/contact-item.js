import { ICONS_PATH } from "../core/constants.js";
import { AnarchyBaseItem } from "./document.js";

export class ContactItem extends AnarchyBaseItem {
  static get defaultIcon() {
    return `${ICONS_PATH}/contacts/contact.svg`;
  }
}
