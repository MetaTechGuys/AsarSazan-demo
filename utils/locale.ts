import { Direction } from '@/locales/utils'

export function useDirection(): Direction {
  return (document.dir ?? 'ltr') as Direction
}

export function breakLines(inp: string) {
  return inp.split('<br>')
}
