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
        'bg-background/20 text-foreground flex flex-col rounded-sm p-8 rtl:gap-4',
        className
      )}
      {...props}
    >
      <h3 className="text-5xl font-extralight tracking-tighter">{title}</h3>
      <div className="lead font-extralight">{children}</div>
    </div>
  )
}
