import type { PluginOption, UserConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

// Resolve system id dynamically to support forks (e.g., ninjanarchy)
const systemId = process.env.VITE_SYSTEM_ID?.trim() || 'anarchy';

const config: UserConfig = {
  publicDir: 'public',
  base: `/systems/${systemId}/`,
  server: {
    port: 30001,
    open: true,
    proxy: {
      // Proxy everything except our system's assets to Foundry
      [`^(?!/systems/${systemId}/)`]: 'http://localhost:30000/',
      '/socket.io': {
        target: 'ws://localhost:30000',
        ws: true,
      },
    },
  },
  define: {
    __SYSTEM_ID__: JSON.stringify(systemId),
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
  },
  plugins: [
    visualizer({
      gzipSize: true,
      template: 'treemap',
    }),
  ],
};

export default config;
