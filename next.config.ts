import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  basePath: "/website",
  assetPrefix: "/website",
  images: {
    domains: ["localhost", "localhost:3002", "api.botmother.uz"], // SALES_URL domeni
    formats: ["image/webp", "image/avif"],
  },
  async headers() {
    return [
      {
        // Cache images for 30 days
        source: "/:path*.(jpg|jpeg|png|gif|webp|svg|ico|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable",
          },
        ],
      },
      {
        // Cache static assets (JS, CSS) for 30 days
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable",
          },
        ],
      },
      {
        // Cache other static files
        source: "/:path*.(js|css|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
