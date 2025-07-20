'use client'
import { MEDIA } from '@/data/media'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

interface LastHeroProps {
  title: string
  text: string
}

export default function LastHero({ text, title }: LastHeroProps) {
  const target = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    axis: 'y',
    target,
    offset: ['start start', 'end end'],
  })
  // bg
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1])
  const y = useTransform(scrollYProgress, [0, 0.5, 0.8], [200, 200, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0, 1])
  // svg
  const sScale = useTransform(scrollYProgress, [0, 0.4, 0.8], [2, 1, 3])
  const p1y = useTransform(scrollYProgress, [0, 0.4, 0.8], [280, 550, 440])
  const p2y = useTransform(scrollYProgress, [0, 0.4, 0.8], [830, 500, -600])
  return (
    <section
      ref={target}
      className="relative h-[300vh] w-screen snap-center overflow-clip"
    >
      <motion.div className="cus-hv-center sticky inset-0 bottom-auto h-screen overflow-clip">
        <motion.div style={{ scale }} className="size-full">
          <Image
            src={MEDIA.lastHero}
            alt=""
            className="-z-1 size-full object-cover"
          />
        </motion.div>
        <div className="cus-hv-center absolute inset-0">
          <motion.div
            style={{ opacity, y }}
            className="flex flex-col gap-4 text-center text-shadow-md"
          >
            <h1 className="text-3xl font-extrabold sm:text-5xl md:text-7xl lg:text-9xl">
              {title}
            </h1>
            <p className="text-tussock-200 sm:text-xl md:text-2xl lg:text-3xl">
              {text}
            </p>
          </motion.div>
        </div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          className="absolute h-screen w-screen"
          preserveAspectRatio="xMidYMid slice"
          style={{ scale: sScale }}
        >
          <g className="">
            <motion.g style={{ x: 960, y: p1y }}>
              <path
                fill="white"
                d="M0,286.25 C0,286.25 -124,541.5 -124,541.5 C-124,541.5 120,541.5 120,541.5 C120,541.5 0,286.25 0,286.25z"
              />
            </motion.g>
            <motion.g style={{ x: 960, y: p2y }}>
              <path
                fill="white"
                d="M1768,-932 C1768,-932 -1756,-932 -1756,-932 C-1756,-932 -1756,540 -1756,540 C-1756,540 -524.8837890625,845.294189453125 -524.8837890625,845.294189453125 C-524.8837890625,845.294189453125 -0.025999298319220543,-252.60781860351562 -0.025999298319220543,-252.60781860351562 C-0.025999298319220543,-252.60781860351562 528.0709228515625,845.8578491210938 528.0709228515625,845.8578491210938 C528.0709228515625,845.8578491210938 1768,548 1768,548 C1768,548 1768,-932 1768,-932z"
              />
            </motion.g>
          </g>
        </motion.svg>
      </motion.div>
    </section>
  )
}
