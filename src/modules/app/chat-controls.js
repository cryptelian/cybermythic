import { renderTemplateSafe } from "../handlebars-utils.js";
import { ANARCHY } from "../core/config.js";
import { GMRollDiceDialog } from "./gm-roll-dice-dialog.js";

export class ChatControls {
  constructor() {
    this._rollDiceDialog = null;
    Hooks.on("renderChatLog", async (_app, html) =>
      this._injectChatControls(html),
    );
  }

  async _injectChatControls(html) {
    if (!game.user.isGM) return;

    console.log("Anarchy | Injecting Chat Controls");
    const templatePath = "systems/anarchy/templates/app/chat-tools.hbs";
    const templateData = {
      title: game.i18n.localize("ANARCHY.gmManager.title"),
      rollDice: game.i18n.localize("ANARCHY.chat_actions.rollDice.title"),
      isGM: game.user.isGM,
    };
    const templateHTML = await renderTemplateSafe(templatePath, templateData);
    const $chatForm = $(html).find("form.chat-form");

    // Ensure we don't have duplicate listeners if re-rendered
    $chatForm.off("click", ".rolldice");
    $chatForm.off("click", ".gmmanager");

    $chatForm.append(templateHTML);

    $chatForm.on("click", ".rolldice", (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("Anarchy | Rolldice button clicked");
      this._openRollDiceDialog();
    });

    $chatForm.on("click", ".gmmanager", (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("Anarchy | GM Manager button clicked");
      game.system.anarchy.gmManager.render({
        force: true,
        window: { title: game.i18n.localize(ANARCHY.gmManager.title) },
      });
    });
  }

  _openRollDiceDialog() {
    console.log("Anarchy | Opening Roll Dice Dialog");
    if (this._rollDiceDialog?.rendered) {
      this._rollDiceDialog.render({ force: true });
      return;
    }

    this._rollDiceDialog = new GMRollDiceDialog({
      onRoll: async (diceCount) => await this._executeDiceRoll(diceCount),
      onClose: () => (this._rollDiceDialog = null),
    });

    this._rollDiceDialog.render({ force: true });
  }

  async _executeDiceRoll(count) {
    const roll = new Roll(`${count}d6cs>4`);
    await roll.evaluate();

    const results = roll.terms?.[0]?.results ?? [];
    const ones = results.filter((it) => it.result == 1).length;

    const flavor = game.i18n.format("ANARCHY.chat_actions.rollDice.result", {
      count,
      success: roll.total,
      ones,
    });
    const message = await roll.toMessage({ flavor }, { create: false });

    await ChatMessage.create(message);
  }
}
