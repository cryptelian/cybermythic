import type { PluginOption, UserConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import * as path from "path";

const systemId = process.env.FOUNDRY_SYSTEM_ID || "anarchy";

const config: UserConfig = {
  publicDir: "public", // Serve public assets in dev mode
  base: `/systems/${systemId}/`,
  server: {
    port: 30001,
    open: true,
    proxy: {
      [`^(?!/systems/${systemId}/)`]: "http://localhost:30000/",
      "/socket.io": {
        target: "ws://localhost:30000",
        ws: true,
      },
    },
  },
  build: {
    outDir: "dist/dist",
    emptyOutDir: true,
    copyPublicDir: false, // Managed manually by scripts/build/copyDist.mjs
    sourcemap: true,
    lib: {
      name: "anarchy",
      entry: "src/start.js",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Ensure CSS goes to the right place
          if (assetInfo.name?.endsWith(".css")) {
            return "style.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  plugins: [
    visualizer({
      gzipSize: true,
      template: "treemap",
    }) as PluginOption,
  ],
  css: {
    postcss: "config/build/postcss.config.cjs",
    preprocessorOptions: {
      scss: {
        includePaths: ["src/styles"],
      },
    },
  },
};

export default config;
