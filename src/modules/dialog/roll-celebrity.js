import { ANARCHY } from "../core/config.js";
import { templatePath } from "../core/constants.js";
import { Misc } from "../core/utils.js";
import { Modifiers } from "../modifiers/modifiers.js";
import { renderTemplateSafe } from "../handlebars-utils.js";
import { AnarchyApplicationV2 } from "../app/application-v2.js";

const HBS_TEMPLATE_CHAT_CELEBRITY_ROLL = templatePath(
  "chat",
  "celebrity-roll.hbs",
);
const HBS_TEMPLATE_ROLL_CELEBRITY = templatePath(
  "dialog",
  "roll-celebrite.hbs",
);
const HBS_TEMPLATE_ROLL_CELEBRITY_TITLE = templatePath(
  "dialog",
  "roll-celebrite-title.hbs",
);

export class RollCelebrity extends AnarchyApplicationV2 {
  static async create(actor) {
    const rollData = {
      actor: actor,
      celebrity: {
        labelkey: ANARCHY.actor.celebrity,
        value: actor.getCelebrityValue(),
      },
      modifiers: foundry.utils.mergeObject(
        { labelkey: ANARCHY.item.tabs.modifiers },
        Modifiers.computeModifiers(actor.items, "other", "celebrity"),
      ),
      other: {
        labelkey: ANARCHY.common.roll.modifiers.other,
        value: 0,
      },
      ANARCHY: ANARCHY,
    };

    const title = await renderTemplateSafe(
      HBS_TEMPLATE_ROLL_CELEBRITY_TITLE,
      rollData,
    );
    const dialog = new RollCelebrity(rollData, { title });
    dialog.render({ focus: true });
  }

  constructor(rollData, options = {}) {
    super({
      classes: [
        ...(options.classes ?? []),
        game.system.anarchy.styles.selectCssClass(),
        "anarchy-dialog",
        "roll-dialog",
      ],
      window: {
        title: options.title,
        positioned: true,
      },
      position: {
        width: 400,
        height: "auto",
      },
    });

    this.roll = rollData;
  }

  static PARTS = {
    main: {
      template: HBS_TEMPLATE_ROLL_CELEBRITY,
    },
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    return {
      ...context,
      ...this.roll,
    };
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);
    html.find(".input-celebrity-other").on("input", (event) => {
      this.roll.other.value = Number.parseInt(event.currentTarget.value) ?? 0;
    });

    html.find('[data-action="roll"]').on("click", async (event) => {
      event.preventDefault();
      await RollCelebrity.doRoll(this.roll);
      await this.close();
    });

    html.find('[data-action="cancel"]').on("click", async (event) => {
      event.preventDefault();
      await this.close();
    });
  }

  static async doRoll(rollData) {
    const parameters = [rollData.celebrity, rollData.modifiers, rollData.other];
    const pool = Misc.sumValues(parameters, (it) => it.value);
    const hbsCelebrityRoll = {
      actor: rollData.actor,
      parameters: parameters,
      pool: pool,
      options: {
        classes: [game.system.anarchy.styles.selectCssClass()],
      },
      ANARCHY: ANARCHY,
    };
    const roll = new Roll(`${pool}d6cs>=5`);
    roll.evaluateSync();

    const flavor = await renderTemplateSafe(
      HBS_TEMPLATE_CHAT_CELEBRITY_ROLL,
      hbsCelebrityRoll,
    );
    await roll.toMessage({ flavor: flavor });
  }

  // async roll() {
  //   const parameters = [
  //     this.roll.celebrity,
  //     this.roll.modifiers,
  //     this.roll.other
  //   ];
  //   const pool = Misc.sumValues(parameters, it => it.value);
  //   const hbsCelebrityRoll = {
  //     actor: this.roll.actor,
  //     parameters: parameters,
  //     pool: pool,
  //     options: {
  //       classes: [game.system.anarchy.styles.selectCssClass()]
  //     },
  //     ANARCHY: ANARCHY
  //   }
  //   const roll = new Roll(`${pool}d6cs>=5`);
  //   await roll.evaluate();

  //   const flavor = await renderTemplate(HBS_TEMPLATE_CHAT_CELEBRITY_ROLL, hbsCelebrityRoll);
  //   await roll.toMessage({ flavor: flavor });
  // }
}
