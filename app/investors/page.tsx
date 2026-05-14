import dynamic from 'next/dynamic'

import { RouteSectionSkeleton } from '../../src/app/components/RouteSectionSkeleton'

const InvestorsSection = dynamic(
  () => import('../../src/app/components/InvestorsSection').then((mod) => mod.InvestorsSection),
  {
    loading: () => <RouteSectionSkeleton className="min-h-screen pt-24" />,
  },
)

export default function InvestorsPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <InvestorsSection />
    </main>
  )
}
