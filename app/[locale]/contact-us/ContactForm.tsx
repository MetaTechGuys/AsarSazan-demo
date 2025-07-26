'use client'
import { useCurrentLocale, useScopedI18n } from '@/locales/client'
import { AnimatePresence, motion } from 'motion/react'
import { PropsWithChildren, useActionState, useMemo } from 'react'
import { submitContactform } from '../../actions'
import 'react-phone-number-input/style.css'
import PhoneInputWithCountrySelect from 'react-phone-number-input'

export default function ContactForm() {
  const lng = useCurrentLocale()
  const t = useScopedI18n('contactus')
  const [state, formAction, pending] = useActionState(
    submitContactform.bind(null, lng),
    {}
  )
  const rawFormData = 'rawFormData' in state ? state.rawFormData : undefined

  const errorsMap = useMemo(() => {
    const errs = ('error' in state ? state.error : []).map((e) => ({
      ...e,
      key: e.path.join('.'),
    }))
    return {
      name: errs?.find((e) => e.key === 'name'),
      surname: errs?.find((e) => e.key === 'surname'),
      email: errs?.find((e) => e.key === 'email'),
      countryCode: errs?.find((e) => e.key === 'countryCode'),
      phone: errs?.find((e) => e.key === 'phone'),
      subscribe: errs?.find((e) => e.key === 'subscribe'),
      acceptTerms: errs?.find((e) => e.key === 'acceptTerms'),
      selectCallback: errs?.find((e) => e.key === 'selectCallback'),
    }
  }, [state])

  return (
    <form
      className="relative grid-cols-2 gap-x-8 gap-y-2 font-serif select-none sm:grid lg:px-8"
      action={formAction}
      inert={pending}
    >
      <h2 className="col-span-2 text-center text-xl md:text-2xl">
        {t('form.title')}
      </h2>
      <div>
        <input
          name="name"
          disabled={pending}
          className="w-full border-b px-px py-2 focus:outline-0"
          placeholder={t('form.fields.name')}
          defaultValue={rawFormData?.name}
        />
        <FormError>{errorsMap.name?.message}</FormError>
      </div>
      <div>
        <input
          name="surname"
          disabled={pending}
          className="w-full border-b px-px py-2 focus:outline-0"
          placeholder={t('form.fields.surname')}
          defaultValue={rawFormData?.surname}
        />
        <FormError>{errorsMap.surname?.message}</FormError>
      </div>
      <div className="col-span-2">
        <input
          name="email"
          type="email"
          disabled={pending}
          required
          className="w-full border-b px-px py-2 focus:outline-0 focus:[direction:ltr]"
          placeholder={t('form.fields.email')}
          defaultValue={rawFormData?.email}
        />
        <FormError>{errorsMap.email?.message}</FormError>
      </div>
      <div className="col-span-2">
        <div
          className="border-b [&_input]:px-px [&_input]:py-2 [&_input]:leading-1 [&_input]:outline-0"
          dir="ltr"
        >
          <input
            type="hidden"
            name="phone"
            disabled={pending}
            required
            className="w-full border-b px-px py-2 focus:outline-0"
            placeholder={t('form.fields.phone')}
            defaultValue={rawFormData?.phone}
          />
          <PhoneInputWithCountrySelect
            defaultCountry={lng === 'fa' ? 'IR' : 'US'}
            international
            focusInputOnCountrySelection
            onChange={console.log}
            numberInputProps={{
              placeholder: t('form.fields.phone'),
            }}
          />
        </div>
        <div className="flex-1">
          <FormError>{errorsMap.phone?.message}</FormError>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <input
            name="subscribe"
            disabled={pending}
            id="subscribe"
            type="checkbox"
            className="size-6"
            defaultChecked={!rawFormData || rawFormData.subscribe === 'on'}
          />
          <label htmlFor="subscribe" className="flex-1 text-sm">
            {t('form.fields.subscribe')}
          </label>
        </div>
        <FormError>{errorsMap.subscribe?.message}</FormError>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <input
            name="acceptTerms"
            disabled={pending}
            id="acceptTerms"
            type="checkbox"
            className="size-6"
            defaultChecked={!rawFormData || rawFormData.acceptTerms === 'on'}
          />
          <label htmlFor="acceptTerms" className="flex-1 text-sm">
            {t('form.fields.acceptTerms')}
          </label>
        </div>
        <FormError>{errorsMap.acceptTerms?.message}</FormError>
      </div>

      <div className="col-span-2 mt-2 text-start">
        {t('form.fields.selectCallback')}
      </div>
      <div className="mt-2 flex items-center gap-4">
        <input
          id="callBackViaPhone"
          disabled={pending}
          type="radio"
          className="size-6"
          name="selectCallback"
          defaultValue="callBackViaPhone"
          defaultChecked={
            !rawFormData || rawFormData.selectCallback === 'callBackViaPhone'
          }
        />
        <label htmlFor="callBackViaPhone" className="flex-1 text-sm">
          {t('form.fields.callBackViaPhone')}
        </label>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <input
          id="callBackViaEmail"
          disabled={pending}
          type="radio"
          className="size-6"
          name="selectCallback"
          defaultValue="callBackViaEmail"
          defaultChecked={rawFormData?.selectCallback === 'callBackViaEmail'}
        />
        <label htmlFor="callBackViaEmail" className="flex-1 text-sm">
          {t('form.fields.callBackViaEmail')}
        </label>
      </div>
      <FormError>{errorsMap.selectCallback?.message}</FormError>
      <button
        className="bg-tussock mt-4 rounded-sm px-16 py-4 leading-8 font-bold max-sm:mx-auto sm:max-w-50"
        disabled={pending}
      >
        {t('form.submit')}
      </button>
      <div>
        {!pending && 'status' in state ? (
          <AnimatePresence>
            {state.status === 'form.successMsg' ? (
              <motion.div
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(5px)' }}
                className="glass cus-hv-center text-jungle-600 bg-curious-300/30 absolute inset-0 rounded-2xl p-8 text-4xl"
              >
                {t('form.successMsg')}
              </motion.div>
            ) : null}
          </AnimatePresence>
        ) : null}
      </div>
    </form>
  )
}

function FormError({ children }: PropsWithChildren) {
  return (
    <div className="col-span-2 py-px font-sans text-xs text-[#ff000077]">
      {children ?? <span>&nbsp;</span>}
    </div>
  )
}
