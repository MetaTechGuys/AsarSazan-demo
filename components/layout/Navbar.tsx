'use client'
import navImg from '@/public/pexels-phat-tr-ng-1662052981-28762589 (1).jpg'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTime,
  useTransform,
} from 'motion/react'
import Image from 'next/image'
import { ComponentProps, useState } from 'react'
import Icon from '../icon/Icon'
import BrandLogo from './BrandLogo'
import MegaMenu from './MegaMenu'

interface NavbarProps extends ComponentProps<'nav'> {
  skip?: boolean
}

export default function Navbar({ skip, ...props }: NavbarProps) {
  const [show, setShow] = useState(false)
  const [mini, setMini] = useState(false)
  const [ready, setReady] = useState(!!skip)

  const { scrollY } = useScroll({ axis: 'y' })
  const miniLogo = useTransform(() => scrollY.get() > 0)
  useMotionValueEvent(miniLogo, 'change', setMini)

  const rtc = useTime()
  const t = useTransform(() => (skip ? 4001 : rtc.get()))
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

  const opacity2 = useTransform(t, [3000, 3500], [1, 0], { clamp: true })

  useMotionValueEvent(t, 'change', (vt) => {
    if (vt > 4000) {
      t.destroy()
      setReady(true)
    }
  })

  return (
    <nav {...props} className="fixed start-0 top-0 z-10 w-screen">
      {show ? <div className="scroll-lock" /> : null}
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
            <div
              onClickCapture={() => {
                setShow(false)
              }}
            >
              <MegaMenu key="mega-menu" />
            </div>
          </>
        ) : null}
        {ready ? (
          <motion.div
            key="bar1"
            className="glass bg-tussock-800/30 grid h-16 w-screen grid-cols-[auto_1fr_auto] px-8 py-1"
            initial={{ y: -64 }}
            animate={{ y: 0 }}
            exit={{ y: -64 }}
            transition={{ ease: 'linear', duration: 0.7 }}
          >
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

            <span />
            <div className="cus-hv-center h-full">
              <BrandLogo mini={mini} short className="fill-foreground h-14" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="splash"
            className="glass bg-tussock-800/30 cus-hv-center absolute z-100 size-full h-screen w-screen p-8"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'linear', duration: 0.7 }}
          >
            <BrandLogo
              short
              className="fill-tussock w-auto stroke-white stroke-1"
              style={{
                // height,
                fill,
                opacity: opacity2,
                strokeOpacity: sOpacity,
                strokeDashoffset: offset,
                strokeDasharray: dash,
                fillOpacity: opacity,
              }}
            />
            <div className="scroll-lock"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// {ready ? (

// ) : null}
