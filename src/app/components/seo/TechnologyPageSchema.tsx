import { SITE_URL } from '../../../../app/seo'
import { JsonLd } from './JsonLd'

export function TechnologyPageSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'SRM, PMSM & Rare-Earth-Free EV Motor Technology',
        url: `${SITE_URL}/technology/`,
        description:
          'AproposDrive technology content covering SRM, PMSM, rare-earth magnets, rare-earth-free EV motor design, and electric mobility engineering.',
        isPartOf: {
          '@type': 'WebSite',
          name: 'AproposDrive',
          url: SITE_URL,
        },
        about: [
          { '@type': 'Thing', name: 'Switched Reluctance Motor' },
          { '@type': 'Thing', name: 'SRM motor for electric vehicles' },
          { '@type': 'Thing', name: 'Permanent Magnet Synchronous Motor' },
          { '@type': 'Thing', name: 'Rare-earth-free motor technology' },
          { '@type': 'Thing', name: 'EV motor controller' },
          { '@type': 'Thing', name: 'Electric mobility technology' },
        ],
      }}
    />
  )
}
