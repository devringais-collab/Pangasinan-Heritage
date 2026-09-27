export function useImagePath(path) {
  const config = useRuntimeConfig()
  return `${config.app.baseURL}${path.replace(/^\//, '')}`
}
