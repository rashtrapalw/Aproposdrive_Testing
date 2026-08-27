import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-27')

  return [
    {
      url: 'https://www.aproposdrive.com/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.aproposdrive.com/about-us/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.aproposdrive.com/blogs/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.aproposdrive.com/contact/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.aproposdrive.com/faq/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: 'https://www.aproposdrive.com/journey/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.aproposdrive.com/mission/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.aproposdrive.com/products/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.aproposdrive.com/technology/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://www.aproposdrive.com/vision/',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
