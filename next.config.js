/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // config for image of res.cloudinary.com
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars3.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
}

module.exports = nextConfig
