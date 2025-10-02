#!/usr/bin/env node

/**
 * Style Documentation Generator - Automatic documentation for the styling system
 * This tool generates comprehensive documentation for components, themes, and utilities
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join, basename, extname } from 'path';

class StyleDocsGenerator {
  constructor() {
    this.docs = {
      components: new Map(),
      themes: new Map(),
      mixins: new Map(),
      variables: new Map(),
      utilities: new Map()
    };
  }

  // =============================================================================
  // MAIN DOCUMENTATION GENERATION
  // =============================================================================

  async generateDocumentation() {
    console.log('📚 Generating style system documentation...\n');
    
    // Analyze SCSS files for documentation
    this.analyzeForDocumentation();
    
    // Generate component documentation
    this.generateComponentDocs();
    
    // Generate theme documentation
    this.generateThemeDocs();
    
    // Generate utility documentation
    this.generateUtilityDocs();
    
    // Generate main documentation file
    this.generateMainDocs();
    
    console.log('✅ Documentation generation complete!');
  }

  analyzeForDocumentation() {
    const stylesDirs = [
      'src/styles/components',
      'src/styles/themes',
      'src/styles/build'
    ];
    
    stylesDirs.forEach(dir => {
      if (existsSync(dir)) {
        this.analyzeDirectoryForDocs(dir);
      }
    });
  }

  analyzeDirectoryForDocs(dirPath) {
    const files = readdirSync(dirPath);
    
    files.forEach(file => {
      if (extname(file) === '.scss') {
        const filePath = join(dirPath, file);
        this.extractDocumentationFromFile(filePath);
      }
    });
  }

  extractDocumentationFromFile(filePath) {
    const content = readFileSync(filePath, 'utf8');
    const fileName = basename(filePath, '.scss');
    
    // Extract documentation comments
    const docComments = this.extractDocComments(content);
    
    // Extract mixins with documentation
    const mixins = this.extractMixinsWithDocs(content);
    
    // Extract variables with documentation
    const variables = this.extractVariablesWithDocs(content);
    
    // Categorize based on file location
    if (filePath.includes('components')) {
      this.docs.components.set(fileName, {
        file: filePath,
        description: docComments.description,
        mixins,
        variables,
        examples: docComments.examples
      });
    } else if (filePath.includes('themes')) {
      this.docs.themes.set(fileName, {
        file: filePath,
        description: docComments.description,
        variables,
        examples: docComments.examples
      });
    }
  }

  extractDocComments(content) {
    const docRegex = /\/\*\*([\s\S]*?)\*\//g;
    const comments = [];
    let match;
    
    while ((match = docRegex.exec(content)) !== null) {
      comments.push(match[1].trim());
    }
    
    return {
      description: comments[0] || '',
      examples: comments.slice(1)
    };
  }

  extractMixinsWithDocs(content) {
    const mixinRegex = /@mixin\s+([a-zA-Z][a-zA-Z0-9_-]*)\s*(\([^)]*\))?\s*\{/g;
    const mixins = [];
    let match;
    
    while ((match = mixinRegex.exec(content)) !== null) {
      const mixinName = match[1];
      const parameters = match[2] || '()';
      
      // Look for documentation comment before mixin
      const beforeMixin = content.substring(0, match.index);
      const lastCommentMatch = beforeMixin.match(/\/\/\s*(.+)$/m);
      const description = lastCommentMatch ? lastCommentMatch[1] : '';
      
      mixins.push({
        name: mixinName,
        parameters,
        description,
        usage: `@include ${mixinName}${parameters};`
      });
    }
    
    return mixins;
  }

  extractVariablesWithDocs(content) {
    const variableRegex = /\$([a-zA-Z][a-zA-Z0-9_-]*)\s*:\s*([^;]+);/g;
    const cssVarRegex = /--([a-zA-Z][a-zA-Z0-9_-]*)\s*:\s*([^;]+);/g;
    const variables = [];
    let match;
    
    // SCSS variables
    while ((match = variableRegex.exec(content)) !== null) {
      variables.push({
        name: `$${match[1]}`,
        value: match[2].trim(),
        type: 'scss'
      });
    }
    
    // CSS custom properties
    while ((match = cssVarRegex.exec(content)) !== null) {
      variables.push({
        name: `--${match[1]}`,
        value: match[2].trim(),
        type: 'css'
      });
    }
    
    return variables;
  }

  // =============================================================================
  // DOCUMENTATION GENERATION
  // =============================================================================

  generateComponentDocs() {
    let componentDocs = `# Component Documentation\n\n`;
    componentDocs += `This document provides comprehensive documentation for all styling components.\n\n`;
    
    this.docs.components.forEach((componentInfo, componentName) => {
      componentDocs += `## ${this.formatComponentName(componentName)}\n\n`;
      componentDocs += `**File:** \`${componentInfo.file}\`\n\n`;
      
      if (componentInfo.description) {
        componentDocs += `${componentInfo.description}\n\n`;
      }
      
      // Mixins documentation
      if (componentInfo.mixins.length > 0) {
        componentDocs += `### Mixins\n\n`;
        componentInfo.mixins.forEach(mixin => {
          componentDocs += `#### \`${mixin.name}\`\n\n`;
          if (mixin.description) {
            componentDocs += `${mixin.description}\n\n`;
          }
          componentDocs += `**Usage:**\n\`\`\`scss\n${mixin.usage}\n\`\`\`\n\n`;
        });
      }
      
      // Variables documentation
      if (componentInfo.variables.length > 0) {
        componentDocs += `### Variables\n\n`;
        componentInfo.variables.forEach(variable => {
          componentDocs += `- \`${variable.name}\`: ${variable.value}\n`;
        });
        componentDocs += `\n`;
      }
      
      componentDocs += `---\n\n`;
    });
    
    this.saveDocFile('docs/components.md', componentDocs);
  }

  generateThemeDocs() {
    let themeDocs = `# Theme Documentation\n\n`;
    themeDocs += `This document provides comprehensive documentation for all available themes.\n\n`;
    
    this.docs.themes.forEach((themeInfo, themeName) => {
      themeDocs += `## ${this.formatComponentName(themeName)}\n\n`;
      themeDocs += `**File:** \`${themeInfo.file}\`\n\n`;
      
      if (themeInfo.description) {
        themeDocs += `${themeInfo.description}\n\n`;
      }
      
      // Theme variables
      if (themeInfo.variables.length > 0) {
        themeDocs += `### Theme Variables\n\n`;
        themeInfo.variables.forEach(variable => {
          themeDocs += `- \`${variable.name}\`: ${variable.value}\n`;
        });
        themeDocs += `\n`;
      }
      
      themeDocs += `---\n\n`;
    });
    
    this.saveDocFile('docs/themes.md', themeDocs);
  }

  generateUtilityDocs() {
    let utilityDocs = `# Utility Classes Documentation\n\n`;
    utilityDocs += `This document provides documentation for all utility classes available in the system.\n\n`;
    
    // Generate utility class documentation from the utility component
    if (existsSync('src/styles/components/_utility-components.scss')) {
      const utilityContent = readFileSync('src/styles/components/_utility-components.scss', 'utf8');
      
      utilityDocs += this.generateUtilityClassDocs(utilityContent);
    }
    
    this.saveDocFile('docs/utilities.md', utilityDocs);
  }

  generateUtilityClassDocs(content) {
    let docs = '';
    
    const sections = [
      { name: 'Spacing Utilities', pattern: /\/\/ Spacing utilities([\s\S]*?)\/\/ [A-Z]/ },
      { name: 'Flexbox Utilities', pattern: /\/\/ Flexbox utilities([\s\S]*?)\/\/ [A-Z]/ },
      { name: 'Grid Utilities', pattern: /\/\/ Grid utilities([\s\S]*?)\/\/ [A-Z]/ },
      { name: 'Text Utilities', pattern: /\/\/ Text utilities([\s\S]*?)\/\/ [A-Z]/ }
    ];
    
    sections.forEach(section => {
      const match = content.match(section.pattern);
      if (match) {
        docs += `## ${section.name}\n\n`;
        
        // Extract utility classes from the section
        const utilities = this.extractUtilityClasses(match[1]);
        utilities.forEach(utility => {
          docs += `- \`${utility.class}\`: ${utility.description}\n`;
        });
        
        docs += `\n`;
      }
    });
    
    return docs;
  }

  extractUtilityClasses(sectionContent) {
    const classRegex = /\.([a-zA-Z][a-zA-Z0-9_-]*)\s*\{([^}]*)\}/g;
    const utilities = [];
    let match;
    
    while ((match = classRegex.exec(sectionContent)) !== null) {
      const className = match[1];
      const rules = match[2].trim();
      
      utilities.push({
        class: className,
        description: this.generateUtilityDescription(className, rules)
      });
    }
    
    return utilities;
  }

  generateUtilityDescription(className, rules) {
    // Generate human-readable descriptions for utility classes
    if (className.startsWith('m-')) return `Margin: ${this.extractValue(rules, 'margin')}`;
    if (className.startsWith('p-')) return `Padding: ${this.extractValue(rules, 'padding')}`;
    if (className.startsWith('text-')) return `Text styling: ${this.extractValue(rules, 'color|font-size|text-align')}`;
    if (className.startsWith('bg-')) return `Background: ${this.extractValue(rules, 'background')}`;
    if (className.startsWith('flex')) return `Flexbox: ${this.extractValue(rules, 'display|flex-direction|align-items|justify-content')}`;
    
    return rules.replace(/\s+/g, ' ').trim();
  }

  extractValue(rules, property) {
    const regex = new RegExp(`(${property})\\s*:\\s*([^;]+)`, 'i');
    const match = rules.match(regex);
    return match ? match[2].trim() : 'various properties';
  }

  generateMainDocs() {
    const mainDocs = `# Anarchy Styling System Documentation

## Overview

This documentation covers the comprehensive styling system for the Anarchy FoundryVTT system, including components, themes, utilities, and development tools.

## Quick Start

### Development Commands

\`\`\`bash
# Start development with style watching
npm run dev

# Build optimized styles
npm run build:styles:optimized

# Build critical CSS
npm run build:critical

# Lint styles
npm run stylelint

# Fix style issues
npm run stylelint:fix

# Analyze styles
node src/tools/style-analyzer.js
\`\`\`

### Console Commands

\`\`\`javascript
// Open UI customization dialog
anarchyUI.customize()

// Quick theme switching
game.system.anarchy.styles.applyTheme('style-dark')

// Performance analysis
game.system.anarchy.performanceOptimizer.generatePerformanceReport()

// Debug current theme
game.system.anarchy.styles.debugCurrentTheme()
\`\`\`

## Architecture

### Component System
- **Core Components**: Foundation mixins and base patterns
- **Sheet Components**: Actor and item sheet layouts
- **Item Components**: Item-specific styling
- **Dialog Components**: Modal and dialog interfaces
- **Monitor Components**: Health and status monitoring
- **Control Components**: Interactive elements and buttons
- **Utility Components**: Layout and styling utilities
- **Character Enhanced**: Advanced character sheet layouts

### Theme System
- **Theme Configuration**: Structured theme definitions
- **Variable Consolidation**: Optimized variable system
- **Runtime Customization**: Live theme adjustments
- **Accessibility Integration**: Built-in accessibility features

### Performance System
- **CSS Tree-Shaking**: Remove unused styles
- **Critical CSS**: Fast initial loading
- **Performance Monitoring**: Real-time metrics
- **Build Optimization**: Advanced compilation

### Customization System
- **UI Customization**: Runtime UI adjustments
- **User Preferences**: Persistent customization storage
- **Preset System**: Pre-configured customization sets
- **Console Interface**: Developer-friendly commands

## File Structure

\`\`\`
src/styles/
├── components/           # Modular component styles
│   ├── _core-components.scss
│   ├── _sheet-components.scss
│   ├── _item-components.scss
│   ├── _dialog-components.scss
│   ├── _monitor-components.scss
│   ├── _control-components.scss
│   ├── _utility-components.scss
│   ├── _character-enhanced.scss
│   └── _ui-customization.scss
├── build/               # Build optimization
│   ├── _optimization.scss
│   └── critical.scss
├── main.scss           # Main entry point
├── character-enhanced-sheet.scss
├── global.scss
└── gm-manager.scss

src/modules/
├── styles.js           # Enhanced theme management
├── theme-utilities.js  # Theme analysis tools
├── ui-customization.js # UI customization system
├── performance-optimizer.js # Performance optimization
└── ui-customization-dialog.js # Customization interface

src/tools/
├── style-analyzer.js   # Style analysis tool
└── style-docs-generator.js # Documentation generator
\`\`\`

## Development Workflow

1. **Start Development**: \`npm run dev\`
2. **Make Changes**: Edit SCSS files in \`src/styles/\`
3. **Check Quality**: \`npm run stylelint\`
4. **Test Performance**: \`node src/tools/style-analyzer.js\`
5. **Build Production**: \`npm run build:styles:optimized\`

## Links

- [Component Documentation](./components.md)
- [Theme Documentation](./themes.md)
- [Utility Documentation](./utilities.md)
- [Performance Guide](./performance.md)
- [Customization Guide](./customization.md)

---

*Generated automatically by style-docs-generator.js*
`;
    
    this.saveDocFile('docs/README.md', mainDocs);
  }

  // =============================================================================
  // UTILITY METHODS
  // =============================================================================

  formatComponentName(name) {
    return name
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  saveDocFile(filePath, content) {
    const dir = join(process.cwd(), 'docs');
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    
    const fullPath = join(process.cwd(), filePath);
    writeFileSync(fullPath, content);
    console.log(`📄 Generated: ${filePath}`);
  }
}

// =============================================================================
// CLI INTERFACE
// =============================================================================

if (import.meta.url === `file://${process.argv[1]}`) {
  const generator = new StyleDocsGenerator();
  
  generator.generateDocumentation()
    .then(() => {
      console.log('\n🎉 Documentation generation complete!');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Documentation generation failed:', error);
      process.exit(1);
    });
}
