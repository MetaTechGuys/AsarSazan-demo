'use client'
import { debounce } from 'es-toolkit'
import { useCallback, useEffect, useMemo, useState } from 'react'

// type BP = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

enum BP {
  xxs = 400,
  xs = 512,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1536,
}

interface BRValue {
  and: {
    above: boolean
    below: boolean
  }
}

export default function useMediaQueryBreakPoints(dbp: keyof typeof BP = 'sm') {
  const [width, setWidth] = useState(BP[dbp])

  const onResize = useCallback(
    debounce(function onResize() {
      setWidth(window.innerWidth)
    }, 1000),
    []
  )

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  const mqbp = useMemo<Record<keyof typeof BP, BRValue>>(() => {
    return {
      xxs: {
        and: {
          above: width >= BP.xxs,
          below: width <= BP.xxs,
        },
      },

      xs: {
        and: {
          above: width >= BP.xs,
          below: width <= BP.xs,
        },
      },

      sm: {
        and: {
          above: width >= BP.sm,
          below: width <= BP.sm,
        },
      },

      md: {
        and: {
          above: width >= BP.md,
          below: width <= BP.md,
        },
      },

      lg: {
        and: {
          above: width >= BP.lg,
          below: width <= BP.lg,
        },
      },

      xl: {
        and: {
          above: width >= BP.xl,
          below: width <= BP.xl,
        },
      },

      xxl: {
        and: {
          above: width >= BP.xxl,
          below: width <= BP.xxl,
        },
      },
    }
  }, [width])
  return {
    ...mqbp,
    width,
  } as const
}
