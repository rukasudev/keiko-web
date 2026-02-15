import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/invite', '/support'],
    },
    sitemap: 'https://keikobot.com/sitemap.xml',
  }
}
