import BlogCard from '@/components/BlogCard'
import { getBlogs } from '@/data/blogs.server'
import Link from 'next/link'

export default async function Page() {
  const blogs = await getBlogs()
  return (
    <section className="container mx-auto min-h-screen px-8 py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {blogs.map((b) => (
          <Link href={`/blogs/${b.slug}`} key={b.id} className="contents">
            <BlogCard data={b} />
          </Link>
        ))}
      </div>
    </section>
  )
}
