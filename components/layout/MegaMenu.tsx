'use client'
import { motion } from 'motion/react'
import { PropsWithChildren } from 'react'

export default function MegaMenu() {
  return (
    <motion.menu
      key="mega-menu"
      className="glass bg-tussock/50 absolute start-0 top-0 z-0 flex h-screen max-w-96 min-w-1/2 flex-col justify-center gap-8 ps-32 text-3xl font-extralight uppercase"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, ease: 'easeOut' },
      }}
      exit={{ opacity: 0 }}
    >
      <MenuItem idxf={0.0} className="cursor-pointer">
        Some Item 1
      </MenuItem>
      <MenuItem idxf={0.2}>Some Item 2</MenuItem>
      <MenuItem idxf={0.4}>Some Item 3</MenuItem>
      <MenuItem idxf={0.6}>Some Item 4</MenuItem>
      <MenuItem idxf={0.8}>Some Item 5</MenuItem>
    </motion.menu>
  )
}
interface MenuItemProps {
  idxf?: number
  className?: string
}

function MenuItem({
  idxf = 0,
  className,
  children,
}: PropsWithChildren<MenuItemProps>) {
  return (
    <motion.li
      className={className}
      initial={{ x: -100, opacity: 0 }}
      exit={{
        x: -100,
        opacity: 0,
        transition: { delay: 0.6 * (1 - idxf), ease: 'easeOut' },
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { delay: 0.6 * idxf, ease: 'easeOut' },
      }}
    >
      {children}
    </motion.li>
  )
}
