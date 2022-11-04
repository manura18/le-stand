export function readMetaConfig(key: string) {
  const meta = document.querySelector(`meta[name="${key}"]`)

  return meta?.getAttribute('content')
}
