import { Metadata } from 'next'
import { getPublishedBlogs } from '../../lib/blog'
import { BlogsSection } from '../../src/app/components/BlogsSection'

export const metadata: Metadata = {
  title: 'Blogs | Apropos Drive',
  description: 'Discover the latest published blog posts and insights from Apropos Drive.',
}

export default async function BlogsPage() {
  const blogs = await getPublishedBlogs()

  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <BlogsSection blogs={blogs} />
    </main>
  )
}
