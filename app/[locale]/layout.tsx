import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import '../animations.css'
import '../globals.css'
import { ResponsiveHelper } from '@/components/ResponsiveHelper'
import { Barlow_Semi_Condensed, Vazirmatn } from 'next/font/google'
import { cn } from '@/utils/tailwind'
import { PagePropsWithParams } from '@/utils/next'
import { I18nProviderClient } from '@/locales/client'
import Navbar from '@/components/layout/Navbar'
import { getDirection } from '@/locales/server'

export const metadata: Metadata = {
  title: 'Asarsazan',
}

const sans = Barlow_Semi_Condensed({
  variable: '--google-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['Arial', 'Thoma', 'sans-serif'],
})

const sansFa = Vazirmatn({
  variable: '--google-sans',
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['Arial', 'Thoma', 'sans-serif'],
})

export default async function RootLayout({
  children,
  params,
}: Readonly<PropsWithChildren<PagePropsWithParams<'locale'>>>) {
  const { locale } = await params
  const dir = await getDirection()
  return (
    <html lang={locale} dir={dir}>
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body
        data-nextjs-scroll-focus-boundary
        translate="no"
        className={cn(
          locale === 'fa' ? sansFa.variable : sans.variable,
          'notranslate min-h-screen w-screen overflow-x-hidden antialiased',
          { 'env-prod': process.env.NODE_ENV === 'production' }
        )}
      >
        <header className="contents">
          <Navbar skip />
          <ResponsiveHelper />
        </header>
        <I18nProviderClient locale={locale}>
          <main className="contents">{children}</main>
        </I18nProviderClient>
        <footer className="contents"></footer>
      </body>
    </html>
  )
}
