import { AnarchyApplicationV2 } from "./application-v2.js";
import { templatePath } from "../core/constants.js";

const GM_ROLL_DICE_TEMPLATE = templatePath("app", "gm-roll-dice.hbs");

export class GMRollDiceDialog extends AnarchyApplicationV2 {
  constructor({ onRoll, onClose }) {
    super({ customizationScope: "gm-roll-dice" });
    this.onRoll = onRoll ?? (() => {});
    this._onCloseCallback = onClose ?? (() => {});
  }

  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      id: "gm-roll-dice",
      classes: [
        ...(super.DEFAULT_OPTIONS.classes ?? []),
        "anarchy-dialog",
        "gm-roll-dice",
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        title: game.i18n.localize("ANARCHY.chat_actions.rollDice.title"),
        resizable: false,
      },
      position: {
        width: 320,
        height: "auto",
      },
    };
  }

  static PARTS = {
    main: {
      template: GM_ROLL_DICE_TEMPLATE,
    },
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    return {
      ...context,
      instruction: game.i18n.localize(
        "ANARCHY.chat_actions.rollDice.instruction",
      ),
      cancel: game.i18n.localize("ANARCHY.common.cancel"),
      roll: game.i18n.localize("ANARCHY.common.roll.button"),
    };
  }

  async activateListeners(element) {
    await super.activateListeners(element);
    const html = element instanceof jQuery ? element : $(element);

    html.on("submit", "form.gm-roll-dice-form", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this._onSubmit(event);
    });

    html.on("click", ".gm-roll-dice-cancel", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this._onCancel(event);
    });
  }

  async close(options) {
    await super.close(options);
    this._onCloseCallback();
    return this;
  }

  async _onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.querySelector('input[name="macro-roll-count-dice"]');
    const value = Number.parseInt(input?.value ?? "0", 10);

    if (!Number.isInteger(value) || value <= 0) {
      ui.notifications.warn(
        game.i18n.localize("ANARCHY.chat_actions.rollDice.error"),
      );
      return;
    }

    await this.onRoll(value);
    await this.close();
  }

  async _onCancel(event) {
    event.preventDefault();
    await this.close();
  }
}
