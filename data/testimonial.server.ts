import { getScopedI18n } from '@/locales/server'
import { StaticImageData } from 'next/image'
import { MEDIA } from './media'

export interface TestimonialData {
  id: string
  img: StaticImageData
  name: string
  message: string
}

export async function getTestimonials(): Promise<Array<TestimonialData>> {
  const t = await getScopedI18n('testimonial')
  return [
    {
      id: 'marashi',
      img: MEDIA.testimonials.marashi,
      name: t('marashi.name'),
      message: t('marashi.message'),
    },
    {
      id: 'mohebi',
      img: MEDIA.testimonials.mohebi,
      name: t('mohebi.name'),
      message: t('mohebi.message'),
    },
    {
      id: 'rajabi',
      img: MEDIA.testimonials.rajabi,
      name: t('rajabi.name'),
      message: t('rajabi.message'),
    },
    {
      id: 'zahedi',
      img: MEDIA.testimonials.zahedi,
      name: t('zahedi.name'),
      message: t('zahedi.message'),
    },
  ]
}
