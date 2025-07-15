export type PagePropsWithParams<K extends string> = {
  params: Promise<Record<K, string>>
}

export type PagePropsWithOptionalParams<K extends string> = {
  params: Promise<Record<K, string[]>>
}

export interface DataProps<T> {
  data: T
}

export interface ListProps<T> {
  list: T[]
}

export interface Value<T> {
  value?: T
}
