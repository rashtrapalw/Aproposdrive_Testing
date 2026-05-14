import dynamic from 'next/dynamic'

import { RouteSectionSkeleton } from '../../src/app/components/RouteSectionSkeleton'

const VisionSection = dynamic(
  () => import('../../src/app/components/VisionSection').then((mod) => mod.VisionSection),
  {
    loading: () => <RouteSectionSkeleton className="min-h-screen pt-24" />,
  },
)

export default function VisionPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <VisionSection />
    </main>
  )
}
