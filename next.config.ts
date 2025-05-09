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
    ],
  },
};

export default nextConfig;
