import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/huajing",
  assetPrefix: "/huajing",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
