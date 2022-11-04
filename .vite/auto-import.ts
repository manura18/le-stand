type VueExports = keyof typeof import('vue')
type VueUseExports = keyof typeof import('@vueuse/core')
type TestingLibraryExports = keyof typeof import('@testing-library/vue')

type Preset<T> = (T | [T, string])[]

export const vuePreset: Preset<VueExports> = [
  // lifecycle
  'onMounted',
  'onUnmounted',

  // setup helpers
  'useAttrs',
  'useSlots',

  // reactivity
  'computed',
  'customRef',
  'isReadonly',
  'isRef',
  'markRaw',
  'reactive',
  'isReactive',
  'isProxy',
  'readonly',
  'ref',
  'shallowReactive',
  'shallowReadonly',
  'shallowRef',
  'triggerRef',
  'toRaw',
  'toRef',
  'unref',
  'watch',
  'watchEffect',
  'watchPostEffect',
  'watchSyncEffect',

  // component
  'defineComponent',
  'defineAsyncComponent',
  'getCurrentInstance',
  'h',
  'inject',
  'nextTick',
  'provide',
]

export const vueUsePreset: Preset<VueUseExports> = [
  'useVModel',
  'useVModels',
  'set',
  'until',
  'whenever',
  'computedAsync',
  'computedEager',
  'isDefined',
  'useEventBus',
]

export const testingLibraryPreset: Preset<TestingLibraryExports> = [
  ['render', 'renderComponent'],
  'fireEvent',
  'within',
]
