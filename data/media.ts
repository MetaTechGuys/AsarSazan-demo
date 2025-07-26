import { StaticImageData } from 'next/image'

import slide1 from '@/assets/slides/slide-0.webp'
import slide2 from '@/assets/slides/slide-1.webp'
import slide3 from '@/assets/slides/slide-2.webp'

import story1 from '@/assets/stories/story-1.webp'
import story2 from '@/assets/stories/story-2.webp'
import story3 from '@/assets/stories/story-3.webp'
import story4 from '@/assets/stories/story-4.webp'

import project1 from '@/assets/projects/projects-01-02.webp'
import project2 from '@/assets/projects/projects-01-03.webp'
import project3 from '@/assets/projects/projects-01-04.webp'
import project4 from '@/assets/projects/projects-01-05.webp'
import project5 from '@/assets/projects/projects-01-06.webp'
import project6 from '@/assets/projects/projects-01-07.webp'

import kishPrj0 from '@/assets/projects/kish/img0.webp'
import kishPrj1 from '@/assets/projects/kish/img1.webp'
import kishPrj2 from '@/assets/projects/kish/img2.webp'

import sadafPrj0 from '@/assets/projects/sadaf/PHOTO-2024-04-22-09-09-25-1.webp'
import sadafPrj1 from '@/assets/projects/sadaf/PHOTO-2024-04-22-09-09-32_19.webp'
import sadafPrj2 from '@/assets/projects/sadaf/PHOTO-2024-04-22-09-09-33_22.webp'

import savadkoohPrj1 from '@/assets/projects/savadkooh/img (1).webp'
import savadkoohPrj2 from '@/assets/projects/savadkooh/img (2).webp'
import savadkoohPrj3 from '@/assets/projects/savadkooh/img (3).webp'
import savadkoohPrj4 from '@/assets/projects/savadkooh/img (4).webp'
import savadkoohPrj5 from '@/assets/projects/savadkooh/img (5).webp'
import savadkoohPrj6 from '@/assets/projects/savadkooh/img (6).webp'

import sinaPrj0 from '@/assets/projects/sina/sina-1.webp'
import sinaPrj1 from '@/assets/projects/sina/sina-2.webp'
import sinaPrj2 from '@/assets/projects/sina/sina-3.webp'

import venushPrj0 from '@/assets/projects/venush/photo_2024-06-29_16-58-36.webp'
import venushPrj1 from '@/assets/projects/venush/venush.webp'
import venushPrj2 from '@/assets/projects/venush/venush2.webp'
import venushPrj3 from '@/assets/projects/venush/venush3.webp'

import zarafshanPrj0 from '@/assets/projects/zarafshan/img112.webp'
import zarafshanPrj1 from '@/assets/projects/zarafshan/img138.webp'
import zarafshanPrj2 from '@/assets/projects/zarafshan/img162.webp'
import zarafshanPrj3 from '@/assets/projects/zarafshan/img182.webp'
import zarafshanPrj4 from '@/assets/projects/zarafshan/img207.webp'
import zarafshanPrj5 from '@/assets/projects/zarafshan/img239.webp'
import zarafshanPrj6 from '@/assets/projects/zarafshan/img84.webp'

import projectBg from '@/assets/projects/project-bg.png'
import projectItem from '@/assets/projects/project-item.png'

import marashi from '@/assets/testimonials/marashi.webp'
import mohebi from '@/assets/testimonials/mohebi.webp'
import rajabi from '@/assets/testimonials/rajabi.webp'
import zahedi from '@/assets/testimonials/zahedi.webp'

import about1 from '@/assets/about/about-1.webp'
import about2 from '@/assets/about/about-2.webp'
import about3 from '@/assets/about/about-3.webp'
import about4 from '@/assets/about/about-4.webp'
import about5 from '@/assets/about/about-5.webp'
import about6 from '@/assets/about/about-6.webp'
import about7 from '@/assets/about/about-7.webp'
import aboutFooter from '@/assets/about/footer.webp'

import lastHero from '@/assets/last-hero-bg.webp'

import faIRflag from '@/assets/locale/fa-ir-flag.png'
import enUKflag from '@/assets/locale/en-uk-flag.png'

type MediaMap = Record<string, StaticImageData>

export const MEDIA = {
  videos: {
    banner: {
      src: '/videos/hero-video.webm',
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
  kishProject: {
    kishPrj0,
    kishPrj1,
    kishPrj2,
  },
  sadafProject: {
    sadafPrj0,
    sadafPrj1,
    sadafPrj2,
  },
  savadkoohProject: {
    savadkoohPrj1,
    savadkoohPrj2,
    savadkoohPrj3,
    savadkoohPrj4,
    savadkoohPrj5,
    savadkoohPrj6,
  },
  savadkoohVideo: {
    src: '/videos/savadkooh-project.mp4',
    width: 640,
    height: 640,
  } satisfies StaticImageData,
  sinaProject: {
    sinaPrj0,
    sinaPrj1,
    sinaPrj2,
  },
  venushProject: {
    venushPrj0,
    venushPrj1,
    venushPrj2,
    venushPrj3,
  },
  zarafshanProject: {
    zarafshanPrj0,
    zarafshanPrj1,
    zarafshanPrj2,
    zarafshanPrj3,
    zarafshanPrj4,
    zarafshanPrj5,
    zarafshanPrj6,
  },
  testimonials: {
    marashi,
    mohebi,
    rajabi,
    zahedi,
  },
  about: {
    about1,
    about2,
    about3,
    about4,
    about5,
    about6,
    about7,
    aboutFooter,
  },
  locale: {
    faIRflag,
    enUKflag,
  },
}
