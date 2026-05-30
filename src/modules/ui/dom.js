export function toElement(target) {
  if (!target) return null;
  const ElementClass = globalThis.Element;
  if (ElementClass && target instanceof ElementClass) return target;

  const DocumentFragmentClass = globalThis.DocumentFragment;
  if (DocumentFragmentClass && target instanceof DocumentFragmentClass) {
    return target.firstElementChild ?? null;
  }
  if (target?.jquery) return target[0] ?? null;
  if (typeof target?.length === "number") return target[0] ?? null;
  return null;
}

export function toJQuery(target) {
  if (target?.jquery) return target;
  const element = toElement(target);
  if (!element || typeof globalThis.$ !== "function") return null;
  return globalThis.$(element);
}
