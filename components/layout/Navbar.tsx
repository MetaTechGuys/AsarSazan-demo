'use client'
import navImg from '@/public/pexels-tomfisk-32919890.jpg'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useSpring,
  useTime,
  useTransform,
} from 'motion/react'
import Image from 'next/image'
import { ComponentProps, useEffect, useState } from 'react'
import Icon from '../icon/Icon'
import MegaMenu from './MegaMenu'
import BrandLogo from './BrandLogo'
import { useScreenSize } from '@/utils/screen'

export default function Navbar(props: ComponentProps<'nav'>) {
  const [show, setShow] = useState(false)
  const [ready, setReady] = useState(false)
  const s = useScreenSize()

  const t = useTime()
  const d1 = useTransform(t, [0, 2000], [0, 100], { clamp: true })
  const d2 = useTransform(d1, [0, 100], [100, 0], {
    clamp: true,
  })
  const offset = useTransform(d1, [0, 100], [0, 50], { clamp: true })
  const dash = useTransform(() => `${d1.get()} ${d2.get()}`)
  const opacity = useTransform(d1, [0, 100], [0, 1], { clamp: true })
  const sOpacity = useTransform(t, [0, 100, 2000, 2500], [0, 1, 1, 0], {
    clamp: true,
  })
  const fill = useTransform(t, [2000, 2500], ['#000', '#fff'], {
    clamp: true,
  })

  const height = useTransform(t, [2500, 3500], [320, 56], { clamp: true })
  const height2 = useTransform(t, [2500, 3500], [s.h, 64], { clamp: true })

  useMotionValueEvent(t, 'change', (vt) => {
    if (vt > 4000) {
      t.destroy()
      setReady(true)
    }
  })

  return (
    <nav {...props} className="fixed start-0 top-0 z-10 w-screen">
      <AnimatePresence>
        {show ? (
          <>
            <motion.div
              key="mega-bg"
              className="glass bg-curious-800/10 absolute top-0 -z-1 w-full"
              transition={{ delay: 0.1 }}
              initial={{ height: 0 }}
              animate={{ height: '100vh' }}
              exit={{ height: 0 }}
            >
              <Image src={navImg} className="size-full object-cover" alt="" />
            </motion.div>
            <MegaMenu />
          </>
        ) : (
          <motion.div
            key="bar"
            className="bg-curious-800/30 absolute top-0 -z-1 h-16 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="glass bg-curious-800/30 fixed z-10 grid w-screen grid-cols-[4rem_1fr_4rem] px-8 py-1"
        style={{ height: height2 }}
      >
        {ready ? (
          <motion.button
            className="cursor-pointer"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => {
              setShow((o) => !o)
            }}
          >
            <Icon name="align-justify" className="text-foreground size-8" />
          </motion.button>
        ) : null}
        <div className="cus-hv-center col-start-2">
          <BrandLogo
            short
            className="full-tussock w-auto stroke-white stroke-1"
            style={{
              height,
              fill,
              strokeOpacity: sOpacity,
              strokeDashoffset: offset,
              strokeDasharray: dash,
              fillOpacity: opacity,
            }}
          />
        </div>
      </motion.div>
    </nav>
  )
}
