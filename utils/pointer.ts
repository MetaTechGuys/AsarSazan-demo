'use client'
import { useMotionValue } from 'motion/react'
import { useLayoutEffect } from 'react'

export function usePointerPos() {
  const x = useMotionValue(-50)
  const y = useMotionValue(-50)
  useLayoutEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      x.set(clientX)
      y.set(clientY)
    }
    window.addEventListener('pointermove', handlePointerMove, { capture: true })
    return () =>
      window.removeEventListener('pointermove', handlePointerMove, {
        capture: true,
      })
  }, [x, y])
  return { x, y }
}
