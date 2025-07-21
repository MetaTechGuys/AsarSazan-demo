'use client'
import img from '@/assets/elemans/chair.png'
import { motion, useTime, useTransform } from 'motion/react'
import Image from 'next/image'

const size = 3500

export function AnimatedChair() {
  const t = useTime()
  const d1 = useTransform(t, [0, 2000], [0, size], { clamp: true })

  const dash = useTransform(() => `${d1.get()} ${size}`)
  const opacity = useTransform(t, [0, 2500, 3000], [0, 0, 1], {
    clamp: true,
  })
  const sOpacity = useTransform(t, [0, 100, 2500, 3000], [0, 1, 1, 0], {
    clamp: true,
  })

  return (
    <div className="relative w-full bg-[#fff]">
      <motion.div style={{ opacity }}>
        <Image src={img} alt="" />
      </motion.div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1920 1080"
        className="stroke-curious-600 absolute top-0 w-full fill-transparent stroke-4"
        style={{
          strokeOpacity: sOpacity,
          strokeDasharray: dash,
        }}
      >
        <path d="M868.03,610.65s183.76,31.93,216.22,32.43c36.1.56,83.78-70.13,58.79-125.64-11.26-25-36.91-40.35-64.32-39.61-174.28,4.69-300.83,155.2-459.33,115.26-132.81-39.5-138.14-103.09-132.56-132.82,1.79-9.52,9.13-16.99,18.58-19.11,95.59-21.51,234.66,113.08,328.45,114.37l26.62-11.34s-54.5-17.3-77.63-54.34c-6.07-9.72-6.69-21.9-1.92-32.32,25.05-54.75,88.8-72.79,177.71-328.81.8-2.31,3.06-3.81,5.51-3.64,135.7,9.63,117.88,16.09,328.05-38.78,3.63-.95,7.05,2.15,6.46,5.85-48.76,304.92-128.99,489.75-144.58,523.74-1.67,3.63-1.54,7.83.34,11.35l122.99,231.05" />
      </motion.svg>
    </div>
  )
}
