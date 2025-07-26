'use client'
import { MEDIA } from '@/data/media'
import { ProjectData } from '@/data/projects.server'
import useMediaQueryBreakPoints from '@/utils/breakpoints'
import { DataProps, ListProps } from '@/utils/next'
import {
  AnimatePresence,
  motion,
  MotionValue,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { RefObject, useCallback, useEffect, useRef } from 'react'

const cols = 2

interface Props extends ListProps<ProjectData> {
  header: string
}

export default function MasonaryHero(props: Props) {
  const { sm } = useMediaQueryBreakPoints()
  return sm.and.above ? (
    <MasonaryHeroDesktop {...props} />
  ) : (
    <MasonaryHeroMobile {...props} />
  )
}

function MasonaryHeroDesktop({ list, header }: Props) {
  const target = useRef<HTMLElement>(null)
  const col0 = useRef<HTMLDivElement>(null)
  const col1 = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    axis: 'y',
    target,
    offset: ['start center', 'end center'],
  })
  const col0Y = useTransform(scrollYProgress, [0, 1], [0, 1])
  const col1Y = useTransform(scrollYProgress, [0, 1], [0, 1])

  const displaceCols = useCallback(
    (ref: RefObject<HTMLDivElement | null>, motion: MotionValue<number>) => {
      const el = ref.current
      if (el) {
        const totalHeight = el.scrollHeight - el.clientHeight / 2
        el.style.transform = `translateY(${-1 * totalHeight * motion.get()}px)`
      }
    },
    []
  )

  useMotionValueEvent(scrollYProgress, 'change', () => {
    displaceCols(col0, col0Y)
    displaceCols(col1, col1Y)
  })

  useEffect(() => {
    displaceCols(col0, col0Y)
    displaceCols(col1, col1Y)
  }, [col0Y, col1Y, displaceCols])

  return (
    <section
      id="projects"
      ref={target}
      className="bg-background text-foreground relative h-[200vh] w-screen snap-center overflow-clip perspective-distant"
    >
      <div
        className="sticky inset-0 mx-auto flex h-screen justify-center"
        data-theme="dark"
      >
        <Image
          alt=""
          src={MEDIA.projects.projectBg}
          className="if-dark:invert-100 absolute start-0 top-0 -z-1 object-cover object-bottom-left"
        />
        <Image
          alt=""
          src={MEDIA.projects.projectItem}
          className="if-dark:invert-100 absolute right-0 bottom-0 -z-1 h-70 w-auto object-cover object-bottom-left"
        />
        <div className="flex justify-center gap-8 py-8 max-lg:px-8 lg:w-2/3">
          <div ref={col0} className="flex h-full flex-col gap-8">
            <div className="cus-hv-center min-h-64">
              <h1 className="text-5xl">{header}</h1>
            </div>
            {list.map((prj, idx) =>
              idx % cols === 0 ? <ProjectCard key={prj.id} data={prj} /> : null
            )}
            <div className="min-h-64"></div>
          </div>

          <div ref={col1} className="flex h-full flex-col gap-8">
            {list.map((prj, idx) =>
              idx % cols === 1 ? <ProjectCard key={prj.id} data={prj} /> : null
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function MasonaryHeroMobile({ list, header }: Props) {
  return (
    <section className="bg-background text-foreground relative w-screen snap-center overflow-clip perspective-distant">
      <Image
        alt=""
        src={MEDIA.projects.projectBg}
        className="if-dark:invert-100 absolute start-0 top-0 -z-1 object-cover object-top-left"
      />
      <Image
        alt=""
        src={MEDIA.projects.projectItem}
        className="if-dark:invert-100 absolute end-0 bottom-0 -z-1 h-70 w-auto object-cover object-bottom-right"
      />
      <div className="flex justify-center gap-8 p-8">
        <div className="flex h-full flex-col gap-8">
          <div className="cus-hv-center min-h-64">
            <h1 className="text-5xl">{header}</h1>
          </div>
          {list.map((prj) => (
            <ProjectCard key={prj.id} data={prj} />
          ))}
          <div className="min-h-64"></div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ data }: DataProps<ProjectData>) {
  const style = { margin: `-${3 * data.rnd}vw 0` }
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.8, once: true })
  return (
    <Link href={`/project/${data.slug}`} className="contents">
      <div ref={ref} className="relative overflow-clip rounded-2xl">
        <Image src={data.img} alt={data.title} style={style} />
        <AnimatePresence>
          {inView ? (
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -250 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="cus-hv-center --my-auto --h-30 via-curious-700/90 absolute inset-0 bg-gradient-to-b from-transparent to-transparent"
            >
              <h4 className="text-tussock-50 text-center text-2xl font-extralight uppercase antialiased">
                {data.title}
              </h4>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Link>
  )
}
