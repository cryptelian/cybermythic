// Theme Utilities - Advanced Theme Operations
// This module provides utilities for theme manipulation, analysis, and management

import { LOG_HEAD, SYSTEM_NAME } from './constants.js';

/**
 * Theme Utilities class providing advanced theme operations
 */
export class ThemeUtilities {
  constructor(stylesManager) {
    this.styles = stylesManager;
  }

  // =============================================================================
  // THEME ANALYSIS UTILITIES
  // =============================================================================

  /**
   * Analyze theme contrast ratios for accessibility
   */
  analyzeThemeContrast(themeId) {
    const theme = this.styles.getThemeMetadata(themeId);
    if (!theme) {
      throw new Error(`Theme ${themeId} not found`);
    }

    // Apply theme temporarily for analysis
    const originalTheme = this.styles.currentTheme;
    this.styles.applyTheme(theme.cssClass);

    const analysis = {
      themeId,
      themeName: theme.name,
      contrastRatios: {},
      accessibility: {
        wcagAA: true,
        wcagAAA: true,
        issues: []
      }
    };

    // Analyze key color combinations
    const combinations = [
      { bg: '--background-primary', fg: '--text-primary', name: 'Primary Text' },
      { bg: '--background-secondary', fg: '--text-secondary', name: 'Secondary Text' },
      { bg: '--anarchy-background-attributes', fg: '--text-primary', name: 'Attribute Text' },
      { bg: '--interactive-primary', fg: '--text-inverse', name: 'Button Text' }
    ];

    combinations.forEach(combo => {
      const bgColor = this.styles.getCSSVariable(combo.bg.replace('--', ''));
      const fgColor = this.styles.getCSSVariable(combo.fg.replace('--', ''));
      
      if (bgColor && fgColor) {
        const ratio = this.calculateContrastRatio(bgColor, fgColor);
        analysis.contrastRatios[combo.name] = {
          ratio: ratio,
          wcagAA: ratio >= 4.5,
          wcagAAA: ratio >= 7,
          background: bgColor,
          foreground: fgColor
        };

        if (ratio < 4.5) {
          analysis.accessibility.wcagAA = false;
          analysis.accessibility.issues.push(`${combo.name} fails WCAG AA (${ratio.toFixed(2)}:1)`);
        }
        if (ratio < 7) {
          analysis.accessibility.wcagAAA = false;
        }
      }
    });

    // Restore original theme
    this.styles.applyTheme(originalTheme);

    return analysis;
  }

  /**
   * Calculate contrast ratio between two colors
   */
  calculateContrastRatio(color1, color2) {
    // Simplified contrast calculation
    // In a real implementation, you'd parse the CSS colors and calculate luminance
    const luminance1 = this.getRelativeLuminance(color1);
    const luminance2 = this.getRelativeLuminance(color2);
    
    const lighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);
    
