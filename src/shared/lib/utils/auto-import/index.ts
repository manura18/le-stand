export const tw = <
  T extends string | string[] | Record<string, boolean>,
>(v: T) => v

export const MetaEvent = 'updateMeta' as const
