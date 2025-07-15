import CaroselHero from '@/components/CaroselHero'
// import HScrollHero from '@/components/HScrollHero'
import LandingHero from '@/components/LandingHero'
import StoryHero from '@/components/StoryHero'
import { getSlides } from '@/data/slides.server'
import { getStories } from '@/data/stories.server'
// import { getI18n } from '@/locales/server'

export default async function Page() {
  // const t = await getI18n()
  const slides = await getSlides()
  const stories = await getStories()
  return (
    <>
      <LandingHero />
      {/* <HScrollHero list={slides} /> */}
      <CaroselHero list={slides} />
      {stories.map((story) => (
        <StoryHero data={story} key={story.id} />
      ))}
      <section className="h-screen w-screen">
        <div className="text-5xl">footer</div>
      </section>
    </>
  )
}
