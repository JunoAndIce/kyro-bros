import type { MetadataRoute } from 'next'
import { siteUrl } from '@/app/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/products', '/about', '/contact', '/bookings']

  return routes.map(path => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
