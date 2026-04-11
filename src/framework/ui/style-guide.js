// src/framework/ui/style-guide.js
import { AnarchyShell } from "./anarchy-shell.js";

export class StyleGuideApp extends AnarchyShell {
  static get DEFAULT_OPTIONS() {
    return {
      id: "anarchy-style-guide",
      title: "Cybermythic UI Framework",
      position: {
        width: 600,
        height: 800,
      },
    };
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    return {
      ...context,
      actor: {
        name: "Framework Debug",
        img: "icons/svg/mystery-man.svg",
      },
    };
  }
}
