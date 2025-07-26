'use client'
import { useScopedI18n } from '@/locales/client'
import { useDirection } from '@/utils/locale'
import { motion } from 'motion/react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function MegaMenu() {
  const t = useScopedI18n('navigations')
  return (
    <motion.menu
      key="mega-menu"
      className="glass bg-background/10 xs:ps-16 absolute start-0 top-0 z-0 flex h-screen max-w-96 min-w-3/4 flex-col justify-center gap-8 ps-8 text-3xl font-extralight uppercase sm:min-w-1/2 md:ps-32"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, ease: 'easeOut' },
      }}
      exit={{ opacity: 0 }}
    >
      <Link href="/" className="contents">
        <MenuItem idxf={0.0} className="cursor-pointer">
          {t('home.label')}
        </MenuItem>
      </Link>
      <Link href="/#projects" className="contents">
        <MenuItem idxf={0.2}>{t('projects.label')}</MenuItem>
      </Link>
      <Link href="/about-us" className="contents">
        <MenuItem idxf={0.4}>{t('about.label')}</MenuItem>
      </Link>
      <Link href="/contact-us" className="contents">
        <MenuItem idxf={0.6}>{t('contacts.label')}</MenuItem>
      </Link>
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
  const dir = useDirection()
  const f = dir === 'ltr' ? -1 : 1
  return (
    <motion.li
      className={className}
      initial={{ x: f * 300, opacity: 0 }}
      exit={{
        x: f * 300,
        opacity: 0,
        transition: { duration: 0.8, delay: 1.2 * (1 - idxf), ease: 'easeOut' },
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: 1.2 * idxf, ease: 'easeOut' },
      }}
    >
      {children}
    </motion.li>
  )
}
