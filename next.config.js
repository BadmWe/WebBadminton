/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  images: {
    domains: ['badm-store.ru']
  }
}

module.exports = nextConfig
