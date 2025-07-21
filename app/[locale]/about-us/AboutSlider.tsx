'use client'
import { Carousel, CarouselProps } from 'nuka-carousel'
import { PropsWithChildren } from 'react'

export function AboutSlider({
  children,
  ...props
}: PropsWithChildren<CarouselProps>) {
  return <Carousel {...props}>{children}</Carousel>
}
