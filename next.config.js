/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    appDir: false, // deployment
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**images.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;
