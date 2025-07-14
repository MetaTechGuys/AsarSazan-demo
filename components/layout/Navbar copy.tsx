'use client'
import navImg from '@/public/pexels-tomfisk-32919890.jpg'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { ComponentProps, useState } from 'react'
import Icon from '../icon/Icon'
import MegaMenu from './MegaMenu'
import BrandLogo from './BrandLogo'

export default function Navbar(props: ComponentProps<'nav'>) {
  const [show, setShow] = useState(false)
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

      <div className="fixed z-10 grid h-screen w-screen grid-cols-3 p-1 px-8">
        <button
          className="cursor-pointer"
          onClick={() => {
            setShow((o) => !o)
          }}
        >
          <Icon name="align-justify" className="text-foreground size-8" />
        </button>
        <div className="cus-hv-center">
          <BrandLogo className="h-14" />
        </div>
      </div>
    </nav>
  )
}
