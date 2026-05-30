import { LOG_HEAD, SYSTEM_NAME } from "./core/constants.js";
import { StyleGuideApp } from "../framework/ui/style-guide.js";
import { getDocumentSheetConfig } from "./document-sheet-config.js";
import { toElement } from "./ui/dom.js";

export class DeveloperMode {
  static init() {
    // Hook into sidebar for dev tools button
    Hooks.on("renderSidebarTab", (app, html) => {
      if (app.id !== "settings") return;

      // Only show if Developer Mode is enabled
      const devMode = game.settings.get(SYSTEM_NAME, "developer-mode");
      if (!devMode) return;

      this._injectSidebarButton(html);
    });

    // Hide shell-test type from create dialogs when dev mode is off
    Hooks.on("renderDocumentCreateDialog", (app, html, data) => {
      const devMode = game.settings.get(SYSTEM_NAME, "developer-mode");
      if (devMode) return; // Dev mode on - show everything

      // Find and hide the shell-test option
      const root = toElement(html);
      const select = root?.querySelector?.('select[name="type"]');
      if (!select) return;

      const shellTestOption = select.querySelector(
        'option[value="shell-test"]',
      );
      if (shellTestOption) {
        shellTestOption.remove();
      }
    });

    // Register shell-test sheet when dev mode is enabled (after ready)
    Hooks.once("ready", () => {
      const devMode = game.settings.get(SYSTEM_NAME, "developer-mode");
      if (devMode) {
        this._registerShellTestSheet();
      }
    });
  }

  static async _registerShellTestSheet() {
    try {
      const { ShellTestSheet } = await import(
        "../framework/ui/shell-test-sheet.js"
      );
      const DSC = getDocumentSheetConfig();
      const ActorDoc = CONFIG.Actor?.documentClass || Actor;
      if (!DSC?.registerSheet) return;

      DSC.registerSheet(ActorDoc, SYSTEM_NAME, ShellTestSheet, {
        label: "🧪 Shell Test (Framework Preview)",
        types: ["shell-test"],
        makeDefault: true,
      });

      console.log(
        LOG_HEAD +
          "Registered ShellTestSheet for shell-test actors (Developer Mode)",
      );
    } catch (e) {
      console.warn(LOG_HEAD + "Failed to register ShellTestSheet", e);
    }
  }

  static _injectSidebarButton(html) {
    const root = toElement(html);
    const settingsGame = root?.querySelector("#settings-game");
    if (!settingsGame || settingsGame.querySelector(".anarchy-dev-mode-btn")) {
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "anarchy-dev-mode-btn";
    button.innerHTML = '<i class="fas fa-terminal"></i> Anarchy Shell';
    button.addEventListener("click", (event) => {
      event.preventDefault();
      new StyleGuideApp().render(true);
    });

    settingsGame.append(button);
  }
}
