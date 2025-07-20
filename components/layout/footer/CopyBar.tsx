import Icon from '@/components/icon/Icon'
import { getScopedI18n } from '@/locales/server'

export default async function CopyBar() {
  const tFoot = await getScopedI18n('footer')
  // const tNav = await getScopedI18n('navigations')
  return (
    <div className="container mx-auto grid place-items-center gap-12 px-8 py-4 text-xs max-lg:grid-rows-2 lg:grid-cols-[auto_1fr_auto]">
      <div className="flex gap-6 lg:order-1">
        <a href="#" target="_blank" className="contents">
          <Icon name="facebook" className="size-6" />
        </a>
        <a href="#" target="_blank" className="contents">
          <Icon name="instagram" className="size-6" />
        </a>
        <a href="#" target="_blank" className="contents">
          <Icon name="logo-whatsapp" className="size-6" />
        </a>
        <a href="#" target="_blank" className="contents">
          <Icon name="twitter-x" className="size-6" />
        </a>
      </div>
      <span className="max-lg:hidden"></span>

      {/* <div className="max-xs:flex-col flex gap-6 justify-self-start">
        <Link href="/services">{tNav('services.label')}</Link>
        <Link href="/blogs">{tNav('blogs.label')}</Link>
        <Link href="/partners">{tNav('partners.label')}</Link>
      </div> */}

      <div className="lg:-order-1">{tFoot('copywrite')}</div>
    </div>
  )
}
