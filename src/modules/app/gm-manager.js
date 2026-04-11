import { HandleDragApplication } from "./handle-drag.js";
import { AnarchyApplicationV2 } from "./application-v2.js";
import { ANARCHY } from "../core/config.js";
import { SYSTEM_NAME, templatePath } from "../core/constants.js";
import { GMDifficulty } from "./gm-difficulty.js";
// import '../../styles/gm-manager.scss'; // Legacy styles removed

const GM_MANAGER = "gm-manager";
const GM_MANAGER_POSITION = "gm-manager-position";
const GM_MANAGER_INITIAL_POSITION = { top: 200, left: 200 };
const GM_MANAGER_TEMPLATE = templatePath("app", "gm-manager.hbs");

export class GMManager extends AnarchyApplicationV2 {
  constructor(gmAnarchy, gmConvergence) {
    super({
      customizationScope: "gm-manager",
      dragHandleSelector: ".app-title-bar",
    });
    this.gmAnarchy = gmAnarchy;
    this.gmConvergence = gmConvergence;
    this.gmDifficulty = new GMDifficulty();
    this.handleDrag = new HandleDragApplication(
      (doc) => doc.getElementById(GM_MANAGER),
      {
        initial: GM_MANAGER_INITIAL_POSITION,
        maxPos: { left: 200, top: 100 },
        settings: {
          system: SYSTEM_NAME,
          keyPosition: GM_MANAGER_POSITION,
        },
      },
    );
    this.setDragController(this.handleDrag);

    Hooks.once("ready", () => this.onReady());
  }

  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      id: GM_MANAGER,
      window: {
        ...super.DEFAULT_OPTIONS.window,
        title: game.i18n.localize(ANARCHY.gmManager.title),
        controls: [
          {
            icon: "fa-solid fa-eye-slash",
            label: "Hide",
            action: "hide",
          },
        ],
        resizable: true,
      },
      classes: [
        ...(super.DEFAULT_OPTIONS.classes ?? []),
        "anarchy-sheet-v2",
        "gm-manager",
      ],
      position: {
        width: 300, // Fixed width for GM manager
        height: "auto",
      },
      actions: {
        hide: GMManager.prototype._onHide,
      },
    };
  }

  static PARTS = {
    main: {
      template: GM_MANAGER_TEMPLATE,
    },
  };

  _onHide() {
    this.close();
  }

  async render(force, options) {
    if (!game.user.isGM) {
      return this.close();
    }
    return super.render(force, options);
  }

  onReady() {
    if (game.user.isGM) {
      this.render({ force: true, focus: true });
    }
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options);

    return foundry.utils.mergeObject(
      context,
      {
        anarchy: this.gmAnarchy.getAnarchy(),
        convergences: this.gmConvergence.getConvergences(),
        difficultyPools: this.gmDifficulty.getDifficultyData(),
        ANARCHY: ANARCHY,
        options: {
          ...context.options,
          classes: foundry.utils.deepClone(context.options?.classes ?? []),
        },
      },
      { inplace: false },
    );
  }

  async activateListeners(element) {
    await super.activateListeners(element);
    const html = $(element);

    await this.gmAnarchy.activateListeners(html);
    await this.gmConvergence.activateListeners(html);
    await this.gmDifficulty.activateListeners(html);
  }

  // V2 Compatibility: Ensure sidebar click can re-open the app
  async _render(force, options) {
    this._closing = false; // Reset closing flag if any
    return super._render(force, options);
  }

  async close(options) {
    this._closing = true;
    await super.close(options);
    return this;
  }
}
