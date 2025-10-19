import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-international", "international-types"],

  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true
  },
};

export default nextConfig;
