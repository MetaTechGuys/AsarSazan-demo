'use client'
import { motion, TargetAndTransition } from 'motion/react'
import Image from 'next/image'
import {
  ComponentProps,
  PropsWithChildren,
  RefObject,
  useEffect,
  useState,
} from 'react'

interface PhotoStackProps extends ComponentProps<typeof Image> {
  group: string
  parent?: RefObject<HTMLElement>
}

const rnd = (n: number) => Math.random() * 2 * n - n

export function PhotoStack({ group, ...props }: PhotoStackProps) {
  const [initial, setInitial] = useState<TargetAndTransition | undefined>()
  useEffect(() => {
    setInitial({
      rotate: `${rnd(10)}deg`,
      x: `${rnd(50)}%`,
      y: `${rnd(50)}%`,
      transition: { delay: 0.3 + rnd(0.2) },
    })
  }, [])
  return initial ? (
    <motion.div
      data-group={group}
      initial={{ x: 0, y: 0, rotate: 0 }}
      animate={initial}
      className="group glass bg-foreground/30 inset-0 m-auto h-min w-2/5 overflow-clip rounded-md p-1"
    >
      <Image {...props} alt={props.alt} className="size-full rounded-sm" />
    </motion.div>
  ) : null
}

export function PhotoStackGallery({ children }: PropsWithChildren) {
  return <div className="relative size-full [&>div]:absolute">{children}</div>
}
