<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})

const route = useRoute()
const fullPath = computed(() => route.fullPath)
</script>

<template>
  <div>
    <div>
      <div un-i="ph-warning-duotone" un-inline="block" un-text="8xl artivue-accent-bg" />
    </div>

    <div un-m="y-4">
      <p un-text="4xl">
        <strong>Not found</strong>
      </p>

      <p><i un-bg="artivue-surface-hover" un-border="~ artivue-surface-border" un-p="x-2" un-rounded="md">{{ fullPath }}</i> <span un-text="artivue-surface-text-alt-1">is not a valid path</span></p>
    </div>

    <NuxtLink to="/" un-artivue-button="~ solid">
      Home
    </NuxtLink>
  </div>
</template>
