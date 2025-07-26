import { cn } from '@/utils/tailwind'
import { ComponentProps } from 'react'

export default function ContentCard({
  className,
  title,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-curious-100/35 flex flex-col rounded-sm p-8 text-[#fff] rtl:gap-4',
        className
      )}
      {...props}
    >
      <h3 className="text-5xl font-extralight tracking-tighter">{title}</h3>
      <div className="lead font-extralight">{children}</div>
    </div>
  )
}
