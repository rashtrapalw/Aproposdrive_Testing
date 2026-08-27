import { VisionSection } from '../../src/app/components/VisionSection'
import { BreadcrumbSchema } from '../../src/app/components/seo/BreadcrumbSchema'
import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.vision)

export default function VisionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Vision', path: '/vision/' },
        ]}
      />
      <VisionSection />
    </>
  )
}
