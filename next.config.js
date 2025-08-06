
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'cdn.abacus.ai',
      'imgs.search.brave.com',
      'images.unsplash.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/cms',
      },
    ]
  },
}

module.exports = nextConfig
