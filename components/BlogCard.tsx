'use client'

import { BlogData } from '@/data/blogs.server'
import { DataProps } from '@/utils/next'
import { cn } from '@/utils/tailwind'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { motion } from 'motion/react'
import noImg from '@/assets/no-image.jpg'

export default function BlogCard({
  className,
  data,
  ...props
}: ComponentProps<typeof motion.div> & DataProps<BlogData>) {
  return (
    <motion.div
      className={cn(
        'relative aspect-square size-full overflow-clip rounded-md shadow',
        className
      )}
      {...props}
    >
      <Image
        alt=""
        src={data.image ?? noImg}
        className="aspect-square w-full object-cover"
      />
      <div className="--via-transparent absolute inset-0 top-auto z-1 grid h-1/2 items-end bg-gradient-to-t from-white to-transparent px-8 py-4 dark:from-black">
        <div>
          <h1 className="mb-2 truncate">{data.title}</h1>
          <p className="truncate text-sm">{data.lead}</p>
        </div>
      </div>
    </motion.div>
  )
}
