import type { ReactNode } from 'react'

import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.blogs)

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return children
}
