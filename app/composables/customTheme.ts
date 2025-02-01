export function useCustomTheme() {
  const nuxtApp = useNuxtApp()

  return nuxtApp.$customTheme
}
