'use client'
import { usePointerPos } from '@/utils/pointer'
import { useScreenSize } from '@/utils/screen'
import { motion, useSpring, useTransform } from 'motion/react'
import { ComponentProps } from 'react'

export default function LandingHero(props: ComponentProps<'section'>) {
  return (
    <section {...props} className="cus-hv-center relative h-screen w-screen">
      <HeroVideo />
      {/* <div className="prose-mdx bg-jungle-950/30 p-16" data-theme="dark">
        <h1>Asarsazan</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          velit exercitationem eos facere dicta possimus, aperiam mollitia
          cumque! Dolorum, fugiat.
        </p>
      </div> */}
    </section>
  )
}

function HeroVideo() {
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
      src="/hero-video.mp4"
      className="absolute inset-0 -z-1 size-full scale-110 object-cover"
      style={{ x: xs, y: ys }}
      muted
      autoPlay
      loop
      playsInline
    />
  )
}
