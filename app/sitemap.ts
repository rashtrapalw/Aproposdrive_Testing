import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.aproposdrive.com/',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.aproposdrive.com/about-us/',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.aproposdrive.com/blogs/',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.aproposdrive.com/contact/',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.aproposdrive.com/journey/',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.aproposdrive.com/mission/',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.aproposdrive.com/products/',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.aproposdrive.com/technology/',
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: 'https://www.aproposdrive.com/vision/',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
