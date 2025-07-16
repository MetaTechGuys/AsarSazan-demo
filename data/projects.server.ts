import { getScopedI18n } from '@/locales/server'
import { StaticImageData } from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { MEDIA } from './media'

export interface ProjectData {
  id: string
  slug: string
  img: StaticImageData
  title: string
  rnd: number
}

export async function getProjects(): Promise<Array<ProjectData>> {
  const t = await getScopedI18n('projects')
  return [
    {
      id: uuidv4(),
      slug: 'project1',
      img: MEDIA.projects.project1,
      title: t('project1.title'),
      rnd: 50,
    },
    {
      id: uuidv4(),
      slug: 'project2',
      img: MEDIA.projects.project2,
      title: t('project2.title'),
      rnd: 25,
    },
    {
      id: uuidv4(),
      slug: 'project3',
      img: MEDIA.projects.project3,
      title: t('project3.title'),
      rnd: 0,
    },
    {
      id: uuidv4(),
      slug: 'project4',
      img: MEDIA.projects.project4,
      title: t('project4.title'),
      rnd: 35,
    },
    {
      id: uuidv4(),
      slug: 'project5',
      img: MEDIA.projects.project5,
      title: t('project5.title'),
      rnd: 40,
    },
    {
      id: uuidv4(),
      slug: 'project6',
      img: MEDIA.projects.project6,
      title: t('project6.title'),
      rnd: 10,
    },
  ]
}
