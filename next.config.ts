import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    qualities: [60, 75],
    formats: ["image/webp"],
  },
};

export default nextConfig;
