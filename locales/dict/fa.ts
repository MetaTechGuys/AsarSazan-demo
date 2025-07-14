const fa = {
  hello: 'سلام',
}

export type I18nDictionary = typeof fa

export default { ...fa } as const
