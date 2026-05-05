/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      'react-icons/fi',
      'react-icons/fa',
    ],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,
}

module.exports = nextConfig
