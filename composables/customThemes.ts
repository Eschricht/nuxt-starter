export function useCustomThemes() {
  const nuxtApp = useNuxtApp()

  return {
    customThemes: nuxtApp.$customThemes,
    themes: nuxtApp.$themes,
  }
}
