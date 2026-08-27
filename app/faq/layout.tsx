import type { ReactNode } from 'react'

import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.faq)

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children
}
