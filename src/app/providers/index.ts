import type { App } from 'vue'
import VWave from 'v-wave'

import { router } from './router'
import { head } from './head'
import { vueQuery } from './vue-query'
import { i18n } from './i18n'
import { pinia } from './pinia'

export function applyProviders(app: App) {
  app.use(router)
  app.use(head)
  app.use(vueQuery)
  app.use(i18n)
  app.use(pinia)
  app.use(VWave)
}
