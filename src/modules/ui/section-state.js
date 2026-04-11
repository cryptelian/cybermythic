import { SYSTEM_NAME } from "../core/constants.js";

function actorSectionKey(id, sectionName) {
  return `${id}-section-${sectionName}`;
}

export function actorTabClosed(id, sectionName, options) {
  const state = game.user.getFlag(
    SYSTEM_NAME,
    actorSectionKey(id, sectionName),
  );

  if (options?.fn && typeof options.fn === "function") {
    return state === "closed" ? options.fn(this) : options.inverse(this);
  }

  return state === "closed" ? "closed" : "";
}

export function ifTabClosed(id, sectionName, options) {
  return actorTabClosed(id, sectionName, options);
}
