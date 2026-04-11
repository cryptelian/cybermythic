import { BaseItemSheet } from "./sheet.js";

export class CyberdeckItemSheet extends BaseItemSheet {
  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);
    html.find("a.click-matrix-connectionMode").on("click", async (event) => {
      event.preventDefault();
      await this.item.nextConnectionMode();
    });
  }
}
