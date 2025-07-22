'use client'
import { PhotoView } from '@/components/PhotoViewer'
import { ProjectData } from '@/data/projects.server'
import { DataProps } from '@/utils/next'
import Image from 'next/image'
import { Carousel } from 'nuka-carousel'

export default function ProjectClient({ data }: DataProps<ProjectData>) {
  return (
    <>
      <div className="flex flex-col py-8 md:flex-row md:gap-12">
        <div className="justify-سفشقف flex flex-1">
          <div className="prose-mdx prose-lg my-12">
            <h1 className="text-سفشقف">{data.title}</h1>
            <p className="w-max">مشخصات: {data.specs}</p>
            <div className="lead text-سفشقف">محل: {data.place}</div>
          </div>
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
