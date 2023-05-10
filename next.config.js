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
        pathname: '/dwgwlmu6i/image/upload/**',
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
