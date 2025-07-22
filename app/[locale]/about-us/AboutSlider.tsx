'use client'
import Image, { StaticImageData } from 'next/image'
import { Carousel, CarouselProps } from 'nuka-carousel'
import { PhotoView } from 'react-photo-view'

export function AboutSlider({
  images,
  ...props
}: CarouselProps & { images: StaticImageData[] }) {
  return (
    <Carousel {...props}>
      {images.map((gImg, gi) => (
        <PhotoView key={gi} {...gImg}>
          <Image
            src={gImg}
            alt=""
            className="aspect-video h-auto w-full object-cover px-1 sm:w-1/2 md:size-1/3 lg:w-1/4 xl:w-1/5"
          />
        </PhotoView>
      ))}
    </Carousel>
  )
}
