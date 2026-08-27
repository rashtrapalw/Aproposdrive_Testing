import { SITE_URL } from '../../../../app/seo'
import { JsonLd } from './JsonLd'

type BreadcrumbItem = {
  name: string
  path: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
        })),
      }}
    />
  )
}
