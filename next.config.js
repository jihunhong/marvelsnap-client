/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['marvelsnap.imgix.net'],
    disableStaticImages: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
