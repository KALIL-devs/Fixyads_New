/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/services/search-engine-optimization',
        destination: '/search-engine-optimization',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;