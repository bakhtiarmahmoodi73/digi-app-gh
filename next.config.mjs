/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['b.wallet.ir'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b.wallet.ir',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
