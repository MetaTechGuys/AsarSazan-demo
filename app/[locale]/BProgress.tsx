'use client'

import { ProgressProvider } from '@bprogress/next/app'
import { PropsWithChildren } from 'react'

export default function BProgressWrapper({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <ProgressProvider
      startOnLoad
      color="var(--color-tussock)"
      height="2px"
      spinnerPosition="top-left"
    >
      {children}
    </ProgressProvider>
  )
}
