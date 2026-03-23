/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: '/services/search-engine-optimization',
        destination: '/search-engine-optimization',
        permanent: true,
      },
      {
        source: '/services/social-media-marketing',
        destination: '/social-media-marketing',
        permanent: true,
      },
      {
        source: '/services/content-branding',
        destination: '/content-branding',
        permanent: true,
      },
      {
        source: '/services/web-development',
        destination: '/web-development',
        permanent: true,
      },
      {
        source: '/services/influencer-marketing',
        destination: '/influencer-marketing',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;