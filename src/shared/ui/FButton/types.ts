import type { TypesConfig } from 'vue-router'
import type { ExtractComponentProps } from '@/shared/lib/utils'

type RouterLinkPropsBase = ExtractComponentProps<TypesConfig['RouterLink']>

export type RouterLinkProps = Omit<RouterLinkPropsBase, 'to' | 'custom'>

export type ToProp = RouterLinkPropsBase['to']

export const ButtonVariant = ['primary', 'light', 'dark'] as const
export type ButtonVariant = typeof ButtonVariant[number]
