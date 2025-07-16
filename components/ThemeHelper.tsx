'use client'

import { useEffect } from 'react'

export const prefersDarkColorScheme = () =>
  typeof window !== 'undefined' &&
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

export function ThemeHelper() {
  useEffect(() => {
    const isDark = prefersDarkColorScheme()
    console.log({ isDark })

    if (isDark) {
      document.body.setAttribute('data-theme', 'dark')
    }
  }, [])
  return null
}
