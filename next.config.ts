import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.cofertility.com",
      },
      {
        protocol: "https",
        hostname: "cdn.vectorstock.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;
