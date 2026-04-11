import { ANARCHY } from "../core/config.js";
import { TEMPLATE, templatePath } from "../core/constants.js";
import { ConfirmationDialog } from "../confirmation.js";
import { Misc } from "../core/utils.js";
import { SelectActor } from "../dialog/select-actor.js";
import { createActorSheetContext } from "../ui/context.js";
import { AnarchyActorSheetV2 } from "./actor-sheet-v2.js";

export class AnarchyActorSheet extends AnarchyActorSheetV2 {
  /** @override */
  static get DEFAULT_OPTIONS() {
    const themeClass =
      game.system.anarchy?.styles?.selectCssClass() ??
      "style-anarchy-shadowrun";
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [...(super.DEFAULT_OPTIONS.classes ?? []), themeClass],
      position: {
        width: 600,
        height: 600,
      },
      window: {
        ...super.DEFAULT_OPTIONS.window,
        resizable: true,
      },
      actions: {
        // Map data-action to methods if needed, or leave for event listeners
      },
      dragDrop: [{ dragSelector: ".item", dropSelector: null }],
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
      width: opts.position?.width,
      height: opts.position?.height,
      resizable: opts.window?.resizable,
      tabs: opts.tabs,
      dragDrop: opts.dragDrop,
      // Map other necessary legacy properties if needed
      scrollY: [".window-content"], // Common V1 default
    };
  }

  // Backwards compatibility for subclasses accessing .template
  // This is used by the base class _configureRenderOptions to set PARTS.main.template
  get template() {
    return templatePath("actor", `${this.actor.type}.hbs`);
  }

  /**
   * Provide base data for templates. Subclasses override this to add data.
   * This is the termination point of the getData() chain - it does NOT call _prepareContext
   * to avoid infinite recursion.
   */
  async getData(options = {}) {
    // Return base context directly - DO NOT call _prepareContext here to avoid recursion
    // Subclasses call super.getData() to get this base, then add their own data
    return {
      document: this.document,
      editable: this.isEditable,
    };
  }

  /**
   * Prepare data for the sheet.
   * Calls getData() through the inheritance chain, allowing subclasses to add data.
   */
  async _prepareContext(options = {}) {
    const context = await this.getData(options);
    try {
      return createActorSheetContext(this, context);
    } catch (error) {
      console.error(
        `AnarchyActorSheet._prepareContext: Error preparing data for ${this.actor.name}`,
        error,
      );
      ui.notifications.error(
        `Failed to load actor sheet data for ${this.actor.name}. Please check console for details.`,
      );

      // Return safe fallback data
      return {
        ...context,
        items: {},
        anarchy: { value: 0, max: 0, scene: 0 },
        ownerActor: null,
        ownedActors: [],
        options: {
          limited: this.document.limited,
          owner: this.document.isOwner,
          cssClass: "locked",
          classes: [
            "sheet",
            "actor",
            `actor-${this.actor.type || "character"}`,
          ],
        },
        ENUMS: {},
        ANARCHY,
        system: this.actor.system || {},
      };
    }
  }

  async activateListeners(element) {
    await super.activateListeners?.(element);

    const html = element instanceof jQuery ? element : $(element);

    if (game.system.anarchy?.themeUtilities) {
      game.system.anarchy.themeUtilities.applyThemeEnhancements(
        html[0],
        "actor",
      );
    }

    this._setupEventDelegation(html);
    this._enhanceAccessibility(html);

    // items standard actions (add/edit/activate/delete)
    html.find(".click-item-add").on("click", async (event) => {
      event.stopPropagation();
      await this.createNewItem(this.getEventItemType(event));
    });

    html.find(".click-item-edit").on("click", async (event) => {
      event.stopPropagation();
      this.getEventItem(event)?.sheet.render(true);
    });

    html.find(".click-item-activate").on("click", async (event) => {
      event.stopPropagation();
      const item = this.getEventItem(event);
      const inactive = item.system.inactive;
      await item.update({ "system.inactive": !inactive });
    });

    html.find("a.click-matrix-connectionMode").on("click", async (event) => {
      event.stopPropagation();
      await this.actor.nextConnectionMode(this.getEventItem(event));
    });

    html.find(".click-item-delete").on("click", async (event) => {
      event.stopPropagation();
      const item = this.getEventItem(event);
      ConfirmationDialog.confirmDeleteItem(item, async () => {
        await this.actor.deleteEmbeddedDocuments("Item", [item.id]);
      });
    });

    html.find(".click-favorite").on("click", async (event) => {
      event.stopPropagation();
      this.onClickFavorite({
        skillId: $(event.currentTarget).attr("data-skill-id"),
        specialization: $(event.currentTarget).attr("data-specialization"),
        weaponId: $(event.currentTarget).attr("data-weapon-id"),
        attributeAction: $(event.currentTarget).attr("data-attributeAction"),
        isFavorite: $(event.currentTarget).attr("data-isFavorite"),
      });
    });

    // ownership management
    html.find(".click-owner-actor-unlink").on("click", async (event) => {
      event.stopPropagation();
      this.detachFromOwner(this.actor.getOwnerActor(), this.actor);
    });
    html.find(".click-owned-actor-view").on("click", async (event) => {
      event.stopPropagation();
      this.getEventOwnedActor(event)?.sheet.render(true);
    });
    html.find(".click-owned-actor-unlink").on("click", async (event) => {
      event.stopPropagation();
      this.detachFromOwner(this.actor, this.getEventOwnedActor(event));
    });

    // counters & monitors
    html.find("a.click-checkbar-element").on("click", async (event) => {
      event.stopPropagation();
      const item = this.getEventItem(event);
      const handler = item ?? this.actor;
      const monitor = this.getEventMonitorCode(event);
      const sourceActorId =
        monitor == "marks"
          ? $(event.currentTarget)
              .closest(".anarchy-marks")
              .attr("data-actor-id")
          : undefined;
      await handler.switchMonitorCheck(
        monitor,
        this.getEventIndex(event),
        this.isEventChecked(event),
        sourceActorId,
        item,
      );
    });
    html.find("a.click-add-mark-actor").on("click", async (event) => {
      event.stopPropagation();
      this.onClickAddMark();
    });

    // rolls
    html.find(".click-skill-roll").on("click", async (event) => {
      event.stopPropagation();
      this.actor.rollSkill(
        this.getEventItem(event),
        this.getEventSkillSpecialization(event),
      );
    });

    html.find(".click-roll-attribute").on("click", async (event) => {
      event.stopPropagation();
      const handler = this.getEventItem(event) ?? this.actor;
      handler.rollAttribute(
        $(event.currentTarget)
          .closest(".anarchy-attribute")
          .attr("data-attribute"),
      );
    });

    html.find(".click-roll-attribute-action").on("click", async (event) => {
      event.stopPropagation();
      this.actor.rollAttributeAction(this.getEventActionCode(event));
    });

    html.find(".click-weapon-roll").on("click", async (event) => {
      event.stopPropagation();
      this.actor.rollWeapon(this.getEventItem(event));
    });
  }

  getEventItemType(event) {
    return $(event.currentTarget)
      .closest(".define-item-type")
      .attr("data-item-type");
  }

  getEventItem(event) {
    const itemId =
      $(event.currentTarget).closest(".item").attr("data-item-id") ??
      $(event.currentTarget).closest(".anarchy-metatype").attr("data-item-id");
    return this.actor.items.get(itemId);
  }

  isEventChecked(event) {
    return $(event.currentTarget).attr("data-checked") == "true";
  }

  getEventSkillSpecialization(event) {
    return $(event.currentTarget)
      .closest(".click-skill-roll")
      .attr("data-item-specialization");
  }

  getEventActionCode(event) {
    return $(event.currentTarget).attr("data-action-code");
  }

  getEventMonitorCode(event) {
    return $(event.currentTarget)
      .closest(".click-checkbar-element")
      .attr("data-monitor-code");
  }

  getEventIndex(event) {
    return Number.parseInt($(event.currentTarget).attr("data-index"));
  }

  getEventOwnedActor(event) {
    const ownedActorId = $(event.currentTarget)
      .closest(".define-owned-actor")
      .attr("data-actor-id");
    return game.actors.get(ownedActorId);
  }

  async createNewItem(itemType) {
    const name = game.i18n.format(ANARCHY.common.newName, {
      type: game.i18n.localize(ANARCHY.itemType.singular[itemType]),
    });
    await this.actor.createEmbeddedDocuments(
      "Item",
      [{ name: name, type: itemType }],
      {
        renderSheet: true,
      },
    );
  }

  async onClickFavorite(options) {
    const newState = options.isFavorite != "true";
    if (options.skillId) {
      await this.actor.switchFavorite(
        newState,
        TEMPLATE.itemType.skill,
        options.skillId,
        options.specialization,
      );
    } else if (options.weaponId) {
      await this.actor.switchFavorite(
        newState,
        TEMPLATE.itemType.weapon,
        options.weaponId,
      );
    } else if (options.attributeAction) {
      await this.actor.switchFavorite(
        newState,
        "attributeAction",
        options.attributeAction,
      );
    } else {
      console.warn("Favorite not supported", options);
    }
  }

  detachFromOwner(owner, owned) {
    ConfirmationDialog.confirmDetachOwnerActor(owner, owned, async () => {
      await owned.attachToOwnerActor();
      this.render(true);
    });
  }

  async _onDropActor(event, drag) {
    const dropActor = fromUuidSync(drag.uuid);
    if (dropActor?.id != this.actor.id) {
      // check circular references: find a owner, without finding the owned id
      ConfirmationDialog.confirmAttachOrCopy(
        this.actor,
        dropActor,
        async () => await dropActor.attachToOwnerActor(this.actor),
        async () => await dropActor.attachToOwnerActor(this.actor, "copy"),
      );
    }
    super._onDropActor(event, drag);
  }

  async onClickAddMark() {
    if (this.actor.canReceiveMarks()) {
      const title = game.i18n.format(
        ANARCHY.common.selection.actorSettingMarks,
        {
          name: this.actor.name,
        },
      );
      await SelectActor.selectActor(
        title,
        game.actors.filter(
          (actor) => !this.actor.getActorMarks(actor.id) && actor.canSetMarks(),
        ),
        (actor) => this.actor.addActorMark(actor.id),
      );
    }
  }

  /**
   * Setup modern event delegation for better performance
   * @param {jQuery} html - The rendered HTML
   * @private
   */
  _setupEventDelegation(html) {
    // Use event delegation for better performance with dynamic content
    const element = html[0];

    // Delegate click events to the sheet container
    element.addEventListener("click", this._handleDelegatedClick.bind(this), {
      passive: false,
    });

    // Delegate change events for form inputs
    element.addEventListener("change", this._handleDelegatedChange.bind(this), {
      passive: false,
    });

    // Add performance monitoring for event handling
    if (game.system.anarchy?.performanceOptimizer) {
    }
  }

  /**
   * Handle delegated click events
   * @param {Event} event - The click event
   * @private
   */
  _handleDelegatedClick(event) {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    const startTime = performance.now();

    try {
      // Route to appropriate handler based on action
      switch (action) {
        case "item-add":
          event.stopPropagation();
          this.createNewItem(this.getEventItemType(event));
          break;
        case "item-edit":
          event.stopPropagation();
          this.getEventItem(event)?.sheet.render(true);
          break;
        case "item-activate":
          event.stopPropagation();
          this._handleItemActivate(event);
          break;
        // Add more actions as needed
      }
    } catch (error) {
      console.error(
        `AnarchyActorSheet: Error handling action '${action}'`,
        error,
      );
      ui.notifications.error(
        `Action failed: ${action}. Check console for details.`,
      );
    } finally {
      // Performance tracking
      const endTime = performance.now();
      const actionTime = endTime - startTime;

      if (actionTime > 100) {
        console.warn(
          `AnarchyActorSheet: Slow action '${action}' took ${actionTime.toFixed(2)}ms`,
        );
      }
    }
  }

  /**
   * Handle delegated change events
   * @param {Event} event - The change event
   * @private
   */
  _handleDelegatedChange(event) {
    const target = event.target;
    if (!target.dataset.action) return;

    const action = target.dataset.action;

    try {
      // Route to appropriate handler based on action
      switch (action) {
        case "update-field":
          this._handleFieldUpdate(event);
          break;
        // Add more change actions as needed
      }
    } catch (error) {
      console.error(
        `AnarchyActorSheet: Error handling change action '${action}'`,
        error,
      );
    }
  }

  /**
   * Monitor event handling performance
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _monitorEventPerformance(_element) {
    // noop stub for compatibility with v1 metrics
  }

  /**
   * Handle item activation with error recovery
   * @param {Event} event - The click event
   * @private
   */
  async _handleItemActivate(event) {
    try {
      const item = this.getEventItem(event);
      if (!item) {
        ui.notifications.warn("Item not found for activation");
        return;
      }

      const inactive = item.system.inactive;
      await item.update({ "system.inactive": !inactive });
    } catch (error) {
      console.error("AnarchyActorSheet: Error activating item", error);
      ui.notifications.error("Failed to activate/deactivate item");
    }
  }

  /**
   * Handle field updates with validation
   * @param {Event} event - The change event
   * @private
   */
  async _handleFieldUpdate(event) {
    try {
      const target = event.target;
      const field = target.name;
      const value = target.value;

      if (!field) return;

      // Validate the update
      if (this._validateFieldUpdate(field, value)) {
        await this.actor.update({ [field]: value });
      }
    } catch (error) {
      console.error("AnarchyActorSheet: Error updating field", error);
      ui.notifications.error("Failed to update field");
    }
  }

  /**
   * Validate field updates
   * @param {string} field - The field name
   * @param {any} value - The new value
   * @returns {boolean} Whether the update is valid
   * @private
   */
  _validateFieldUpdate(field, value) {
    // Add field validation logic here
    if (field.includes("system.attributes") && (isNaN(value) || value < 0)) {
      ui.notifications.warn("Attribute values must be positive numbers");
      return false;
    }

    return true;
  }

  /**
   * Enhance accessibility features for the sheet
   * @param {jQuery} html - The rendered HTML
   * @private
   */
  _enhanceAccessibility(html) {
    const element = html[0];

    // Add ARIA labels for interactive elements
    this._addAriaLabels(element);

    // Enhance keyboard navigation
    this._enhanceKeyboardNavigation(element);

    // Add focus management
    this._setupFocusManagement(element);

    // Apply accessibility preferences
    this._applyAccessibilityPreferences(element);
  }

  /**
   * Add ARIA labels for better screen reader support
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _addAriaLabels(element) {
    // Add ARIA labels to buttons without text
    const iconButtons = element.querySelectorAll(
      "button:not([aria-label]), a.item-control:not([aria-label])",
    );
    iconButtons.forEach((button) => {
      const icon = button.querySelector('i[class*="fa-"]');
      if (icon) {
        const action =
          button.dataset.action ||
          button.className.match(/click-(\w+)/)?.[1] ||
          "action";
        button.setAttribute("aria-label", `${action.replace("-", " ")} button`);
      }
    });

    // Add ARIA labels to form inputs
    const inputs = element.querySelectorAll(
      "input:not([aria-label]), select:not([aria-label])",
    );
    inputs.forEach((input) => {
      const label = input.closest(".form-group")?.querySelector("label");
      if (label && !input.getAttribute("aria-label")) {
        input.setAttribute("aria-label", label.textContent.trim());
      }
    });

    // Add ARIA roles for custom components
    const monitors = element.querySelectorAll(".anarchy-monitor");
    monitors.forEach((monitor) => {
      monitor.setAttribute("role", "progressbar");
      const label = monitor.querySelector(".monitor-label")?.textContent;
      if (label) {
        monitor.setAttribute("aria-label", `${label} monitor`);
      }
    });
  }

  /**
   * Enhance keyboard navigation
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _enhanceKeyboardNavigation(element) {
    // Make clickable elements keyboard accessible
    const clickableElements = element.querySelectorAll(
      '[class*="click-"]:not(button):not(a)',
    );
    clickableElements.forEach((el) => {
      if (!el.hasAttribute("tabindex")) {
        el.setAttribute("tabindex", "0");
      }
      if (!el.hasAttribute("role")) {
        el.setAttribute("role", "button");
      }

      // Add keyboard event listener
      el.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          el.click();
        }
      });
    });

    // Add skip links for better navigation
    this._addSkipLinks(element);
  }

  /**
   * Add skip links for better navigation
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _addSkipLinks(element) {
    // Add IDs to target elements if they don't exist
    const content = element.querySelector(".sheet-body");
    if (content && !content.id) {
      content.id = "sheet-content";
    }

    const tabs = element.querySelector(".sheet-tabs");
    if (tabs && !tabs.id) {
      tabs.id = "sheet-tabs";
    }

    const skipLinks = document.createElement("div");
    skipLinks.className = "skip-links sr-only";
    skipLinks.innerHTML = `
      <button type="button" class="skip-link" data-target="sheet-content">Skip to main content</button>
      <button type="button" class="skip-link" data-target="sheet-tabs">Skip to navigation</button>
    `;

    // Use buttons with event listeners instead of anchor navigation
    skipLinks.querySelectorAll(".skip-link").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = btn.dataset.target;
        const target = element.querySelector(`#${targetId}`);
        if (target) {
          target.focus({ preventScroll: false });
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    element.insertBefore(skipLinks, element.firstChild);
  }

  /**
   * Setup focus management for better accessibility
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _setupFocusManagement(element) {
    // Focus trap for modal-like behavior
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length > 0) {
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      element.addEventListener("keydown", (event) => {
        if (event.key === "Tab") {
          if (event.shiftKey && document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastFocusable
          ) {
            event.preventDefault();
            firstFocusable.focus();
          }
        }
      });
    }
  }

  /**
   * Apply accessibility preferences from the style system
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _applyAccessibilityPreferences(element) {
    // Check for accessibility preferences
    const uiCustomization = game.system.anarchy?.uiCustomization;
    if (!uiCustomization) return;

    // Apply high contrast mode
    if (uiCustomization.getCustomization("accessibility", "highContrast")) {
      element.classList.add("high-contrast");
    }

    // Apply reduced motion
    if (uiCustomization.getCustomization("accessibility", "reducedMotion")) {
      element.classList.add("reduced-motion");
    }

    // Apply large text
    if (uiCustomization.getCustomization("accessibility", "largeText")) {
      element.classList.add("large-text");
    }

    // Apply focus indicators
    if (uiCustomization.getCustomization("accessibility", "enhancedFocus")) {
      element.classList.add("enhanced-focus");
    }
  }
}
