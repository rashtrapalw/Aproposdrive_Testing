import { SITE_URL } from '../../../../app/seo'
import { JsonLd } from './JsonLd'

type ProductSchemaItem = {
  name: string
  description: string
  image: string
  url: string
  category?: string
}

export function ProductSchema({ products }: { products: ProductSchemaItem[] }) {
  return (
    <JsonLd
      data={products.map((product) => ({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `${SITE_URL}${product.image}`,
        url: `${SITE_URL}${product.url}`,
        brand: {
          '@type': 'Brand',
          name: 'AproposDrive',
        },
        category: product.category,
      }))}
    />
  )
}
