import { applyThemeClass, applyUiCustomization } from "./context.js";

const { DocumentSheetV2, HandlebarsApplicationMixin } =
  foundry.applications.api;

export class AnarchyDocumentSheetV2 extends HandlebarsApplicationMixin(
  DocumentSheetV2,
) {
  static get DEFAULT_OPTIONS() {
    return {
      classes: ["anarchy", "anarchy-app", "sheet"],
      window: {
        resizable: true,
      },
      tag: "form",
      form: {
        handler: AnarchyDocumentSheetV2.submit,
        submitOnChange: true,
        closeOnSubmit: false,
      },
      tabs: [],
      customizationScope: "document",
    };
  }

  static async submit(_event, _form, formData) {
    const { object } = this.document ? { object: this.document } : this;
    if (!object) return;
    await object.update(formData.object);
  }

  constructor(document, options = {}) {
    const mergedOptions = {
      customizationScope: options.customizationScope ?? "document",
      ...options,
    };

    if (document instanceof foundry.abstract.Document) {
      super({ document, ...mergedOptions });
    } else {
      super(document);
    }

    this._tabsState = {};
  }

  async render(force, options) {
    if (typeof force === "object" && options === undefined) {
      return super.render(force);
    }

    if (typeof force === "boolean") {
      return super.render({ ...options, force });
    }

    return super.render(options);
  }

  _configureRenderOptions(options) {
    super._configureRenderOptions(options);
    if (!options.parts || options.parts.length === 0) {
      options.parts = ["main"];
    }
  }

  async _prepareContext(options = {}) {
    const context = (await this.getData(options)) ?? {};
    context.document = this.document;
    return context;
  }

  async getData(_options = {}) {
    return {};
  }

  async _renderFrame(options) {
    const frame = await super._renderFrame(options);
    applyThemeClass(frame);
    applyUiCustomization(
      frame,
      this.options?.customizationScope ?? this.constructor.name,
    );
    return frame;
  }

  _onRender(context, options) {
    super._onRender(context, options);
    this.activateListeners(this.element);
    this._bindTabs(this.element);
  }

  _bindTabs(element) {
    if (!this.options.tabs || !element) return;

    for (const tabConfig of this.options.tabs) {
      const nav = element.querySelector(tabConfig.navSelector);
      if (!nav) continue;

      const content = element.querySelector(tabConfig.contentSelector);
      nav.querySelectorAll("[data-tab]").forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          const tab = link.dataset.tab;
          if (tab) this._activateTab(tabConfig, tab, element);
        });
      });

      const active =
        this._tabsState[tabConfig.navSelector] || tabConfig.initial;
      if (active) this._activateTab(tabConfig, active, element);
    }
  }

  _activateTab(tabConfig, tabName, element) {
    this._tabsState[tabConfig.navSelector] = tabName;

    const nav = element.querySelector(tabConfig.navSelector);
    const content = element.querySelector(tabConfig.contentSelector);

    if (nav) {
      nav.querySelectorAll("[data-tab]").forEach((item) => {
        item.classList.toggle("active", item.dataset.tab === tabName);
      });
    }

    if (content) {
      content.querySelectorAll(".tab").forEach((item) => {
        item.classList.toggle("active", item.dataset.tab === tabName);
      });
    }
  }

  activateListeners(_element) {}
}
