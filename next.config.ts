import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files only, so the app is exported to `out/`.
 * `NEXT_PUBLIC_BASE_PATH` is supplied by the deploy workflow when the site is
 * hosted under a sub-path (e.g. /XPVest_web) instead of the domain root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
