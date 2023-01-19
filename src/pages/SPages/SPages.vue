<script setup lang="ts">
import stand from './stand.jpg'
import { SInput } from '@/shared/ui/SInput'
import { SButton } from '@/shared/ui/SButton'

defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  further: { type: String, required: true },
})
</script>

<template>
  <div class="flex">
    <div>
      <img :src="stand">
    </div>
    <div class="p-6">
      <p class="pb-2 text-3xl">
        {{ title }}
      </p>
      <div class="pb-2">
        <SInput>
          {{ text }}
        </SInput>
      </div>
      <SButton>{{ further }}</SButton>
    </div>
  </div>
</template>
