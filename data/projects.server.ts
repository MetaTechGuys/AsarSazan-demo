import { getScopedI18n } from '@/locales/server'
import { StaticImageData } from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { MEDIA } from './media'

export interface ProjectData {
  id: string
  slug: string
  img: StaticImageData
  video?: StaticImageData
  gallery: StaticImageData[]
  title: string
  specs: string
  place: string
  rnd: number
}

export async function getProjects(): Promise<Array<ProjectData>> {
  const t = await getScopedI18n('projects')
  return [
    {
      id: uuidv4(),
      slug: 'zarafshan',
      img: MEDIA.projects.project6,
      gallery: Object.values(MEDIA.zarafshanProject),
      title: t('zarafshan.title'),
      specs: t('zarafshan.specs'),
      place: t('zarafshan.place'),
      rnd: 5.0,
    },
    {
      id: uuidv4(),
      slug: 'eksir',
      img: MEDIA.projects.project1,
      gallery: Object.values(MEDIA.kishProject),
      title: t('eksir.title'),
      specs: t('eksir.specs'),
      place: t('eksir.place'),
      rnd: 2.5,
    },
    {
      id: uuidv4(),
      slug: 'sina',
      img: MEDIA.projects.project2,
      gallery: Object.values(MEDIA.sinaProject),
      title: t('sina.title'),
      specs: t('sina.specs'),
      place: t('sina.place'),
      rnd: 0,
    },
    {
      id: uuidv4(),
      slug: 'vanush',
      img: MEDIA.projects.project3,
      gallery: Object.values(MEDIA.venushProject),
      title: t('vanush.title'),
      specs: t('vanush.specs'),
      place: t('vanush.place'),
      rnd: 3.5,
    },
    {
      id: uuidv4(),
      slug: 'savadkoh',
      img: MEDIA.projects.project4,
      gallery: Object.values(MEDIA.savadkoohProject),
      video: MEDIA.savadkoohVideo,
      title: t('savadkoh.title'),
      specs: t('savadkoh.specs'),
      place: t('savadkoh.place'),
      rnd: 4.0,
    },
    {
      id: uuidv4(),
      slug: 'sadaf',
      img: MEDIA.projects.project5,
      gallery: Object.values(MEDIA.sadafProject),
      title: t('sadaf.title'),
      specs: t('sadaf.specs'),
      place: t('sadaf.place'),
      rnd: 1.0,
    },
  ]
}
