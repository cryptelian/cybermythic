import { ANARCHY } from "../core/config.js";
import { ANARCHY_SYSTEM, TEMPLATE, templatePath } from "../core/constants.js";
import { Enums } from "../core/enums.js";
import { Misc } from "../core/utils.js";
import { DiceCursor } from "./dice-cursor.js";
import { ROLL_PARAMETER_CATEGORY } from "./roll-parameters.js";
import { loadTemplatesSafe, renderTemplateSafe } from "../handlebars-utils.js";
import { AnarchyApplicationV2 } from "../app/application-v2.js";

const TEMPLATE_PATH_ROLL = templatePath("roll", "roll-dialog.hbs");
const TEMPLATE_PATH_TITLE = templatePath("roll", "roll-dialog-title.hbs");

export class RollDialog extends AnarchyApplicationV2 {
  static init() {
    Hooks.once("ready", async () => await this.onReady());
  }

  static async onReady() {
    await loadTemplatesSafe([
      templatePath("roll", "roll-parameters-category.hbs"),
      templatePath("roll", "parts", "generic.hbs"),
      templatePath("roll", "parts", "image-attribute.hbs"),
      templatePath("roll", "parts", "image-attributeAction.hbs"),
      templatePath("roll", "parts", "image-defense.hbs"),
      templatePath("roll", "parts", "image-skill.hbs"),
      templatePath("roll", "parts", "image-weapon.hbs"),
    ]);
  }

  static prepareActorRoll(actor, item = undefined) {
    return {
      actor: actor,
      tokenId: actor.token?.id,
      attributes: actor.getUsableAttributes(item),
      options: {
        canUseEdge: actor.canUseEdge(),
      },
    };
  }

  static async rollAttributeAction(actor, action) {
    const rollData = foundry.utils.mergeObject(
      RollDialog.prepareActorRoll(actor),
      {
        mode: ANARCHY_SYSTEM.rollType.attributeAction,
        attributeAction: action.code,
        attribute1: action.attributeFunction1(actor),
        attribute2: action.attributeFunction2(actor),
      },
    );
    await RollDialog.create(rollData);
  }

  static async rollAttribute(actor, attribute) {
    const rollData = foundry.utils.mergeObject(
      RollDialog.prepareActorRoll(actor),
      {
        mode: ANARCHY_SYSTEM.rollType.attribute,
        attribute1: attribute,
      },
    );
    await RollDialog.create(rollData);
  }

  static async rollSkill(actor, skill, specialization) {
    const rollData = foundry.utils.mergeObject(
      RollDialog.prepareActorRoll(actor),
      {
        mode: ANARCHY_SYSTEM.rollType.skill,
        skill: skill,
        attribute1: skill?.system.attribute ?? TEMPLATE.attributes.agility,
        specialization: specialization,
      },
    );
    await RollDialog.create(rollData);
  }

  static async rollWeapon(actor, skill, weapon, targeting) {
    const rollData = foundry.utils.mergeObject(
      RollDialog.prepareActorRoll(actor),
      {
        mode: ANARCHY_SYSTEM.rollType.weapon,
        weapon: weapon,
        skill: skill,
        attribute1: skill?.system.attribute ?? actor.getPhysicalAgility(),
        specialization: skill?.system.specialization,
        targeting: targeting,
      },
    );
    await RollDialog.create(rollData);
  }

  static async rollDefense(actor, action, attack, pilot = undefined) {
    const rollData = foundry.utils.mergeObject(
      RollDialog.prepareActorRoll(actor),
      {
        mode: ANARCHY_SYSTEM.rollType.defense,
        attribute1: action.attributeFunction1(actor),
        attribute2: action.attributeFunction2(actor),
        defenseAction: action.code,
        attackRoll: attack.attackRoll,
        tokenId: attack.defenderTokenId,
        choiceChatMessageId: attack.choiceChatMessageId,
      },
    );
    await RollDialog.create(rollData);
  }

  static async itemAttributeRoll(item, attribute) {
    const rollData = foundry.utils.mergeObject(
      RollDialog.prepareActorRoll(item.actor),
      {
        mode: ANARCHY_SYSTEM.rollType.attribute,
        item: item,
        attribute1: attribute,
        attributes: item.actor.getUsableAttributes(item),
      },
    );
    await RollDialog.create(rollData);
  }

  static async create(roll) {
    const rollParameters = game.system.anarchy.rollParameters
      .build(roll)
      .sort(Misc.ascending((p) => p.order ?? 200));
    foundry.utils.mergeObject(roll, {
      ENUMS: Enums.getEnums((attributeName) =>
        roll.attributes.includes(attributeName),
      ),
      ANARCHY: ANARCHY,
      parameters: rollParameters,
    });

    const title = await renderTemplateSafe(TEMPLATE_PATH_TITLE, roll);
    // V2: Content is handled by template parts now, but we keep this for consistency if needed
    // However, RollDialog uses a dynamic template part in V2.
    const dialog = new RollDialog(roll, { title });
    dialog.render({ focus: true });
  }

