import { ANARCHY } from '../config.js';
import { TEMPLATE, TEMPLATES_PATH } from '../constants.js';
import { ConfirmationDialog } from '../confirmation.js';
import { Misc } from '../misc.js';
import { Enums } from '../enums.js';
import { SelectActor } from '../dialog/select-actor.js';

export class AnarchyActorSheet extends foundry.appv1.sheets.ActorSheet {
  get template() {
    return `${TEMPLATES_PATH}/actor/${this.actor.type}.hbs`;
  }

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      isGM: game.user.isGM,
      dragDrop: [{ dragSelector: '.item ', dropSelector: null }],
      classes: [game.system.anarchy.styles.selectCssClass(), 'sheet', 'actor'],
      width: 600,
      height: 600,
      resizable: true,
    });
  }

  getData(options) {
    // Performance monitoring
    const startTime = performance.now();

    try {
      let hbsData = foundry.utils.mergeObject(super.getData(options), {
        items: {},
        anarchy: this.actor.getAnarchy(),
        ownerActor: this.actor.getOwnerActor(),
        ownedActors: this.actor.getOwnedActors(),
        options: {
          limited: this.document.limited,
          owner: this.document.isOwner,
          cssClass: this.isEditable ? 'editable' : 'locked',
        },
        ENUMS: foundry.utils.mergeObject(
          { attributeAction: this.actor.getAttributeActions() },
          Enums.getEnums(),
        ),
        ANARCHY: ANARCHY,
      });
      hbsData.options.classes.push(`actor-${this.actor.type}`);
      hbsData.options.classes = Misc.distinct(hbsData.options.classes);
      hbsData.system = this.actor.system;

      // Apply UI customizations and theme utilities
      if (game.system.anarchy?.uiCustomization) {
        hbsData.uiCustomizations = game.system.anarchy.uiCustomization.getActiveCustomizations();
        hbsData.options.classes.push(
          ...game.system.anarchy.uiCustomization.getCustomizationClasses('actor'),
        );
      }

      // Add theme information
      if (game.system.anarchy?.themeUtilities) {
        hbsData.currentTheme = game.system.anarchy.styles.currentTheme;
        hbsData.availableThemes = game.system.anarchy.styles.availableThemes;
        hbsData.themeMetadata = game.system.anarchy.themeUtilities.getCurrentThemeMetadata();
      }

      Misc.classifyInto(hbsData.items, this.actor.items);

      // Performance tracking
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      if (game.system.anarchy?.performanceOptimizer && renderTime > 50) {
        console.warn(
          `AnarchyActorSheet.getData: Slow data preparation for ${this.actor.name} took ${renderTime.toFixed(2)}ms`,
        );
      }

      return hbsData;
    } catch (error) {
      console.error(
        `AnarchyActorSheet.getData: Error preparing data for ${this.actor.name}`,
        error,
      );
      ui.notifications.error(
        `Failed to load actor sheet data for ${this.actor.name}. Please check console for details.`,
      );

      // Return minimal safe data to prevent complete failure
      return foundry.utils.mergeObject(super.getData(options), {
        items: {},
        anarchy: { value: 0, max: 0, scene: 0 },
        ownerActor: null,
        ownedActors: [],
        options: {
          limited: this.document.limited,
          owner: this.document.isOwner,
          cssClass: 'locked',
          classes: ['sheet', 'actor', `actor-${this.actor.type || 'character'}`],
        },
        ENUMS: {},
        ANARCHY: ANARCHY,
        system: this.actor.system || {},
      });
    }
  }

  activateListeners(html) {
    super.activateListeners(html);

    // Apply UI customizations to rendered sheet
    if (game.system.anarchy?.uiCustomization) {
      game.system.anarchy.uiCustomization.applyCustomizationsToElement(html[0], 'actor');
    }

    // Apply theme-specific enhancements
    if (game.system.anarchy?.themeUtilities) {
      game.system.anarchy.themeUtilities.applyThemeEnhancements(html[0], 'actor');
    }

    // Setup modern event delegation for better performance
    this._setupEventDelegation(html);

    // Apply accessibility enhancements
    this._enhanceAccessibility(html);

    // items standard actions (add/edit/activate/delete)
    html.find('.click-item-add').click(async (event) => {
      event.stopPropagation();
      await this.createNewItem(this.getEventItemType(event));
    });

    html.find('.click-item-edit').click(async (event) => {
      event.stopPropagation();
      this.getEventItem(event)?.sheet.render(true);
    });

    html.find('.click-item-activate').click(async (event) => {
      event.stopPropagation();
      const item = this.getEventItem(event);
      const inactive = item.system.inactive;
      await item.update({ 'system.inactive': !inactive });
    });

    html.find('a.click-matrix-connectionMode').click(async (event) => {
      event.stopPropagation();
      await this.actor.nextConnectionMode(this.getEventItem(event));
    });

    html.find('.click-item-delete').click(async (event) => {
      event.stopPropagation();
      const item = this.getEventItem(event);
      ConfirmationDialog.confirmDeleteItem(item, async () => {
        await this.actor.deleteEmbeddedDocuments('Item', [item.id]);
      });
    });

    html.find('.click-favorite').click(async (event) => {
      event.stopPropagation();
      this.onClickFavorite({
        skillId: $(event.currentTarget).attr('data-skill-id'),
        specialization: $(event.currentTarget).attr('data-specialization'),
        weaponId: $(event.currentTarget).attr('data-weapon-id'),
        attributeAction: $(event.currentTarget).attr('data-attributeAction'),
        isFavorite: $(event.currentTarget).attr('data-isFavorite'),
      });
    });

    // ownership management
    html.find('.click-owner-actor-unlink').click(async (event) => {
      event.stopPropagation();
      this.detachFromOwner(this.actor.getOwnerActor(), this.actor);
    });
    html.find('.click-owned-actor-view').click(async (event) => {
      event.stopPropagation();
      this.getEventOwnedActor(event)?.sheet.render(true);
    });
    html.find('.click-owned-actor-unlink').click(async (event) => {
      event.stopPropagation();
      this.detachFromOwner(this.actor, this.getEventOwnedActor(event));
    });

    // counters & monitors
    html.find('a.click-checkbar-element').click(async (event) => {
      event.stopPropagation();
      const item = this.getEventItem(event);
      const handler = item ?? this.actor;
      const monitor = this.getEventMonitorCode(event);
      const sourceActorId =
        monitor == 'marks'
          ? $(event.currentTarget).closest('.anarchy-marks').attr('data-actor-id')
          : undefined;
      await handler.switchMonitorCheck(
        monitor,
        this.getEventIndex(event),
        this.isEventChecked(event),
        sourceActorId,
        item,
      );
    });
    html.find('a.click-add-mark-actor').click(async (event) => {
      event.stopPropagation();
      this.onClickAddMark();
    });

    // rolls
    html.find('.click-skill-roll').click(async (event) => {
      event.stopPropagation();
      this.actor.rollSkill(this.getEventItem(event), this.getEventSkillSpecialization(event));
    });

    html.find('.click-roll-attribute').click(async (event) => {
      event.stopPropagation();
      const handler = this.getEventItem(event) ?? this.actor;
      handler.rollAttribute(
        $(event.currentTarget).closest('.anarchy-attribute').attr('data-attribute'),
      );
    });

    html.find('.click-roll-attribute-action').click(async (event) => {
      event.stopPropagation();
      this.actor.rollAttributeAction(this.getEventActionCode(event));
    });

    html.find('.click-weapon-roll').click(async (event) => {
      event.stopPropagation();
      this.actor.rollWeapon(this.getEventItem(event));
    });
  }

  getEventItemType(event) {
    return $(event.currentTarget).closest('.define-item-type').attr('data-item-type');
  }

  getEventItem(event) {
    const itemId =
      $(event.currentTarget).closest('.item').attr('data-item-id') ??
      $(event.currentTarget).closest('.anarchy-metatype').attr('data-item-id');
    return this.actor.items.get(itemId);
  }

  isEventChecked(event) {
    return $(event.currentTarget).attr('data-checked') == 'true';
  }

  getEventSkillSpecialization(event) {
    return $(event.currentTarget).closest('.click-skill-roll').attr('data-item-specialization');
  }

  getEventActionCode(event) {
    return $(event.currentTarget).attr('data-action-code');
  }

  getEventMonitorCode(event) {
    return $(event.currentTarget).closest('.click-checkbar-element').attr('data-monitor-code');
  }

  getEventIndex(event) {
    return Number.parseInt($(event.currentTarget).attr('data-index'));
  }

  getEventOwnedActor(event) {
    const ownedActorId = $(event.currentTarget)
      .closest('.define-owned-actor')
      .attr('data-actor-id');
    return game.actors.get(ownedActorId);
  }

  async createNewItem(itemType) {
    const name = game.i18n.format(ANARCHY.common.newName, {
      type: game.i18n.localize(ANARCHY.itemType.singular[itemType]),
    });
    await this.actor.createEmbeddedDocuments('Item', [{ name: name, type: itemType }], {
      renderSheet: true,
    });
  }

  async onClickFavorite(options) {
    const newState = options.isFavorite != 'true';
    if (options.skillId) {
      await this.actor.switchFavorite(
        newState,
        TEMPLATE.itemType.skill,
        options.skillId,
        options.specialization,
      );
    } else if (options.weaponId) {
      await this.actor.switchFavorite(newState, TEMPLATE.itemType.weapon, options.weaponId);
    } else if (options.attributeAction) {
      await this.actor.switchFavorite(newState, 'attributeAction', options.attributeAction);
    } else {
      console.warn('Favorite not supported', options);
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
        async () => await dropActor.attachToOwnerActor(this.actor, 'copy'),
      );
    }
    super._onDropActor(event, drag);
  }

  async onClickAddMark() {
    if (this.actor.canReceiveMarks()) {
      const title = game.i18n.format(ANARCHY.common.selection.actorSettingMarks, {
        name: this.actor.name,
      });
      await SelectActor.selectActor(
        title,
        game.actors.filter((actor) => !this.actor.getActorMarks(actor.id) && actor.canSetMarks()),
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
    element.addEventListener('click', this._handleDelegatedClick.bind(this), { passive: false });

    // Delegate change events for form inputs
    element.addEventListener('change', this._handleDelegatedChange.bind(this), { passive: false });

    // Add performance monitoring for event handling
    if (game.system.anarchy?.performanceOptimizer) {
      this._monitorEventPerformance(element);
    }
  }

  /**
   * Handle delegated click events
   * @param {Event} event - The click event
   * @private
   */
  _handleDelegatedClick(event) {
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const startTime = performance.now();

    try {
      // Route to appropriate handler based on action
      switch (action) {
        case 'item-add':
          event.stopPropagation();
          this.createNewItem(this.getEventItemType(event));
          break;
        case 'item-edit':
          event.stopPropagation();
          this.getEventItem(event)?.sheet.render(true);
          break;
        case 'item-activate':
          event.stopPropagation();
          this._handleItemActivate(event);
          break;
        // Add more actions as needed
      }
    } catch (error) {
      console.error(`AnarchyActorSheet: Error handling action '${action}'`, error);
      ui.notifications.error(`Action failed: ${action}. Check console for details.`);
    } finally {
      // Performance tracking
      const endTime = performance.now();
      const actionTime = endTime - startTime;

      if (actionTime > 100) {
        console.warn(`AnarchyActorSheet: Slow action '${action}' took ${actionTime.toFixed(2)}ms`);
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
        case 'update-field':
          this._handleFieldUpdate(event);
          break;
        // Add more change actions as needed
      }
    } catch (error) {
      console.error(`AnarchyActorSheet: Error handling change action '${action}'`, error);
    }
  }

  /**
   * Monitor event handling performance
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _monitorEventPerformance(element) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 100) {
          console.warn(
            `AnarchyActorSheet: Slow event handling detected: ${entry.name} took ${entry.duration.toFixed(2)}ms`,
          );
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });
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
        ui.notifications.warn('Item not found for activation');
        return;
      }

      const inactive = item.system.inactive;
      await item.update({ 'system.inactive': !inactive });
    } catch (error) {
      console.error('AnarchyActorSheet: Error activating item', error);
      ui.notifications.error('Failed to activate/deactivate item');
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
      console.error('AnarchyActorSheet: Error updating field', error);
      ui.notifications.error('Failed to update field');
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
    if (field.includes('system.attributes') && (isNaN(value) || value < 0)) {
      ui.notifications.warn('Attribute values must be positive numbers');
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
      'button:not([aria-label]), a.item-control:not([aria-label])',
    );
    iconButtons.forEach((button) => {
      const icon = button.querySelector('i[class*="fa-"]');
      if (icon) {
        const action =
          button.dataset.action || button.className.match(/click-(\w+)/)?.[1] || 'action';
        button.setAttribute('aria-label', `${action.replace('-', ' ')} button`);
      }
    });

    // Add ARIA labels to form inputs
    const inputs = element.querySelectorAll('input:not([aria-label]), select:not([aria-label])');
    inputs.forEach((input) => {
      const label = input.closest('.form-group')?.querySelector('label');
      if (label && !input.getAttribute('aria-label')) {
        input.setAttribute('aria-label', label.textContent.trim());
      }
    });

    // Add ARIA roles for custom components
    const monitors = element.querySelectorAll('.anarchy-monitor');
    monitors.forEach((monitor) => {
      monitor.setAttribute('role', 'progressbar');
      const label = monitor.querySelector('.monitor-label')?.textContent;
      if (label) {
        monitor.setAttribute('aria-label', `${label} monitor`);
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
    const clickableElements = element.querySelectorAll('[class*="click-"]:not(button):not(a)');
    clickableElements.forEach((el) => {
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
      }
      if (!el.hasAttribute('role')) {
        el.setAttribute('role', 'button');
      }

      // Add keyboard event listener
      el.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
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
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#sheet-content" class="skip-link">Skip to main content</a>
      <a href="#sheet-tabs" class="skip-link">Skip to navigation</a>
    `;

    element.insertBefore(skipLinks, element.firstChild);

    // Add IDs to target elements if they don't exist
    const content = element.querySelector('.sheet-body');
    if (content && !content.id) {
      content.id = 'sheet-content';
    }

    const tabs = element.querySelector('.sheet-tabs');
    if (tabs && !tabs.id) {
      tabs.id = 'sheet-tabs';
    }
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

      element.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
          } else if (!event.shiftKey && document.activeElement === lastFocusable) {
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
    if (uiCustomization.getCustomization('accessibility', 'highContrast')) {
      element.classList.add('high-contrast');
    }

    // Apply reduced motion
    if (uiCustomization.getCustomization('accessibility', 'reducedMotion')) {
      element.classList.add('reduced-motion');
    }

    // Apply large text
    if (uiCustomization.getCustomization('accessibility', 'largeText')) {
      element.classList.add('large-text');
    }

    // Apply focus indicators
    if (uiCustomization.getCustomization('accessibility', 'enhancedFocus')) {
      element.classList.add('enhanced-focus');
    }
  }
}
