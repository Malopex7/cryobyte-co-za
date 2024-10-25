/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add webpack configuration
  webpack: (config, { isServer }) => {
    // Add any custom webpack config if needed
    return config;
  },
  // Enable strict mode
  reactStrictMode: true,
  // Optimize images
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'development'
  }
};

export default nextConfig;
