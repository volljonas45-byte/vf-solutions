// Single source of truth for the deployment sub-path.
//
// Empty for a normal domain (vfsolutions.de) — the site sits at the web root.
// Set NEXT_PUBLIC_BASE_PATH=/vf-solutions for the GitHub Pages preview, where
// the site lives in a repo sub-folder. Must stay in sync with `basePath` in
// next.config.ts.
//
// Next rewrites href/src only for next/link and next/image. The pages use plain
// <img> tags, so every asset path has to go through asset() by hand.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
