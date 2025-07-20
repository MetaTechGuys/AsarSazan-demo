'use client'
import { TestimonialData } from '@/data/testimonial.server'
import { useBoundingRect } from '@/utils/get-bounding'
import { DataProps, ListProps } from '@/utils/next'
import { usePointerPos } from '@/utils/pointer'
import { cn } from '@/utils/tailwind'
import { AnimatePresence, motion, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import { ComponentProps, useRef, useState } from 'react'

interface TestimonialsHeroProps extends ListProps<TestimonialData> {
  title: string
}

export default function TestimonialsHero({
  title,
  list,
}: TestimonialsHeroProps) {
  return (
    <section className="group bg-background text-foreground cus-hv-center relative w-screen snap-center py-32 max-md:px-4">
      <div className="w-full px-4 md:w-2/3 xl:w-1/2">
        <h3>{title}</h3>
        {list.map((testimonial) => (
          <Testimonial data={testimonial} key={testimonial.id} />
        ))}
      </div>
    </section>
  )
}

function Testimonial({ data }: DataProps<TestimonialData>) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const p = usePointerPos()
  const rect = useBoundingRect(ref)

  const tx = useTransform(() => {
    const dx = p.x.get() - rect.left
    const px = (dx / rect.width - 0.5) * Math.PI
    return Math.tanh(px) * 100
  })
  const x = useSpring(tx)

  const ty = useTransform(() => {
    const dy = p.y.get() - rect.top
    const py = (dy / rect.height - 0.5) * Math.PI
    return Math.tanh(py) * 30
  })
  const y = useSpring(ty)

  // const handleMouseMove = useCallback(() => {
  //   // console.log('mouse move capitalize', Math.tanh(px))
  // }, [])

  return (
    <div
      ref={ref}
      className="relative flex cursor-help items-center gap-4 border-b py-8 transition-all duration-300 perspective-distant group-hover:grayscale-100 hover:grayscale-0"
      // onMouseMoveCapture={handleMouseMove}
      onMouseEnter={setShow.bind(null, true)}
      onMouseLeave={setShow.bind(null, false)}
    >
      <Image
        src={data.img}
        alt=""
        className="size-24 rounded-md shadow-2xl pointer-fine:hidden"
      />
      <TestimonialIcon className="size-12 pointer-coarse:hidden" />
      <div className="">
        <div className="mb-3 flex items-end gap-4">
          <div className="text-curious-600 text-3xl font-extrabold">
            {data.name}
          </div>
        </div>
        <div className="text-lg font-extralight">{data.message}</div>
      </div>
      <AnimatePresence>
        {show ? (
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute end-0 perspective-midrange pointer-coarse:hidden"
            transition={{ mass: 5 }}
            style={{ x, y }}
          >
            <Image
              src={data.img}
              alt=""
              className="rounded-xl shadow-2xl grayscale-100"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function TestimonialIcon({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-current', className)}
      viewBox="0 0 478.248 478.248"
      {...props}
    >
      <g>
        <path d="M456.02,44.821H264.83c-12.26,0-22.232,9.972-22.232,22.229v98.652c0,12.258,9.974,22.23,22.232,22.23h16.787v39.161     c0,2.707,1.58,5.165,4.043,6.292c0.92,0.42,1.901,0.627,2.875,0.627c1.631,0,3.244-0.576,4.523-1.685l51.383-44.396h111.576     c12.26,0,22.23-9.973,22.23-22.23V67.05C478.25,54.792,468.277,44.821,456.02,44.821z M319.922,112.252l-10.209,9.953     l2.41,14.054c0.174,1.015-0.242,2.038-1.076,2.643c-0.469,0.342-1.027,0.516-1.588,0.516c-0.428,0-0.861-0.103-1.256-0.31     l-12.621-6.635l-12.619,6.635c-0.912,0.478-2.016,0.398-2.848-0.206s-1.248-1.628-1.074-2.643l2.41-14.054l-10.211-9.953     c-0.734-0.718-1.002-1.792-0.685-2.769c0.317-0.978,1.164-1.691,2.183-1.839l14.11-2.05l6.31-12.786     c0.457-0.923,1.396-1.507,2.424-1.507s1.969,0.584,2.422,1.507l6.312,12.786l14.107,2.05c1.02,0.148,1.863,0.861,2.184,1.839     C320.924,110.46,320.658,111.535,319.922,112.252z M384.766,112.252l-10.211,9.953l2.412,14.054     c0.172,1.015-0.244,2.038-1.076,2.643c-0.469,0.342-1.025,0.516-1.588,0.516c-0.43,0-0.859-0.103-1.26-0.31l-12.619-6.635     l-12.619,6.635c-0.912,0.478-2.014,0.398-2.846-0.206c-0.834-0.604-1.25-1.628-1.076-2.643l2.41-14.054l-10.209-9.953     c-0.734-0.718-1.002-1.792-0.684-2.769c0.316-0.978,1.16-1.691,2.182-1.839l14.109-2.05l6.311-12.786     c0.455-0.923,1.396-1.507,2.422-1.507c1.029,0,1.967,0.584,2.422,1.507l6.312,12.786l14.109,2.05     c1.021,0.148,1.863,0.861,2.182,1.839C385.768,110.46,385.5,111.535,384.766,112.252z M449.607,112.252l-10.211,9.953     l2.408,14.054c0.176,1.015-0.238,2.038-1.072,2.643c-0.471,0.342-1.027,0.516-1.59,0.516c-0.43,0-0.859-0.103-1.258-0.31     l-12.621-6.635l-12.621,6.635c-0.908,0.478-2.012,0.398-2.844-0.206c-0.834-0.604-1.248-1.628-1.076-2.643l2.412-14.054     l-10.211-9.953c-0.734-0.718-1-1.792-0.684-2.769c0.316-0.978,1.164-1.691,2.182-1.839l14.111-2.05l6.311-12.786     c0.453-0.923,1.395-1.507,2.42-1.507c1.027,0,1.971,0.584,2.426,1.507L434,105.594l14.109,2.05     c1.018,0.148,1.861,0.861,2.182,1.839C450.609,110.46,450.344,111.535,449.607,112.252z" />
        <path d="M152.844,112.924c-46.76,0-72.639,24.231-72.166,70.921c0.686,63.947,27.859,102.74,72.166,102.063     c0,0,72.131,2.924,72.131-102.063C224.975,137.155,200.605,112.924,152.844,112.924z" />
        <path d="M280.428,334.444l-72.074-28.736l-16.877-14.223c-4.457-3.766-11.041-3.488-15.178,0.621l-23.463,23.336l-23.533-23.342     c-4.137-4.104-10.713-4.369-15.164-0.615l-16.881,14.223l-72.074,28.739C1.975,343.69,1.995,425.884,0,433.427h305.646     C303.656,425.9,303.646,343.679,280.428,334.444z" />
      </g>
    </svg>
  )
}
