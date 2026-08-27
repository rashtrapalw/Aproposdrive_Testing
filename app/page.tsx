import App from '../src/app/App'
import { faqs } from '../src/app/components/faqData'
import { FAQSchema } from '../src/app/components/seo/FAQSchema'
import { buildMetadata, pageSeo } from './seo'

export const metadata = buildMetadata(pageSeo.home)

export default function HomePage() {
  return (
    <>
      <FAQSchema items={faqs} />
      <App />
    </>
  )
}
