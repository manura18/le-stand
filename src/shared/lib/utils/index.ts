import type { Plugin } from 'vue'
import { makeInferFn } from './types'

export * from './types'

export const definePlugin = makeInferFn<NonNullable<Plugin>>()

// eslint-disable-next-line promise/param-names
export const wait = (time: number) => new Promise((r) => setTimeout(r, time))

export function ensure<T>(
  argument: T | undefined | null,
  message = 'This value was promised to be there.',
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message)
  }

  return argument
}

export const camelToKebabCase = (value: string) => (
  value.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
  )
)
