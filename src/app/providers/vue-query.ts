import { VueQueryPlugin } from '@tanstack/vue-query'
import { definePlugin } from '@/shared/lib/utils'

export const vueQuery = definePlugin({
  install(app) {
    VueQueryPlugin.install(app, {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      },
    })
  },
})
