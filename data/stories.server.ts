'use server'
import { StaticImageData } from 'next/image'
import { MEDIA } from './media'
import { v4 as uuidv4 } from 'uuid'
import { getScopedI18n } from '@/locales/server'

type StoryAnimate = 'slide-start' | 'slide-end' | 'fade'

export interface StoryData {
  id: string
  img: StaticImageData
  title: string
  lead: string
  animate?: StoryAnimate
  wrapClassName?: string
  className?: string
}

export async function getStories(): Promise<Array<StoryData>> {
  const t = await getScopedI18n('stories')
  return [
    {
      id: uuidv4(),
      img: MEDIA.stories.story1,
      title: t('story1.title'),
      lead: t('story1.lead'),
      animate: 'slide-end',
      wrapClassName: 'justify-end items-start',
      className: 'p-8 bg-background/30',
    },
    {
      id: uuidv4(),
      img: MEDIA.stories.story2,
      title: t('story2.title'),
      lead: t('story2.lead'),
      animate: 'slide-end',
      wrapClassName: 'justify-end items-center',
      className: 'p-8 bg-background/30',
    },
    {
      id: uuidv4(),
      img: MEDIA.stories.story3,
      title: t('story3.title'),
      lead: t('story3.lead'),
      animate: 'slide-start',
      wrapClassName: 'justify-end items-end',
      className: 'p-8 bg-background/30',
    },
    {
      id: uuidv4(),
      img: MEDIA.stories.story4,
      title: t('story4.title'),
      lead: t('story4.lead'),
      animate: 'fade',
      wrapClassName: 'justify-center items-center',
      className: 'p-8 bg-background/30',
    },
  ]
}
