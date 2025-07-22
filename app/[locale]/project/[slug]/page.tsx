import { getProjects } from '@/data/projects.server'
import { PagePropsWithParams } from '@/utils/next'
import { notFound } from 'next/navigation'
import ProjectClient from './ProjectClient'
import './styles.css'

export default async function Page({ params }: PagePropsWithParams<'slug'>) {
  const { slug } = await params
  if (!slug) {
    notFound()
  }
  const projects = await getProjects()
  const project = projects.find((prj) => prj.slug === slug)
  if (!project) {
    notFound()
  }

  return (
    <section className="container mx-auto min-h-screen w-screen px-8 py-24">
      <ProjectClient data={project} />
    </section>
  )
}
