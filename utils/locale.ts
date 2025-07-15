import { useCurrentLocale } from '@/locales/client'
import { dirDict, Direction } from '@/locales/utils'

export function useDirection(): Direction {
  const lng = useCurrentLocale()
  try {
    return dirDict[lng]
  } catch {
    return 'ltr'
  }
}
