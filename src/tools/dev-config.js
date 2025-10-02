// Development Configuration - Enhanced developer experience settings
// This file provides configuration and utilities for enhanced development workflow

export const DEV_CONFIG = {
  // Style development settings
  styles: {
    watchMode: true,
    autoLint: true,
    autoFormat: true,
    generateSourceMaps: true,
    enableHotReload: true,
    compressionLevel: 'development', // 'development', 'production'
    
    // Linting configuration
    linting: {
      enabled: true,
      autoFix: true,
      reportLevel: 'warning', // 'error', 'warning', 'info'
      rules: {
        enforcePropertyOrder: true,
        enforceNamingConventions: true,
        maxNestingDepth: 4,
        maxSelectorComplexity: 4
      }
    },
    
    // Performance monitoring
    performance: {
      enabled: true,
      buildTimeThreshold: 2000, // ms
      csseSizeThreshold: 500000, // bytes
      selectorCountThreshold: 3000,
      reportSlowBuilds: true
    }
  },
  
  // Theme development settings
  themes: {
    enablePreview: true,
    autoValidation: true,
    contrastChecking: true,
    accessibilityTesting: true,
    
    // Theme development tools
    tools: {
      colorPicker: true,
      contrastAnalyzer: true,
      themeGenerator: true,
      exportImport: true
    }
  },
  
  // Component development settings
  components: {
    enableDocGeneration: true,
    validateMixins: true,
    checkUnusedStyles: true,
    enforceModularity: true,
    
    // Component analysis
    analysis: {
      complexityThreshold: 50,
      sizeThreshold: 10000, // bytes
      dependencyTracking: true
    }
  },
  
  // Development tools
  tools: {
    styleAnalyzer: {
      enabled: true,
      autoRun: false,
      reportPath: 'style-analysis-report.json'
    },
    
    docsGenerator: {
      enabled: true,
      autoGenerate: false,
      outputPath: 'docs/'
    },
    
    performanceMonitor: {
      enabled: true,
      realTimeMetrics: true,
      reportThreshold: 100 // ms
    }
  },
  
  // Hot reload configuration
  hotReload: {
    enabled: true,
    extensions: ['scss', 'css'],
    paths: ['src/styles/', 'public/style/'],
    debounceDelay: 300, // ms
    
    // Advanced hot reload features
    features: {
      preserveState: true,
      smartReload: true,
      errorOverlay: true
    }
  },
  
  // Build optimization for development
  buildOptimization: {
    development: {
      minification: false,
      sourceMap: true,
      treeshaking: false,
      criticalCSS: false
    },
    
    production: {
      minification: true,
      sourceMap: true,
      treeshaking: true,
      criticalCSS: true
    }
  }
};

// =============================================================================
// DEVELOPMENT UTILITIES
// =============================================================================

export class DevUtils {
  static logBuildTime(startTime, operation = 'Build') {
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    const threshold = DEV_CONFIG.styles.performance.buildTimeThreshold;
    const level = duration > threshold ? 'warn' : 'info';
    
    console[level](`⏱️  ${operation} completed in ${duration}ms`);
    
    return duration;
  }

  static validateCSS(cssContent) {
    const issues = [];
    
    // Check CSS size
    if (cssContent.length > DEV_CONFIG.styles.performance.csseSizeThreshold) {
      issues.push({
        type: 'size',
        severity: 'warning',
        message: `CSS size (${Math.round(cssContent.length / 1024)}KB) exceeds threshold`
      });
    }
    
    // Check selector count
    const selectorCount = (cssContent.match(/[^{}]+\{[^}]*\}/g) || []).length;
    if (selectorCount > DEV_CONFIG.styles.performance.selectorCountThreshold) {
      issues.push({
        type: 'complexity',
        severity: 'warning',
        message: `Selector count (${selectorCount}) exceeds threshold`
      });
    }
    
    return {
      valid: issues.length === 0,
      issues,
      metrics: {
        size: cssContent.length,
        selectorCount
      }
    };
  }

  static formatFileSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;
    
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    
    return `${size.toFixed(1)} ${units[unitIndex]}`;
  }

  static generateComponentTemplate(componentName) {
    const template = `// ${componentName} Components - [Description]
// This file contains modular styles for ${componentName.toLowerCase()}-related UI components

@use 'core-components' as *;

// =============================================================================
// ${componentName.toUpperCase()} FOUNDATION
// =============================================================================

.${componentName.toLowerCase()} {
  @include component-base;
  
  // Component-specific styles
}

// =============================================================================
// ${componentName.toUpperCase()} VARIANTS
// =============================================================================

.${componentName.toLowerCase()} {
  &.variant {
    // Variant styles
  }
  
  &.state {
    // State styles
  }
}

// =============================================================================
// ${componentName.toUpperCase()} RESPONSIVE BEHAVIOR
// =============================================================================

@media (max-width: 768px) {
  .${componentName.toLowerCase()} {
    // Mobile styles
  }
}
`;
    
    return template;
  }

  static generateThemeTemplate(themeName) {
    const template = `// ${themeName} Theme - [Description]
// This theme provides [description of visual style and purpose]

@use 'sass:map';
@use 'theme-config' as *;
@use '../core/tokens' as *;

// =============================================================================
// ${themeName.toUpperCase()} THEME CONFIGURATION
// =============================================================================

$${themeName.toLowerCase()}-theme: (
  // Theme metadata
  name: '${themeName}',
  description: '[Theme description]',
  author: '[Author name]',
  version: '1.0.0',
  
  // Core color palette
  colors: (
    primary: hsl(0deg 0% 50%),
    secondary: hsl(0deg 0% 60%),
    accent: hsl(210deg 80% 50%),
    background: hsl(0deg 0% 100%),
    surface: hsl(0deg 0% 95%),
    text: hsl(0deg 0% 10%),
    border: hsl(0deg 0% 80%)
  ),
  
  // Add other theme configuration sections as needed
);

// =============================================================================
// THEME APPLICATION
// =============================================================================

.style-${themeName.toLowerCase()} {
  @include apply-theme($${themeName.toLowerCase()}-theme);
  
  // Theme-specific custom styles
}
`;
    
    return template;
  }
}

// Export for use in other tools
export { DEV_CONFIG, DevUtils };
