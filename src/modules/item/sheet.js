import { ANARCHY } from "../core/config.js";
import { templatePath } from "../core/constants.js";
import { createItemSheetContext } from "../ui/context.js";
import { AnarchyItemSheetV2 } from "./item-sheet-v2.js";

export class BaseItemSheet extends AnarchyItemSheetV2 {
  /** @override */
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...(super.DEFAULT_OPTIONS.classes ?? []),
        game.system.anarchy.styles.selectCssClass(),
        "item-sheet",
      ],
      dragDrop: [{ dragSelector: ".item", dropSelector: null }],
      actions: {},
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main",
        },
      ],
    };
  }

  // Shim for legacy subclasses accessing super.defaultOptions
  static get defaultOptions() {
    const opts = this.DEFAULT_OPTIONS;
    return {
      classes: opts.classes,
      dragDrop: opts.dragDrop,
      tabs: opts.tabs,
      width: opts.position?.width,
      height: opts.position?.height,
      scrollY: [".window-content"],
    };
  }

  get title() {
    return (
      game.i18n.localize(ANARCHY.itemType.singular[this.item.type]) +
      ": " +
      this.item.name
    );
  }

  /**
   * Configure render options to include the template as a part.
   */
  _configureRenderOptions(options) {
    super._configureRenderOptions(options);

    // Validate template path exists for this item type
    const validItemTypes = [
      "contact",
      "cyberdeck",
      "gear",
      "metatype",
      "quality",
      "shadowamp",
      "skill",
      "weapon",
    ];

    let templateFile;
    if (!this.item.type || !validItemTypes.includes(this.item.type)) {
      console.warn(
        `BaseItemSheet: Unknown item type '${this.item.type}', falling back to gear template`,
      );
      templateFile = templatePath("item", "gear.hbs");
    } else {
      templateFile = templatePath("item", `${this.item.type}.hbs`);
    }

    options.parts = {
      main: {
        template: templateFile,
        scrollable: [".window-content"],
      },
    };
  }

  // Backwards compatibility for subclasses
  get template() {
    return (
      this.options.parts?.main?.template || templatePath("item", "gear.hbs")
    );
  }

  /**
   * Prepare data for the sheet.
   * Replaces getData() as the primary V2 method.
   */
  async _prepareContext(options = {}) {
    const context = await super._prepareContext(options);
    return createItemSheetContext(this, context);
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);

    if (game.system.anarchy?.themeUtilities) {
      game.system.anarchy.themeUtilities.applyThemeEnhancements(
        html[0],
        "item",
      );
    }

    // counters & monitors
    html
      .find("a.click-checkbar-element")
      .on("click", async (event) => await this.onClickMonitor(event));

    html
      .find(".click-modifier-add")
      .on("click", async (event) => await this.item.createModifier());
    html
      .find(".click-modifier-delete")
      .on(
        "click",
        async (event) =>
          await this.item.deleteModifier(this.getEventModifierId(event)),
      );
    html
      .find(".input-modifier-value")
      .on(
        "change",
        async (event) =>
          await this.item.changeModifierValue(
            this.getEventModifierId(event),
            event.currentTarget.value,
          ),
      );
    html
      .find(".input-modifier-condition")
      .on(
        "change",
        async (event) =>
          await this.item.changeModifierCondition(
            this.getEventModifierId(event),
            event.currentTarget.value,
          ),
      );
    html
      .find(".select-modifier-change")
      .on(
        "change",
        async (event) =>
          await this.item.changeModifierSelection(
            this.getEventModifierId(event),
            this.getEventModifierSelect(event),
            event.currentTarget.value,
          ),
      );
  }

  async onClickMonitor(event) {
    if (this.item.parent) {
      const monitor = this.getEventMonitorCode(event);
      const sourceActorId =
        monitor == "marks"
          ? $(event.currentTarget)
              .closest(".anarchy-marks")
              .attr("data-actor-id")
          : undefined;
      await this.item.parent.switchMonitorCheck(
        monitor,
        this.getEventMonitorIndex(event),
        this.isEventMonitorChecked(event),
        sourceActorId,
        this.item,
      );
    }
  }

  getEventMonitorCode(event) {
    return $(event.currentTarget)
      .closest(".checkbar-root")
      .attr("data-monitor-code");
  }

  getEventMonitorIndex(event) {
    return Number.parseInt($(event.currentTarget).attr("data-index"));
  }

  isEventMonitorChecked(event) {
    return $(event.currentTarget).attr("data-checked") == "true";
  }

  getEventModifierId(event) {
    return $(event.currentTarget)
      .closest(".define-modifier")
      .attr("data-modifier-id");
  }
  getEventModifierSelect(event) {
    return $(event.currentTarget).attr("data-modifier-select");
  }
}
