'use client'
import type { SlideData } from '@/data/slides.server'
import { useBoundingRect } from '@/utils/get-bounding'
import { useDirection } from '@/utils/locale'
import { ListProps } from '@/utils/next'
import { useScreenSize } from '@/utils/screen'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

const endSpace = 300
const slideVerticalSpace = 300

export default function HScrollHero({ list }: ListProps<SlideData>) {
  // const t = useI18n()
  const rootRef = useRef<HTMLElement>(null)
  const hScrollRef = useRef<HTMLDivElement>(null)
  const screen = useScreenSize()
  const root = useBoundingRect(rootRef)
  const dir = useDirection()

  const { scrollYProgress } = useScroll({
    axis: 'y',
    target: rootRef,
    offset: ['start end', 'end end'],
  })

  const scrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, screen.h + list.length * slideVerticalSpace + endSpace]
  )

  const loadProgress = useTransform(scrollY, [0, screen.h], [0, 100])
  const scale = useTransform(loadProgress, [0, 100], [0.8, 1])
  const borderRadius = useTransform(loadProgress, [0, 100], [15, 0])

  const slidesProgress = useTransform(
    scrollY,
    [screen.h, screen.h + list.length * slideVerticalSpace],
    [0, (list.length - 1) * root.width]
  )
  useMotionValueEvent(slidesProgress, 'change', (left) => {
    const multiplier = dir === 'rtl' ? -1 : 1
    hScrollRef.current?.scroll({ left: multiplier * left })
  })

  return (
    <>
      <section
        ref={rootRef}
        className="relative h-[200vh] w-screen overflow-clip"
        style={{
          height: `calc(200vh + ${list.length * slideVerticalSpace + endSpace}px)`,
        }}
      >
        <div className="cus-hv-center sticky inset-0 bottom-auto h-screen">
          <motion.div
            className="flex size-full overflow-hidden"
            ref={hScrollRef}
            style={{ scale }}
          >
            {list.map((slide) => (
              <motion.div
                key={slide.id}
                className="relative flex min-w-screen items-end overflow-clip"
                style={{ borderRadius }}
              >
                <Image
                  src={slide.img}
                  alt=""
                  className="absolute inset-0 -z-1 size-full object-cover"
                />
                {/* <div className="m-32">
                  <h3 className="text-5xl font-extralight tracking-tighter">
                    {t(slide.title)}
                  </h3>
                  <div className="lead font-extralight">{t(slide.lead)}</div>
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
