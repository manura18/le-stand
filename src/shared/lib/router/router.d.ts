import type { RouteMapToNamedMap } from './lib'
import type { RoutesMap } from '.'

declare module 'vue-router/auto/routes' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface RouteNamedMap extends RouteMapToNamedMap<RoutesMap> {}
}
