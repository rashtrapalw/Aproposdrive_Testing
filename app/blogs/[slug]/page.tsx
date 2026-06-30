import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogBySlug } from '../../../lib/blog'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)
  if (!blog || !blog.published) {
    return {
      title: 'Blog not found',
    }
  }

  return {
    title: `${blog.title} | Apropos Drive`,
    description: blog.shortDescription,
    openGraph: {
      title: blog.title,
      description: blog.shortDescription,
      images: [{ url: blog.imageUrl }],
    },
  }
}

export default async function BlogDetailPage({ params }: any) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog || !blog.published) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[32px] overflow-hidden shadow-2xl bg-white">
          <div className="relative h-72 sm:h-[420px] w-full">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          <div className="p-8 sm:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-xs font-semibold text-emerald-700 mb-4">
              <span>{blog.category}</span>
            </div>
            <h1 className="font-black text-4xl sm:text-5xl tracking-tight mb-5 text-slate-950">
              {blog.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-sm text-slate-500 mb-8">
              <span>Published on {new Date(blog.createdAt).toLocaleDateString()}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{blog.published ? 'Visible on public site' : 'Draft article'}</span>
            </div>
            <div className="prose prose-slate max-w-none text-slate-700">
              <p>{blog.shortDescription}</p>
              {blog.content.split('\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
