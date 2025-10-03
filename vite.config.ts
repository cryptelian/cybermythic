import type { PluginOption, UserConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

const config: UserConfig = {
  publicDir: 'public',
  // Use dynamic system ID for path resolution
  base: '/systems/anarchy/',
  server: {
    port: 30001,
    open: true,
    proxy: {
      // Proxy everything except our system path to Foundry
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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      name: 'anarchy',
      entry: 'src/start.js',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep CSS in root for easy system.json reference
          if (assetInfo.name?.endsWith('.css')) {
            return '[name][extname]';
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
      filename: 'stats.html',
    }) as PluginOption,
  ],
};

export default config;
