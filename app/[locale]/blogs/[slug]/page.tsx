import { getBlogs } from '@/data/blogs.server'
import { PagePropsWithParams } from '@/utils/next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function Page({ params }: PagePropsWithParams<'slug'>) {
  const { slug: encodedSlug } = await params
  const slug = decodeURIComponent(encodedSlug)
  if (!slug) {
    notFound()
  }
  const blogs = await getBlogs()

  console.log({ blogs, slug })

  const b = blogs.find((b) => b.slug === slug)
  if (!b) {
    notFound()
  }

  return (
    <section
      key={b.id}
      className="prose-mdx container mx-auto h-screen w-screen px-8 py-16"
    >
      {b.image ? (
        <Image
          alt={b.title}
          src={b.image}
          className="aspect-3/1 object-cover"
        />
      ) : null}
      <div className="lead">{b.lead}</div>
      <h1>{b.title}</h1>
      <hr />
      {b.content}
    </section>
  )
}
