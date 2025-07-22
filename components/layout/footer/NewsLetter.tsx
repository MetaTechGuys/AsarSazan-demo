import { getScopedI18n } from '@/locales/server'

export default async function NewsLetter() {
  const t = await getScopedI18n('footer.newsletter')
  return (
    <div className="max-w-full">
      <label
        htmlFor="newsletter-email"
        className="mb-4 block font-extralight opacity-50"
      >
        {t('label')}
      </label>
      <div className="mb-4 flex flex-wrap gap-2">
        <input
          type="email"
          id="newsletter-email"
          className="border-b py-2 not-empty:[direction:ltr] focus:outline-0 focus:[direction:ltr] max-sm:flex-1"
          placeholder={t('placeholder')}
        />
        <button className="cursor-pointer p-2 px-8 text-base max-sm:flex-1">
          {t('cta')}
        </button>
      </div>
      <p className="max-w-2xs text-xs">{t('description')}</p>
    </div>
  )
}
