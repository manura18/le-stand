import { toRefs as toRefsBase } from '@vueuse/core'

type RequiredKeepUndefined<T> = { [K in keyof T]-?: [T[K]] } extends infer U
  ? U extends Record<keyof U, [any]> ? { [K in keyof U]: U[K][0] } : never
  : never

  type RemoveUndefinedFromBoolean<T> = {
    [K in keyof T]: T[K] extends boolean | undefined ? boolean : T[K]
  }

export function toRefs <T extends object>(objectRef: MaybeRef<T>) {
  return toRefsBase(
    objectRef as MaybeRef<RemoveUndefinedFromBoolean<RequiredKeepUndefined<T>>>,
  )
}