    return (lighter + 0.05) / (darker + 0.05);
  }

  /**
   * Get relative luminance (simplified)
   */
  getRelativeLuminance(color) {
    // This is a simplified version - in production you'd use a proper color parsing library
    if (color.includes('hsl')) {
      // Extract lightness from HSL
      const match = color.match(/hsl\([^,]+,\s*[^,]+,\s*(\d+)%/);
      if (match) {
        return parseInt(match[1]) / 100;
      }
    }
    return 0.5; // Default fallback
  }

  // =============================================================================
  // THEME PERFORMANCE UTILITIES
  // =============================================================================

  /**
   * Measure theme application performance
   */
  measureThemePerformance(themeClass, iterations = 5) {
    const measurements = [];
    
    for (let i = 0; i < iterations; i++) {
      const startTime = performance.now();
      this.styles.applyTheme(themeClass);
      const endTime = performance.now();
      measurements.push(endTime - startTime);
    }

    return {
      average: measurements.reduce((a, b) => a + b) / measurements.length,
      min: Math.min(...measurements),
      max: Math.max(...measurements),
      measurements
    };
  }

  /**
   * Analyze CSS variable usage across themes
   */
  analyzeVariableUsage() {
    const analysis = {
      totalVariables: 0,
      themeVariables: {},
      commonVariables: [],
      uniqueVariables: {},
      redundancy: 0
    };

    const allThemes = this.styles.getAllThemes();
    const variableSets = {};

    // Collect variables for each theme
    allThemes.forEach(theme => {
      const originalTheme = this.styles.currentTheme;
      this.styles.applyTheme(theme.cssClass);
      
      const variables = this.styles.getCurrentThemeVariables();
      variableSets[theme.id] = Object.keys(variables);
      analysis.themeVariables[theme.id] = Object.keys(variables).length;
      
      this.styles.applyTheme(originalTheme);
    });

    // Find common and unique variables
    const allVariables = new Set();
    Object.values(variableSets).forEach(vars => {
      vars.forEach(v => allVariables.add(v));
    });

    analysis.totalVariables = allVariables.size;

    // Find variables common to all themes
    analysis.commonVariables = Array.from(allVariables).filter(variable => {
      return Object.values(variableSets).every(themeVars => themeVars.includes(variable));
    });

    // Find unique variables per theme
    Object.entries(variableSets).forEach(([themeId, vars]) => {
      analysis.uniqueVariables[themeId] = vars.filter(variable => {
        return !analysis.commonVariables.includes(variable);
      });
    });

    // Calculate redundancy
    const totalVariableInstances = Object.values(analysis.themeVariables).reduce((a, b) => a + b, 0);
    analysis.redundancy = Math.round((1 - analysis.totalVariables / totalVariableInstances) * 100);

    return analysis;
  }

  // =============================================================================
  // THEME GENERATION UTILITIES
  // =============================================================================

  /**
   * Generate a new theme based on an existing theme with color modifications
   */
  generateThemeVariant(baseThemeId, variantName, colorModifications = {}) {
    const baseTheme = this.styles.getThemeMetadata(baseThemeId);
    if (!baseTheme) {
      throw new Error(`Base theme ${baseThemeId} not found`);
    }

    const variantId = `${baseThemeId}-${variantName.toLowerCase().replace(/\s+/g, '-')}`;
    
    const variant = {
      ...baseTheme,
      id: variantId,
      name: `${baseTheme.name} (${variantName})`,
      cssClass: `style-${variantId}`,
      description: `${baseTheme.description} - ${variantName} variant`,
      version: `${baseTheme.version}-variant`,
      category: 'generated',
      baseTheme: baseThemeId,
      modifications: colorModifications
    };

    // Apply color modifications to preview
    if (colorModifications.primaryColor) {
      variant.preview.primaryColor = colorModifications.primaryColor;
    }
    if (colorModifications.backgroundColor) {
      variant.preview.backgroundColor = colorModifications.backgroundColor;
    }
    if (colorModifications.textColor) {
      variant.preview.textColor = colorModifications.textColor;
    }

    return variant;
  }

  /**
   * Create accessibility-enhanced theme variant
   */
  createAccessibilityVariant(baseThemeId, accessibilityOptions = {}) {
    const baseTheme = this.styles.getThemeMetadata(baseThemeId);
    if (!baseTheme) {
      throw new Error(`Base theme ${baseThemeId} not found`);
    }

    const variantName = 'Accessible';
    const variant = this.generateThemeVariant(baseThemeId, variantName);
    
    // Apply accessibility enhancements
    variant.accessibility = {
      ...baseTheme.accessibility,
      ...accessibilityOptions,
      highContrast: accessibilityOptions.highContrast || false,
      reducedMotion: accessibilityOptions.reducedMotion || false,
      largeText: accessibilityOptions.largeText || false
    };

    // Modify colors for better accessibility if high contrast is enabled
    if (variant.accessibility.highContrast) {
      variant.preview.backgroundColor = '#000000';
      variant.preview.textColor = '#ffffff';
      variant.preview.primaryColor = '#ffff00';
    }

    return variant;
  }

  // =============================================================================
  // THEME VALIDATION UTILITIES
  // =============================================================================

  /**
   * Comprehensive theme validation
   */
  validateAllThemes() {
    const results = {
      valid: 0,
      invalid: 0,
      themes: {},
      summary: {
        totalThemes: 0,
        validationErrors: [],
        recommendations: []
      }
    };

    const allThemes = this.styles.getAllThemes();
    results.summary.totalThemes = allThemes.length;

    allThemes.forEach(theme => {
      const validation = this.styles.validateTheme(theme.id);
      results.themes[theme.id] = validation;
      
      if (validation.valid) {
        results.valid++;
      } else {
        results.invalid++;
        results.summary.validationErrors.push(...validation.errors.map(error => `${theme.name}: ${error}`));
      }

      // Add contrast analysis
      try {
        const contrastAnalysis = this.analyzeThemeContrast(theme.id);
        results.themes[theme.id].contrast = contrastAnalysis;
        
        if (!contrastAnalysis.accessibility.wcagAA) {
          results.summary.recommendations.push(`${theme.name}: Consider improving contrast ratios for better accessibility`);
        }
      } catch (error) {
        console.warn(LOG_HEAD + `Could not analyze contrast for theme ${theme.name}:`, error);
      }
    });

    return results;
  }

  // =============================================================================
  // THEME EXPORT/IMPORT UTILITIES
  // =============================================================================

  /**
   * Export theme configuration for sharing
   */
  exportThemeConfiguration(themeId) {
    const theme = this.styles.getThemeMetadata(themeId);
    if (!theme) {
      throw new Error(`Theme ${themeId} not found`);
    }

    const customizations = this.styles.getThemeCustomization(themeId);
    
    return {
      theme: {
        ...theme,
        exportedAt: new Date().toISOString(),
        systemVersion: game.system.version
      },
      customizations,
      variables: this.extractThemeVariables(themeId)
    };
  }

  /**
   * Extract all CSS variables for a specific theme
   */
  extractThemeVariables(themeId) {
    const theme = this.styles.getThemeMetadata(themeId);
    if (!theme) {
      return {};
    }

    const originalTheme = this.styles.currentTheme;
    this.styles.applyTheme(theme.cssClass);
    
    const variables = this.styles.getCurrentThemeVariables();
    
    this.styles.applyTheme(originalTheme);
    
    return variables;
  }

  // =============================================================================
  // DEBUGGING AND DEVELOPMENT UTILITIES
  // =============================================================================

  /**
   * Generate theme development report
   */
  generateDevelopmentReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systemVersion: game.system.version,
      currentTheme: this.styles.currentTheme,
      themes: {},
      performance: {},
      validation: {},
      variableAnalysis: {},
      recommendations: []
    };

    // Analyze all themes
    const allThemes = this.styles.getAllThemes();
    allThemes.forEach(theme => {
      // Theme metadata
      report.themes[theme.id] = {
        metadata: theme,
        validation: this.styles.validateTheme(theme.id)
      };

      // Performance analysis
      try {
        report.performance[theme.id] = this.measureThemePerformance(theme.cssClass, 3);
      } catch (error) {
        console.warn(LOG_HEAD + `Performance analysis failed for ${theme.name}:`, error);
      }

      // Contrast analysis
      try {
        report.themes[theme.id].contrast = this.analyzeThemeContrast(theme.id);
      } catch (error) {
        console.warn(LOG_HEAD + `Contrast analysis failed for ${theme.name}:`, error);
      }
    });

    // Variable usage analysis
    report.variableAnalysis = this.analyzeVariableUsage();

    // Generate recommendations
    report.recommendations = this.generateRecommendations(report);

    return report;
  }

  /**
   * Generate recommendations based on analysis
   */
  generateRecommendations(report) {
    const recommendations = [];

    // Performance recommendations
    Object.entries(report.performance).forEach(([themeId, perf]) => {
      if (perf.average > 50) {
        recommendations.push({
          type: 'performance',
          theme: themeId,
          message: `Theme application is slow (${perf.average.toFixed(2)}ms average)`,
          suggestion: 'Consider optimizing CSS selectors and reducing complexity'
        });
      }
    });

    // Accessibility recommendations
    Object.entries(report.themes).forEach(([themeId, themeData]) => {
      if (themeData.contrast && !themeData.contrast.accessibility.wcagAA) {
        recommendations.push({
          type: 'accessibility',
          theme: themeId,
          message: 'Theme fails WCAG AA contrast requirements',
          suggestion: 'Increase contrast between text and background colors',
          details: themeData.contrast.accessibility.issues
        });
      }
    });

    // Variable optimization recommendations
    if (report.variableAnalysis.redundancy > 30) {
      recommendations.push({
        type: 'optimization',
        theme: 'all',
        message: `High variable redundancy detected (${report.variableAnalysis.redundancy}%)`,
        suggestion: 'Consider consolidating similar variables across themes'
      });
    }

    return recommendations;
  }

  // =============================================================================
  // THEME TESTING UTILITIES
  // =============================================================================

  /**
   * Test theme switching functionality
   */
  testThemeSwitching() {
    const results = {
      success: true,
      errors: [],
      switchTimes: {},
      totalTime: 0
    };

    const allThemes = this.styles.getAllThemes();
    const originalTheme = this.styles.currentTheme;
    
    try {
      allThemes.forEach(theme => {
        const startTime = performance.now();
        
        try {
          this.styles.applyTheme(theme.cssClass);
          const endTime = performance.now();
          results.switchTimes[theme.id] = endTime - startTime;
          results.totalTime += endTime - startTime;
        } catch (error) {
          results.success = false;
          results.errors.push(`Failed to apply theme ${theme.name}: ${error.message}`);
        }
      });
    } finally {
      // Always restore original theme
      this.styles.applyTheme(originalTheme);
    }

    return results;
  }

  /**
   * Test CSS variable accessibility
   */
  testCSSVariableAccess() {
    const results = {
      accessible: [],
      inaccessible: [],
      total: 0
    };

    const variables = this.styles.getCurrentThemeVariables();
    
    Object.keys(variables).forEach(variable => {
      results.total++;
      
      try {
        const value = this.styles.getCSSVariable(variable.replace('--', ''));
        if (value && value !== '') {
          results.accessible.push(variable);
        } else {
          results.inaccessible.push(variable);
        }
      } catch (error) {
        results.inaccessible.push(variable);
      }
    });

    return results;
  }

  // =============================================================================
  // DEVELOPMENT HELPERS
  // =============================================================================

  /**
   * Log comprehensive theme information
   */
  logThemeInfo(themeId) {
    const theme = this.styles.getThemeMetadata(themeId);
    if (!theme) {
      console.error(LOG_HEAD + `Theme ${themeId} not found`);
      return;
    }

    console.group(LOG_HEAD + `Theme Info: ${theme.name}`);
    console.info('Metadata:', theme);
    console.info('Validation:', this.styles.validateTheme(themeId));
    console.info('Contrast Analysis:', this.analyzeThemeContrast(themeId));
    console.info('Performance:', this.measureThemePerformance(theme.cssClass, 3));
    console.groupEnd();
  }

  /**
   * Create theme comparison report
   */
  compareThemes(themeId1, themeId2) {
    const theme1 = this.styles.getThemeMetadata(themeId1);
    const theme2 = this.styles.getThemeMetadata(themeId2);
    
    if (!theme1 || !theme2) {
      throw new Error('One or both themes not found');
    }

    const comparison = {
      themes: [theme1.name, theme2.name],
      differences: {
        metadata: {},
        variables: {},
        performance: {}
      },
      recommendations: []
    };

    // Compare metadata
    const metadataKeys = ['category', 'author', 'version'];
    metadataKeys.forEach(key => {
      if (theme1[key] !== theme2[key]) {
        comparison.differences.metadata[key] = {
          [theme1.name]: theme1[key],
          [theme2.name]: theme2[key]
        };
      }
    });

    // Compare performance
    const perf1 = this.measureThemePerformance(theme1.cssClass, 3);
    const perf2 = this.measureThemePerformance(theme2.cssClass, 3);
    
    comparison.differences.performance = {
      [theme1.name]: perf1.average,
      [theme2.name]: perf2.average,
      difference: Math.abs(perf1.average - perf2.average)
    };

    // Generate recommendations
    if (comparison.differences.performance.difference > 20) {
      const slower = perf1.average > perf2.average ? theme1.name : theme2.name;
      comparison.recommendations.push(`${slower} is significantly slower and could benefit from optimization`);
    }

    return comparison;
  }
}
