/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in',
        port: '',
        pathname: '/img/faces/**',
      },
    ],
  },
};

export default nextConfig;
