import CaroselHero from '@/components/CaroselHero'
// import HScrollHero from '@/components/HScrollHero'
import LandingHero from '@/components/LandingHero'
import StoryHero from '@/components/StoryHero'
import TextHero from '@/components/TextHero'
import { getSlides } from '@/data/slides.server'
import { getStories } from '@/data/stories.server'
import { getScopedI18n } from '@/locales/server'
// import { getI18n } from '@/locales/server'

export default async function Page() {
  const priTr = await getScopedI18n('primaryHero')
  const secTr = await getScopedI18n('secondaryHero')
  const slides = await getSlides()
  const stories = await getStories()
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
      <section className="h-screen w-screen">
        <div className="text-5xl">footer</div>
      </section>
    </>
  )
}
