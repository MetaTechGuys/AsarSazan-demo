// import HScrollHero from '@/components/HScrollHero'
import LastHero from '@/components/LastHero'
import { getScopedI18n } from '@/locales/server'
// import { getI18n } from '@/locales/server'

export default async function Page() {
  const [priTr] = await Promise.all([getScopedI18n('lastHero')])
  return (
    <>
      <section className="h-screen w-screen">
        <div className="text-5xl">above</div>
      </section>
      <LastHero title={priTr('title')} text={priTr('description')} />
      <section className="h-screen w-screen">
        <div className="text-5xl">footer</div>
      </section>
    </>
  )
}
