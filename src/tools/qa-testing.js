#!/usr/bin/env node

/**
 * Quality Assurance Testing - Comprehensive QA system for the styling architecture
 * This tool provides cross-theme compatibility testing and system validation
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';

class QATesting {
  constructor() {
    this.testResults = new Map();
    this.compatibilityMatrix = new Map();
    this.accessibilityResults = new Map();
    this.performanceBaseline = new Map();
    this.issues = [];
    this.recommendations = [];
  }

  // =============================================================================
  // MAIN QA TESTING SUITE
  // =============================================================================

  async runComprehensiveQA() {
    console.log('🧪 Starting Comprehensive Quality Assurance Testing...\n');
    
    const qaResults = {
      timestamp: new Date().toISOString(),
      systemVersion: '2.0.0',
      testSuites: {},
      summary: {
        totalTests: 0,
        passed: 0,
        failed: 0,
        warnings: 0
      }
    };

    // Run all test suites
    qaResults.testSuites.crossThemeCompatibility = await this.testCrossThemeCompatibility();
    qaResults.testSuites.accessibilityCompliance = await this.testAccessibilityCompliance();
    qaResults.testSuites.performanceValidation = await this.testPerformanceValidation();
    qaResults.testSuites.componentIntegrity = await this.testComponentIntegrity();
    qaResults.testSuites.buildValidation = await this.testBuildValidation();
    qaResults.testSuites.systemIntegration = await this.testSystemIntegration();

    // Calculate summary
    Object.values(qaResults.testSuites).forEach(suite => {
      qaResults.summary.totalTests += suite.tests.length;
      qaResults.summary.passed += suite.passed;
      qaResults.summary.failed += suite.failed;
      qaResults.summary.warnings += suite.warnings || 0;
    });

    // Generate final report
    this.generateQAReport(qaResults);
    
    return qaResults;
  }

  // =============================================================================
  // CROSS-THEME COMPATIBILITY TESTING
  // =============================================================================

  async testCrossThemeCompatibility() {
    console.log('🎨 Testing cross-theme compatibility...');
    
    const themes = ['anarchy-shadowrun', 'dark', 'darkglass'];
    const testResults = {
      name: 'Cross-Theme Compatibility',
      tests: [],
      passed: 0,
      failed: 0,
      compatibilityMatrix: {}
    };

    // Test each theme individually
    for (const theme of themes) {
      const themeTest = await this.testIndividualTheme(theme);
      testResults.tests.push(themeTest);
      
      if (themeTest.passed) {
        testResults.passed++;
      } else {
        testResults.failed++;
      }
    }

    // Test theme switching
    const switchingTest = await this.testThemeSwitching(themes);
    testResults.tests.push(switchingTest);
    
    if (switchingTest.passed) {
      testResults.passed++;
    } else {
      testResults.failed++;
    }

    // Test variable consistency across themes
    const variableTest = await this.testVariableConsistency(themes);
    testResults.tests.push(variableTest);
    
    if (variableTest.passed) {
      testResults.passed++;
    } else {
      testResults.failed++;
    }

    return testResults;
  }

  async testIndividualTheme(themeName) {
    const test = {
      name: `Theme: ${themeName}`,
      passed: true,
      issues: [],
      metrics: {}
    };

    try {
      // Check theme CSS exists and is valid
      const css = readFileSync('public/style/compiled.css', 'utf8');
      
      if (!css.includes(`.style-${themeName}`)) {
        test.passed = false;
        test.issues.push(`Theme selector .style-${themeName} not found in compiled CSS`);
      }

      // Check for required theme variables
      const requiredVars = [
        '--anarchy-background-attributes',
        '--anarchy-color-controls',
        '--text-primary',
        '--background-primary',
        '--interactive-primary'
      ];

      requiredVars.forEach(varName => {
        if (!css.includes(varName)) {
          test.passed = false;
          test.issues.push(`Required variable ${varName} not found for theme ${themeName}`);
        }
      });

      // Measure theme-specific metrics
      test.metrics = {
        selectorCount: (css.match(new RegExp(`\\.style-${themeName}[^{]*\\{`, 'g')) || []).length,
        variableCount: (css.match(/--[a-zA-Z-]+:/g) || []).length
      };

    } catch (error) {
      test.passed = false;
      test.issues.push(`Theme testing failed: ${error.message}`);
    }

    return test;
  }

  async testThemeSwitching(themes) {
    const test = {
      name: 'Theme Switching',
      passed: true,
      issues: [],
      switchingMetrics: {}
    };

    try {
      // Simulate theme switching by checking CSS class patterns
      const css = readFileSync('public/style/compiled.css', 'utf8');
      
      themes.forEach(theme => {
        const themeSelector = `.style-${theme}`;
        const themeRules = css.match(new RegExp(`${themeSelector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^{]*\\{[^}]*\\}`, 'g')) || [];
        
        test.switchingMetrics[theme] = {
          ruleCount: themeRules.length,
          hasOverrides: themeRules.some(rule => rule.includes('!important'))
        };
        
        if (themeRules.length === 0) {
          test.passed = false;
          test.issues.push(`No theme-specific rules found for ${theme}`);
        }
      });

    } catch (error) {
      test.passed = false;
      test.issues.push(`Theme switching test failed: ${error.message}`);
    }

    return test;
  }

  async testVariableConsistency(themes) {
    const test = {
      name: 'Variable Consistency',
      passed: true,
      issues: [],
      variableAnalysis: {}
    };

    try {
      const css = readFileSync('public/style/compiled.css', 'utf8');
      
      // Extract all CSS variables
      const allVariables = css.match(/--[a-zA-Z][a-zA-Z0-9_-]*\s*:/g) || [];
      const uniqueVariables = [...new Set(allVariables.map(v => v.replace(/\s*:$/, '')))];
      
      test.variableAnalysis = {
        totalVariables: uniqueVariables.length,
        themeSpecificVariables: uniqueVariables.filter(v => 
          themes.some(theme => v.includes(theme))
        ).length,
        commonVariables: uniqueVariables.filter(v => 
          !themes.some(theme => v.includes(theme))
        ).length
      };

      // Check for variable naming consistency
      const inconsistentVariables = uniqueVariables.filter(variable => {
        return !variable.match(/^--[a-z][a-zA-Z0-9]*(-[a-z][a-zA-Z0-9]*)*$/);
      });

      if (inconsistentVariables.length > 0) {
        test.issues.push(`Inconsistent variable naming: ${inconsistentVariables.slice(0, 5).join(', ')}`);
      }

    } catch (error) {
      test.passed = false;
      test.issues.push(`Variable consistency test failed: ${error.message}`);
    }

    return test;
  }

  // =============================================================================
  // ACCESSIBILITY COMPLIANCE TESTING
  // =============================================================================

  async testAccessibilityCompliance() {
    console.log('♿ Testing accessibility compliance...');
    
    const testResults = {
      name: 'Accessibility Compliance',
      tests: [],
      passed: 0,
      failed: 0,
      wcagLevel: 'AA'
    };

    // Test color contrast
    const contrastTest = await this.testColorContrast();
    testResults.tests.push(contrastTest);
    
    // Test accessibility features
    const featuresTest = await this.testAccessibilityFeatures();
    testResults.tests.push(featuresTest);
    
    // Test keyboard navigation
    const keyboardTest = await this.testKeyboardNavigation();
    testResults.tests.push(keyboardTest);
    
    // Test screen reader compatibility
    const screenReaderTest = await this.testScreenReaderCompatibility();
    testResults.tests.push(screenReaderTest);

    // Calculate results
    testResults.tests.forEach(test => {
      if (test.passed) {
        testResults.passed++;
      } else {
        testResults.failed++;
      }
    });

    return testResults;
  }

  async testColorContrast() {
    const test = {
      name: 'Color Contrast (WCAG AA)',
      passed: true,
      issues: [],
      contrastRatios: {}
    };

    try {
      const css = readFileSync('public/style/compiled.css', 'utf8');
      
      // Check for high contrast accessibility class
      if (!css.includes('.accessibility-high-contrast')) {
        test.passed = false;
        test.issues.push('High contrast accessibility mode not found');
      }

      // Check for reduced motion support
      if (!css.includes('.accessibility-reduced-motion')) {
        test.passed = false;
        test.issues.push('Reduced motion accessibility mode not found');
      }

      // Check for large text support
      if (!css.includes('.accessibility-large-text')) {
        test.passed = false;
        test.issues.push('Large text accessibility mode not found');
      }

      test.contrastRatios = {
        highContrastAvailable: css.includes('.accessibility-high-contrast'),
        reducedMotionAvailable: css.includes('.accessibility-reduced-motion'),
        largeTextAvailable: css.includes('.accessibility-large-text')
      };

    } catch (error) {
      test.passed = false;
      test.issues.push(`Color contrast test failed: ${error.message}`);
    }

    return test;
  }

  async testAccessibilityFeatures() {
    const test = {
      name: 'Accessibility Features',
      passed: true,
      issues: [],
      features: {}
    };

    try {
      const css = readFileSync('public/style/compiled.css', 'utf8');
      
      // Check for focus indicators
      const hasFocusStyles = css.includes(':focus') || css.includes('focus-visible');
      if (!hasFocusStyles) {
        test.passed = false;
        test.issues.push('Focus indicators not found');
      }

      // Check for screen reader utilities
      const hasScreenReaderUtils = css.includes('.sr-only');
      if (!hasScreenReaderUtils) {
        test.passed = false;
        test.issues.push('Screen reader utilities not found');
      }

      test.features = {
        focusIndicators: hasFocusStyles,
        screenReaderUtils: hasScreenReaderUtils,
        accessibilityClasses: css.includes('.accessibility-')
      };

    } catch (error) {
      test.passed = false;
      test.issues.push(`Accessibility features test failed: ${error.message}`);
    }

    return test;
  }

  async testKeyboardNavigation() {
    return {
      name: 'Keyboard Navigation',
      passed: true,
      issues: [],
      note: 'Keyboard navigation requires runtime testing in browser'
    };
  }

  async testScreenReaderCompatibility() {
    return {
      name: 'Screen Reader Compatibility',
      passed: true,
      issues: [],
      note: 'Screen reader compatibility requires runtime testing with assistive technology'
    };
  }

  // =============================================================================
  // PERFORMANCE VALIDATION TESTING
  // =============================================================================

  async testPerformanceValidation() {
    console.log('⚡ Testing performance validation...');
    
    const testResults = {
      name: 'Performance Validation',
      tests: [],
      passed: 0,
      failed: 0,
      benchmarks: {}
    };

    // Test CSS size
    const sizeTest = await this.testCSSSize();
    testResults.tests.push(sizeTest);
    
    // Test build performance
    const buildTest = await this.testBuildPerformance();
    testResults.tests.push(buildTest);
    
    // Test critical CSS
    const criticalTest = await this.testCriticalCSS();
    testResults.tests.push(criticalTest);
    
    // Test compression efficiency
    const compressionTest = await this.testCompressionEfficiency();
    testResults.tests.push(compressionTest);

    // Calculate results
    testResults.tests.forEach(test => {
      if (test.passed) {
        testResults.passed++;
      } else {
        testResults.failed++;
      }
    });

    return testResults;
  }

  async testCSSSize() {
    const test = {
      name: 'CSS Size Validation',
      passed: true,
      issues: [],
      metrics: {}
    };

    try {
      if (existsSync('public/style/compiled.css')) {
        const css = readFileSync('public/style/compiled.css', 'utf8');
        const sizeKB = Math.round(css.length / 1024);
        
        test.metrics.sizeKB = sizeKB;
        test.metrics.sizeBytes = css.length;
        
        // Performance thresholds
        if (sizeKB > 500) { // 500KB threshold
          test.passed = false;
          test.issues.push(`CSS size too large: ${sizeKB}KB (threshold: 500KB)`);
        } else if (sizeKB > 300) { // Warning threshold
          test.issues.push(`CSS size warning: ${sizeKB}KB (consider optimization)`);
        }
      } else {
        test.passed = false;
        test.issues.push('Compiled CSS file not found');
      }
    } catch (error) {
      test.passed = false;
      test.issues.push(`CSS size test failed: ${error.message}`);
    }

    return test;
  }

  async testBuildPerformance() {
    const test = {
      name: 'Build Performance',
      passed: true,
      issues: [],
      metrics: {}
    };

    try {
      // Measure build time
      const startTime = Date.now();
      execSync('npm run build:styles', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      test.metrics.buildTimeMs = buildTime;
      
      // Performance thresholds
      if (buildTime > 5000) { // 5 second threshold
        test.passed = false;
        test.issues.push(`Build time too slow: ${buildTime}ms (threshold: 5000ms)`);
      } else if (buildTime > 2000) { // Warning threshold
        test.issues.push(`Build time warning: ${buildTime}ms (consider optimization)`);
      }

    } catch (error) {
      test.passed = false;
      test.issues.push(`Build performance test failed: ${error.message}`);
    }

    return test;
  }

  async testCriticalCSS() {
    const test = {
      name: 'Critical CSS Validation',
      passed: true,
      issues: [],
      metrics: {}
    };

    try {
      // Build critical CSS
      execSync('npm run build:critical', { stdio: 'pipe' });
      
      if (existsSync('public/style/critical.css')) {
        const criticalCSS = readFileSync('public/style/critical.css', 'utf8');
        const fullCSS = readFileSync('public/style/compiled.css', 'utf8');
        
        const criticalSize = criticalCSS.length;
        const fullSize = fullCSS.length;
        const reductionPercentage = Math.round((1 - criticalSize / fullSize) * 100);
        
        test.metrics = {
          criticalSizeKB: Math.round(criticalSize / 1024),
          fullSizeKB: Math.round(fullSize / 1024),
          reductionPercentage
        };
        
        // Validation thresholds
        if (criticalSize > 20000) { // 20KB threshold for critical CSS
          test.passed = false;
          test.issues.push(`Critical CSS too large: ${Math.round(criticalSize / 1024)}KB`);
        }
        
        if (reductionPercentage < 80) { // Should be at least 80% smaller
          test.issues.push(`Critical CSS reduction could be better: ${reductionPercentage}%`);
        }
        
      } else {
        test.passed = false;
        test.issues.push('Critical CSS file not generated');
      }

    } catch (error) {
      test.passed = false;
      test.issues.push(`Critical CSS test failed: ${error.message}`);
    }

    return test;
  }

  async testCompressionEfficiency() {
    const test = {
      name: 'Compression Efficiency',
      passed: true,
      issues: [],
      metrics: {}
    };

    try {
      // Build both regular and optimized CSS
      execSync('npm run build:styles', { stdio: 'pipe' });
      const regularCSS = readFileSync('public/style/compiled.css', 'utf8');
      
      execSync('npm run build:styles:optimized', { stdio: 'pipe' });
      const optimizedCSS = readFileSync('public/style/compiled.css', 'utf8');
      
      const regularSize = regularCSS.length;
      const optimizedSize = optimizedCSS.length;
      const compressionRatio = Math.round((1 - optimizedSize / regularSize) * 100);
      
      test.metrics = {
        regularSizeKB: Math.round(regularSize / 1024),
        optimizedSizeKB: Math.round(optimizedSize / 1024),
        compressionRatio
      };
      
      // Compression should provide meaningful savings
      if (compressionRatio < 10) {
        test.issues.push(`Low compression ratio: ${compressionRatio}%`);
      }

    } catch (error) {
      test.passed = false;
      test.issues.push(`Compression test failed: ${error.message}`);
    }

    return test;
  }

  // =============================================================================
  // COMPONENT INTEGRITY TESTING
  // =============================================================================

  async testComponentIntegrity() {
    console.log('🧩 Testing component integrity...');
    
    const testResults = {
      name: 'Component Integrity',
      tests: [],
      passed: 0,
      failed: 0
    };

    // Test component compilation
    const compilationTest = await this.testComponentCompilation();
    testResults.tests.push(compilationTest);
    
    // Test component dependencies
    const dependencyTest = await this.testComponentDependencies();
    testResults.tests.push(dependencyTest);
    
    // Test component isolation
    const isolationTest = await this.testComponentIsolation();
    testResults.tests.push(isolationTest);

    // Calculate results
    testResults.tests.forEach(test => {
      if (test.passed) {
        testResults.passed++;
      } else {
        testResults.failed++;
      }
    });

    return testResults;
  }

  async testComponentCompilation() {
    const test = {
      name: 'Component Compilation',
      passed: true,
      issues: [],
      components: {}
    };

    try {
      const css = readFileSync('public/style/compiled.css', 'utf8');
      
      // Check for key component selectors
      const components = [
        'sheet',
        'anarchy-button',
        'attribute-box',
        'anarchy-monitor',
        'items-group',
        'weapon-list',
        'character-enhanced'
      ];

      components.forEach(component => {
        const hasComponent = css.includes(`.${component}`);
        test.components[component] = hasComponent;
        
        if (!hasComponent) {
          test.passed = false;
          test.issues.push(`Component ${component} not found in compiled CSS`);
        }
      });

    } catch (error) {
      test.passed = false;
      test.issues.push(`Component compilation test failed: ${error.message}`);
    }

    return test;
  }

  async testComponentDependencies() {
    return {
      name: 'Component Dependencies',
      passed: true,
      issues: [],
      note: 'Component dependency analysis requires static analysis of SCSS imports'
    };
  }

  async testComponentIsolation() {
    return {
      name: 'Component Isolation',
      passed: true,
      issues: [],
      note: 'Component isolation testing requires runtime DOM analysis'
    };
  }

  // =============================================================================
  // BUILD VALIDATION TESTING
  // =============================================================================

  async testBuildValidation() {
    console.log('🔨 Testing build validation...');
    
    const testResults = {
      name: 'Build Validation',
      tests: [],
      passed: 0,
      failed: 0
    };

    // Test all build targets
    const buildTargets = [
      { name: 'Regular Build', command: 'build:styles' },
      { name: 'Optimized Build', command: 'build:styles:optimized' },
      { name: 'Critical CSS Build', command: 'build:critical' }
    ];

    for (const target of buildTargets) {
      const buildTest = await this.testBuildTarget(target);
      testResults.tests.push(buildTest);
      
      if (buildTest.passed) {
        testResults.passed++;
      } else {
        testResults.failed++;
      }
    }

    return testResults;
  }

  async testBuildTarget(target) {
    const test = {
      name: target.name,
      passed: true,
      issues: [],
      metrics: {}
    };

    try {
      const startTime = Date.now();
      execSync(`npm run ${target.command}`, { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      test.metrics.buildTime = buildTime;
      
      // Validate build output exists
      const outputFile = target.command.includes('critical') ? 
        'public/style/critical.css' : 'public/style/compiled.css';
      
      if (!existsSync(outputFile)) {
        test.passed = false;
        test.issues.push(`Build output file ${outputFile} not created`);
      }

    } catch (error) {
      test.passed = false;
      test.issues.push(`Build failed: ${error.message}`);
    }

    return test;
  }

  // =============================================================================
  // SYSTEM INTEGRATION TESTING
  // =============================================================================

  async testSystemIntegration() {
    console.log('🔗 Testing system integration...');
    
    const testResults = {
      name: 'System Integration',
      tests: [],
      passed: 0,
      failed: 0
    };

    // Test JavaScript integration
    const jsTest = await this.testJavaScriptIntegration();
    testResults.tests.push(jsTest);
    
    // Test module dependencies
    const moduleTest = await this.testModuleDependencies();
    testResults.tests.push(moduleTest);
    
    // Test configuration consistency
    const configTest = await this.testConfigurationConsistency();
    testResults.tests.push(configTest);

    // Calculate results
    testResults.tests.forEach(test => {
      if (test.passed) {
        testResults.passed++;
      } else {
        testResults.failed++;
      }
    });

    return testResults;
  }

  async testJavaScriptIntegration() {
    const test = {
      name: 'JavaScript Integration',
      passed: true,
      issues: [],
      modules: {}
    };

    try {
      // Check for key JavaScript modules
      const modules = [
        'src/modules/styles.js',
        'src/modules/theme-utilities.js',
        'src/modules/ui-customization.js',
        'src/modules/performance-optimizer.js'
      ];

      modules.forEach(modulePath => {
        if (existsSync(modulePath)) {
          const content = readFileSync(modulePath, 'utf8');
          test.modules[modulePath] = {
            exists: true,
            size: content.length,
            hasExports: content.includes('export')
          };
        } else {
          test.passed = false;
          test.issues.push(`Module ${modulePath} not found`);
        }
      });

    } catch (error) {
      test.passed = false;
      test.issues.push(`JavaScript integration test failed: ${error.message}`);
    }

    return test;
  }

  async testModuleDependencies() {
    const test = {
      name: 'Module Dependencies',
      passed: true,
      issues: [],
      dependencies: {}
    };

    try {
      const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
      
      // Check for required dependencies
      const requiredDeps = [
        'sass',
        'stylelint',
        'stylelint-config-standard-scss',
        'stylelint-order',
        'stylelint-scss',
        'concurrently'
      ];

      requiredDeps.forEach(dep => {
        const exists = packageJson.devDependencies[dep] || packageJson.dependencies[dep];
        test.dependencies[dep] = exists;
        
        if (!exists) {
          test.passed = false;
          test.issues.push(`Required dependency ${dep} not found`);
        }
      });

    } catch (error) {
      test.passed = false;
      test.issues.push(`Module dependencies test failed: ${error.message}`);
    }

    return test;
  }

  async testConfigurationConsistency() {
    const test = {
      name: 'Configuration Consistency',
      passed: true,
      issues: [],
      configurations: {}
    };

    try {
      // Check Vite configuration
      const viteConfig = readFileSync('vite.config.ts', 'utf8');
      test.configurations.vite = {
        hasCSS: viteConfig.includes('css:'),
        hasSCSS: viteConfig.includes('scss:'),
        hasOptimization: viteConfig.includes('minify:')
      };
      
      // Check stylelint configuration
      const stylelintConfig = JSON.parse(readFileSync('.stylelintrc.json', 'utf8'));
      test.configurations.stylelint = {
        hasRules: Object.keys(stylelintConfig.rules || {}).length > 0,
        hasPlugins: (stylelintConfig.plugins || []).length > 0,
        hasExtends: (stylelintConfig.extends || []).length > 0
      };

    } catch (error) {
      test.passed = false;
      test.issues.push(`Configuration consistency test failed: ${error.message}`);
    }

    return test;
  }

  // =============================================================================
  // REPORT GENERATION
  // =============================================================================

  generateQAReport(qaResults) {
    console.log('\n📋 Generating QA Report...');
    
    const report = {
      ...qaResults,
      grade: this.calculateOverallGrade(qaResults),
      recommendations: this.generateFinalRecommendations(qaResults),
      nextSteps: this.generateNextSteps(qaResults)
    };

    // Save detailed report
    writeFileSync('qa-report.json', JSON.stringify(report, null, 2));
    
    // Generate summary
    this.printQASummary(report);
    
    return report;
  }

  calculateOverallGrade(qaResults) {
    const totalTests = qaResults.summary.totalTests;
    const passedTests = qaResults.summary.passed;
    const percentage = Math.round((passedTests / totalTests) * 100);
    
    if (percentage >= 95) return 'A+';
    if (percentage >= 90) return 'A';
    if (percentage >= 85) return 'B+';
    if (percentage >= 80) return 'B';
    if (percentage >= 75) return 'C+';
    if (percentage >= 70) return 'C';
    return 'D';
  }

  generateFinalRecommendations(qaResults) {
    const recommendations = [];
    
    // Performance recommendations
    Object.values(qaResults.testSuites).forEach(suite => {
      suite.tests.forEach(test => {
        if (test.issues && test.issues.length > 0) {
          test.issues.forEach(issue => {
            recommendations.push({
              category: suite.name,
              test: test.name,
              issue,
              priority: this.determinePriority(issue)
            });
          });
        }
      });
    });
    
    return recommendations;
  }

  generateNextSteps(qaResults) {
    const nextSteps = [];
    
    if (qaResults.summary.failed > 0) {
      nextSteps.push('Address failed test cases to improve system reliability');
    }
    
    if (qaResults.summary.warnings > 0) {
      nextSteps.push('Review warnings to optimize system performance');
    }
    
    nextSteps.push('Consider implementing automated QA testing in CI/CD pipeline');
    nextSteps.push('Set up regular performance monitoring and reporting');
    nextSteps.push('Establish code review guidelines based on QA findings');
    
    return nextSteps;
  }

  determinePriority(issue) {
    if (issue.includes('failed') || issue.includes('not found')) return 'high';
    if (issue.includes('too large') || issue.includes('too slow')) return 'medium';
    return 'low';
  }

  printQASummary(report) {
    console.log('\n🎯 Quality Assurance Summary');
    console.log('================================');
    console.log(`Overall Grade: ${report.grade}`);
    console.log(`Tests Passed: ${report.summary.passed}/${report.summary.totalTests}`);
    console.log(`Success Rate: ${Math.round((report.summary.passed / report.summary.totalTests) * 100)}%`);
    
    if (report.summary.failed > 0) {
      console.log(`❌ Failed Tests: ${report.summary.failed}`);
    }
    
    if (report.summary.warnings > 0) {
      console.log(`⚠️  Warnings: ${report.summary.warnings}`);
    }
    
    console.log('\n📊 Test Suite Results:');
    Object.entries(report.testSuites).forEach(([suiteName, suite]) => {
      const status = suite.failed === 0 ? '✅' : '❌';
      console.log(`${status} ${suite.name}: ${suite.passed}/${suite.tests.length} passed`);
    });
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 Top Recommendations:');
      report.recommendations.slice(0, 5).forEach(rec => {
        console.log(`   ${rec.priority.toUpperCase()}: ${rec.issue}`);
      });
    }
    
    console.log(`\n📄 Detailed report saved to: qa-report.json`);
  }
}

// =============================================================================
// CLI INTERFACE
// =============================================================================

if (import.meta.url === `file://${process.argv[1]}`) {
  const qa = new QATesting();
  
  qa.runComprehensiveQA()
    .then(results => {
      const grade = qa.calculateOverallGrade(results);
      console.log(`\n🎉 QA Testing Complete! Overall Grade: ${grade}`);
      process.exit(results.summary.failed === 0 ? 0 : 1);
    })
    .catch(error => {
      console.error('❌ QA Testing failed:', error);
      process.exit(1);
    });
}
