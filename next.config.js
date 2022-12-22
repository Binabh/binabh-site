/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["research.dasmalab.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
