// only required for dev
// in prod, Foundry loads index.js (compiled by Vite/Rollup)
// in dev, Foundry loads this file, which should load ./src/start.js from the Vite server

window.global = window; // some dependencies expect window.global

// If running through a same-origin reverse proxy (30000 → Vite 30001), do NOT redirect.
// Otherwise, if on Foundry's port (30000) without proxy, redirect to Vite 30001.
(function bootstrapDevLoader() {
  try {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const port = String(window.location.port);
    const isFoundryPort = port === '30000' || port === '30010';

    const probeSameOriginVite = async () => {
      try {
        // A lightweight path that Vite always serves
        const res = await fetch('/@vite/client', { method: 'HEAD', cache: 'no-store' });
        return res.ok;
      } catch (_) { return false; }
    };

    (async () => {
      if (isLocal && isFoundryPort) {
        const hasProxyVite = await probeSameOriginVite();
        if (hasProxyVite) {
          console.info('[Anarchy] Same-origin proxy detected (30000 → Vite). No redirect needed.');
          window.__ANARCHY_PROXY__ = true;
          return;
        }
        if (port === '30000') {
          const viteUrl = `http://localhost:30001${window.location.pathname}${window.location.search}${window.location.hash}`;
          console.warn('[Anarchy] No proxy detected on 30000. Redirecting to Vite dev server:', viteUrl);
          window.location.replace(viteUrl);
        } else {
          console.info('[Anarchy] Foundry on 30010 without proxy; will load dev entry via Vite fallback.');
        }
      }
    })();
  } catch (e) {
    // non-fatal
  }
})();

// Try to load the dev entry. If the Vite server is not serving /systems/anarchy,
// this will 404. Surface a clear, actionable message instead of failing silently.
(async () => {
  try {
    // If we're on Foundry's port (30000 or 30010):
    // - On 30000 without proxy, we already redirected above and should bail out
    // - On 30010 without proxy, skip local import to avoid 404 noise and use Vite fallback
    const portNow = String(window.location.port);
    const isFoundryPortNow = portNow === '30000' || portNow === '30010';
    if (portNow === '30000' && !window.__ANARCHY_PROXY__) return;
    const shouldTryLocalImport = !isFoundryPortNow || !!window.__ANARCHY_PROXY__;
    // If we just redirected from 30000 to 30001, skip the import attempt which would race and 404.
    const justRedirected = document.referrer?.startsWith('http://localhost:30000');
    if (shouldTryLocalImport) {
      if (!justRedirected) {
        await import('./src/start.js');
      }
      return;
    }
    // Force fallback for 30010 without proxy
    throw new Error('Skip local import on 30010 without proxy');
  } catch (firstError) {
    // Attempt a smart fallback: if we are not on 30001, try importing from Vite directly.
    const isOnVite = String(window.location.port) === '30001';
    if (!isOnVite) {
      try {
        await import('http://localhost:30001/systems/anarchy/src/start.js');
        console.warn('[Anarchy] Loaded dev entry from Vite fallback (30001). Consider opening Foundry via http://localhost:30001 for best DX.');
        return;
      } catch (secondError) {
        const msg = [
          '[Anarchy] Dev entry failed to load ./src/start.js and fallback from Vite (30001). This usually means:',
          ' - Vite dev server is not running, or',
          ' - Network/CORS blocked the cross-origin module import, or',
          ' - The /systems/anarchy link is not pointed at this repo\'s public dir.',
          '',
          'Fix:',
          ' 1) Start Vite:  npm run dev   (serves on http://localhost:30001)',
          ' 2) Open Foundry through Vite: http://localhost:30001',
          ' 3) Ensure your Foundry data/systems/anarchy symlink points to ./public',
        ].join('\n');
        console.error(msg, '\nFirst error:', firstError, '\nSecond error:', secondError);
        try {
          const banner = document.createElement('div');
          banner.style.position = 'fixed';
          banner.style.top = '0';
          banner.style.left = '0';
          banner.style.right = '0';
          banner.style.padding = '12px 16px';
          banner.style.background = '#2b2b2b';
          banner.style.color = '#ffd166';
          banner.style.fontFamily = 'monospace';
          banner.style.fontSize = '12px';
          banner.style.zIndex = '2147483647';
          banner.style.borderBottom = '1px solid #444';
          banner.textContent = 'Anarchy dev loader failed. Start Vite (npm run dev) and open http://localhost:30001';
          document.body.appendChild(banner);
        } catch (_) {}
        throw secondError;
      }
    }

    const msg = [
      '[Anarchy] Dev entry failed to load ./src/start.js on Vite (30001).',
      'Fix: ensure Vite is running and the project compiled.',
    ].join('\n');
    console.error(msg, '\nOriginal error:', firstError);
    try {
      const banner = document.createElement('div');
      banner.style.position = 'fixed';
      banner.style.top = '0';
      banner.style.left = '0';
      banner.style.right = '0';
      banner.style.padding = '12px 16px';
      banner.style.background = '#2b2b2b';
      banner.style.color = '#ffd166';
      banner.style.fontFamily = 'monospace';
      banner.style.fontSize = '12px';
      banner.style.zIndex = '2147483647';
      banner.style.borderBottom = '1px solid #444';
      banner.textContent = 'Anarchy dev loader failed on Vite. Hard-reload this page once Vite is ready.';
      document.body.appendChild(banner);
    } catch (_) {}
    throw firstError;
  }
})();
