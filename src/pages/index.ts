import {
  type RoutesMap,
  makeDefineRouteFn,
  makeDefineRoutesFn,
} from '@/shared/lib/router'
import { t } from '@/shared/lib/i18n'

const defineRoutes = makeDefineRoutesFn<RoutesMap>()
const defineRoute = makeDefineRouteFn<RoutesMap>()

export const routesDefinition = defineRoutes({
  dashboard: defineRoute({
    name: 'dashboard',
    path: '/',
    component: () => import('./dashboard'),
    meta: { head: { title: t('DashboardPage.title') } },
  }),
})

export const routes = Object.values(routesDefinition)
