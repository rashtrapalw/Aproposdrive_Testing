import dynamic from 'next/dynamic'

import { RouteSectionSkeleton } from '../../src/app/components/RouteSectionSkeleton'
import { BreadcrumbSchema } from '../../src/app/components/seo/BreadcrumbSchema'
import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.journey)

const JourneySection = dynamic(
  () => import('../../src/app/components/TestingVideoSection').then((mod) => mod.TestingVideoSection),
  {
    loading: () => <RouteSectionSkeleton className="min-h-screen pt-24" />,
  },
)

export default function JourneyPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Journey', path: '/journey/' },
        ]}
      />
      <JourneySection />
    </main>
  )
}
