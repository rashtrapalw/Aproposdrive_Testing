import dynamic from 'next/dynamic'

import { RouteSectionSkeleton } from '../../src/app/components/RouteSectionSkeleton'
import { BreadcrumbSchema } from '../../src/app/components/seo/BreadcrumbSchema'
import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.mission)

const MissionSection = dynamic(
  () => import('../../src/app/components/MissionSection').then((mod) => mod.MissionSection),
  {
    loading: () => <RouteSectionSkeleton className="min-h-screen pt-24" />,
  },
)

export default function MissionPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Mission', path: '/mission/' },
        ]}
      />
      <MissionSection />
    </main>
  )
}
