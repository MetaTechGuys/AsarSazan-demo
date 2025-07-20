'use client'
import { type StoryData } from '@/data/stories.server'
import { isProduction } from '@/utils/env'
import { useDirection } from '@/utils/locale'
import { DataProps } from '@/utils/next'
import { cn } from '@/utils/tailwind'
import {
  AnimatePresence,
  motion,
  useInView,
  Variant,
  Variants,
} from 'motion/react'
import Image from 'next/image'
import { useMemo, useRef } from 'react'

export default function StoryHero({ data }: DataProps<StoryData>) {
  const animateKey = data.animate ?? 'fade'
  const animations = useSlideAnimations()
  const variant = useMemo(
    () => animations[animateKey],
    [animations, animateKey]
  )
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.9, once: isProduction })
  return (
    <section className="relative h-screen w-screen snap-center overflow-clip">
      <Image
        src={data.img}
        alt={data.title}
        className="size-full object-cover"
      />

      <div
        ref={ref}
        className={cn(
          'cus-hv-center absolute inset-0 size-full p-4 sm:p-8 md:p-16 lg:p-32',
          data.wrapClassName
        )}
      >
        <AnimatePresence>
          {inView ? (
            <motion.div
              variants={variant}
              initial="initial"
              animate="animate"
              exit="exit"
              className={data.className}
            >
              <h1 className="mb-4 text-5xl font-extralight">{data.title}</h1>
              <p className="font-extralight">{data.lead}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}

interface StoryAnimate extends Variants {
  initial: Variant
  animate: Variant
  exit: Variant
}

const useSlideAnimations = (): Record<
  Required<StoryData>['animate'],
  StoryAnimate
> => {
  const dir = useDirection()
  const df = dir === 'rtl' ? -1 : 1

  return {
    'slide-start': {
      initial: { opacity: 0, x: -1 * df * 250 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
      exit: { opacity: 0, x: df * 250, transition: { duration: 0.7 } },
    },
    'slide-end': {
      initial: { opacity: 0, x: -1 * df * 250 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
      exit: { opacity: 0, x: df * 250, transition: { duration: 0.7 } },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.7 } },
      exit: { opacity: 0, transition: { duration: 0.7 } },
    },
  }
}
