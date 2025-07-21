import { MotionVideo } from '@/components/elemans/MotionVideo'
import CopyBar from './CopyBar'
import FooterNav from './FooterNav'
import NewsLetter from './NewsLetter'

export default async function Footer() {
  return (
    <>
      {/* <FooterBrand /> */}
      <MotionVideo />
      <div className="h-px border-b opacity-10"></div>

      <div className="container mx-auto flex flex-col justify-between gap-12 p-8 lg:flex-row">
        <FooterNav />
        <NewsLetter />
      </div>

      <div className="h-px border-b opacity-10"></div>
      <CopyBar />
    </>
  )
}
