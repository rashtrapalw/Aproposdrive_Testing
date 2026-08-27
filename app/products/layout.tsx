import type { ReactNode } from 'react'

import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.products)

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children
}
