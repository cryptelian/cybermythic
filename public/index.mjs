// Production-first loader with optional dev enhancements
// This ensures the Anarchy system always loads, even without dev server

window.global = window; // some dependencies expect window.global

(async function loadAnarchySystem() {
  const LOG_HEAD = '[ANARCHY] | ';
  
  try {
    // In production, always load the built dist/index.mjs directly
    // This ensures sheets are always registered regardless of dev server
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const port = String(window.location.port);
    
    // Only attempt dev mode if we're in a local development environment
    if (isLocal && (port === '30001' || port === '30000')) {
      // Check if Vite dev server is available
      const checkViteAvailable = async () => {
        try {
          const testUrl = port === '30001' 
            ? '/@vite/client'  // Direct Vite access
            : '/@vite/client'; // Through proxy
          const res = await fetch(testUrl, { method: 'HEAD', cache: 'no-store' });
          return res.ok;
        } catch (_) {
          return false;
        }
      };
      
      const viteAvailable = await checkViteAvailable();
      
      if (viteAvailable) {
        console.log(LOG_HEAD + 'Vite dev server detected, loading with HMR support');
        try {
          // Try to load the dev version with hot module replacement
          await import('/src/start.js');
          
          // Mark that we're in dev mode with HMR
          if (game?.system?.anarchy) {
            game.system.anarchy.viteAttached = true;
          }
          
          console.log(LOG_HEAD + 'Dev mode loaded successfully with HMR');
          return; // Success - dev mode is active
        } catch (e) {
          console.warn(LOG_HEAD + 'Dev mode failed to load, falling back to production', e);
        }
      }
    }
    
    // Production mode or dev mode unavailable - load the built bundle
    // This is the critical path that ensures sheets always load
    console.log(LOG_HEAD + 'Loading production bundle');
    await import('./dist/index.mjs');
    console.log(LOG_HEAD + 'Production bundle loaded successfully');
    
  } catch (error) {
    console.error(LOG_HEAD + 'Critical error - Anarchy system failed to load', error);
    
    // Last resort - try to load dist directly with full path
    try {
      console.warn(LOG_HEAD + 'Attempting emergency fallback to dist/index.mjs');
      await import('/systems/anarchy/dist/index.mjs');
      console.log(LOG_HEAD + 'Emergency fallback successful');
    } catch (fallbackError) {
      console.error(LOG_HEAD + 'Complete system load failure', fallbackError);
      
      // Display error banner to user
      try {
        const banner = document.createElement('div');
        banner.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 12px 16px;
          background: #8b0000;
          color: #fff;
          font-family: monospace;
          font-size: 14px;
          z-index: 2147483647;
          border-bottom: 2px solid #ff0000;
        `;
        banner.textContent = 'CRITICAL: Anarchy system failed to load. Check console for details.';
        document.body.appendChild(banner);
      } catch (_) {}
      
      throw fallbackError;
    }
  }
})();