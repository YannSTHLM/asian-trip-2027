import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGitHubPages ? { basePath: "/asian-trip-2027" } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
