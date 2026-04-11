export async function loadTemplatesSafe(paths) {
  if (!paths || paths.length === 0) return [];
  const handlebars = foundry.applications?.handlebars;
  if (handlebars?.loadTemplates) {
    return handlebars.loadTemplates(paths);
  }
  if (typeof loadTemplates === "function") {
    return loadTemplates(paths);
  }
  console.warn("Anarchy | Handlebars loadTemplates API unavailable");
  return [];
}

export async function renderTemplateSafe(path, data = {}) {
  const handlebars = foundry.applications?.handlebars;
  if (handlebars?.renderTemplate) {
    return handlebars.renderTemplate(path, data);
  }
  if (typeof renderTemplate === "function") {
    return renderTemplate(path, data);
  }
  console.warn("Anarchy | Handlebars renderTemplate API unavailable", path);
  return "";
}
