import dynamic from 'next/dynamic'

import { HeroSection } from './components/HeroSection'
import { JourneyTimeline } from './components/JourneyTimeline'


const ProductSection = dynamic(() =>
  import('./components/ProductSection').then((mod) => mod.ProductSection),
)
const WhyChooseSection = dynamic(() =>
  import('./components/WhyChooseSection').then((mod) => mod.WhyChooseSection),
)
const TestingVideoSection = dynamic(() =>
  import('./components/TestingVideoSection').then((mod) => mod.TestingVideoSection),
)
// const InvestorsSection = dynamic(() =>
//   import('./components/SupporterSection').then((mod) => mod.InvestorsSection),
// )
const FAQSection = dynamic(() =>
  import('./components/FAQSection').then((mod) => mod.FAQSection),
)

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] font-['Inter'] overflow-x-hidden">
  
       

      <HeroSection />
      {/* <HighlightSection /> */}
      <ProductSection />
      {/* <VisionSection /> */}
      <WhyChooseSection />
      {/* <JourneyTimeline /> */}
      <TestingVideoSection />
      {/* <InvestorsSection /> */}
      <FAQSection />
    </div>
  )
}
