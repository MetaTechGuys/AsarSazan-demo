import Icon from '@/components/icon/Icon'
import { getScopedI18n } from '@/locales/server'

export default async function CopyBar() {
  const t = await getScopedI18n('footer')
  return (
    <div className="container mx-auto grid place-items-center gap-12 px-8 py-4 text-xs max-lg:grid-rows-3 lg:grid-cols-[auto_1fr_auto]">
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

      <div className="max-xs:flex-col flex gap-6 justify-self-start">
        <a href="#" target="_blank">
          {t('links.services')}
        </a>
        <a href="#" target="_blank">
          {t('links.blog')}
        </a>
        <a href="#" target="_blank">
          {t('links.partners')}
        </a>
      </div>

      <div className="lg:-order-1">{t('copywrite')}</div>
    </div>
  )
}
