import { getCurrentLocale } from '@/locales/server'
import * as BookEn from '@/mdx/Book.en.mdx'
import * as BookFa from '@/mdx/Book.fa.mdx'
import * as TestBlog from '@/mdx/TestBlog.fa.mdx'
import { isDev } from '@/utils/env'
import { StaticImageData } from 'next/image'
import { createElement, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface BlogMetadata {
  slug: string
  title: string
  lang: string
  image?: StaticImageData
  lead?: string
  keywords?: string[]
}

export interface BlogData extends BlogMetadata {
  id: string
  content: ReactElement
}

export async function getBlogs(): Promise<BlogData[]> {
  // const t = await getScopedI18n('slides')]
  const lang = await getCurrentLocale()

  return isDev
    ? [
        {
          id: uuidv4(),
          content: createElement(BookEn.default),
          ...BookEn.metadata,
        },
        {
          id: uuidv4(),
          content: createElement(BookFa.default),
          ...BookFa.metadata,
        },
        {
          id: uuidv4(),
          content: createElement(TestBlog.default),
          ...TestBlog.metadata,
        },
      ].filter((b) => b.lang === lang)
    : []
}
