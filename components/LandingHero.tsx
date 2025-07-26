'use client'
import { MEDIA } from '@/data/media'
import { useScreenSize } from '@/utils/screen'
import { motion, useScroll, useTransform } from 'motion/react'

interface LandingHeroProps {
  title: string
  text: string
}

export default function LandingHero({ text, title }: LandingHeroProps) {
  const { h } = useScreenSize()
  const { scrollY } = useScroll()
  const y = useTransform(
    scrollY,
    [0, h * 0.5, h, h * 1.5],
    [500, 100, 200, 500]
  )
  const opacity = useTransform(scrollY, [0, h], [0, 0.95])
  const scale = useTransform(scrollY, [0, h / 2, h], [1, 4, 20])
  const color = useTransform(
    scrollY,
    [0, h / 2, h],
    ['#fff', '#e3ccaa', '#000']
  )
  const content = (
    <>
      <h1 className="text-5xl font-extrabold md:text-7xl lg:text-9xl">
        {title}
      </h1>
      <p className="sm:text-xl md:text-2xl lg:text-3xl">{text}</p>
    </>
  )
  return (
    <section className="relative h-[250vh] w-screen snap-center overflow-clip">
      <div className="cus-hv-center sticky inset-0 bottom-auto h-screen">
        <video
          src={MEDIA.videos.banner.src}
          className="absolute inset-0 -z-1 size-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        />
        <div className="cus-hv-center absolute inset-0 z-0 h-screen">
          <div className="bg-jungle-950/30 p-4 sm:p-8 md:p-16 [&>*]:opacity-0">
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
          className="cus-hv-center hide-on-scroll-lock sticky inset-0 z-2 h-screen"
          style={{ color }}
        >
          <div className="p-4 sm:p-8 md:p-16">{content}</div>
        </motion.div>
      </div>
    </section>
  )
}
