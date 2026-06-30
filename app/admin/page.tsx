import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyAdminToken } from '../../lib/auth'
import AdminLoginForm from '../../src/app/components/admin/AdminLoginForm'

export default async function AdminPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('blog_admin_token')?.value
  const verified = token ? verifyAdminToken(token) : null

  if (verified) {
    redirect('/admin/dashboard')
  }

  return (
    <main className="min-h-screen bg-[#0A0F1C] text-white pt-24">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Admin Dashboard</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white">Blog Management Login</h1>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Access the private blog management panel for creating, editing, publishing, and deleting blog content.
            </p>
          </div>
          <AdminLoginForm />
        </div>
      </section>
    </main>
  )
}
