/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // appDir: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**images.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;
