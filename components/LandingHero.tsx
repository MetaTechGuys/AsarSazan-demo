'use client'
import { MEDIA } from '@/data/media'
import { usePointerPos } from '@/utils/pointer'
import { useScreenSize } from '@/utils/screen'
import { cn } from '@/utils/tailwind'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

interface LandingHeroProps {
  title: string
  text: string
}

export default function LandingHero({ text, title }: LandingHeroProps) {
  const { h } = useScreenSize()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, h * 0.5, h], [500, 0, 500])
  const opacity = useTransform(scrollY, [0, h], [0, 0.95])
  const scale = useTransform(scrollY, [0, h], [1, 6])
  const color = useTransform(
    scrollY,
    [0, h / 2, h],
    ['#fff', '#e3ccaa', '#000']
  )
  const content = (
    <>
      <h1 className="text-3xl font-extrabold sm:text-5xl md:text-7xl lg:text-9xl">
        {title}
      </h1>
      <p className="text-tussock sm:text-xl md:text-2xl lg:text-3xl">{text}</p>
    </>
  )
  return (
    <>
      <section className="relative h-[200vh] w-screen snap-center overflow-clip">
        <div className="cus-hv-center sticky inset-0 bottom-auto h-screen">
          <HeroVideo clasName="-z-1" />
          <div className="cus-hv-center absolute inset-0 z-0 h-screen">
            <div className="bg-jungle-950/10 p-16 [&>*]:opacity-0">
              {content}
            </div>
          </div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="absolute inset-0 top-auto z-1 h-screen w-screen overflow-clip"
            style={{ opacity, scale, y }}
          >
            <g>
              <path
                d="M50,51.28l-20.38,48.61H7.95L50,.11l42.05,99.79h-21.67l-20.39-48.61Z"
                fill="white"
              />
            </g>
          </motion.svg>
          <motion.div
            className="cus-hv-center sticky inset-0 z-2 h-screen"
            style={{ color }}
          >
            <div className="p-16">{content}</div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

interface HeroVideoProps {
  clasName?: string
}

function HeroVideo({ clasName }: HeroVideoProps) {
  const s = useScreenSize()
  const p = usePointerPos()

  const xt = useTransform(
    () => Math.tanh((p.x.get() / s.w - 0.5) * Math.PI) * -20
  )
  const yt = useTransform(
    () => Math.tanh((p.y.get() / s.h - 0.5) * Math.PI) * -20
  )

  const xs = useSpring(xt)
  const ys = useSpring(yt)
  // const yt = useTransform(() => Math.tanh(y.get()))

  return (
    <motion.video
      src={MEDIA.videos.banner.src}
      className={cn(
        'absolute inset-0 size-full scale-110 object-cover',
        clasName
      )}
      style={{ x: xs, y: ys }}
      muted
      autoPlay
      loop
      playsInline
    />
  )
}
