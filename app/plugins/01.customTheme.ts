import { type Theme, themes } from 'artivue'

const extraThemes = {
  'Nuxt Dark': {
    accent: { background: '#00c16a', text: '#0f172a' },
    surface: { background: '#0f172a', text: '#ededed' },
  },
  'Nuxt Light': {
    accent: { background: '#00c16a', text: '#ffffff' },
    surface: { background: '#f2f2f2', text: '#000000' },
  },
}

export default defineNuxtPlugin(() => {
  const { theme } = useBaseTheme()

  const customThemes = useCookie<Record<string, Theme>>('customThemes', {
    default: () => ({}),
  })
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
  const resolvedThemes = computed<Record<string, Theme>>(() => ({
    ...themes,
    ...extraThemes,
    ...customThemes.value,
  }))

  return {
    provide: {
      customTheme,
      customThemes,
      themes: resolvedThemes,
    },
  }
})
