import dynamic from 'next/dynamic'

import { RouteSectionSkeleton } from '../../src/app/components/RouteSectionSkeleton'

const MissionSection = dynamic(
  () => import('../../src/app/components/MissionSection').then((mod) => mod.MissionSection),
  {
    loading: () => <RouteSectionSkeleton className="min-h-screen pt-24" />,
  },
)

export default function MissionPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <MissionSection />
    </main>
  )
}
