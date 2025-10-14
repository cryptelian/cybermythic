#!/usr/bin/env node

/**
 * Style Analyzer - Advanced development tool for analyzing and optimizing styles
 * This tool provides comprehensive analysis of the styling system for developers
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { execSync } from 'child_process';

class StyleAnalyzer {
  constructor() {
    this.analysis = {
      files: new Map(),
      components: new Map(),
      themes: new Map(),
      variables: new Map(),
      selectors: new Map(),
      performance: new Map(),
      issues: [],
      recommendations: []
    };
  }

  // =============================================================================
  // MAIN ANALYSIS METHODS
  // =============================================================================

  async analyzeProject() {
    console.log('🔍 Starting comprehensive style analysis...\n');
    
    // Analyze file structure
    this.analyzeFileStructure();
    
    // Analyze SCSS files
    this.analyzeSCSSFiles();
    
    // Analyze CSS output
    this.analyzeCSSOutput();
    
    // Analyze performance
    this.analyzePerformance();
    
    // Generate recommendations
    this.generateRecommendations();
    
    // Generate report
    const report = this.generateReport();
    
    // Save report
    this.saveReport(report);
    
    return report;
  }

  analyzeFileStructure() {
    console.log('📁 Analyzing file structure...');
    
    const stylesDirs = [
      'src/styles',
      'src/styles/components',
      'src/styles/build',
      'public/style'
    ];
    
    stylesDirs.forEach(dir => {
      if (existsSync(dir)) {
        this.analyzeDirectory(dir);
      }
    });
  }

  analyzeDirectory(dirPath) {
    const files = readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = join(dirPath, file);
      const stat = statSync(filePath);
      
      if (stat.isFile() && (extname(file) === '.scss' || extname(file) === '.css')) {
        this.analyzeStyleFile(filePath);
      } else if (stat.isDirectory()) {
        this.analyzeDirectory(filePath);
      }
    });
  }

  analyzeStyleFile(filePath) {
    const content = readFileSync(filePath, 'utf8');
    const fileInfo = {
      path: filePath,
      size: content.length,
      lines: content.split('\n').length,
      type: extname(filePath).substring(1),
      lastModified: statSync(filePath).mtime,
      analysis: {
        selectors: this.extractSelectors(content),
        variables: this.extractVariables(content),
        mixins: this.extractMixins(content),
        imports: this.extractImports(content),
        complexity: this.calculateComplexity(content)
      }
    };
    
    this.analysis.files.set(filePath, fileInfo);
  }

  analyzeSCSSFiles() {
    console.log('🎨 Analyzing SCSS files...');
    
    this.analysis.files.forEach((fileInfo, filePath) => {
      if (fileInfo.type === 'scss') {
        this.analyzeComponentStructure(fileInfo);
        this.analyzeVariableUsage(fileInfo);
        this.analyzeMixinUsage(fileInfo);
      }
    });
  }

  analyzeCSSOutput() {
    console.log('📊 Analyzing CSS output...');
    
    if (existsSync('public/style/compiled.css')) {
      const compiledCSS = readFileSync('public/style/compiled.css', 'utf8');
      
      this.analysis.performance.set('cssSize', compiledCSS.length);
      this.analysis.performance.set('cssLines', compiledCSS.split('\n').length);
      this.analysis.performance.set('selectorCount', this.countSelectors(compiledCSS));
      this.analysis.performance.set('variableCount', this.countVariables(compiledCSS));
    }
    
    if (existsSync('public/style/critical.css')) {
      const criticalCSS = readFileSync('public/style/critical.css', 'utf8');
      
      this.analysis.performance.set('criticalCSSSize', criticalCSS.length);
      this.analysis.performance.set('criticalReduction', 
        Math.round((1 - criticalCSS.length / this.analysis.performance.get('cssSize')) * 100)
      );
    }
  }

  analyzePerformance() {
    console.log('⚡ Analyzing performance...');
    
    // Compile and measure build time
    const startTime = Date.now();
    try {
      execSync('npm run build:styles', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      this.analysis.performance.set('buildTime', buildTime);
    } catch (error) {
      this.analysis.issues.push({
        type: 'build-error',
        severity: 'high',
        message: 'SCSS compilation failed',
        details: error.message
      });
    }
    
    // Analyze CSS complexity
    this.analyzeCSSComplexity();
    
    // Check for performance anti-patterns
    this.checkPerformanceAntiPatterns();
  }

  // =============================================================================
  // ANALYSIS HELPER METHODS
  // =============================================================================

  extractSelectors(content) {
    const selectorRegex = /^\s*([.#]?[a-zA-Z][a-zA-Z0-9_-]*(?:\s*[>+~]\s*[a-zA-Z][a-zA-Z0-9_-]*)*)\s*\{/gm;
    const selectors = [];
    let match;
    
    while ((match = selectorRegex.exec(content)) !== null) {
      selectors.push(match[1].trim());
    }
    
    return selectors;
  }

  extractVariables(content) {
    const variableRegex = /--([a-zA-Z][a-zA-Z0-9_-]*)\s*:/g;
    const scssVariableRegex = /\$([a-zA-Z][a-zA-Z0-9_-]*)\s*:/g;
    const variables = [];
    let match;
    
    while ((match = variableRegex.exec(content)) !== null) {
      variables.push(`--${match[1]}`);
    }
    
    while ((match = scssVariableRegex.exec(content)) !== null) {
      variables.push(`$${match[1]}`);
    }
    
    return variables;
  }

  extractMixins(content) {
    const mixinRegex = /@mixin\s+([a-zA-Z][a-zA-Z0-9_-]*)/g;
    const mixins = [];
    let match;
    
    while ((match = mixinRegex.exec(content)) !== null) {
      mixins.push(match[1]);
    }
    
    return mixins;
  }

  extractImports(content) {
    const importRegex = /@(?:use|import)\s+['"]([^'"]+)['"]/g;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      imports.push(match[1]);
    }
    
    return imports;
  }

  calculateComplexity(content) {
    const metrics = {
      nestingDepth: this.calculateNestingDepth(content),
      selectorComplexity: this.calculateSelectorComplexity(content),
      ruleCount: (content.match(/\{[^}]*\}/g) || []).length,
      commentRatio: this.calculateCommentRatio(content)
    };
    
    // Overall complexity score (0-100)
    metrics.score = Math.min(100, 
      (metrics.nestingDepth * 10) + 
      (metrics.selectorComplexity * 5) + 
      (metrics.ruleCount * 0.1) - 
      (metrics.commentRatio * 20)
    );
    
    return metrics;
  }

  calculateNestingDepth(content) {
    const lines = content.split('\n');
    let maxDepth = 0;
    let currentDepth = 0;
    
    lines.forEach(line => {
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      
      currentDepth += openBraces - closeBraces;
      maxDepth = Math.max(maxDepth, currentDepth);
    });
    
    return maxDepth;
  }

  calculateSelectorComplexity(content) {
    const selectors = this.extractSelectors(content);
    let totalComplexity = 0;
    
    selectors.forEach(selector => {
      // Count selector parts (classes, IDs, pseudo-selectors, etc.)
      const parts = selector.split(/[\s>+~]/).filter(part => part.trim());
      const pseudoSelectors = (selector.match(/:[a-z-]+/g) || []).length;
      const attributeSelectors = (selector.match(/\[[^\]]+\]/g) || []).length;
      
      totalComplexity += parts.length + pseudoSelectors + attributeSelectors;
    });
    
    return selectors.length > 0 ? Math.round(totalComplexity / selectors.length) : 0;
  }

  calculateCommentRatio(content) {
    const totalLines = content.split('\n').length;
    const commentLines = (content.match(/^\s*\/\/|^\s*\/\*|\*\//gm) || []).length;
    
    return totalLines > 0 ? commentLines / totalLines : 0;
  }

  countSelectors(css) {
    return (css.match(/[^{}]+\{[^}]*\}/g) || []).length;
  }

  countVariables(css) {
    return (css.match(/--[a-zA-Z][a-zA-Z0-9_-]*\s*:/g) || []).length;
  }

  // =============================================================================
  // COMPONENT AND THEME ANALYSIS
  // =============================================================================

  analyzeComponentStructure(fileInfo) {
    const componentName = this.extractComponentName(fileInfo.path);
    
    if (componentName) {
      this.analysis.components.set(componentName, {
        file: fileInfo.path,
        selectors: fileInfo.analysis.selectors.length,
        variables: fileInfo.analysis.variables.length,
        mixins: fileInfo.analysis.mixins.length,
        complexity: fileInfo.analysis.complexity.score,
        size: fileInfo.size
      });
    }
  }

  analyzeVariableUsage(fileInfo) {
    fileInfo.analysis.variables.forEach(variable => {
      if (!this.analysis.variables.has(variable)) {
        this.analysis.variables.set(variable, {
          definedIn: [],
          usedIn: [],
          type: variable.startsWith('--') ? 'css' : 'scss'
        });
      }
      
      this.analysis.variables.get(variable).definedIn.push(fileInfo.path);
    });
  }

  analyzeMixinUsage(fileInfo) {
    // Track mixin definitions and usage
    fileInfo.analysis.mixins.forEach(mixin => {
      // Implementation would track mixin usage across files
    });
  }

  extractComponentName(filePath) {
    const match = filePath.match(/components\/_?([a-zA-Z-]+)\.scss$/);
    return match ? match[1] : null;
  }

  // =============================================================================
  // PERFORMANCE ANALYSIS
  // =============================================================================

  analyzeCSSComplexity() {
    const cssSize = this.analysis.performance.get('cssSize') || 0;
    const selectorCount = this.analysis.performance.get('selectorCount') || 0;
    
    // Complexity metrics
    this.analysis.performance.set('averageSelectorSize', 
      selectorCount > 0 ? Math.round(cssSize / selectorCount) : 0
    );
    
    // Performance scoring
    let performanceScore = 100;
    
    if (cssSize > 500000) performanceScore -= 30; // 500KB penalty
    if (cssSize > 1000000) performanceScore -= 50; // 1MB penalty
    if (selectorCount > 5000) performanceScore -= 20; // High selector count penalty
    
    this.analysis.performance.set('performanceScore', Math.max(0, performanceScore));
  }

  checkPerformanceAntiPatterns() {
    this.analysis.files.forEach((fileInfo, filePath) => {
      const content = readFileSync(filePath, 'utf8');
      
      // Check for performance anti-patterns
      if (content.includes('* {')) {
        this.analysis.issues.push({
          type: 'performance',
          severity: 'medium',
          file: filePath,
          message: 'Universal selector (*) detected',
          suggestion: 'Consider more specific selectors for better performance'
        });
      }
      
      if (fileInfo.analysis.complexity.nestingDepth > 6) {
        this.analysis.issues.push({
          type: 'complexity',
          severity: 'medium',
          file: filePath,
          message: `High nesting depth: ${fileInfo.analysis.complexity.nestingDepth}`,
          suggestion: 'Consider flattening nested selectors'
        });
      }
      
      if (fileInfo.analysis.complexity.selectorComplexity > 8) {
        this.analysis.issues.push({
          type: 'complexity',
          severity: 'low',
          file: filePath,
          message: `Complex selectors detected`,
          suggestion: 'Consider simplifying selector patterns'
        });
      }
    });
  }

  // =============================================================================
  // RECOMMENDATION GENERATION
  // =============================================================================

  generateRecommendations() {
    console.log('💡 Generating recommendations...');
    
    // File size recommendations
    this.analysis.files.forEach((fileInfo, filePath) => {
      if (fileInfo.size > 50000) { // 50KB
        this.analysis.recommendations.push({
          type: 'file-size',
          priority: 'medium',
          file: filePath,
          message: `Large file detected: ${Math.round(fileInfo.size / 1024)}KB`,
          suggestion: 'Consider splitting into smaller components'
        });
      }
    });
    
    // Variable usage recommendations
    this.analysis.variables.forEach((varInfo, varName) => {
      if (varInfo.definedIn.length > 1) {
        this.analysis.recommendations.push({
          type: 'variable-duplication',
          priority: 'low',
          message: `Variable ${varName} defined in multiple files`,
          suggestion: 'Consider consolidating variable definitions'
        });
      }
    });
    
    // Performance recommendations
    const performanceScore = this.analysis.performance.get('performanceScore') || 100;
    if (performanceScore < 70) {
      this.analysis.recommendations.push({
        type: 'performance',
        priority: 'high',
        message: `Low performance score: ${performanceScore}/100`,
        suggestion: 'Enable performance optimizations and reduce CSS complexity'
      });
    }
  }

  // =============================================================================
  // REPORT GENERATION
  // =============================================================================

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.analysis.files.size,
        totalComponents: this.analysis.components.size,
        totalVariables: this.analysis.variables.size,
        totalIssues: this.analysis.issues.length,
        totalRecommendations: this.analysis.recommendations.length,
        performanceScore: this.analysis.performance.get('performanceScore') || 100
      },
      performance: Object.fromEntries(this.analysis.performance),
      files: Array.from(this.analysis.files.entries()).map(([path, info]) => ({
        path,
        ...info,
        lastModified: info.lastModified.toISOString()
      })),
      components: Object.fromEntries(this.analysis.components),
      variables: Object.fromEntries(this.analysis.variables),
      issues: this.analysis.issues,
      recommendations: this.analysis.recommendations
    };
    
    return report;
  }

  saveReport(report) {
    const reportPath = 'style-analysis-report.json';
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`\n📋 Analysis complete! Report saved to: ${reportPath}`);
    console.log(`📊 Summary:`);
    console.log(`   Files analyzed: ${report.summary.totalFiles}`);
    console.log(`   Components: ${report.summary.totalComponents}`);
    console.log(`   Variables: ${report.summary.totalVariables}`);
    console.log(`   Issues found: ${report.summary.totalIssues}`);
    console.log(`   Recommendations: ${report.summary.totalRecommendations}`);
    console.log(`   Performance score: ${report.summary.performanceScore}/100`);
    
    if (report.performance.cssSize) {
      console.log(`   CSS size: ${Math.round(report.performance.cssSize / 1024)}KB`);
    }
    
    if (report.performance.buildTime) {
      console.log(`   Build time: ${report.performance.buildTime}ms`);
    }
  }

  // =============================================================================
  // UTILITY METHODS
  // =============================================================================

  printSummary() {
    console.log('\n🎯 Style Analysis Summary:');
    console.log('================================');
    
    // File summary
    console.log(`📁 Files: ${this.analysis.files.size}`);
    this.analysis.files.forEach((info, path) => {
      console.log(`   ${path}: ${Math.round(info.size / 1024)}KB, ${info.lines} lines`);
    });
    
    // Component summary
    console.log(`\n🧩 Components: ${this.analysis.components.size}`);
    this.analysis.components.forEach((info, name) => {
      console.log(`   ${name}: ${info.selectors} selectors, complexity ${info.complexity.toFixed(1)}`);
    });
    
    // Performance summary
    console.log(`\n⚡ Performance:`);
    this.analysis.performance.forEach((value, key) => {
      console.log(`   ${key}: ${value}`);
    });
    
    // Issues summary
    if (this.analysis.issues.length > 0) {
      console.log(`\n⚠️  Issues (${this.analysis.issues.length}):`);
      this.analysis.issues.forEach(issue => {
        console.log(`   ${issue.severity.toUpperCase()}: ${issue.message}`);
      });
    }
    
    // Recommendations summary
    if (this.analysis.recommendations.length > 0) {
      console.log(`\n💡 Recommendations (${this.analysis.recommendations.length}):`);
      this.analysis.recommendations.forEach(rec => {
        console.log(`   ${rec.priority.toUpperCase()}: ${rec.message}`);
      });
    }
  }
}

// =============================================================================
// CLI INTERFACE
// =============================================================================

if (import.meta.url === `file://${process.argv[1]}`) {
  const analyzer = new StyleAnalyzer();
  
  analyzer.analyzeProject()
    .then(report => {
      analyzer.printSummary();
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Analysis failed:', error);
      process.exit(1);
    });
}
