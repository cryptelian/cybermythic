#!/usr/bin/env node

/**
 * Development Workflow - Enhanced development workflow automation
 * This tool provides automated workflows for common development tasks
 */

import { execSync, spawn } from 'child_process';
import { readFileSync, writeFileSync, existsSync, watchFile } from 'fs';
import { DEV_CONFIG, DevUtils } from './dev-config.js';

class DevWorkflow {
  constructor() {
    this.watchers = new Map();
    this.processes = new Map();
    this.metrics = new Map();
  }

  // =============================================================================
  // WORKFLOW COMMANDS
  // =============================================================================

  async startDevelopment(options = {}) {
    console.log('🚀 Starting enhanced development workflow...\n');
    
    const config = { ...DEV_CONFIG, ...options };
    
    // Start style watching
    if (config.styles.watchMode) {
      this.startStyleWatching();
    }
    
    // Start linting
    if (config.styles.linting.enabled) {
      this.startLinting();
    }
    
    // Start performance monitoring
    if (config.styles.performance.enabled) {
      this.startPerformanceMonitoring();
    }
    
    // Start Vite dev server
    this.startViteServer();
    
    console.log('✅ Development workflow started successfully!');
    console.log('📋 Available commands:');
    console.log('   - Ctrl+C: Stop all processes');
    console.log('   - npm run analyze:styles: Run style analysis');
    console.log('   - npm run docs:generate: Generate documentation');
    console.log('   - npm run test:styles: Run style tests');
  }

