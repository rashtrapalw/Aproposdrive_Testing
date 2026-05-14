import dynamic from 'next/dynamic'

import { RouteSectionSkeleton } from '../../src/app/components/RouteSectionSkeleton'

const FAQSection = dynamic(
  () => import('../../src/app/components/FAQSection').then((mod) => mod.FAQSection),
  {
    loading: () => <RouteSectionSkeleton className="min-h-screen pt-24" />,
  },
)

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F8FAFB]">
      <FAQSection />
    </main>
  )
}
