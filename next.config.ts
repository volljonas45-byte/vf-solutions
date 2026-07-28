import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Empty for the real domain (vfsolutions.de), "/vf-solutions" for the GitHub
// Pages preview. Keep in sync with lib/basePath.ts.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export only for production (GitHub Pages) — dev mode runs normally
  ...(isProd && { output: "export" }),
  basePath,
  // Emit foo/index.html instead of foo.html so plain FTP webspace (IONOS,
  // Apache without MultiViews) resolves /de/leistungen without a rewrite rule.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
