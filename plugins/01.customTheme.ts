import type { Theme } from 'artivue'

export default defineNuxtPlugin(() => {
  const { theme } = useBaseTheme()

  const customTheme = useCookie('custom-theme', {
    default: (): Theme => ({
      accent: {
        ...theme.value.accent,
      },
      surface: {
        ...theme.value.surface,
      },
    }),
    watch: true,
  })

  return {
    provide: {
      customTheme,
    },
  }
})
