import type { PluginOption, UserConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { loadEnv } from 'vite';
import { resolve } from 'path';

// Load mode-based env so `--mode ninja` works seamlessly
const mode = process.env.NODE_ENV || process.env.MODE || 'development';
const env = loadEnv(mode, process.cwd(), '');

// Resolve system id from env with fallback to 'anarchy'
const SYSTEM_ID = (env.VITE_SYSTEM_ID && env.VITE_SYSTEM_ID.trim().length > 0)
  ? env.VITE_SYSTEM_ID.trim()
  : 'anarchy';

// Allow overriding output directory (e.g., a side repo path)
const OUT_DIR = env.OUT_DIR && env.OUT_DIR.trim().length > 0
  ? env.OUT_DIR.trim()
  : 'dist';

const config: UserConfig = {
    publicDir: 'public',
    base: `/systems/${SYSTEM_ID}/`,
    server: {
        port: 30001,
        open: true,
        proxy: {
            // Forward everything that is not the system base to Foundry
            [`^(?!/systems/${SYSTEM_ID}/)`]: 'http://localhost:30000/',
            '/socket.io': {
                target: 'ws://localhost:30000',
                ws: true,
            },
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Correct partial name (underscore) and path within includePaths
                additionalData: `@use "build/_optimization" as *;`,
                includePaths: ['src/styles'],
                sourceMap: true,
            }
        },
        devSourcemap: true,
    },
    build: {
        outDir: OUT_DIR,
        emptyOutDir: true,
        sourcemap: true,
        lib: {
            name: SYSTEM_ID,
            entry: 'src/start.js',
            formats: ['es'],
            fileName: 'index',
        },
        rollupOptions: {
            output: {
                manualChunks: {
                    'character-enhanced': ['src/styles/components/_character-enhanced.scss'],
                    'utilities': ['src/styles/components/_utility-components.scss']
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith('.css')) {
                        return 'style/[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            }
        },
        cssCodeSplit: true,
        minify: 'esbuild',
        target: 'es2020'
    },
    plugins: [
        visualizer({
            gzipSize: true,
            template: "treemap",
        })
    ]
}

export default config;
