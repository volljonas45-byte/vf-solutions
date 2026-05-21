import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vf-solutions",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
