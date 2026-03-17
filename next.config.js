/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV
const nextConfig = {
    output: env === 'production' ? 'export' : undefined,
    images: {
      unoptimized: true,
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
}

module.exports = nextConfig
