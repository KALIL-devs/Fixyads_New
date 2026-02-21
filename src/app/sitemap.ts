import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fixyads.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/search-engine-optimization`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/social-media-marketing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/content-branding`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/influencer-marketing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/courses/digital-marketing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/courses/web-development`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/courses/placement-support`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}