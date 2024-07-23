<script setup lang="ts">
import { themes as artivueThemes } from 'artivue'

const customTheme = useCustomTheme()
const colorMode = useColorMode()

const themes = reactive({
  system: colorMode.system === 'dark' ? artivueThemes.dark : artivueThemes.light,
  ...artivueThemes,
  custom: customTheme,
})

function setTheme(theme: string) {
  colorMode.preference = theme
}
</script>

<template>
  <ThemeLayer as="div" un-artivue="surface" un-border="~ artivue-surface-border" un-rounded="md">
    <div un-p="4">
      <h2 un-font="bold" un-text="2xl">
        Theme Settings
      </h2>
      <p un-m="b-4" un-text="sm artivue-surface-text-alt-1">
        Powered by <a href="https://artivue.eschricht.dev" target="_blank" un-underline>@artivue/nuxt</a>
      </p>

      <div un-flex="~ wrap" un-gap="4" un-items="center" un-justify-center>
        <button v-for="(theme, key) in themes" :key="key" :class="{ 'artivue-button-accent': colorMode.preference === key }" un-artivue-button="~ solid" un-case="capital" un-gap="2" un-items="center" un-flex @click="setTheme(key)">
          <ThemeLayer :theme as="div" un-artivue="surface" un-border="~ artivue-surface-border" un-gap="1" un-items="center" un-p="x-1" un-rounded="md" un-flex>
            <div un-bg="artivue-accent" un-h="2" un-rounded="md" un-w="2" />
            <div un-text="xs">
              Aa
            </div>
          </ThemeLayer>

          <div>
            {{ key }}
          </div>
        </button>
      </div>
    </div>

    <div v-if="colorMode.preference === 'custom'" un-border="t artivue-surface-border" un-p="4">
      <p un-m="b-2" un-text="lg">
        Custom theme colors
      </p>

      <div un-gap="4" un-items="center" un-justify="center" un-text="left" un-flex>
        <div>
          <label for="s-bg" un-text="xs">Surface background</label><br>
          <ColorInput id="s-bg" v-model="customTheme.surface.background" />
        </div>

        <div>
          <label for="s-text" un-text="xs">Surface text</label><br>
          <ColorInput id="s-text" v-model="customTheme.surface.text" />
        </div>

        <div>
          <label for="a-bg" un-text="xs">Accent background</label><br>
          <ColorInput id="a-bg" v-model="customTheme.accent.background" />
        </div>

        <div>
          <label for="a-text" un-text="xs">Accent text</label><br>
          <ColorInput id="a-text" v-model="customTheme.accent.text" />
        </div>
      </div>
    </div>
  </ThemeLayer>
</template>
