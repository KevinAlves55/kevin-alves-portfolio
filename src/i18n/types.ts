import type { pt } from './pt.ts'

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends null
        ? null
        : T extends readonly (infer Item)[]
          ? readonly Widen<Item>[]
          : T extends object
            ? { readonly [Key in keyof T]: Widen<T[Key]> }
            : T

export type Messages = Widen<typeof pt>
