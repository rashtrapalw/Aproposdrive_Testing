import dynamic from 'next/dynamic'

import { RouteSectionSkeleton } from '../../src/app/components/RouteSectionSkeleton'

const JourneySection = dynamic(
  () => import('../../src/app/components/JourneySection').then((mod) => mod.JourneySection),
  {
    loading: () => <RouteSectionSkeleton className="min-h-screen pt-24" />,
  },
)

export default function JourneyPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <JourneySection />
    </main>
  )
}
