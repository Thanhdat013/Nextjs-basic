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
    ],
  },
}

module.exports = nextConfig
