/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "cdn.pixabay.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "ghgmmd.net",
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
