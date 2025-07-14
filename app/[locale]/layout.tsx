import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './animations.css'
import './globals.css'
import { ResponsiveHelper } from '@/components/ResponsiveHelper'
import { Orbitron, Saira } from 'next/font/google'
import { cn } from '@/utils/tailwind'
import { PagePropsWithParams } from '@/utils/next'
import { I18nProviderClient } from '@/locales/client'

export const metadata: Metadata = {
  title: 'Asarsazan',
}

const sans = Saira({
  variable: '--google-sans',
  subsets: ['latin'],
  weight: 'variable',
  fallback: ['Arial', 'Thoma', 'sans-serif'],
})

const serif = Orbitron({
  variable: '--google-serif',
  weight: '900',
  subsets: ['latin'],
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

export default async function RootLayout({
  children,
  params,
}: Readonly<PropsWithChildren<PagePropsWithParams<'locale'>>>) {
  // const { local } = await params
  const { locale } = await params
  console.log({ locale })

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body
        data-nextjs-scroll-focus-boundary
        translate="no"
        className={cn(
          sans.variable,
          serif.variable,
          'notranslate min-h-screen w-screen overflow-x-hidden antialiased',
          { 'env-prod': process.env.NODE_ENV === 'production' }
        )}
      >
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        <ResponsiveHelper />
      </body>
    </html>
  )
}
