import path from 'path'
import type { UserConfig } from 'vite'
import type {
  CoreConfig,
  Options,
  StorybookConfig,
} from '@storybook/core-common'

import { plugins as appPlugins } from '../.vite'

type Weaken<T, U extends keyof T> = {
  [k in keyof T]: k extends U ? any : T[k]
}

interface CustomizedCoreConfig extends Weaken<CoreConfig, 'builder'> {
  builder: CoreConfig['builder'] | 'storybook-builder-vite'
}
interface CustomizedStorybookConfig extends Weaken<StorybookConfig, 'core'> {
  core: CustomizedCoreConfig
  viteFinal?: (config: UserConfig, options: Options) => UserConfig
}

const storybookConfig: CustomizedStorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
  ],
  framework: '@storybook/vue3',
  core: { builder: '@storybook/builder-vite' },
  features: { storyStoreV7: true },
  staticDirs: ['../public'],
  viteFinal(config) {
    const plugins = config.plugins?.flat().filter((p) => {
      if (p && 'name' in p && p.name.includes('react')) {
        return false
      }

      return true
    }) ?? []

    return {
      ...config,
      plugins: [
        ...plugins,
        ...appPlugins,
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': path.resolve(__dirname, '../src/'),
        },
      },
    }
  },
}

export default storybookConfig
