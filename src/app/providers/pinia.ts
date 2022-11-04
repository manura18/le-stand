import { createPinia } from 'pinia'

import { definePlugin } from '@/shared/lib/utils'

export const pinia = definePlugin({
  install(app) {
    app.use(createPinia())
  },
})
