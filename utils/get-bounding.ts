'use client'
import { RefObject, useLayoutEffect, useRef } from 'react'

type DOMRectData = Omit<DOMRect, 'toJSON'> & { ready?: true }

export function useBoundingRect(
  ref: RefObject<HTMLElement | null>
): DOMRectData {
  const rect = useRef<DOMRectData>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  })
  useLayoutEffect(() => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect()
      rect.current = {
        ...r.toJSON(),
        ready: true,
      }
    }
  })
  return rect.current
}
