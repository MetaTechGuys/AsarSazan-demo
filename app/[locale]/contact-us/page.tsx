import { getScopedI18n } from '@/locales/server'
import ContactForm from './ContactForm'

export default async function Page() {
  const t = await getScopedI18n('contactus')
  return (
    <>
      <section className="cus-hv-center h-screen w-screen gap-6 bg-white">
        <div className="container mx-auto w-full px-4 sm:px-8">
          <ContactForm />
        </div>
      </section>
      <section className="cus-hv-center w-screen gap-6">
        <div className="container mx-auto flex gap-4 p-12 max-lg:flex-col">
          <div className="prose-mdx flex w-full flex-1 flex-col gap-10">
            <div>
              <h2 className="mt-0! text-5xl">{t('title')}</h2>
              <div className="lead">{t('lead')}</div>
            </div>
            <div>
              <h3>{t('labels.address')}</h3>
              <p>{t('address1')}</p>
              <p>{t('address2')}</p>
            </div>
            <div>
              <h3>{t('labels.phone')}</h3>
              <p>{t('phone')}</p>
            </div>
            <div>
              <h3>{t('labels.email')}</h3>
              <p>{t('email')}</p>
            </div>
          </div>
          <iframe
            className="min-h-100 min-w-100 flex-1"
            loading="lazy"
            src="https://maps.google.com/maps?q=Hormozgan%20Province%2C%20Kish%2C%20Morvarid%20Blvd%2C%20G2V5%2BHFH%2C%20Iran&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
            title="Hormozgan Province, Kish, Morvarid Blvd, G2V5+HFH, Iran"
            aria-label="Hormozgan Province, Kish, Morvarid Blvd, G2V5+HFH, Iran"
          />
        </div>
      </section>
    </>
  )
}
