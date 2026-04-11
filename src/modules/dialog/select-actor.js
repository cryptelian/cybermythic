import { templatePath } from "../core/constants.js";
import { AnarchyApplicationV2 } from "../app/application-v2.js";

export class SelectActor extends AnarchyApplicationV2 {
  static async selectActor(
    title,
    actors,
    onActorSelected = async (actor) => {},
    onCancel = async () => {},
  ) {
    const dialog = new SelectActor(actors, onActorSelected, onCancel, {
      title,
    });
    dialog.render({ focus: true });
  }

  constructor(actors, onActorSelected, onCancel, options = {}) {
    super({
      ...options,
      window: {
        title: options.title,
      },
    });
    this.actors = actors;
    this.onActorSelected = onActorSelected;
    this.onCancel = onCancel;
  }

  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...(super.DEFAULT_OPTIONS.classes ?? []),
        game.system.anarchy.styles.selectCssClass(),
        "select-actor",
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        positioned: true,
      },
      position: {
        width: 320,
        height: "auto",
      },
      tag: "div", // or form if appropriate
    };
  }

  static PARTS = {
    main: {
      template: templatePath("dialog", "select-actor.hbs"),
      scrollable: [".window-content"],
    },
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    return {
      ...context,
      actors: this.actors,
    };
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);
    html
      .find(".click-select-actor")
      .on("click", (event) => this.onSelectActor(event));
    html.find('[data-action="cancel"]').on("click", async (event) => {
      event.preventDefault();
      await this.onCancel?.();
      await this.close();
    });
  }

  async onSelectActor(event) {
    const actorId = $(event.currentTarget).attr("data-actor-id");
    const actor = this.actors.find((it) => it.id == actorId);
    if (actor) {
      this.onActorSelected(actor);
      this.close();
    }
  }
}
