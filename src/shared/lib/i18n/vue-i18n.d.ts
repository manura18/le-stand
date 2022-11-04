import { type TranslationDirective } from 'vue-i18n'
import type { MessageSchema } from '.'

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface ComponentCustomProperties {
    vT: TranslationDirective
  }
}

declare module 'vue-i18n' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefineLocaleMessage extends MessageSchema {}
}
