<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { ButtonVariant, RouterLinkProps, ToProp } from './types'

export interface Props extends RouterLinkProps {
  outline?: boolean
  /** @default 'primary' */
  variant?: ButtonVariant
  disabled?: boolean
  to?: ToProp
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})

const { to, variant, outline, disabled } = toRefs(props)

const tag = computed(() => (to.value ? RouterLink : 'button'))

type ButtonClassMap<T extends string> = {
  default: Record<T, CssClasses>
  hover: Record<T, CssClasses>
}

const variantClasses: ButtonClassMap<ButtonVariant> = {
  default: {
    primary: tw('bg-amber-600 text-white'),
    light: tw('bg-gray-50 text-gray-800'),
    dark: tw('bg-gray-800 text-white'),
  },
  hover: {
    primary: tw('hover:bg-amber-700'),
    light: tw('hover:bg-orange-100'),
    dark: tw('hover:bg-black'),
  },
}

const outlineVariantClasses: ButtonClassMap<ButtonVariant> = {
  default: {
    primary: tw('text-amber-600'),
    light: tw('text-gray-800 hover:bg-gray-50 hover:text-gray-800'),
    dark: tw('text-gray-800'),
  },
  hover: {
    primary: tw('hover:bg-amber-600 hover:text-white'),
    light: tw('hover:bg-gray-50 hover:text-gray-800'),
    dark: tw('hover:bg-gray-800 hover:text-white'),
  },
}

const buttonClasses = computed(() => {
  const classesMap = outline.value ? outlineVariantClasses : variantClasses

  const classes = classesMap.default[variant.value]
  const hoverClasses = !disabled.value ? classesMap.hover[variant.value] : ''

  return [classes, hoverClasses]
})
</script>

<template>
  <Component
    :is="tag"
    v-wave
    class="min-h-[2.5rem] rounded border px-4 py-1.5 transition-all"
    :class="[
      buttonClasses,
      outline ? 'bg-white border-current' : 'border-transparent',
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :to="to"
  >
    <slot />
  </Component>
</template>
