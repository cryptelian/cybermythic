import type { PluginOption, UserConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

// Resolve system id from env with fallback to 'anarchy'
const SYSTEM_ID = (process.env.VITE_SYSTEM_ID && process.env.VITE_SYSTEM_ID.trim().length > 0)
  ? process.env.VITE_SYSTEM_ID.trim()
  : 'anarchy';

// Allow overriding output directory (e.g., a side repo path)
const OUT_DIR = process.env.OUT_DIR && process.env.OUT_DIR.trim().length > 0
  ? process.env.OUT_DIR.trim()
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
    },
    plugins: [
        visualizer({
            gzipSize: true,
            template: "treemap",
        })
    ]
}

export default config;
