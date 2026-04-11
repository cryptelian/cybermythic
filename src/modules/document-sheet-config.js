let cachedDocumentSheetConfig = null;

export function getDocumentSheetConfig() {
  if (cachedDocumentSheetConfig) return cachedDocumentSheetConfig;

  const foundryApp = globalThis?.foundry?.applications;

  // Preferred namespace introduced in V13
  const v13Namespace = foundryApp?.apps?.DocumentSheetConfig;
  if (v13Namespace) {
    cachedDocumentSheetConfig = v13Namespace;
    return cachedDocumentSheetConfig;
  }

  // Fallback used during transition releases
  const apiNamespace = foundryApp?.api?.DocumentSheetConfig;
  if (apiNamespace) {
    cachedDocumentSheetConfig = apiNamespace;
    return cachedDocumentSheetConfig;
  }

  const legacyNamespace = foundryApp?.documents?.DocumentSheetConfig;
  if (legacyNamespace) {
    cachedDocumentSheetConfig = legacyNamespace;
    return cachedDocumentSheetConfig;
  }

  const globalNamespace = globalThis?.DocumentSheetConfig ?? null;
  if (globalNamespace) {
    cachedDocumentSheetConfig = globalNamespace;
  }

  return cachedDocumentSheetConfig;
}
