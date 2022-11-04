/* eslint-disable @typescript-eslint/comma-dangle */
import type { DefineComponent } from 'vue'
import type { VueFramework } from '@storybook/vue3'
import type { Args, DecoratorFunction } from '@storybook/csf/dist/story'

import { FLayout } from '@/shared/ui/FLayout'

type Decorator<TArgs = Args> = DecoratorFunction<VueFramework, TArgs>

type VueComponent = DefineComponent<any, any, any>

export const makeLayoutDecorator
  = <T,>(Layout: VueComponent = FLayout): Decorator<T> =>
    () => ({
      render: () => (
        <Layout>
          <story />
        </Layout>
      ),
    })

export const makePageMeta = <T,>(layout?: VueComponent): Meta<T> => ({
  decorators: [makeLayoutDecorator(layout)],
  parameters: { layout: 'fullscreen' },
})
