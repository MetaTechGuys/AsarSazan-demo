'use client'
import { AnimatePresence, motion, useInView } from 'motion/react'
import BrandLogo from '../layout/BrandLogo'
import { useCallback, useEffect, useRef, useState } from 'react'

export function MotionVideo() {
  const [showMotion, setShowMotion] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const vRef = useRef<HTMLVideoElement>(null)
  const inView = useInView(ref)

  useEffect(() => {
    console.log({ inView })

    if (vRef.current) {
      if (inView) {
        vRef.current?.play()
      } else {
        vRef.current?.pause()
      }
    } else {
      setShowMotion(true)
    }
  }, [inView])

  const handleVideoEnded = useCallback(() => setShowMotion(false), [])

  return (
    <div
      ref={ref}
      className="pointer-events-none relative aspect-square h-auto w-full bg-[#000] invert-100 sm:aspect-2/1 md:aspect-3/1"
    >
      <AnimatePresence>
        {showMotion ? (
          <motion.video
            key="motion"
            poster="/videos/footer-video-poster.webp"
            src="/videos/footer-video.mp4"
            className="size-full object-cover"
            muted
            ref={vRef}
            initial={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(3px)' }}
            transition={{ duration: 1 }}
            onEnded={handleVideoEnded}
          />
        ) : null}
        {!showMotion ? (
          <BrandLogo
            key="logo"
            initial={{ opacity: 0, filter: 'blur(3px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-1 m-auto translate-x-2 scale-[90%] fill-white sm:scale-[51%]"
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
