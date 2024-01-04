/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV
const nextConfig = {
    // if in production mode, add output: "export",
    output: env === 'production' ? 'export' : undefined,
}

module.exports = nextConfig
