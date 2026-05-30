import { defineConfig } from "@playwright/test";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..", "..");

export default defineConfig({
  testDir: resolve(projectRoot, "tests", "visual"),
  snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}{ext}",
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : [["list"]],
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: "npm run preview:visual",
    cwd: projectRoot,
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
