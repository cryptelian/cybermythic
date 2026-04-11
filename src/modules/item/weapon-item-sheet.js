import { AttributeActions } from "../attribute-actions.js";
import { BaseItemSheet } from "./sheet.js";

export class WeaponItemSheet extends BaseItemSheet {
  async getData(options) {
    const base = super.getData ? await super.getData(options) : {};
    const hbsData = foundry.utils.mergeObject(base, {
      hasDrain: this.item.hasDrain,
      hasConvergence: this.item.hasConvergence,
    });
    hbsData.ENUMS = foundry.utils.mergeObject(
      { defenses: AttributeActions.getDefenses() },
      hbsData.ENUMS,
    );
    return hbsData;
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);
    html.find(".select-weapon-skill").on("change", async (event) => {
      const skillCode = event.currentTarget.value;
      const skill = game.system.anarchy.skills.get(skillCode);
      if (skill) {
        await this.object.update(
          { "system.defense": skill.defense },
          { render: false },
        );
      }
    });
  }
}
