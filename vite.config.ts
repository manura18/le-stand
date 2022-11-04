import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

import Vue from '@vitejs/plugin-vue'
import { checker as Checker } from 'vite-plugin-checker'

import { plugins } from './.vite'
import { scripts } from './package.json'

export const config = defineConfig({
  plugins: [
    ...plugins,
    Vue(),
    Checker({
      overlay: false,
      vueTsc: {
        tsconfigPath: 'tsconfig.app.json',
      },
      eslint: {
        lintCommand: scripts['lint:eslint'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['src/**/*.test.{ts,tsx}'],
  },
})

export default config
