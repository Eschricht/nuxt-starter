<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  modelValue?: string
  disabled?: boolean
}>(), {
  modelValue: '#000000',
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const value = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})
</script>

<template>
  <label :class="{ 'opacity-50': disabled }" un-artivue="input-within" un-gap="2" un-inline="flex" un-items="center" un-justify="between" un-p="y-1 x-2" un-w="32">
    <p un-font="mono" un-text="artivue-surface-text-alt-2">{{ value }}</p>
    <input v-model="value" :disabled="disabled" type="color" un-bg="transparent" un-border="none" un-h="6" un-overflow="hidden" un-w="6" v-bind="$attrs">
  </label>
</template>

<style scoped>
input[type='color'] {
  appearance: none;
  border:;
  background: transparent;
  width: 1.25rem;
  height: 1.25rem;
}

input[type='color']::-webkit-color-swatch-wrapper {
  padding: 0;
  border-radius: 0.25rem;

  @apply border border-solid border-artivue-surface-border;
}

input[type='color']::-webkit-color-swatch {
  padding: 0;
  border-radius: 0.25rem;

  @apply border border-solid border-artivue-surface-border;
}
</style>
