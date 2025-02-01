<script setup lang="ts">
import { type Theme, themes as artivueThemes } from 'artivue'

const customTheme = useCustomTheme()
const colorMode = useColorMode()
const {
  themes: allThemes,
  customThemes,
} = useCustomThemes()

const themes = computed(() => ({
  system: colorMode.system === 'dark' ? artivueThemes.dark : artivueThemes.light,
  ...allThemes.value,
  custom: customTheme.value,
}))

const customThemeNames = computed(() => Object.keys(customThemes.value))

const customThemeName = ref('')

function setTheme(theme: string) {
  colorMode.preference = theme
}

function saveCustomTheme() {
  if (!customThemeName.value)
    return

  customThemes.value = {
    ...customThemes.value,
    [customThemeName.value]: customTheme.value,
  }

  customThemeName.value = ''
}

function removeCustomTheme(themeName: string) {
  delete customThemes.value[themeName]
}

function extendTheme(themeName: string) {
  const theme = themes.value[themeName as keyof typeof themes.value]
  customTheme.value = { ...theme }

  setTheme('custom')
}
</script>

<template>
  <ThemeLayer as="div" un-artivue="surface" un-border="~ artivue-surface-border" un-rounded="md">
    <div un-p="4">
      <h2 un-font="bold" un-text="2xl">
        Theme Settings
      </h2>
      <p un-m="b-4" un-text="sm artivue-surface-text-alt-1">
        Powered by <a href="https://artivue.eschricht.dev" target="_blank" un-underline>@artivue/nuxt</a> and <a href="https://github.com/Eschricht/nuxt-color-mode" target="_blank" un-underline>@eschricht/nuxt-color-mode</a>
      </p>

      <div un-flex="~ wrap" un-gap="4" un-items="center" un-justify-center>
        <button v-for="(theme, key) in themes" :key="key" :class="{ 'artivue-button-accent': colorMode.preference === key }" un-artivue-button="~ solid" un-case="capital" un-gap="2" un-items="center" un-p="l-0.5 y-0.5" un-flex @click="setTheme(key)">
          <ThemeLayer :theme as="div" un-artivue="surface" un-border="~ artivue-surface-border" un-gap="1" un-items="center" un-p="x-1 y-0.5" un-rounded="md" un-flex>
            <div un-bg="artivue-accent" un-h="2" un-rounded="md" un-w="2" />
            <div un-text="sm">
              Aa
            </div>
          </ThemeLayer>

          <div :class="{ 'font-bold': colorMode.preference === key }">
            {{ key }}
          </div>
        </button>
      </div>
    </div>

    <div v-if="colorMode.preference === 'custom'" un-border="t artivue-surface-border" un-p="4">
      <p un-m="b-2" un-text="lg">
        <strong>Custom theme colors</strong>
      </p>

      <div un-flex="~ wrap" un-gap="4" un-items="center" un-justify="center">
        <div>
          <label for="s-bg" un-text="sm">Surface background</label><br>
          <ColorInput id="s-bg" v-model="customTheme.surface.background" />
        </div>

        <div>
          <label for="s-text" un-text="sm">Surface text</label><br>
          <ColorInput id="s-text" v-model="customTheme.surface.text" />
        </div>

        <div>
          <label for="a-bg" un-text="sm">Accent background</label><br>
          <ColorInput id="a-bg" v-model="customTheme.accent.background" />
        </div>

        <div>
          <label for="a-text" un-text="sm">Accent text</label><br>
          <ColorInput id="a-text" v-model="customTheme.accent.text" />
        </div>
      </div>

      <div un-justify="center" un-m="t-8" un-flex>
        <div un-text="left">
          <label for="save-theme-name" un-text="sm">Save theme configuration</label><br>
          <input id="save-theme-name" v-model="customThemeName" placeholder="My custom theme" un-p="l-2" un-artivue-i>
          <button :disabled="!customThemeName" un-artivue-btn="~ solid accent" un-m="l-1" @click="saveCustomTheme">
            Save
          </button>
        </div>
      </div>
    </div>

    <div v-else un-gap="4" un-justify="center" un-p="4" un-flex>
      <ThemeLayer v-if="customThemeNames.includes(colorMode.preference)" :multiplier="0" :theme="{ accent: { background: '#A33E3E' } }" as="button" un-artivue-btn="~ solid accent" @click="removeCustomTheme(colorMode.preference)">
        Remove
      </ThemeLayer>

      <button un-artivue-btn="~ solid accent" @click="extendTheme(colorMode.preference)">
        Extend theme
      </button>
    </div>
  </ThemeLayer>
</template>
