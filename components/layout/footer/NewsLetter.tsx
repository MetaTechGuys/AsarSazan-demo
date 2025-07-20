import { getScopedI18n } from '@/locales/server'

export default async function NewsLetter() {
  const t = await getScopedI18n('footer.newsletter')
  return (
    <div className="w-min">
      <label htmlFor="" className="mb-4 block font-extralight opacity-50">
        {t('label')}
      </label>
      <div className="mb-4 flex gap-2">
        <input
          type="email"
          className="border-b py-2 not-empty:[direction:ltr] focus:outline-0 focus:[direction:ltr]"
          placeholder={t('placeholder')}
        />
        <button className="cursor-pointer p-2 px-8 text-base">
          {t('cta')}
        </button>
      </div>
      <p className="text-xs">{t('description')}</p>
    </div>
  )
}
