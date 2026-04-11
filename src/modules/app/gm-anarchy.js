import { Checkbars } from "../common/checkbars.js";
import { ANARCHY } from "../core/config.js";
import { SYSTEM_NAME, TEMPLATE, templatePath } from "../core/constants.js";
import { ErrorManager } from "../core/errors.js";
import { RemoteCall } from "../remotecall.js";
import { renderTemplateSafe } from "../handlebars-utils.js";

const GM_ANARCHY = "anarchy-gm";
const GM_SCENE_ANARCHY = "scene-anarchy-gm";
const GM_ADD_ANARCHY = "GMAnarchy.addAnarchy";

export class GMAnarchy {
  constructor() {
    game.settings.register(SYSTEM_NAME, GM_ANARCHY, {
      scope: "world",
      config: false,
      default: 1,
      type: Number,
    });
    game.settings.register(SYSTEM_NAME, GM_SCENE_ANARCHY, {
      scope: "world",
      config: false,
      default: 0,
      type: Number,
    });

    RemoteCall.register(GM_ADD_ANARCHY, {
      callback: (data) => game.system.anarchy.gmAnarchy.addAnarchy(data),
      condition: (user) => user.isGM,
    });
    this.anarchy = game.settings.get(SYSTEM_NAME, GM_ANARCHY);
  }

  getAnarchy() {
    return {
      isGM: true,
      value: this.anarchy,
      max: this.anarchy + 1,
      scene: 0,
    };
  }

  async actorGivesAnarchyToGM(actor, count) {
    if (count > 0) {
      ChatMessage.create({
        user: game.user,
        whisper: ChatMessage.getWhisperRecipients("GM"),
        content: game.i18n.format(ANARCHY.gmManager.gmReceivedAnarchy, {
          anarchy: count,
          actor: actor.name,
        }),
      });
      await this.addAnarchy(count);
    }
  }

  async npcConsumesAnarchy(actor, count) {
    await this.addAnarchy(-count);
  }

  async addAnarchy(count) {
    if (!RemoteCall.call(GM_ADD_ANARCHY, count)) {
      ErrorManager.checkSufficient(
        ANARCHY.actor.counters.plot,
        -count,
        this.anarchy,
      );
      await this.setAnarchy(this.anarchy + count);
    }
  }

  async setAnarchy(newAnarchy) {
    this.anarchy = newAnarchy;
    game.settings.set(SYSTEM_NAME, GM_ANARCHY, newAnarchy);
    await this._rebuild();
    this._syncGMAnarchySheets();
  }

  async activateListeners(html) {
    this.toolbar = html.find(".gm-anarchy-bar");
    await this._rebuild();
  }

  async _rebuild() {
    this.toolbar.find(".checkbar-root").replaceWith(await this._renderBar());
    this.toolbar.off("click", "a.click-checkbar-element");
    this.toolbar.on("click", "a.click-checkbar-element", async (event) => {
      event.preventDefault();
      await this._onClickAnarchyCheckbar(event);
    });
  }

  async _onClickAnarchyCheckbar(event) {
    const index = Number.parseInt($(event.currentTarget).attr("data-index"));
    const isChecked = $(event.currentTarget).attr("data-checked") == "true";
    const currentAnarchy = this.anarchy;

    // Logic:
    // If clicking an empty slot (index >= currentAnarchy), we are adding a point.
    // If clicking a filled slot (index < currentAnarchy), we are removing a point (or setting to that level).
    // The standard Checkbars.newValue usually toggles.
    // Let's implement the requested logic: "click deactivated to activate+spawn, click activated to deactivate+despawn"

    let newAnarchy = currentAnarchy;
    if (isChecked) {
      // Clicked an activated token -> Deactivate (remove 1)
      // If we click the last one, remove 1. If we click a middle one, usually we set to that index.
      // Request says "deactivate+despawn". This implies reducing the count.
      // Let's assume reducing by 1 for now if it's the last one, or setting to index if standard.
      // But "despawn" suggests the pool shrinks.
      // If I click index 0 (1st token), and I have 5, do I go to 0 or 4?
      // Standard usage: click the one you want to be the new max.
      // If I click 3rd token (index 2) and it is active, and I want to deactivate it, I probably want to set value to 2.
      newAnarchy = index;
    } else {
      // Clicked a deactivated token -> Activate (add 1)
      // If I click index 5 and current is 5, I want 6.
      newAnarchy = index + 1;
    }

    await this.setAnarchy(newAnarchy);
  }

  async _renderBar() {
    return await renderTemplateSafe(templatePath("monitors", "anarchy.hbs"), {
      code: "plot",
      rowlength: 10,
      value: this.getAnarchy().value,
      max: this.getAnarchy().max,
      scene: 0,
      labelkey: ANARCHY.actor.counters.plot,
    });
  }

  _syncGMAnarchySheets() {
    const linkedActors = game.actors.filter(
      (actor) => !actor.token || actor.token.isLinked,
    );
    const unlinkedActors = (game.canvas?.tokens?.getDocuments() ?? [])
      .filter((t) => !t.isLinked)
      .map((t) => t.actor);

    linkedActors
      .concat(unlinkedActors)
      .filter((actor) => !actor.hasPlayerOwner)
      .forEach((actor) => actor.render());
  }
}
