import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fixyads.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/services/search-engine-optimization`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/services/social-media-marketing`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/services/content-branding`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/services/influencer-marketing`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/courses/digital-marketing`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/courses/web-development`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/courses/placement-support`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      priority: 0.65,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      priority: 0.65,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];
} 