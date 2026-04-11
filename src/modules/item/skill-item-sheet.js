import { BaseItemSheet } from "./sheet.js";
import { SkillItem } from "./skill-item.js";

export class SkillItemSheet extends BaseItemSheet {
  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);
    html.find(".select-skill-code").on("change", async (event) => {
      const skillCode = event.currentTarget.value;
      const updates = SkillItem.prepareSkill(skillCode);
      if (updates) {
        await this.object.update(updates);
      }
    });
  }
}
