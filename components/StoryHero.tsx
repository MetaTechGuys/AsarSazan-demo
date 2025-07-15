'use client'
import { type StoryData } from '@/data/stories.server'
import { DataProps } from '@/utils/next'
import {
  AnimatePresence,
  motion,
  useInView,
  Variant,
  Variants,
} from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

export default function StoryHero({ data }: DataProps<StoryData>) {
  const animateKey = data.animate ?? 'fade'
  const variant = animations[animateKey]
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.9, once: true })
  return (
    <section className="relative h-screen w-screen snap-center overflow-clip">
      <Image
        src={data.img}
        alt={data.title}
        className="size-full object-cover"
      />

      <div ref={ref} className="cus-hv-center absolute inset-0 size-full">
        <AnimatePresence>
          {inView ? (
            <motion.div
              variants={variant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1 className="text-8xl font-extralight">{data.title}</h1>
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
const animations: Record<Required<StoryData>['animate'], StoryAnimate> = {
  'slide-right': {
    initial: { opacity: 0, x: -500 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 500 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
}
