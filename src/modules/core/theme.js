// Theme utilities shim: ensures legacy sheet calls remain safe even if advanced theme
// features are not yet implemented.

export class ThemeUtilities {
  constructor(stylesManager) {
    this.styles = stylesManager;
  }

  getCurrentThemeMetadata() {
    try {
      const themeId = this.styles?.getCurrentThemeId?.();
      if (!themeId) return null;
      const metadata = this.styles?.getThemeMetadata?.(themeId);
      if (metadata) return metadata;
      const available = this.getAvailableThemes();
      return available.find((theme) => theme.id === themeId) ?? null;
    } catch (_) {
      return null;
    }
  }

  getAvailableThemes() {
    try {
      if (this.styles?.getAllThemes) return this.styles.getAllThemes();
      if (this.styles?.availableStyles) {
        return Object.entries(this.styles.availableStyles).map(
          ([cssClass, name]) => ({
            id: cssClass,
            name,
            cssClass,
          }),
        );
      }
    } catch (_) {}
    return [];
  }

  applyThemeEnhancements(element, scope = "global") {
    if (!element) return;
    element.classList?.add?.(`theme-scope-${scope}`);
  }
}
