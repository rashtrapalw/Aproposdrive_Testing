  import './globals.css'
  import type { Metadata } from 'next'
  import { Inter, Poppins } from 'next/font/google'
  import { Navigation } from '../src/app/components/Navigation'
  import { Footer } from '../src/app/components/Footer'
  import { OrganizationSchema } from '../src/app/components/seo/OrganizationSchema'
  import {
    COMPANY_NAME,
    DEFAULT_DESCRIPTION,
    DEFAULT_OG_IMAGE,
    DEFAULT_TITLE,
    GLOBAL_KEYWORDS,
    SITE_NAME,
    SITE_URL,
    TITLE_TEMPLATE,
  } from './seo'


  const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
  const poppins = Poppins({ 
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'], 
    display: 'swap', 
    variable: '--font-poppins' 
  })

  export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: TITLE_TEMPLATE,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: GLOBAL_KEYWORDS,
    authors: [{ name: COMPANY_NAME }],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: [
        { url: '/photos/logo2.png', type: 'image/png' },
        { url: '/photos/logo3.png', type: 'image/png' },
      ],
      shortcut: ['/photos/logo2.png'],
      apple: [{ url: '/photos/logo2.png' }],
    },
    openGraph: {
      type: 'website',
      url: SITE_URL,
      title: `${DEFAULT_TITLE} | ${SITE_NAME}`,
      description: DEFAULT_DESCRIPTION,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${DEFAULT_TITLE} | ${SITE_NAME}`,
      description: DEFAULT_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE],
    },
  }

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className={`${inter.variable} ${poppins.variable} bg-[#F8FAFB]`}>
          <OrganizationSchema />
          <Navigation />
          {children}

          <Footer />
        </body>
      </html>
    )
  }
