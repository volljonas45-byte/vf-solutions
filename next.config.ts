import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static export only for production (GitHub Pages) — dev mode runs normally
  ...(isProd && { output: "export" }),
  basePath: "/vf-solutions",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
