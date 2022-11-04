import { createHead } from '@vueuse/head'

import { definePlugin } from '@/shared/lib/utils'
import { APP_NAME } from '@/shared/config'

export const head = definePlugin({
  install(app) {
    app.use(
      createHead({
        titleTemplate: (title) => `${title ? `${title} - ` : ''}${APP_NAME}`,
      }),
    )
  },
})
