/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'gh-app-iwxb.vercel.app',
            pathname: '/**',
          },
    ]
    }
};

export default nextConfig;
