'use client'
import type { SlideData } from '@/data/slides.server'
import { useDirection } from '@/utils/locale'
import { ListProps } from '@/utils/next'
import { cn } from '@/utils/tailwind'
import 'keen-slider/keen-slider.min.css'
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  TrackDetails,
  useKeenSlider,
} from 'keen-slider/react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { RefObject, useRef, useState } from 'react'
import Icon from './icon/Icon'
import ContentCard from './ContentCard'

const endSpace = 300

export default function CaroselHero({ list }: ListProps<SlideData>) {
  const dir = useDirection()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [details, setDetails] = useState<TrackDetails | undefined>(undefined)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      detailsChanged(s) {
        setDetails(s.track.details)
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
    },
    [ResizePlugin, AdaptiveHeight]
  )

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: list.length,
      },
    },
    [ThumbnailPlugin(instanceRef), ResizePlugin]
  )

  function scaleStyle(idx: number) {
    if (!details) return {}
    const slide = details.slides[idx]
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  const rootRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    axis: 'y',
    target: rootRef,
    offset: ['start end', 'start start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 1], [15, 0])

  return (
    <>
      <section
        dir="ltr"
        ref={rootRef}
        className="relative h-[200vh] w-screen snap-center overflow-clip"
        style={{
          height: `calc(200vh + ${endSpace}px)`,
        }}
      >
        <motion.div
          className="cus-hv-center sticky inset-0 bottom-auto h-screen"
          style={{ scale }}
        >
          <div
            className="keen-slider size-full overflow-hidden"
            ref={sliderRef}
          >
            {list.map((slide, idx) => (
              <motion.div
                key={slide.id}
                className={cn(
                  'keen-slider__slide relative flex min-w-screen items-end overflow-clip',
                  `number-slide${idx + 1}`
                )}
                style={{ borderRadius }}
              >
                <Image
                  src={slide.img}
                  alt=""
                  style={scaleStyle(idx)}
                  className="absolute inset-0 -z-1 size-full object-cover"
                />
                <ContentCard
                  dir={dir}
                  title={slide.title}
                  className="glass border-jungle mx-4 mb-24 rounded-tl-2xl rounded-br-2xl border-s-2 border-b-2 sm:mx-8 md:mx-10"
                >
                  {slide.lead}
                </ContentCard>
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-10 top-auto grid grid-cols-[1fr_4rem_4rem] place-items-center gap-4">
            <div ref={thumbnailRef} className="keen-slider">
              {list.map((slide, idx) => (
                <button
                  key={slide.id}
                  className={cn(
                    'keen-slider__slide cursor-pointer',
                    '[&.active>div]:bg-tussock!',
                    `number-slide${idx + 1}`
                  )}
                >
                  <div className="mx-1 h-1 w-full bg-slate-500" />
                </button>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                instanceRef.current?.prev()
              }}
              disabled={currentSlide === 0}
              className="cus-hv-center bg-background/30 size-8 cursor-pointer rounded-full"
            >
              <Icon
                name="arrow-right-bold"
                className="fill-foreground size-4 rotate-180"
              />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                instanceRef.current?.next()
              }}
              disabled={currentSlide + 1 === details?.slides.length}
              className="cus-hv-center bg-background/30 size-8 cursor-pointer rounded-full"
            >
              <Icon
                name="arrow-right-bold"
                className="fill-foreground size-4"
              />
            </button>
          </div>
        </motion.div>
      </section>
    </>
  )
}

function ThumbnailPlugin(
  mainRef: RefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active')
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

const ResizePlugin: KeenSliderPlugin = (slider) => {
  const observer = new ResizeObserver(function () {
    slider.update()
  })

  slider.on('created', () => {
    observer.observe(slider.container)
  })
  slider.on('destroyed', () => {
    observer.unobserve(slider.container)
  })
}

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + 'px'
  }
  slider.on('created', updateHeight)
  slider.on('slideChanged', updateHeight)
}
