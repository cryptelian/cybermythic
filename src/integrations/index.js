import { LOG_HEAD, SYSTEM_NAME } from "../modules/constants.js";

function resolveIntegrationsEnabled() {
  try {
    const env = (typeof import.meta !== 'undefined' && import.meta && import.meta.env) ? import.meta.env : {};
    const explicit = (env.VITE_ENABLE_INTEGRATIONS ?? '').toString().toLowerCase();
    if (explicit === '1' || explicit === 'true') return true;
    const systemId = (env.VITE_SYSTEM_ID ?? '').toString().trim();
    if (systemId === 'ninjanarchy') return true;
  } catch (_) {
    // ignore
  }
  return false;
}

export async function loadIntegrationsIfEnabled() {
  const enabled = resolveIntegrationsEnabled();
  if (!enabled) return;
  console.log(LOG_HEAD + `Loading integrations for ${SYSTEM_NAME}`);
  // Future: dynamically import and initialize integration modules here
  // Example:
  // const { initMyIntegration } = await import('./plugins/my-integration.js');
  // await initMyIntegration();
}

