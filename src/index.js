/**
 * Production entry point for the Anarchy system
 * This file is used when the system is built and deployed
 */

// Re-export everything from the main start file
export * from './start.js';

// Log that we're running in production mode
console.log('[Anarchy] System loaded in production mode');
