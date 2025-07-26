'use client'
import { MEDIA } from '@/data/media'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { cn } from '@/utils/tailwind'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'
import { ComponentProps } from 'react'
import Icon from './icon/Icon'

export function LocaleSwitch({ className }: ComponentProps<'div'>) {
  const lang = useCurrentLocale()
  const changeLocale = useChangeLocale()
  return (
    <div className={cn('@container block h-6 w-20', className)}>
      <Menu>
        <MenuButton className="flex w-24 cursor-pointer gap-1 focus:outline-0">
          <Image
            className="size-6"
            key={lang === 'fa' ? 'fa-IR' : 'en-UK'}
            alt={lang === 'fa' ? 'fa-IR' : 'en-UK'}
            src={lang === 'fa' ? MEDIA.locale.faIRflag : MEDIA.locale.enUKflag}
          />
          <span className="max-xs:hidden">
            {lang === 'fa' ? 'فارسی' : 'English'}
          </span>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="bg-jungle/60 glass border-jungle/45 z-10 w-52 origin-top rounded-xs border p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <button
              onClick={() => {
                changeLocale('en')
              }}
              inert={lang === 'en'}
              className="group flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            >
              English
              {lang === 'en' ? <Icon name="check" className="size-5" /> : null}
              <Image
                className="ms-auto size-4"
                alt=""
                src={MEDIA.locale.enUKflag}
              />
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {
                changeLocale('fa')
              }}
              inert={lang === 'fa'}
              className="group flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
            >
              فارسی
              {lang === 'fa' ? <Icon name="check" className="size-5" /> : null}
              <Image
                className="ms-auto size-4"
                alt=""
                src={MEDIA.locale.faIRflag}
              />
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
