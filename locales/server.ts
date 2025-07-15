import { createI18nServer } from 'next-international/server'
import { type Direction, dirDict } from './utils'

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: () => import('./dict/en'),
    fa: () => import('./dict/fa'),
  })

export async function getDirection(): Promise<Direction> {
  try {
    const lng = await getCurrentLocale()
    return dirDict[lng]
  } catch {
    return 'ltr'
  }
}
