import { MetadataRoute } from 'next'

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL from environment variable or default
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ogjayp.com'

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1, // Highest priority - main portfolio/dev work
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8, // High priority for fresh content
    },
    {
      url: `${baseUrl}/links`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7, // Medium priority for social/contact links
    },
    {
      url: `${baseUrl}/weddings`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6, // Adjusted lower since dev work is main focus
    },
  ]

  // Blog posts - tech and development focused content
  const blogPosts = [
    {
      url: `${baseUrl}/blogs/just-one-more-game`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Combine all routes
  return [...staticRoutes, ...blogPosts]
}

export default sitemap 