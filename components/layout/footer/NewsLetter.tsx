'use client'
import { submitNewslatterform } from '@/app/actions'
import { useCurrentLocale, useScopedI18n } from '@/locales/client'
import { PropsWithChildren, useActionState, useMemo } from 'react'

export default function NewsLetter() {
  const t = useScopedI18n('footer.newsletter')
  const lng = useCurrentLocale()
  const [state, formAction, pending] = useActionState(
    submitNewslatterform.bind(null, lng),
    {}
  )
  const rawFormData = 'rawFormData' in state ? state.rawFormData : undefined

  const errorsMap = useMemo(() => {
    const errs = ('error' in state ? state.error : []).map((e) => ({
      ...e,
      key: e.path.join('.'),
    }))
    return {
      email: errs?.find((e) => e.key === 'email'),
    }
  }, [state])
  return (
    <form className="max-w-full" action={formAction} inert={pending}>
      <label
        htmlFor="newsletter-email"
        className="mb-2 block font-extralight opacity-50"
      >
        {t('label')}
      </label>
      <div className="mb-4 flex flex-wrap gap-2 max-sm:flex-col">
        <div className="max-sm:w-full">
          <input
            name="email"
            type="email"
            id="newsletter-email"
            className="w-full border-b py-2 not-empty:[direction:ltr] focus:outline-0 focus:[direction:ltr]"
            placeholder={t('placeholder')}
            defaultValue={rawFormData?.email}
          />
          <FormError>{errorsMap.email?.message}</FormError>
        </div>
        <button className="cursor-pointer p-2 px-8 text-base max-sm:flex-1">
          {t('cta')}
        </button>
      </div>

      {!pending && 'status' in state && state.status === 'successMsg' ? (
        <p className="text-jungle-200 max-w-2xs text-xs">{t('successMsg')}</p>
      ) : (
        <p className="max-w-2xs text-xs">{t('description')}</p>
      )}
    </form>
  )
}

function FormError({ children }: PropsWithChildren) {
  return (
    <div className="absolute col-span-2 py-px font-sans text-xs text-[#ff000077]">
      {children ?? <span>&nbsp;</span>}
    </div>
  )
}
