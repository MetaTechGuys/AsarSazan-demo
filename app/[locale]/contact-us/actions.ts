'use server'
import i18next from 'i18next'
import { z, ZodError } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
// Import your language translation files
import erEn from 'zod-i18n-map/locales/en/zod.json'
import erFa from 'zod-i18n-map/locales/fa/zod.json'

z.setErrorMap(zodI18nMap)

const schema = z.object({
  name: z.string({}).min(3),
  surname: z.string({}).min(3),
  email: z.string({}).email(),
  countryCode: z.string({}),
  phone: z.string({}),
  subscribe: z.string({}),
  acceptTerms: z.string({}),
  selectCallback: z.string({}),
})

type Payload = z.infer<typeof schema>

type InitialFormState = object

interface SuccessFormState {
  status: 'form.successMsg'
}

interface ErrorFormState {
  status: 'form.errorMsg1' | 'form.errorMsg2'
  error: ZodError<Payload>['issues']
  rawFormData: Partial<Payload>
}

type FormState = SuccessFormState | ErrorFormState | InitialFormState

export async function submitform(
  lng: 'fa' | 'en',
  state: FormState,
  formData: FormData
): Promise<FormState> {
  console.log({ state, formData })

  i18next.init({
    lng: lng ?? 'fa',
    resources: {
      en: { zod: erEn },
      fa: { zod: erFa },
    },
  })

  const rawFormData = {
    name: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    countryCode: formData.get('countryCode'),
    phone: formData.get('phone'),
    subscribe: formData.get('subscribe'),
    acceptTerms: formData.get('acceptTerms'),
    selectCallback: formData.get('selectCallback'),
  }
  i18next.setDefaultNamespace('en')
  const validatedFields = schema.safeParse(rawFormData, {})

  if (!validatedFields.success) {
    // return {
    //   errors: validatedFields.error.flatten().fieldErrors,
    // }
    return {
      status: 'form.errorMsg1',
      error: validatedFields.error.issues,
      rawFormData,
    }
  }
  return {
    status: 'form.successMsg',
  }
}
