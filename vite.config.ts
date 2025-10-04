import type { PluginOption, UserConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import * as path from 'path';

const config: UserConfig = {
  publicDir: false, // We'll handle public files separately
  base: '/systems/anarchy/',
  server: {
    port: 30001,
    open: true,
    proxy: {
      '^(?!/systems/anarchy/)': 'http://localhost:30000/',
      '/socket.io': {
        target: 'ws://localhost:30000',
        ws: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      name: 'anarchy',
      entry: 'src/start.js',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Ensure CSS goes to the right place
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    visualizer({
      gzipSize: true,
      template: 'treemap',
    }) as PluginOption,
  ],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['src/styles'],
      },
    },
  },
};

export default config;
