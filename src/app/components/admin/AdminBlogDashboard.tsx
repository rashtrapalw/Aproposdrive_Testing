'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronRight, CircleDashed, Edit3, ImagePlus, Plus, Trash2, X } from 'lucide-react'

type BlogRecord = {
  _id: string
  title: string
  slug: string
  category: string
  shortDescription: string
  content: string
  imageUrl: string
  published: boolean
  createdAt: string
  updatedAt: string
}

const defaultFormState = {
  title: '',
  category: '',
  shortDescription: '',
  content: '',
  imageUrl: '',
  published: false,
}

export default function AdminBlogDashboard() {
  const [blogs, setBlogs] = useState<BlogRecord[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [formState, setFormState] = useState(defaultFormState)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    fetchBlogs()
  }, [])

  async function fetchBlogs() {
    setIsLoading(true)
    const response = await fetch('/api/blogs')
    if (!response.ok) {
      setErrorMessage('Unable to load blog posts. Please sign in again.')
      setIsLoading(false)
      return
    }
    const data = await response.json()
    setBlogs(data)
    setIsLoading(false)
  }

  const selectedBlog = useMemo(
    () => blogs.find((blog) => blog._id === selectedId) || null,
    [blogs, selectedId],
  )

  useEffect(() => {
    if (selectedBlog) {
      setFormState({
        title: selectedBlog.title,
        category: selectedBlog.category,
        shortDescription: selectedBlog.shortDescription,
        content: selectedBlog.content,
        imageUrl: selectedBlog.imageUrl,
        published: selectedBlog.published,
      })
      setImagePreview(selectedBlog.imageUrl)
      setImageFile(null)
    } else {
      setFormState(defaultFormState)
      setImagePreview('')
      setImageFile(null)
    }
  }, [selectedBlog])

  function resetForm() {
    setSelectedId(null)
    setFormState(defaultFormState)
    setImageFile(null)
    setImagePreview('')
    setErrorMessage('')
    setSuccessMessage('')
  }

  async function uploadImage(file: File) {
    const data = new FormData()
    data.append('file', file)

    const response = await fetch('/api/blogs/upload', {
      method: 'POST',
      body: data,
    })

    if (!response.ok) {
      throw new Error('Image upload failed')
    }

    const payload = await response.json()
    return payload.imageUrl as string
  }

  async function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')
    setIsSaving(true)

    try {
      let imageUrl = formState.imageUrl
      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const payload = {
        title: formState.title,
        category: formState.category,
        shortDescription: formState.shortDescription,
        content: formState.content,
        imageUrl,
        published: formState.published,
      }

      const endpoint = selectedId ? `/api/blogs/${selectedId}` : '/api/blogs'
      const method = selectedId ? 'PUT' : 'POST'
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const json = await response.json()
        throw new Error(json?.error || 'Unable to save blog')
      }

      await fetchBlogs()
      setSuccessMessage(selectedId ? 'Blog updated successfully.' : 'Blog created successfully.')
      resetForm()
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Failed to save blog')
    } finally {
      setIsSaving(false)
    }
  }

  async function handleDelete(blog: BlogRecord) {
    const confirmed = window.confirm(`Delete “${blog.title}”? This cannot be undone.`)
    if (!confirmed) return

    const response = await fetch(`/api/blogs/${blog._id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      setErrorMessage('Unable to delete this blog entry.')
      return
    }

    await fetchBlogs()
    resetForm()
    setSuccessMessage('Blog deleted successfully.')
  }

  async function togglePublished(blog: BlogRecord) {
    const response = await fetch(`/api/blogs/${blog._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !blog.published }),
    })

    if (!response.ok) {
      setErrorMessage('Unable to update publish status.')
      return
    }

    await fetchBlogs()
    setSuccessMessage(`Blog ${blog.published ? 'unpublished' : 'published'} successfully.`)
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setErrorMessage('')
    const file = event.target.files?.[0] ?? null
    setImageFile(file)
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-slate-950/95 p-8 shadow-2xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Blog Admin</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">Manage blog posts</h2>
            <p className="mt-3 text-sm text-slate-400 max-w-2xl">
              Create new posts, update existing articles, publish or hide content, and remove outdated entries.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => resetForm()}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-slate-800"
            >
              <Plus className="h-4 w-4" /> New post
            </button>
            <button
              type="button"
              onClick={async () => {
                await fetch('/api/admin/logout', { method: 'POST' })
                window.location.href = '/admin'
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-rose-300/40 hover:bg-slate-800"
            >
              <X className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
            <p className="text-sm text-slate-400">Total posts</p>
            <p className="mt-3 text-3xl font-black text-white">{blogs.length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
            <p className="text-sm text-slate-400">Published</p>
            <p className="mt-3 text-3xl font-black text-white">{blogs.filter((item) => item.published).length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
            <p className="text-sm text-slate-400">Draft / hidden</p>
            <p className="mt-3 text-3xl font-black text-white">{blogs.filter((item) => !item.published).length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-5">
            <p className="text-sm text-slate-400">Latest update</p>
            <p className="mt-3 text-3xl font-black text-white">
              {blogs[0] ? new Date(blogs[0].updatedAt).toLocaleDateString() : '—'}
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-8 xl:grid-cols-[420px_minmax(0,1fr)]">
        <section className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/95 p-6 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Posts</p>
              <h3 className="mt-2 text-xl font-black text-white">All blog entries</h3>
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
              {isLoading ? 'Loading...' : 'Live data'}
            </span>
          </div>

          <div className="space-y-4">
            {blogs.map((blog) => (
              <div key={blog._id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-cyan-300/80">
                      <span>{blog.category}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-500 inline-block" />
                      <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h4 className="text-lg font-black text-white">{blog.title}</h4>
                    <p className="text-sm leading-6 text-slate-400">{blog.shortDescription}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedId(blog._id)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
                    >
                      <Edit3 className="h-4 w-4" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => togglePublished(blog)}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
                      style={{
                        background: blog.published ? 'rgba(0,255,187,0.12)' : 'rgba(255,255,255,0.05)',
                        color: blog.published ? '#8cffdc' : '#e2e8f0',
                      }}
                    >
                      {blog.published ? <CheckCircle2 className="h-4 w-4" /> : <CircleDashed className="h-4 w-4" />}
                      {blog.published ? 'Published' : 'Draft'}
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <button
                    type="button"
                    onClick={() => handleDelete(blog)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-emerald-200 transition hover:bg-rose-500/10 hover:text-rose-200"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <ChevronRight className="h-3.5 w-3.5" /> slug: {blog.slug}
                  </span>
                </div>
              </div>
            ))}

            {!blogs.length && !isLoading && (
              <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/80 p-8 text-center text-slate-400">
                No blogs have been created yet.
              </div>
            )}
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-slate-950/95 p-6 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Editor</p>
              <h3 className="mt-2 text-xl font-black text-white">Create or update a blog</h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
              <ArrowRight className="h-4 w-4" /> {selectedId ? 'Edit mode' : 'New post'}
            </span>
          </div>

          <form className="space-y-5 mt-6" onSubmit={handleSave}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                Title
                <input
                  value={formState.title}
                  onChange={(event) => setFormState({ ...formState, title: event.target.value })}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  placeholder="Blog title"
                  required
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Category
                <input
                  value={formState.category}
                  onChange={(event) => setFormState({ ...formState, category: event.target.value })}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-cyan-400"
                  placeholder="e.g. Sustainability"
                  required
                />
              </label>
            </div>

            <label className="space-y-2 text-sm text-slate-300">
              Short description
              <textarea
                value={formState.shortDescription}
                onChange={(event) => setFormState({ ...formState, shortDescription: event.target.value })}
                className="w-full min-h-[112px] rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Pull quote or summary for the blog card"
                required
              />
            </label>

            <label className="space-y-2 text-sm text-slate-300">
              Full content
              <textarea
                value={formState.content}
                onChange={(event) => setFormState({ ...formState, content: event.target.value })}
                className="w-full min-h-[180px] rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Write the full blog content here. Use paragraphs for readability."
                required
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-[1fr,200px]">
              <label className="space-y-2 text-sm text-slate-300">
                Featured image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-slate-200 outline-none file:rounded-full file:border-none file:bg-cyan-500 file:px-4 file:py-2 file:text-slate-950"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                Publish status
                <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={formState.published}
                    onChange={(event) => setFormState({ ...formState, published: event.target.checked })}
                    className="h-4 w-4 rounded border-white/15 bg-slate-800 text-cyan-400"
                  />
                  <span className="text-sm text-slate-200">Visible publicly</span>
                </div>
              </label>
            </div>

            {imagePreview && (
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <p className="text-sm text-slate-400 mb-3">Image preview</p>
                <img className="h-44 w-full rounded-3xl object-cover" src={imagePreview} alt="Featured preview" />
              </div>
            )}

            {(errorMessage || successMessage) && (
              <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-4 text-sm text-slate-200">
                {errorMessage ? <span className="text-rose-400">{errorMessage}</span> : <span className="text-emerald-300">{successMessage}</span>}
              </div>
            )}

            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-cyan-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:opacity-50"
            >
              <ImagePlus className="h-4 w-4" />
              {selectedId ? 'Update post' : 'Create post'}
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
