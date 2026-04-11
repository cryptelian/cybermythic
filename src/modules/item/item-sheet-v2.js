import { templatePath } from "../core/constants.js";
import { AnarchyDocumentSheetV2 } from "../ui/document-sheet-v2.js";

/**
 * Canonical V13 item document sheet base.
 */
export class AnarchyItemSheetV2 extends AnarchyDocumentSheetV2 {
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: ["anarchy", "anarchy-app", "sheet", "item"],
      customizationScope: "item",
    };
  }

  /**
   * Alias for this.document to support legacy subclasses expecting 'this.item'
   */
  get item() {
    return this.document;
  }

  /**
   * Subclasses should override this with their item template.
   */
  static PARTS = {
    main: {
      template: templatePath("item", "item.hbs"),
      scrollable: [".window-content"],
    },
  };

  async _prepareContext(options = {}) {
    const context = await super._prepareContext(options);
    context.item = this.document;
    return context;
  }
}
