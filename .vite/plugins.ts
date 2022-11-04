import VueRouter from 'unplugin-vue-router/vite'
import VueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import type { ComponentResolver } from 'unplugin-vue-components/types'

import SvgLoader from 'vite-svg-loader'

import { testingLibraryPreset, vuePreset, vueUsePreset } from '.'

const LeStandResolver: ComponentResolver = (name) => {
  const ignore = ['FSelect']

  if (name.startsWith('F') && !ignore.includes(name)) {
    return { name, from: `@/shared/ui/${name}` }
  }
}

export const plugins = [
  VueRouter(),
  VueJsx(),
  AutoImport({
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    imports: [VueRouterAutoImports, {
      'vue': vuePreset,
      '@vueuse/core': vueUsePreset,
      '@testing-library/vue': testingLibraryPreset,
    }],
    dirs: ['./src/shared/lib/utils/auto-import/*'],
    vueTemplate: true,
    eslintrc: { enabled: true },
  }),
  Components({
    resolvers: [
      HeadlessUiResolver({ prefix: 'H' }),
      LeStandResolver,
    ],
    types: [],
  }),
  SvgLoader(),
]
