import { MetadataRoute } from 'next'

const BASE_URL = 'https://keikobot.com'
const locales = ['pt', 'en'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          pt: `${BASE_URL}/pt`,
          en: `${BASE_URL}/en`,
        },
      },
    })
  }

  return entries
}
