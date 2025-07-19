import { Barlow_Semi_Condensed } from 'next/font/google'
import localFont from 'next/font/local'

export const enSans = Barlow_Semi_Condensed({
  variable: '--sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['Arial', 'Thoma', 'sans-serif'],
})

export const faSans = localFont({
  variable: '--sans',
  preload: true,
  display: 'swap',
  fallback: ['Arial', 'Thoma', 'sans-serif'],
  src: [
    {
      path: '../../public/fonts/dana/thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana/extralight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana/light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana/medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana/bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana/semibold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana/extrabold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/dana/black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const faSerif = localFont({
  variable: '--serif',
  src: [
    {
      path: '../../public/fonts/yekan/yekan-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/yekan/yekan-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/yekan/yekan-bold.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
})
