import { defineConfig } from 'vitest/config';

export default defineConfig({
  css: {
    postcss: 'config/build/postcss.config.cjs',
  },
  test: {
    include: ['tests/**/*.test.js'],
    environment: 'node',
    reporters: 'default',
    setupFiles: ['tests/setup.js'],
  },
});
