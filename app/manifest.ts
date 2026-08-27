import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AproposDrive',
    short_name: 'AproposDrive',
    description:
      'Rare-earth-free EV powertrain technology and electric mobility solutions from AproposDrive.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFB',
    theme_color: '#00a550',
    icons: [
      {
        src: '/photos/logo2.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/photos/logo3.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
