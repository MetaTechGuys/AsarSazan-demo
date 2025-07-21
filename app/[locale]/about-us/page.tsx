import { AnimatedChair } from '@/components/AnimatedChair'
import { MEDIA } from '@/data/media'
import { getScopedI18n } from '@/locales/server'
import { breakLines } from '@/utils/locale'
import Image from 'next/image'

export default async function Page() {
  const t = await getScopedI18n('aboutus')
  return (
    <>
      <section className="cus-hv-center xs:px-8 relative w-screen bg-[#fff] px-4 pt-20! pb-8 text-black md:px-16 lg:px-24">
        <div className="z-1 container mx-auto flex size-full grid-flow-row-dense grid-cols-9 grid-rows-7 flex-col gap-2 sm:grid">
          <div className="col-span-4 row-span-5">
            <Image
              alt=""
              src={MEDIA.about.about4}
              className="size-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-3">
            <Image
              alt=""
              src={MEDIA.about.about1}
              className="size-full object-cover"
            />
          </div>
          <div className="col-span-4 row-span-3 -translate-x-25 shadow-xl rtl:translate-x-25">
            <Image
              alt=""
              src={MEDIA.about.about2}
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="absolute -end-40 bottom-0 w-150 rtl:rotate-y-180">
          <AnimatedChair />
        </div>
      </section>
      <section className="bg-tussock w-screen gap-6 px-8 py-20">
        <div className="prose mx-auto">
          <h1 className="text-5xl">{t('title')}</h1>
          <div className="lead">{t('lead')}</div>
          {breakLines(t('content')).map((line, l) => (
            <p key={l}>{line}</p>
          ))}
        </div>
      </section>
    </>
  )
}
