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
        'bg-tussock-300 dark:bg-curious text-foreground relative w-screen snap-center overflow-clip py-16',
        className
      )}
      {...sectionProps}
    >
      <div ref={ref} className="cus-hv-center absolute inset-0 size-full">
        <AnimatePresence>
          {inView ? (
            <motion.div className="flex flex-col gap-4 px-4 sm:px-8 md:px-16 lg:px-32">
              <div className="uppercase">{lead}</div>
              <h1 className="xs:text-4xl text-3xl font-extralight sm:text-5xl md:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="font-extralight">{text}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}
