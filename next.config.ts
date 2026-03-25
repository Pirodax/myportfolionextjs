import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
