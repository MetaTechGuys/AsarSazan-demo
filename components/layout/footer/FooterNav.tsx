import { getScopedI18n } from '@/locales/server'
import Link from 'next/link'

export default async function FooterNav() {
  const t = await getScopedI18n('footer.columns')
  return (
    <nav className="flex flex-1 justify-between gap-4 max-sm:flex-col">
      <div className="flex-1">
        <div className="mb-4 font-extralight opacity-50">{t('col1.label')}</div>
        <Link className="mb-2 block" href="/">
          {t('col1.items.home')}
        </Link>
        <Link className="mb-2 block" href="/about-us">
          {t('col1.items.aboutus')}
        </Link>
        <Link className="mb-2 block" href="/contact-us">
          {t('col1.items.contactus')}
        </Link>
      </div>
      <div className="pointer-events-none flex-2">
        <div className="mb-4 font-extralight opacity-50">{t('col2.label')}</div>
        <Link className="mb-3 block text-sm tracking-wide" href="/contact-us">
          {t('col2.items.phone')}
        </Link>
        <Link className="mb-3 block text-sm tracking-wide" href="/contact-us">
          {t('col2.items.line1')}
        </Link>
        <Link className="mb-3 block text-sm tracking-wide" href="/contact-us">
          {t('col2.items.line2')}
        </Link>
      </div>
    </nav>
  )
}
