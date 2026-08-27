import { COMPANY_NAME, SITE_NAME, SITE_URL } from '../../../../app/seo'
import { JsonLd } from './JsonLd'

export function OrganizationSchema() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/photos/logo3.png`,
      email: 'contact@aproposdrive.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      publisher: {
        '@type': 'Organization',
        name: COMPANY_NAME,
      },
      inLanguage: 'en',
    },
  ]

  return <JsonLd data={data} />
}
