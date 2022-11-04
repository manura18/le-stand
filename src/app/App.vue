<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { type HeadObject, useHead } from '@vueuse/head'

import { FLayout } from '@/shared/ui/FLayout'

const route = useRoute()

const Layout = computed(() => {
  if (route.meta.layout === null) {
    return 'div'
  }

  return route.meta.layout ?? FLayout
})

const metaTags = ref<HeadObject>({})
useHead(metaTags)

watch(route, () => {
  const head = route.meta.head

  metaTags.value = head && typeof head !== 'function' ? head : {}
})

const onUpdateMeta = computed(() => {
  const head = route.meta.head

  return (...args: any) => {
    if (typeof head === 'function') {
      metaTags.value = head(...args)
    }
  }
})

const transitionActiveClass = tw('transition-opacity duration-300 ease-in')
const transitionClass = tw('opacity-0')
</script>

<template>
  <Component :is="Layout" v-bind="route.meta.layoutProps ?? {}">
    <RouterView v-slot="{ Component: Page }">
      <Transition
        mode="out-in"
        :enter-active-class="transitionActiveClass"
        :leave-active-class="transitionActiveClass"
        :enter-from-class="transitionClass"
        :leave-to-class="transitionClass"
        appear
      >
        <Component :is="Page" @update-meta="onUpdateMeta" />
      </Transition>
    </RouterView>
  </Component>
</template>
