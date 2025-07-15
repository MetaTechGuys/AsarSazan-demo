'use server'
import { StaticImageData } from 'next/image'
import { MEDIA } from './media'
import { v4 as uuidv4 } from 'uuid'
import { getScopedI18n } from '@/locales/server'

type StoryAnimate = 'slide-right' | 'fade'

export interface StoryData {
  id: string
  img: StaticImageData
  title: string
  lead: string
  animate?: StoryAnimate
}

export async function getStories(): Promise<Array<StoryData>> {
  const t = await getScopedI18n('stories')
  return [
    {
      id: uuidv4(),
      img: MEDIA.stories.story1,
      title: t('story1.title'),
      lead: t('story1.lead'),
      animate: 'fade',
    },
    {
      id: uuidv4(),
      img: MEDIA.stories.story2,
      title: t('story2.title'),
      lead: t('story2.lead'),
      animate: 'slide-right',
    },
  ]
}
