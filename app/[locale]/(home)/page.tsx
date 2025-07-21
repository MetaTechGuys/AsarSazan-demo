import CaroselHero from '@/components/CaroselHero'
// import HScrollHero from '@/components/HScrollHero'
import LandingHero from '@/components/LandingHero'
import LastHero from '@/components/LastHero'
import MasonaryHero from '@/components/MasonaryHero'
import StoryHero from '@/components/StoryHero'
import TestimonialsHero from '@/components/TestimonialsHero'
import TextHero from '@/components/TextHero'
import { getProjects } from '@/data/projects.server'
import { getSlides } from '@/data/slides.server'
import { getStories } from '@/data/stories.server'
import { getTestimonials } from '@/data/testimonial.server'
import { getScopedI18n } from '@/locales/server'
import { Metadata } from 'next'
// import { getI18n } from '@/locales/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('navigations')
  return {
    title: t('home.title'),
    description: t('home.description'),
  }
}

export default async function Page() {
  const [
    priTr,
    secTr,
    tesTr,
    lasTr,
    prjTr,
    slides,
    stories,
    projects,
    testimonials,
  ] = await Promise.all([
    getScopedI18n('primaryHero'),
    getScopedI18n('secondaryHero'),
    getScopedI18n('testimonial'),
    getScopedI18n('lastHero'),
    getScopedI18n('projectsHero'),
    getSlides(),
    getStories(),
    getProjects(),
    getTestimonials(),
  ])
  return (
    <>
      <LandingHero title={priTr('title')} text={priTr('description')} />
      {/* <HScrollHero list={slides} /> */}
      <CaroselHero list={slides} />
      <TextHero
        title={secTr('title')}
        lead={secTr('lead')}
        text={secTr('description')}
        className="h-100 snap-center"
      />
      {stories.map((story) => (
        <StoryHero data={story} key={story.id} />
      ))}
      <MasonaryHero header={prjTr('header')} list={projects} />
      <TextHero
        data-theme="light"
        title={secTr('title')}
        lead={secTr('lead')}
        text={secTr('description')}
        className="h-100 snap-center dark:brightness-75"
      />
      <TestimonialsHero list={testimonials} title={tesTr('title')} />
      <LastHero title={lasTr('title')} text={lasTr('description')} />
    </>
  )
}
