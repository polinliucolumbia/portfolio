import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for optimal Docker/Vercel deployments
  output: "standalone",

  // Compress responses
  compress: true,

  // Strict mode for catching bugs early
  reactStrictMode: true,

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // picsum.photos — seed-based placeholder photos for development
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },

  // Experimental: enable partial pre-rendering when stable
  // experimental: { ppr: true },
};

export default nextConfig;
