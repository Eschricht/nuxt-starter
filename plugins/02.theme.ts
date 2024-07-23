import { themes } from 'artivue'

export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  const { isDark, setBaseTheme } = useBaseTheme()
  const customTheme = useCustomTheme()

  useHead({
    htmlAttrs: {
      class: () => isDark.value ? 'dark' : undefined,
    },
  })

  watch(() => colorMode.value, (value) => {
    if (value === 'custom') {
      setBaseTheme(customTheme.value)
    }
    else {
      setBaseTheme(value in themes ? themes[value as keyof typeof themes] : themes.light)
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
