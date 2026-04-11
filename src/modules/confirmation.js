import { ANARCHY } from "./core/config.js";
import { Icons } from "./icons.js";
import { AnarchyApplicationV2 } from "./app/application-v2.js";
import { renderTemplateSafe } from "./handlebars-utils.js";
import { templatePath } from "./core/constants.js";

class SimpleConfirmDialog extends AnarchyApplicationV2 {
  constructor({ title, message, buttons, width = 320 }) {
    super({
      window: {
        title: title,
      },
      position: {
        width,
      },
    });

    this.message = message;
    this.buttons = buttons;
  }

  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...(super.DEFAULT_OPTIONS.classes ?? []),
        "anarchy-dialog",
        "confirmation-dialog",
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        positioned: true,
      },
      position: {
        height: "auto",
      },
    };
  }

  static PARTS = {
    main: {
      template: templatePath("dialog", "confirmation.hbs"),
    },
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    return {
      ...context,
      message: this.message,
      buttons: this.buttons,
    };
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);
    html.find("[data-action]").on("click", async (event) => {
      event.preventDefault();
      const action = event.currentTarget.dataset.action;
      const button = this.buttons[action];
      if (button?.callback) {
        await button.callback();
      }
      await this.close();
    });
  }
}

export class ConfirmationDialog {
  static async confirmDeleteItem(item, onConfirm = () => {}) {
    new SimpleConfirmDialog({
      title: game.i18n.localize(ANARCHY.common.confirmation.deleteItem.title),
      message: game.i18n.format(
        ANARCHY.common.confirmation.deleteItem.message,
        {
          name: item.name,
        },
      ),
      buttons: {
        yes: {
          icon: "fa-solid fa-check",
          label: game.i18n.localize(ANARCHY.common.yes),
          callback: onConfirm,
        },
        no: {
          icon: "fa-solid fa-times",
          label: game.i18n.localize(ANARCHY.common.no),
        },
      },
    }).render({ focus: true });
  }

  static async confirmDetachOwnerActor(owner, owned, onConfirm = () => {}) {
    new SimpleConfirmDialog({
      title: game.i18n.localize(ANARCHY.common.confirmation.detachOwner.title),
      message: game.i18n.format(
        ANARCHY.common.confirmation.detachOwner.message,
        {
          owner: owner.name,
          owned: owned.name,
        },
      ),
      buttons: {
        yes: {
          icon: "fa-solid fa-link-slash",
          label: game.i18n.localize(ANARCHY.common.yes),
          callback: onConfirm,
        },
        no: {
          icon: "fa-solid fa-times",
          label: game.i18n.localize(ANARCHY.common.no),
        },
      },
    }).render({ focus: true });
  }

  static async confirmAttachOrCopy(
    owner,
    owned,
    onAttach = () => {},
    onCopy = () => {},
  ) {
    new SimpleConfirmDialog({
      title: game.i18n.localize(ANARCHY.common.confirmation.attachOrCopy.title),
      message: game.i18n.format(
        ANARCHY.common.confirmation.attachOrCopy.message,
        {
          owner: owner.name,
          owned: owned.name,
        },
      ),
      buttons: {
        attach: {
          icon: "fa-solid fa-link",
          label: game.i18n.localize(
            ANARCHY.common.confirmation.attachOrCopy.attach,
          ),
          callback: onAttach,
        },
        copy: {
          icon: "fa-solid fa-copy",
          label: game.i18n.localize(
            ANARCHY.common.confirmation.attachOrCopy.copy,
          ),
          callback: onCopy,
        },
        cancel: {
          icon: "fa-solid fa-times",
          label: game.i18n.localize(ANARCHY.common.cancel),
        },
      },
      width: 400,
    }).render({ focus: true });
  }
}
