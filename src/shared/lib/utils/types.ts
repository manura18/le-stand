import type { AnyObject } from '@/shared/types'

export const makeInferFn = <E extends AnyObject>() => <T extends E>(v: T) => v

export type ExtractComponentProps<T> =
  T extends new () => { $props: infer P }
    ? P
    : never