  constructor(roll, options = {}) {
    super({
      ...options,
      window: {
        title: options.title,
      },
      roll: roll,
    });

    this.roll = roll;
  }

  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...(super.DEFAULT_OPTIONS.classes ?? []),
        game.system.anarchy.styles.selectCssClass(),
        "anarchy-dialog",
        "roll-dialog",
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        positioned: true,
      },
      position: {
        width: 500,
        height: "auto",
      },
    };
  }

  static PARTS = {
    main: {
      template: TEMPLATE_PATH_ROLL,
    },
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    return {
      ...context,
      roll: this.roll,
      actor: this.roll.actor,
      parameters: this.roll.parameters,
      mode: this.roll.mode,
    };
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);
    this.html = html;
    this._bindControls(html);
  }

  _bindControls(html) {
    const submitButton = html.find('[data-action="roll"]').first();
    if (submitButton.length) {
      submitButton.on("click", async (event) => {
        event.preventDefault();
        await game.system.anarchy.rollManager.roll(this.roll);
        await this.close();
      });
    }

    this.html.find(".select-attribute-parameter").change(async (event) => {
      const parameter = this._getRollParameter(event);
      const item = this._getEventItem(event, this.roll.actor);
      const selected = event.currentTarget.value;
      const value = this.roll.actor.getAttributeValue(selected, item);
      this.roll[parameter.code] = selected;
      await this._setParameterSelectedOption(parameter, selected, value);
    });

    this.html.find(".check-optional").click(async (event) => {
      const parameter = this._getRollParameter(event);
      parameter.onChecked(parameter, event.currentTarget.checked);
      if (parameter.category == ROLL_PARAMETER_CATEGORY.pool) {
        await this._updateParameterValue(parameter, parameter.value);
      }
    });

    this.activateDiceParameterClick();

    this.html
      .find("input.parameter-value:not(:disabled)")
      .on("input", async (event) => {
        const parameter = this._getRollParameter(event);
        const value = Number.parseInt(event.currentTarget.value) ?? 0;
        await this._updateParameterValue(parameter, value);
      });

    this.html.find(".select-option-parameter").change(async (event) => {
      const parameter = this._getRollParameter(event);
      const selected = event.currentTarget.value;
      const value = Number.parseInt(selected);
      await this._setParameterSelectedOption(parameter, selected, value);
    });
  }

  activateDiceParameterClick() {
    this.html.find(".input-cursor-parameter a").on("click", async (event) => {
      const parameter = this._getRollParameter(event);
      if (parameter.flags?.editDice) {
        const clickedValue =
          Number.parseInt(
            this.html.find(event.currentTarget).attr("data-dice"),
          ) ?? 0;
        const value =
          parameter.value != clickedValue || clickedValue == 0
            ? clickedValue
            : clickedValue > 0
              ? clickedValue - 1
              : clickedValue + 1;
        await this._updateParameterValue(parameter, value);
      }
    });
  }

  async _setParameterSelectedOption(parameter, selected, value) {
    parameter.onChecked(parameter, selected);
    parameter.max = value;
    await this._updateParameterValue(parameter, value);
  }

  async _updateParameterValue(parameter, value) {
    parameter.onValue(parameter, value);

    this.html
      .find(
        `.parameter[data-parameter-code='${parameter.code}'] .parameter-value`,
      )
      .text(value);

    const diceCursorHtml = await this.renderDiceCursor(parameter);
    const diceCursor = this.html.find(
      `.parameter[data-parameter-code='${parameter.code}'] .input-cursor-parameter`,
    );
    diceCursor.empty().append(diceCursorHtml);
    this.activateDiceParameterClick();

    const inputs = this.html.find(
      `.parameter[data-parameter-code='${parameter.code}'] input.parameter-value`,
    );
    inputs.val(parameter.value);
  }

  async renderDiceCursor(parameter) {
    return await DiceCursor.diceCursor({
      value: parameter.value,
      min: parameter.min,
      max: parameter.max,
      editable: parameter.flags?.editDice,
    });
  }

  _getSelectedOption(parameter) {
    return this.html
      .find(
        `.parameter[data-parameter-code='${parameter.code}'] select.select-option-parameter option:selected`,
      )
      .text();
  }

  _getEventItem(event, actor) {
    const itemId = this.html
      .find(event.currentTarget)
      .closest(".parameter")
      .attr("data-item-id");
    return itemId ? actor.items.get(itemId) : undefined;
  }

  _getRollParameter(event) {
    const code = this.html
      .find(event.currentTarget)
      .closest(".parameter")
      .attr("data-parameter-code");
    return this.roll.parameters.find((it) => it.code == code);
  }
}
