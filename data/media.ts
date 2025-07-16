import { StaticImageData } from 'next/image'
import slide1 from '@/assets/slides/slide-0.jpg'
import slide2 from '@/assets/slides/slide-1.jpg'
import slide3 from '@/assets/slides/slide-2.jpg'

import story1 from '@/assets/stories/story-1.jpg'
import story2 from '@/assets/stories/story-2.jpg'
import story3 from '@/assets/stories/story-3.jpg'
import story4 from '@/assets/stories/story-4.jpg'

import project1 from '@/assets/projects/projects-01-02.jpg'
import project2 from '@/assets/projects/projects-01-03.jpg'
import project3 from '@/assets/projects/projects-01-04.jpg'
import project4 from '@/assets/projects/projects-01-05.jpg'
import project5 from '@/assets/projects/projects-01-06.jpg'
import project6 from '@/assets/projects/projects-01-07.jpg'

import projectBg from '@/assets/projects/project-bg.png'
import projectItem from '@/assets/projects/project-item.png'

import marashi from '@/assets/testimonials/marashi.jpg'
import mohebi from '@/assets/testimonials/mohebi.webp'
import rajabi from '@/assets/testimonials/rajabi.webp'
import zahedi from '@/assets/testimonials/zahedi.jpg'

import lastHero from '@/assets/last-hero-bg.jpg'

type MediaMap = Record<string, StaticImageData>

export const MEDIA = {
  videos: {
    banner: {
      src: '/hero-video.mp4',
      width: 1920,
      height: 1080,
    },
  } satisfies MediaMap,
  lastHero,
  slides: {
    slide1,
    slide2,
    slide3,
  },
  stories: {
    story1,
    story2,
    story3,
    story4,
  },
  projects: {
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    projectBg,
    projectItem,
  },
  testimonials: {
    marashi,
    mohebi,
    rajabi,
    zahedi,
  },
}
