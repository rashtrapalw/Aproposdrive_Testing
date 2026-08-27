import type { ReactNode } from 'react'

import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.about)

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return children
}
