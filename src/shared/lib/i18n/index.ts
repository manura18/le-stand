import { createI18n } from 'vue-i18n'

import enUS from './locales/en-US.json'

export type MessageSchema = typeof enUS

export const plugin = createI18n<false>({
  legacy: false,
  locale: 'en-US',
  messages: { 'en-US': enUS },
})

export const t = plugin.global.t
