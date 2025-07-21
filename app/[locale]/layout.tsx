import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import '../animations.css'
import '../globals.css'
import { ResponsiveHelper } from '@/components/ResponsiveHelper'
import { cn } from '@/utils/tailwind'
import { PagePropsWithParams } from '@/utils/next'
import { I18nProviderClient } from '@/locales/client'
import Navbar from '@/components/layout/Navbar'
import { getDirection } from '@/locales/server'
import { ThemeHelper } from '@/components/ThemeHelper'
import { enSans, faSans, faSerif } from './fonts'
import Footer from '@/components/layout/footer'
import { isDev } from '@/utils/env'

export const metadata: Metadata = {
  title: 'Asarsazan',
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
    },
  },
}

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
          locale === 'fa' ? faSans.variable : enSans.variable,
          locale === 'fa' ? faSerif.variable : enSans.variable,
          'notranslate min-h-screen w-screen overflow-x-hidden antialiased',
          { 'env-prod': process.env.NODE_ENV === 'production' }
        )}
      >
        <I18nProviderClient locale={locale}>
          <ThemeHelper />
          <header>
            <Navbar skip={isDev} />
            <ResponsiveHelper />
          </header>
          <main className="contents">{children}</main>
          <footer>
            <Footer />
          </footer>
        </I18nProviderClient>
      </body>
    </html>
  )
}
