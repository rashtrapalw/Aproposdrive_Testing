import type { ReactNode } from 'react'

import { buildMetadata, pageSeo } from '../seo'

export const metadata = buildMetadata(pageSeo.contact)

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
