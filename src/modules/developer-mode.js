import { LOG_HEAD, SYSTEM_NAME } from "./core/constants.js";
import { StyleGuideApp } from "../framework/ui/style-guide.js";
import { getDocumentSheetConfig } from "./document-sheet-config.js";

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
      const select = html[0]?.querySelector?.('select[name="type"]');
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
    // Locate the "Game Settings" section to append our button
    const settingsGame = html.find("#settings-game");

    // Create the button
    const button = $(`
      <button class="anarchy-dev-mode-btn">
        <i class="fas fa-terminal"></i> Anarchy Shell
      </button>
    `);

    // Add click listener
    button.on("click", (event) => {
      event.preventDefault();
      new StyleGuideApp().render(true);
    });

    // Insert the button at the end of the Game Settings section
    settingsGame.append(button);
  }
}
