import { templatePath } from "../core/constants.js";
import { AnarchyDocumentSheetV2 } from "../ui/document-sheet-v2.js";

/**
 * Canonical V13 actor document sheet base.
 */
export class AnarchyActorSheetV2 extends AnarchyDocumentSheetV2 {
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: ["anarchy", "anarchy-app", "sheet", "actor"],
      customizationScope: "actor",
    };
  }

  /**
   * Alias for this.document to support legacy subclasses expecting 'this.actor'
   */
  get actor() {
    return this.document;
  }

  /**
   * Subclasses should override this with their actor template.
   */
  static PARTS = {
    main: {
      template: templatePath("actor", "character.hbs"),
      scrollable: [".window-content"],
    },
  };

  async _prepareContext(options = {}) {
    const context = await super._prepareContext(options);
    context.actor = this.document;
    return context;
  }
}
