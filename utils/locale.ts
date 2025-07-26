'use client'
import { Direction } from '@/locales/utils'

export function useDirection(): Direction {
  if (typeof document !== 'undefined' && 'dir' in document) {
    return (document.dir ?? 'rtl') as Direction
  }
  return 'rtl'
}

export function breakLines(inp: string) {
  return inp.split('<br>')
}
