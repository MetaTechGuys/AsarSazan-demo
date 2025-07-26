import { MEDIA } from '@/data/media'
import { getScopedI18n } from '@/locales/server'
import { breakLines } from '@/utils/locale'
import Image from 'next/image'
import { AboutSlider } from './AboutSlider'
import './styles.css'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoView } from '@/components/PhotoViewer'
import { MotionVideo } from '@/components/elemans/MotionVideo'

export default async function Page() {
  const t = await getScopedI18n('aboutus')
  return (
    <>
      <section className="cus-hv-center xs:px-8 if-dark:bg-curious relative w-screen overflow-clip bg-white px-4 pt-20! pb-48 text-black md:px-16 lg:px-24 lg:pb-30 xl:pb-16">
        <div className="2xs:grid-cols-9 2xs:grid-rows-7 2xs:grid z-1 container mx-auto flex size-full grid-flow-row-dense grid-cols-2 grid-rows-2 flex-col gap-2 sm:px-12">
          <div className="2xs:col-span-4 2xs:row-span-5">
            <PhotoView {...MEDIA.about.about4}>
              <Image
                alt=""
                src={MEDIA.about.about4}
                className="size-full object-cover"
              />
            </PhotoView>
          </div>
          <div className="2xs:col-span-4 2xs:row-span-3">
            <PhotoView {...MEDIA.about.about1}>
              <Image
                alt=""
                src={MEDIA.about.about1}
                className="size-full object-cover"
              />
            </PhotoView>
          </div>
          <div className="max-2xs:mb-50 2xs:col-span-4 2xs:row-span-3 2xs:-translate-x-25 rtl:2xs:translate-x-25 shadow-xl">
            <PhotoView {...MEDIA.about.about2}>
              <Image
                alt=""
                src={MEDIA.about.about2}
                className="size-full object-cover"
              />
            </PhotoView>
          </div>
        </div>
        <div className="if-dark:mix-blend-exclusion if-dark:invert-100 absolute -end-40 bottom-0 w-150 opacity-60 mix-blend-multiply max-sm:hidden rtl:rotate-y-180">
          {/* <AnimatedChair /> */}
          <video
            src="/motions/chair-640-by-360-750k.webm"
            muted
            autoPlay
            loop
          />
        </div>
        <div className="if-dark:mix-blend-exclusion if-dark:invert-100 absolute bottom-0 w-140 translate-y-8 opacity-60 mix-blend-multiply sm:-start-40 lg:start-0 rtl:rotate-y-180">
          {/* <AnimatedBed /> */}
          <video src="/motions/bed-640-by-360-750k.webm" muted autoPlay loop />
        </div>
      </section>
      <section className="if-dark:bg-curious-950 w-screen gap-6 px-8 py-20">
        <div className="prose if-dark:prose-invert max-sm:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto">
          <h1 className="text-5xl">{t('title')}</h1>
          <div className="lead">{t('lead')}</div>
          {breakLines(t('content')).map((line, l) => (
            <p key={l}>{line}</p>
          ))}
        </div>
      </section>
      <section
        className="wrap-nuke-custom-buttons w-screen gap-6 px-2 py-8 sm:px-4 lg:px-8"
        dir="ltr"
      >
        <AboutSlider
          className="flex gap-8"
          showDots
          autoplay
          showArrows
          scrollDistance="slide"
          wrapMode="wrap"
          images={[
            MEDIA.about.about1,
            MEDIA.about.about2,
            MEDIA.about.about3,
            MEDIA.about.about4,
            MEDIA.about.about5,
            MEDIA.about.about6,
            MEDIA.about.about7,
          ]}
        >
          <Image
            src={MEDIA.about.about2}
            alt=""
            className="aspect-video h-auto w-full object-cover px-1 sm:w-1/2 md:size-1/3 lg:w-1/4 xl:w-1/5"
          />
          <Image
            src={MEDIA.about.about3}
            alt=""
            className="aspect-video h-auto w-full object-cover px-1 sm:w-1/2 md:size-1/3 lg:w-1/4 xl:w-1/5"
          />
          <Image
            src={MEDIA.about.about4}
            alt=""
            className="aspect-video h-auto w-full object-cover px-1 sm:w-1/2 md:size-1/3 lg:w-1/4 xl:w-1/5"
          />
          <Image
            src={MEDIA.about.about5}
            alt=""
            className="aspect-video h-auto w-full object-cover px-1 sm:w-1/2 md:size-1/3 lg:w-1/4 xl:w-1/5"
          />
          <Image
            src={MEDIA.about.about6}
            alt=""
            className="aspect-video h-auto w-full object-cover px-1 sm:w-1/2 md:size-1/3 lg:w-1/4 xl:w-1/5"
          />
          <Image
            src={MEDIA.about.about7}
            alt=""
            className="aspect-video h-auto w-full object-cover px-1 sm:w-1/2 md:size-1/3 lg:w-1/4 xl:w-1/5"
          />
        </AboutSlider>
      </section>
      <section className="cus-hv-center">
        <Image
          src={MEDIA.about.aboutFooter}
          alt=""
          className="if-dark:invert-100 aspect-video h-auto w-[80%] max-w-200 object-cover px-1"
        />
      </section>
      <MotionVideo />
    </>
  )
}
