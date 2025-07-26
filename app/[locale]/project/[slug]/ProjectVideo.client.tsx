'use client'

import { ProjectData } from '@/data/projects.server'
import { DataProps } from '@/utils/next'
import { useRef } from 'react'

export default function ProjectVideoBanner({ data }: DataProps<ProjectData>) {
  const vidRef = useRef<HTMLVideoElement>(null)

  return data.video ? (
    <div className="relative aspect-8/3 h-auto w-full">
      <video
        ref={vidRef}
        className="absolute inset-0 z-0 m-auto size-full object-cover"
        src={data.video.src}
        width={data.video.width}
        height={data.video.height}
        muted
        loop
      />
      <video
        className="glass z-1 size-full object-contain"
        src={data.video.src}
        width={data.video.width}
        height={data.video.height}
        onPlay={() => {
          vidRef.current?.play()
        }}
        onPause={() => {
          vidRef.current?.pause()
        }}
        controls
        playsInline
        muted
        autoPlay
        loop
      />
    </div>
  ) : null
}
