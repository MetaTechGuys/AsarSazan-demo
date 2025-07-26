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
import { LocaleSwitch } from '../LocalSwitch'
import Link from 'next/link'
import { useCurrentLocale } from '@/locales/client'
import { useMotionLimit } from '@/utils/scroll'

interface NavbarProps extends ComponentProps<'nav'> {
  skip?: boolean
}

export default function Navbar({ skip, ...props }: NavbarProps) {
  const lang = useCurrentLocale()
  const [show, setShow] = useState(false)
  const [ready, setReady] = useState(!!skip)

  const { scrollY } = useScroll({ axis: 'y' })
  const mini = useMotionLimit(scrollY, 0)

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
    <nav {...props} className="fixed start-0 top-0 z-10 w-screen text-white">
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
              <Image
                src={navImg}
                className="size-full object-cover dark:brightness-90"
                alt=""
              />
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
            className="glass bg-jungle/90 grid h-12 w-screen grid-cols-[auto_1fr_auto] px-4 py-1 sm:h-16 sm:px-8"
            initial={{ y: -64 }}
            animate={{ y: 0 }}
            exit={{ y: -64 }}
            transition={{ ease: 'linear', duration: 0.7 }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex gap-4"
            >
              <button
                className="cursor-pointer"
                onClick={() => {
                  setShow((o) => !o)
                }}
              >
                <Icon name="align-justify" className="size-8 fill-white" />
              </button>
              <LocaleSwitch className="self-center" />
            </motion.div>
            <Link
              href={lang === 'en' ? '/en' : '/'}
              className="contents"
              prefetch
            >
              <div className="cus-hv-center ms-auto h-full">
                <BrandLogo
                  short={mini}
                  mini={mini}
                  className="h-10 fill-white sm:h-14"
                />
              </div>
            </Link>
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
