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
      <style>
        {`
          * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            // scroll-behavior: smooth;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            letter-spacing: -0.02em;
          }

        //   ::-webkit-scrollbar {
        //     width: 10px;
        //   }

        //   ::-webkit-scrollbar-track {
        //     background: #F8FAFB;
        //   }

        //   ::-webkit-scrollbar-thumb {
        //     background: linear-gradient(to bottom, #00C853, #00E5FF);
        //     border-radius: 10px;
        //   }

        //   ::-webkit-scrollbar-thumb:hover {
        //     background: linear-gradient(to bottom, #00E5FF, #00C853);
        //   }

        //   ::selection {
        //     background: #00C853;
        //     color: white;
        //   }
        // `}
      </style>

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
