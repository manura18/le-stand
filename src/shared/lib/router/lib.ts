import type { RouteRecordRaw, TypesConfig } from 'vue-router'
import type { ParamValue, RouteRecordInfo } from 'unplugin-vue-router'
import type { HeadObjectPlain } from '@vueuse/head'

import type { AnyObject } from '@/shared/types'
import type { ExtractComponentProps } from '@/shared/lib/utils'

export type AbstractRouteMap<
  T extends Record<string, Record<string, string>
> = AnyObject> = T

export type RouteMapToNamedMap<RoutesMap extends AbstractRouteMap> = {
  [K in keyof RoutesMap]: K extends string ?
    RouteRecordInfo<
    K, K, { [Q in keyof RoutesMap[K]]: ParamValue<true> },
    { [Q in keyof RoutesMap[K]]: ParamValue<false> }
  >
    : never
}

export type RouteLocation = ExtractComponentProps<TypesConfig['RouterLink']>['to']

export const makeDefineRouteFn = <RouteMap extends AbstractRouteMap>() => <
  Key extends keyof RouteMap,
  MetaArgs extends any[],
  ComponentProps,
  LayoutProps,
>(r: Omit<RouteRecordRaw, 'path' | 'component' | 'props'> & {
    name: Key
    path: string
    component: () => Promise<{
      default: abstract new (...args: any) => {
        $props: ComponentProps
        $emit: { (event: 'updateMeta', ...params: MetaArgs): void }
      }
    }>
    props?: (
      args: { params: { [Z in keyof RouteMap[Key]]: string } }
    ) => ComponentProps
    meta?: {
      layout?: (abstract new (...args: any) => { $props: LayoutProps }) | null
      layoutProps?: LayoutProps
      head?: HeadObjectPlain | ((...args: MetaArgs) => HeadObjectPlain)
    }

    components?: never
    children?: never
    redirect?: never
  }) => r

export const makeDefineRoutesFn = <RouteMap>() => <
  A extends { [K in keyof RouteMap]: { name: K } },
> (r: A) => r
