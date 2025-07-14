'use client'
import { useState, useLayoutEffect } from 'react'

export function useScreenSize() {
  const [pos, setPos] = useState({ w: 500, h: 500 })
  useLayoutEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      setPos({ w, h })
    }
    window.addEventListener('resize', handleResize, { capture: true })
    handleResize()
    return () =>
      window.removeEventListener('resize', handleResize, {
        capture: true,
      })
  }, [])
  return pos
}
