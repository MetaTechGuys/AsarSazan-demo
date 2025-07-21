'use client'
import img1 from '@/assets/elemans/bed.png'
import { motion, useTime, useTransform } from 'motion/react'
import Image from 'next/image'

const size = 3500

export function AnimatedBed() {
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
        <Image src={img1} alt="" />
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
        <path d="M485,242.63c7.08,8.06,6.15,304.57,6.15,304.57l-16.2,3.16s-4.36-236.58-.53-298.53c.27-4.31,3.4-7.9,7.64-8.7,65.29-12.38,517.53-49.61,585.54-53.18,5.9-.31,11.17,3.75,12.29,9.56,8.03,41.7,2.77,199.31,2.29,213.09-.02.49.43.88.91.79l90.52-16.83c1.41-.26,2.85-.25,4.25.02l103.48,20.23c.4.08.41.65,0,.73l-105.78,22.67c-1.07.23-2.18.22-3.25-.03l-96.78-22.42" />
        <path d="M1306.92,476.27c-45.64-3.24-373.47,75.23-495.29,135.88-9.01,4.49-15.34,12.99-17.07,22.91-9.07,52-26.37,204.42-26.37,204.42,0,0,113.1,61.82,139.13,68.8-3.68,11.48,0,18.9,0,18.9,0,0,40.28,41.92,59.4,63.45,35.84-43.17,61.78-63.59,73.19-71.48,4.14-2.86,6.81-7.4,7.33-12.4l1.03-9.74c.49-4.68,3.57-8.7,7.97-10.39,0,0,378.4-150.85,441.85-170.74,4.06-1.27,8.45-.5,11.91,1.97,18.72,13.36,60.86,25.49,65.58,24.37,15.97-14.62-24.08-74.02-24.08-98.77-18.62-84.99-36.99-105.01-52.23-115.08-7.67-5.07-16.34-8.39-25.37-10.09-55.96-10.54-265.1-75.73-301.3-73.05-193.95,19.13-452.7,74.48-502.2,125.85-9.45,18.38-37.8,226.8-37.8,226.8l133.35,53.02" />
      </motion.svg>
    </div>
  )
}
