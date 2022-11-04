import { definePlugin } from '@/shared/lib/utils'
import { plugin } from '@/shared/lib/i18n'

export const i18n = definePlugin({
  install(app) {
    app.use(plugin)
  },
})
