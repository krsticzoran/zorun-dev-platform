import type { MetadataRoute } from 'next'
import { posts } from '#site/content'
import { categoriesData } from '@/lib/categories'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryUrls = Object.keys(categoriesData).map((category) => ({
    url: `${SITE_URL}/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const postUrls = posts.map((post) => ({
    url: `${SITE_URL}/${post.category}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...categoryUrls,
    ...postUrls,
  ]
}
