import { ANARCHY } from "../core/config.js";
import { AnarchyActorSheet } from "./sheet.js";
import { templatePath } from "../core/constants.js";

export class CharacterBaseSheet extends AnarchyActorSheet {
  /** V2 PARTS - defines the template for this sheet */
  static PARTS = {
    main: {
      template: templatePath("actor", "character.hbs"),
      scrollable: [".window-content"],
    },
  };

  get template() {
    return templatePath("actor", "character.hbs");
  }

  /** @override */
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 720,
        height: 700,
      },
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main",
        },
      ],
    });
  }

  /** @deprecated Use DEFAULT_OPTIONS */
  static get defaultOptions() {
    return this.DEFAULT_OPTIONS;
  }

  async getData(options) {
    if (this.viewMode == undefined) {
      this.viewMode = true;
    }
    // Call parent getData() to get base context
    const parentData = await super.getData(options);

    // Add essence data for templates
    const essence = this.actor.computeEssence();
    const hbsData = foundry.utils.mergeObject(parentData, {
      essence: {
        value: essence,
        adjust: this.actor.computeMalusEssence(essence),
      },
      options: {
        viewMode: this.viewMode,
      },
    });
    return hbsData;
  }

  toggleViewMode() {
    this.viewMode = !this.viewMode;
    this.render();
  }

  async activateListeners(element) {
    const html = element instanceof jQuery ? element : $(element);

    await super.activateListeners?.(html);

    html
      .find(".click-toggle-view-mode")
      .on("click", async () => this.toggleViewMode());

    // cues, dispositions, keywords
    html.find(".click-word-add").on("click", async (event) => {
      event.stopPropagation();
      this.createNewWord(this.getEventWordType(event));
    });

    html.find(".click-word-say").on("click", async (event) => {
      event.stopPropagation();
      this.actor.sayWord(
        this.getEventWordType(event),
        this.getEventWordId(event),
      );
    });

    html.find(".change-word-value").on("click", async (event) => {
      event.stopPropagation();
    });

    html.find(".change-word-value").on("change", async (event) => {
      event.stopPropagation();
      const newWordValue = event.currentTarget.value;
      await this.actor.updateWord(
        this.getEventWordType(event),
        this.getEventWordId(event),
        newWordValue,
      );
    });

    html.find(".click-word-delete").on("click", async (event) => {
      event.stopPropagation();
      this.actor.deleteWord(
        this.getEventWordType(event),
        this.getEventWordId(event),
      );
    });

    html.find(".click-celebrity-roll").on("click", async (event) => {
      event.stopPropagation();
      this.actor.rollCelebrity();
    });
  }

  createNewWord(wordType) {
    const word = game.i18n.localize(ANARCHY.common.newEntry);
    this.actor.createWord(wordType, word);
  }

  getEventWordType(event) {
    return $(event.currentTarget)
      .closest(".define-wordType")
      .attr("data-word-type");
  }

  getEventWordId(event) {
    return $(event.currentTarget)
      .closest(".define-wordType")
      .attr("data-word-id");
  }
}
