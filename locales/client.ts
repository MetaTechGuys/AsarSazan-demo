'use client'
import { createI18nClient } from 'next-international/client'

export const { useI18n, useScopedI18n, I18nProviderClient, useCurrentLocale } =
  createI18nClient({
    en: () => import('./dict/en'),
    fa: () => import('./dict/fa'),
  })
