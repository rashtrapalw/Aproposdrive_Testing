import type { Metadata } from 'next'

export const SITE_NAME = 'AproposDrive'
export const COMPANY_NAME = 'Aproposdrive Technologies Pvt. Ltd.'
export const SITE_URL = 'https://www.aproposdrive.com'
export const DEFAULT_OG_IMAGE = '/photos/logo3.png'
export const DEFAULT_TITLE = 'Rare-Earth-Free EV Powertrain Technology'
export const TITLE_TEMPLATE = '%s | AproposDrive'
export const DEFAULT_DESCRIPTION =
  'AproposDrive develops rare-earth-free EV powertrain technology, electric vehicle motor controllers, and electric mobility solutions engineered in India.'

export const GLOBAL_KEYWORDS = [
  'AproposDrive',
  'EV technology',
  'electric mobility technology',
  'EV powertrain technology',
  'rare-earth-free motor technology',
  'rare-earth-free EV motor',
  'electric vehicle motor technology',
  'EV motor controller',
  'integrated EV powertrain',
  'EV powertrain India',
]

export type PageSeoConfig = {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
  noindex?: boolean
}

export const pageSeo = {
  home: {
    title: 'Rare-Earth-Free EV Powertrain Technology',
    description:
      'Discover AproposDrive EV powertrain technology, rare-earth-free motor innovation, and electric mobility solutions built for sustainable transportation in India.',
    path: '/',
    image: '/photos/OurSolutions.png',
    keywords: [
      'AproposDrive',
      'rare-earth-free EV powertrain',
      'EV technology India',
      'electric mobility',
      'EV powertrain technology',
      'EV motor controller',
    ],
  },
  about: {
    title: 'About AproposDrive',
    description:
      'Learn about AproposDrive, its mission, founders, advisors, and the engineering vision behind rare-earth-free EV powertrain technology and electric mobility innovation.',
    path: '/about-us/',
    image: '/photos/about-bg.jpeg',
    keywords: [
      'about AproposDrive',
      'EV technology company India',
      'rare-earth-free motor company',
      'electric mobility innovation',
    ],
  },
  blogs: {
    title: 'EV Technology Blogs & Insights',
    description:
      'Read AproposDrive insights on EV powertrain engineering, rare-earth-free motor technology, sustainability, and electric mobility trends in India.',
    path: '/blogs/',
    image: '/photos/RareEarth_Technology.webp',
    keywords: [
      'EV technology blog',
      'rare-earth-free motor blog',
      'electric mobility insights',
      'EV powertrain articles',
    ],
  },
  contact: {
    title: 'Contact AproposDrive',
    description:
      'Contact AproposDrive for EV powertrain solutions, motor controller discussions, technology partnerships, demos, and electric mobility collaboration opportunities.',
    path: '/contact/',
    image: '/photos/logo3.png',
    keywords: [
      'contact AproposDrive',
      'EV powertrain contact',
      'electric mobility partnership',
      'motor controller inquiry',
    ],
  },
  faq: {
    title: 'FAQ Route Review',
    description:
      'This route currently requires content alignment before it should be indexed for search.',
    path: '/faq/',
    image: '/photos/logo3.png',
    noindex: true,
  },
  journey: {
    title: 'Real-World Testing Journey',
    description:
      'Explore AproposDrive real-world testing content and field validation for EV motor and controller technology across practical operating conditions.',
    path: '/journey/',
    image: '/photos/journey-bg.jpeg',
    keywords: [
      'EV testing journey',
      'motor controller testing',
      'electric mobility validation',
      'real-world EV testing',
    ],
  },
  mission: {
    title: 'Mission & Goals',
    description:
      'See AproposDrive mission and goals for rare-earth-free EV powertrain technology, sustainable transportation, and scalable electric mobility in India.',
    path: '/mission/',
    image: '/photos/mission-bg.jpeg',
    keywords: [
      'AproposDrive mission',
      'rare-earth-free EV mission',
      'electric mobility goals',
      'EV powertrain India',
    ],
  },
  products: {
    title: 'Integrated EV Powertrain & EV Motor Controller',
    description:
      'Explore AproposDrive products including an integrated EV powertrain platform and EV motor controller built for efficient, reliable electric mobility applications.',
    path: '/products/',
    image: '/photos/EvPowertrain.png',
    keywords: [
      'integrated EV powertrain',
      'EV motor controller',
      'electric vehicle powertrain',
      'EV powertrain solutions',
      'motor controller India',
    ],
  },
  technology: {
    title: 'SRM, PMSM & Rare-Earth-Free EV Motor Technology',
    description:
      'Explore AproposDrive technology covering Switched Reluctance Motor (SRM) concepts, PMSM motor technology, rare-earth magnets, rare-earth-free EV motor design, and electric mobility engineering.',
    path: '/technology/',
    image: '/photos/srm3.png',
    keywords: [
      'SRM technology',
      'Switched Reluctance Motor',
      'Switched Reluctance Motor technology',
      'SRM motor for EV',
      'PMSM technology',
      'Permanent Magnet Synchronous Motor',
      'PMSM motor technology',
      'SRM vs PMSM',
      'rare-earth-free motor technology',
      'EV motor technology',
      'electric vehicle motor technology',
      'EV powertrain technology',
      'electric mobility technology',
    ],
  },
  vision: {
    title: 'Vision for Sustainable Electric Mobility',
    description:
      'Discover AproposDrive vision for sustainable transportation, cleaner electric mobility, and future-ready EV technology innovation in India.',
    path: '/vision/',
    image: '/photos/OurSolutions.png',
    keywords: [
      'AproposDrive vision',
      'electric mobility future',
      'sustainable EV technology',
      'EV innovation India',
    ],
  },
} satisfies Record<string, PageSeoConfig>

export function absoluteUrl(path: string) {
  if (path === '/') {
    return `${SITE_URL}/`
  }

  return `${SITE_URL}${path}`
}

export function buildMetadata(config: PageSeoConfig): Metadata {
  const canonical = absoluteUrl(config.path)
  const image = config.image ?? DEFAULT_OG_IMAGE
  const keywords = [...GLOBAL_KEYWORDS, ...(config.keywords ?? [])]

  return {
    title: config.title,
    description: config.description,
    keywords,
    alternates: {
      canonical,
    },
    robots: config.noindex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      type: 'website',
      url: canonical,
      title: `${config.title} | ${SITE_NAME}`,
      description: config.description,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${config.title} | ${SITE_NAME}`,
      description: config.description,
      images: [image],
    },
  }
}
