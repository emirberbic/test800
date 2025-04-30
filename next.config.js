/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
  },
  // Simplify configuration to prevent module resolution issues
  experimental: {
    forceSwcTransforms: true
  },
  // Clean cache settings to prevent cache-related issues
  onDemandEntries: {
    maxInactiveAge: 15 * 1000,
    pagesBufferLength: 2
  },
  // Disable webpack caching to prevent ENOENT errors
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;