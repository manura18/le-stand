import type { Component } from 'vue'
import type { IVWaveDirectiveOptions } from 'v-wave/dist/types/options'
import type { HeadObjectPlain } from '@vueuse/head'

declare global {
  type Ref<T = any> = import('@vue/reactivity').Ref<T>
  type ComputedRef<T = any> = import('@vue/reactivity').ComputedRef<T>

  type Directive<T = any, V = any> = import('@vue/runtime-core').Directive<T, V>

  type MaybeRef<T> = import('@vueuse/core').MaybeRef<T>

  type Meta<T = Args> = import('@storybook/vue3').Meta<T>
  type StoryFn<T = Args> = import('@storybook/vue3').StoryFn<T>

  type MetaEvent = typeof MetaEvent

  type CssClasses = string | string[] | Record<string, boolean>

}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    vWave: Directive<HTMLElement, Partial<IVWaveDirectiveOptions> | undefined>
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: Component | null
    layoutProps?: Record<string, unknown>
    head?: HeadObjectPlain | ((...args: any) => HeadObjectPlain)
  }
}
