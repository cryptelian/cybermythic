import { LOG_HEAD } from "../core/constants.js";
import { createApplicationContext } from "../ui/context.js";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * Standardized ApplicationV2 class for Anarchy system.
 * Removes V1 compatibility layer since system targets Foundry V13+.
 */
export class AnarchyApplicationV2 extends HandlebarsApplicationMixin(
  ApplicationV2,
) {
  static get DEFAULT_OPTIONS() {
    return {
      classes: ["anarchy", "anarchy-app"],
      window: {
        resizable: true,
      },
      customizationScope: "application",
    };
  }

  constructor(options = {}) {
    super(options);
    /** @type {AbortController | null} */
    this._dragAbort = null;
    /** @type {import('./handle-drag.js').HandleDragApplication | null} */
    this.dragController = null;
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

  /**
   * ApplicationV2 data preparation pipeline.
   * Calls getData() for subclasses and normalizes the shared app context.
   */
  async _prepareContext(options = {}) {
    const context = (await this.getData(options)) ?? {};
    return createApplicationContext(
      this,
      context,
      this.options?.customizationScope ?? "application",
    );
  }

  /**
   * Method for subclasses to override to provide data to the template.
   */
  async getData(_options = {}) {
    return {};
  }

  /**
   * Lifecycle hook invoked before rendering.
   * Used to apply UI customizations and register drag controllers.
   */
  async _renderFrame(options) {
    const frame = await super._renderFrame(options);
    this._applyUiCustomization(frame);
    this._bindDragHandle(frame);
    return frame;
  }

  /** @override */
  _onRender(context, options) {
    super._onRender(context, options);
    this.activateListeners(this.element);
  }

  /**
   * Subclasses should override this to attach event listeners.
   * @param {HTMLElement} element
   */
  activateListeners(element) {}

  /**
   * Optional helper for subclasses to assign their drag controller instance.
   *
   * @param {import('./handle-drag.js').HandleDragApplication | null} controller
   */
  setDragController(controller) {
    this.dragController = controller;
  }

  /**
   * Apply system UI customizations to the rendered element, if available.
   */
  _applyUiCustomization(element) {
    const customizer = game.system.anarchy?.uiCustomization;
    if (!element || !customizer) return;

    try {
      const scope = this.options?.customizationScope ?? this.constructor.name;
      customizer.applyCustomizationsToElement(element, scope);
    } catch (error) {
      console.warn(`${LOG_HEAD}Failed to apply UI customizations`, error);
    }
  }

  _bindDragHandle(element) {
    this._cleanupDragBinding();
    if (!element || !this.dragController) {
      return;
    }

    const selector = this.options?.dragHandleSelector ?? ".app-title-bar";
    const header = element.querySelector(selector);
    if (!header) {
      return;
    }

    this.dragController.setPosition();
    this._dragAbort = new AbortController();
    header.addEventListener(
      "mousedown",
      (event) => this.dragController.onMouseDown(event),
      {
        signal: this._dragAbort.signal,
      },
    );
  }

  async close(options) {
    this._cleanupDragBinding();
    return super.close(options);
  }

  _cleanupDragBinding() {
    if (this._dragAbort) {
      this._dragAbort.abort();
      this._dragAbort = null;
    }
  }
}

export const isApplicationV2Available = () => true;
