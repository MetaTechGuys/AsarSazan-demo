'use server'
import i18next from 'i18next'
import { z, ZodError } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
// Import your language translation files
import erEn from 'zod-i18n-map/locales/en/zod.json'
import erFa from 'zod-i18n-map/locales/fa/zod.json'

z.setErrorMap(zodI18nMap)

const schema = z.object({
  email: z.string({}).email(),
})

type Payload = z.infer<typeof schema>

type InitialFormState = object

interface SuccessFormState {
  status: 'successMsg'
}

interface ErrorFormState {
  status: 'errorMsg1' | 'errorMsg2'
  error: ZodError<Payload>['issues']
  rawFormData: Partial<Payload>
}

type FormState = SuccessFormState | ErrorFormState | InitialFormState

export async function submitNewslatterform(
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
    email: formData.get('email'),
  }
  i18next.setDefaultNamespace('en')
  const validatedFields = schema.safeParse(rawFormData, {})

  if (!validatedFields.success) {
    // return {
    //   errors: validatedFields.error.flatten().fieldErrors,
    // }
    return {
      status: 'errorMsg1',
      error: validatedFields.error.issues,
      rawFormData,
    }
  }
  return {
    status: 'successMsg',
  }
}
