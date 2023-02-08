/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['marvelsnap.imgix.net'],
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