  startStyleWatching() {
    console.log('👀 Starting style watching...');
    
    const styleWatcher = spawn('npm', ['run', 'build:styles:watch'], {
      stdio: 'pipe',
      shell: true
    });
    
    styleWatcher.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Compiled')) {
        console.log('✅ Styles compiled successfully');
        
        // Auto-analyze after compilation if enabled
        if (DEV_CONFIG.tools.styleAnalyzer.autoRun) {
          this.runStyleAnalysis();
        }
      }
    });
    
    styleWatcher.stderr.on('data', (data) => {
      console.error('❌ Style compilation error:', data.toString());
    });
    
    this.processes.set('styleWatcher', styleWatcher);
  }

  startLinting() {
    console.log('🔍 Starting style linting...');
    
    // Watch for SCSS file changes and run linting
    const scssFiles = this.findSCSSFiles();
    
    scssFiles.forEach(file => {
      watchFile(file, { interval: 1000 }, () => {
        this.runLinting(file);
      });
    });
  }

  startPerformanceMonitoring() {
    console.log('📊 Starting performance monitoring...');
    
    // Monitor build performance
    setInterval(() => {
      this.checkPerformanceMetrics();
    }, 30000); // Check every 30 seconds
  }

  startViteServer() {
    console.log('🌐 Starting Vite development server...');
    
    const viteServer = spawn('npm', ['run', 'run'], {
      stdio: 'inherit',
      shell: true
    });
    
    this.processes.set('viteServer', viteServer);
  }

  // =============================================================================
  // ANALYSIS AND VALIDATION
  // =============================================================================

  async runStyleAnalysis() {
    console.log('🔍 Running style analysis...');
    
    try {
      const startTime = Date.now();
      execSync('node src/tools/style-analyzer.js', { stdio: 'pipe' });
      const duration = DevUtils.logBuildTime(startTime, 'Style analysis');
      
      this.metrics.set('lastAnalysis', {
        timestamp: new Date().toISOString(),
        duration
      });
      
      return true;
    } catch (error) {
      console.error('❌ Style analysis failed:', error.message);
      return false;
    }
  }

  async runLinting(file = null) {
    const target = file || 'src/styles/**/*.scss';
    
    try {
      const startTime = Date.now();
      execSync(`npx stylelint "${target}"`, { stdio: 'pipe' });
      
      if (!file) {
        DevUtils.logBuildTime(startTime, 'Style linting');
      }
      
      return true;
    } catch (error) {
      if (file) {
        console.warn(`⚠️  Linting issues in ${file}`);
      } else {
        console.error('❌ Style linting failed');
      }
      
      // Auto-fix if enabled
      if (DEV_CONFIG.styles.linting.autoFix) {
        this.runLintingFix(target);
      }
      
      return false;
    }
  }

  async runLintingFix(target) {
    try {
      execSync(`npx stylelint "${target}" --fix`, { stdio: 'pipe' });
      console.log('🔧 Auto-fixed linting issues');
    } catch (error) {
      console.warn('⚠️  Some linting issues could not be auto-fixed');
    }
  }

  async generateDocumentation() {
    console.log('📚 Generating documentation...');
    
    try {
      const startTime = Date.now();
      execSync('node src/tools/style-docs-generator.js', { stdio: 'pipe' });
      DevUtils.logBuildTime(startTime, 'Documentation generation');
      
      return true;
    } catch (error) {
      console.error('❌ Documentation generation failed:', error.message);
      return false;
    }
  }

  async validateAll() {
    console.log('🔍 Running comprehensive validation...\n');
    
    const results = {
      linting: false,
      compilation: false,
      analysis: false,
      performance: false
    };
    
    // Run linting
    console.log('1/4 Running style linting...');
    results.linting = await this.runLinting();
    
    // Test compilation
    console.log('2/4 Testing style compilation...');
    results.compilation = await this.testCompilation();
    
    // Run analysis
    console.log('3/4 Running style analysis...');
    results.analysis = await this.runStyleAnalysis();
    
    // Check performance
    console.log('4/4 Checking performance...');
    results.performance = await this.checkPerformance();
    
    // Summary
    const passed = Object.values(results).filter(Boolean).length;
    const total = Object.keys(results).length;
    
    console.log(`\n📊 Validation Results: ${passed}/${total} passed`);
    
    if (passed === total) {
      console.log('🎉 All validations passed!');
    } else {
      console.log('⚠️  Some validations failed. Check the output above.');
    }
    
    return results;
  }

  async testCompilation() {
    try {
      const startTime = Date.now();
      execSync('npm run build:styles', { stdio: 'pipe' });
      const duration = DevUtils.logBuildTime(startTime, 'Style compilation test');
      
      // Validate compiled CSS
      if (existsSync('public/style/compiled.css')) {
        const css = readFileSync('public/style/compiled.css', 'utf8');
        const validation = DevUtils.validateCSS(css);
        
        if (!validation.valid) {
          console.warn('⚠️  CSS validation issues:', validation.issues);
        }
        
        return validation.valid;
      }
      
      return true;
    } catch (error) {
      console.error('❌ Style compilation failed:', error.message);
      return false;
    }
  }

  async checkPerformance() {
    try {
      // Check CSS size
      if (existsSync('public/style/compiled.css')) {
        const css = readFileSync('public/style/compiled.css', 'utf8');
        const size = css.length;
        const threshold = DEV_CONFIG.styles.performance.csseSizeThreshold;
        
        if (size > threshold) {
          console.warn(`⚠️  CSS size (${DevUtils.formatFileSize(size)}) exceeds threshold`);
          return false;
        }
        
        console.log(`✅ CSS size: ${DevUtils.formatFileSize(size)}`);
      }
      
      return true;
    } catch (error) {
      console.error('❌ Performance check failed:', error.message);
      return false;
    }
  }

  checkPerformanceMetrics() {
    // Check current performance metrics
    const metrics = {
      timestamp: new Date().toISOString(),
      cssSize: 0,
      buildTime: 0,
      memoryUsage: process.memoryUsage()
    };
    
    if (existsSync('public/style/compiled.css')) {
      const css = readFileSync('public/style/compiled.css', 'utf8');
      metrics.cssSize = css.length;
    }
    
    this.metrics.set('current', metrics);
    
    // Report if thresholds exceeded
    if (metrics.cssSize > DEV_CONFIG.styles.performance.csseSizeThreshold) {
      console.warn(`⚠️  CSS size threshold exceeded: ${DevUtils.formatFileSize(metrics.cssSize)}`);
    }
  }

  // =============================================================================
  // UTILITY METHODS
  // =============================================================================

  findSCSSFiles() {
    const files = [];
    
    try {
      const output = execSync('find src/styles -name "*.scss" 2>/dev/null || dir /s /b src\\styles\\*.scss 2>nul', { 
        encoding: 'utf8',
        shell: true 
      });
      
      files.push(...output.split('\n').filter(line => line.trim()));
    } catch (error) {
      // Fallback for systems without find command
      console.warn('Could not automatically find SCSS files');
    }
    
    return files;
  }

  cleanup() {
    console.log('🧹 Cleaning up development processes...');
    
    // Stop all processes
    this.processes.forEach((process, name) => {
      console.log(`   Stopping ${name}...`);
      process.kill();
    });
    
    // Clear watchers
    this.watchers.forEach((watcher, name) => {
      console.log(`   Clearing ${name} watcher...`);
      watcher.close();
    });
    
    console.log('✅ Cleanup complete');
  }

  // =============================================================================
  // CLI INTERFACE
  // =============================================================================

  static async runCommand(command, args = []) {
    const workflow = new DevWorkflow();
    
    // Handle cleanup on exit
    process.on('SIGINT', () => {
      workflow.cleanup();
      process.exit(0);
    });
    
    switch (command) {
      case 'start':
        await workflow.startDevelopment();
        break;
      case 'analyze':
        await workflow.runStyleAnalysis();
        break;
      case 'lint':
        await workflow.runLinting();
        break;
      case 'docs':
        await workflow.generateDocumentation();
        break;
      case 'validate':
        await workflow.validateAll();
        break;
      case 'test':
        await workflow.testCompilation();
        break;
      default:
        console.log('Available commands: start, analyze, lint, docs, validate, test');
    }
  }
}

// =============================================================================
// CLI EXECUTION
// =============================================================================

if (import.meta.url === `file://${process.argv[1]}`) {
  const command = process.argv[2] || 'start';
  const args = process.argv.slice(3);
  
  DevWorkflow.runCommand(command, args)
    .catch(error => {
      console.error('❌ Workflow failed:', error);
      process.exit(1);
    });
}

export { DevWorkflow };
