import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import '../animations.css'
import '../globals.css'
import { ResponsiveHelper } from '@/components/ResponsiveHelper'
import { Barlow_Semi_Condensed } from 'next/font/google'
import { cn } from '@/utils/tailwind'
import { PagePropsWithParams } from '@/utils/next'
import { I18nProviderClient } from '@/locales/client'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Asarsazan',
}

const sans = Barlow_Semi_Condensed({
  variable: '--google-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['Arial', 'Thoma', 'sans-serif'],
})

export default async function RootLayout({
  children,
  params,
}: Readonly<PropsWithChildren<PagePropsWithParams<'locale'>>>) {
  const { locale } = await params
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
          'notranslate min-h-screen w-screen overflow-x-hidden antialiased',
          { 'env-prod': process.env.NODE_ENV === 'production' }
        )}
      >
        <header>
          <Navbar />
          <ResponsiveHelper />
        </header>
        <I18nProviderClient locale={locale}>
          <main>{children}</main>
        </I18nProviderClient>
        <footer></footer>
      </body>
    </html>
  )
}
