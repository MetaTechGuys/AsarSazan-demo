'use client'
import { cn } from '@/utils/tailwind'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { ComponentProps, useRef } from 'react'

interface TextHeroProps extends ComponentProps<'section'> {
  title: string
  lead?: string
  text?: string
  className?: string
}

export default function TextHero({
  lead,
  title,
  text,
  className,
  ...sectionProps
}: TextHeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.9, once: true })
  return (
    <section
      className={cn(
        'bg-background text-foreground relative h-64 w-screen snap-center overflow-clip',
        className
      )}
      {...sectionProps}
    >
      <div ref={ref} className="cus-hv-center absolute inset-0 size-full">
        <AnimatePresence>
          {inView ? (
            <motion.div>
              <div className="uppercase">{lead}</div>
              <h1 className="text-8xl font-extralight">{title}</h1>
              <p className="font-extralight">{text}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}
