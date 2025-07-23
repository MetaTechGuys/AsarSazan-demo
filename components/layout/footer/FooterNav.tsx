import { getScopedI18n } from '@/locales/server'
import Link from 'next/link'

export default async function FooterNav() {
  const [tFoot, tNav, tContact] = await Promise.all([
    getScopedI18n('footer'),
    getScopedI18n('navigations'),
    getScopedI18n('contactus'),
  ])
  return (
    <nav className="flex flex-1 justify-between gap-4 max-sm:flex-col">
      <div className="flex-1">
        <div className="mb-4 font-extralight opacity-50">
          {tFoot('col1label')}
        </div>
        <Link className="mb-2 block" href="/">
          {tNav('home.label')}
        </Link>
        <Link className="mb-2 block" href="/about-us">
          {tNav('about.label')}
        </Link>
        <Link className="mb-2 block" href="/contact-us">
          {tNav('contacts.label')}
        </Link>
      </div>
      <div className="pointer-events-none flex-2">
        <div className="mb-4 font-extralight opacity-50">
          {tFoot('col2label')}
        </div>
        <Link className="mb-3 block text-sm tracking-wide" href="/contact-us">
          {tContact('phone')}
        </Link>
        <Link className="mb-3 block text-sm tracking-wide" href="/contact-us">
          {tContact('address1')}
        </Link>
        <Link className="mb-3 block text-sm tracking-wide" href="/contact-us">
          {tContact('address2')}
        </Link>
      </div>
    </nav>
  )
}
