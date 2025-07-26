'use client'
import Icon from '@/components/icon/Icon'
import { PhotoView } from '@/components/PhotoViewer'
import { ProjectData } from '@/data/projects.server'
import { useCurrentLocale, useScopedI18n } from '@/locales/client'
import { DataProps } from '@/utils/next'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel } from 'nuka-carousel'

export default function ProjectClient({ data }: DataProps<ProjectData>) {
  const tNav = useScopedI18n('projectsHero')
  const lang = useCurrentLocale()
  return (
    <>
      <div className="relative flex flex-col py-8 md:flex-row md:gap-12">
        <div className="flex flex-1 flex-col justify-start">
          <Link
            prefetch
            href={`/${lang}/#projects`}
            className="z-1 flex items-center gap-2"
          >
            <Icon name="arrow-back" className="size-4 rtl:rotate-180" />
            <span className="text-sm">{tNav('goBack')}</span>
          </Link>
          <div className="prose-mdx prose-lg my-12">
            <h1 className="text-start">{data.title}</h1>
            <p className="---w-max">
              <strong>{tNav('specs')}:</strong> {data.specs}
            </p>
            <div className="text-start">
              <strong>{tNav('place')}:</strong> {data.place}
            </div>
          </div>
          <div className="if-dark:mix-blend-exclusion if-dark:invert-100 absolute -start-40 bottom-0 w-150 opacity-60 mix-blend-multiply max-lg:hidden rtl:rotate-y-180">
            <video
              src="/motions/house-640-by-360-750k.webm"
              muted
              autoPlay
              loop
            />
          </div>
          {/* <div className="absolute start-40 bottom-0 w-150 opacity-60 mix-blend-multiply max-sm:hidden rtl:rotate-y-180 if-dark:mix-blend-exclusion if-dark:invert-100">
            <video
              src="/motions/house-640-by-360-1500k.webm"
              muted
              autoPlay
              loop
            />
          </div>
          <div className="absolute start-120 bottom-0 w-150 opacity-60 mix-blend-multiply max-sm:hidden rtl:rotate-y-180 if-dark:mix-blend-exclusion if-dark:invert-100">
            <video src="/motions/house.mp4" muted autoPlay loop />
          </div> */}
        </div>
        <div className="flex-1">
          <PhotoView {...data.img}>
            <Image
              src={data.img}
              alt=""
              className="aspect-square size-full object-cover"
            />
          </PhotoView>
        </div>
      </div>
      <div className="wrap-nuke-custom-buttons w-full gap-6 py-8" dir="ltr">
        <Carousel
          className="-mx-1 flex gap-1"
          showDots
          autoplay
          showArrows
          scrollDistance="slide"
          wrapMode="wrap"
        >
          {data.gallery.map((gImg, gi) => (
            <PhotoView key={gi} {...gImg}>
              <Image
                src={gImg}
                alt={data.title}
                className="aspect-video h-auto w-full object-cover px-1 sm:w-1/2 md:size-1/3 lg:w-1/4 xl:w-1/5"
              />
            </PhotoView>
          ))}
        </Carousel>
      </div>
      <div className="cus-hv-center">
        {data.video ? (
          <video
            src={data.video.src}
            controls
            playsInline
            width={data.video.width}
            height={data.video.height}
          />
        ) : null}
      </div>
    </>
  )
}
