/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.chec.io', 'tailwindui.com', 'images.unsplash.com']
  }
}

module.exports = nextConfig
