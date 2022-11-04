/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
