import { getI18n } from '@/locales/server'

export default async function Page() {
  const t = await getI18n()
  return <div className="p-8">mock {t('hello')}</div>
}
