import { StaticImageData } from 'next/image'
import { MEDIA } from './media'
import { v4 as uuidv4 } from 'uuid'
import { getScopedI18n } from '@/locales/server'

export interface SlideData {
  id: string
  img: StaticImageData
  title: string
  lead: string
}

export async function getSlides(): Promise<Array<SlideData>> {
  const t = await getScopedI18n('slides')
  return [
    {
      id: uuidv4(),
      img: MEDIA.slides.slide1,
      title: t('slide1.title'),
      lead: t('slide1.lead'),
    },
    {
      id: uuidv4(),
      img: MEDIA.slides.slide2,
      title: t('slide2.title'),
      lead: t('slide2.lead'),
    },
    {
      id: uuidv4(),
      img: MEDIA.slides.slide3,
      title: t('slide3.title'),
      lead: t('slide3.lead'),
    },
  ]
}
