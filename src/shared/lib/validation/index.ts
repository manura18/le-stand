import { z } from 'zod'
import { type FieldArrayContext, useFieldArray } from 'vee-validate'

import type { AnyObject } from '@/shared/types'

export { z }

export { toFormValidator as schemaToValidator } from '@vee-validate/zod'

export function useFieldArraySafe<
V extends AnyObject, F extends Exclude<keyof V, number | symbol>,
>(_: V, field: F): V[F] extends Array<infer T> ? FieldArrayContext<T> : never {
  return useFieldArray<V[F][number]>(field) as any
}

export type ValidationScheme<T extends AnyObject> = {
  [K in keyof T]: z.ZodType<T[K]>
}
