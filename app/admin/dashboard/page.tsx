import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyAdminToken } from '../../../lib/auth'
import AdminBlogDashboard from '../../../src/app/components/admin/AdminBlogDashboard'

export default async function AdminDashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('blog_admin_token')?.value
  const verified = token ? verifyAdminToken(token) : null

  if (!verified) {
    redirect('/admin')
  }

  return (
    <main className="min-h-screen bg-[#0A0F1C] text-white pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdminBlogDashboard />
      </section>
    </main>
  )
}
