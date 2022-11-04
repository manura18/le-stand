import { app } from '@storybook/vue3'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { applyProviders } from '@/app/providers'
import '@/app/styles/index.css'

applyProviders(app)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'white' },
      { name: 'black', value: '#000' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Shared', 'Entities', 'Features', 'Widgets', 'Pages'],
    },
  },
  layout: 'centered',
  viewport: { viewports: INITIAL_VIEWPORTS },
}
