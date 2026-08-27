import type { ReactNode } from 'react'

import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.technology)

export default function TechnologyLayout({ children }: { children: ReactNode }) {
  return children
}
