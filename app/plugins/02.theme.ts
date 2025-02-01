import { themes as artivueThemes } from 'artivue'

export default defineNuxtPlugin<{
  foo: string
}>(() => {
  const colorMode = useColorMode()
  const { isDark, setBaseTheme } = useBaseTheme()
  const customTheme = useCustomTheme()
  const {
    themes,
  } = useCustomThemes()

  useHead({
    htmlAttrs: {
      class: () => (isDark.value && colorMode.value !== 'dark') ? 'dark' : '',
    },
  })

  watch(() => colorMode.value, (value) => {
    if (value === 'custom') {
      setBaseTheme(customTheme.value)
    }
    else {
      setBaseTheme(value in themes.value ? themes.value[value as keyof typeof themes['value']] : artivueThemes.light)
    }
  }, {
    immediate: true,
  })

  watch(customTheme, (val) => {
    if (colorMode.preference === 'custom') {
      setBaseTheme(val)
    }
  }, {
    deep: true,
  })
})
