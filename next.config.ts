import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-international", "international-types"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;
