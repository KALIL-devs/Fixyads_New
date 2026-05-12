/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy flat service URLs → nested under /services (SEO hierarchy)
      {
        source: "/web-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/search-engine-optimization",
        destination: "/services/search-engine-optimization",
        permanent: true,
      },
      {
        source: "/social-media-marketing",
        destination: "/services/social-media-marketing",
        permanent: true,
      },
      {
        source: "/content-branding",
        destination: "/services/content-branding",
        permanent: true,
      },
      {
        source: "/influencer-marketing",
        destination: "/services/influencer-marketing",
        permanent: true,
      },
      // Legacy course slugs → /courses/...
      {
        source: "/digital-marketing-course",
        destination: "/courses/digital-marketing",
        permanent: true,
      },
      {
        source: "/web-development-course",
        destination: "/courses/web-development",
        permanent: true,
      },
      {
        source: "/placement-support",
        destination: "/courses/placement-support",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
