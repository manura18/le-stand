<script setup lang="ts">
export type Props = {}

const props = defineProps<Props>()
const {} = toRefs(props)

const emit = defineEmits<{ (event: MetaEvent, payload: unknown): void }>()
</script>

<template></template>