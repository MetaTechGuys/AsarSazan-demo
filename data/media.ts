import { StaticImageData } from 'next/image'
import slide1 from '@/public/slide-0.jpg'
import slide2 from '@/public/slide-1.jpg'
import slide3 from '@/public/slide-2.jpg'

import story1 from '@/public/story-1.jpg'
import story2 from '@/public/story-2.jpg'
import story3 from '@/public/story-3.jpg'
import story4 from '@/public/story-4.jpg'

type MediaMap = Record<string, StaticImageData>

export const MEDIA = {
  videos: {
    banner: {
      src: '/hero-video.mp4',
      width: 1920,
      height: 1080,
    },
  } satisfies MediaMap,
  slides: {
    slide1,
    slide2,
    slide3,
  } satisfies MediaMap,
  stories: {
    story1,
    story2,
    story3,
    story4,
  } satisfies MediaMap,
}
