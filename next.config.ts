import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/umami.js",
        destination: "http://210.79.129.6:3002/script.js"
      },
      {
        source: "/api/send",
        destination: "http://210.79.129.6:3002/api/send"
      }
    ]
  },
};

export default nextConfig;
