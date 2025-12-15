import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  basePath: "/website",
  assetPrefix: "/website",
  images: {
    domains: ["localhost", "localhost:3002", "api.botmother.uz"], // SALES_URL domeni
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compression
  compress: true,
  // Production optimizations
  swcMinify: true,
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize fonts
  optimizeFonts: true,
  // async headers() {
  //   return [
  //     {
  //       // Cache images for 1 year
  //       source: "/:path*.(jpg|jpeg|png|gif|webp|svg|ico|avif)",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       // Cache static assets (JS, CSS) for 1 year
  //       source: "/_next/static/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       // Cache other static files
  //       source: "/:path*.(js|css|woff|woff2|ttf|eot)",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=31536000, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       // Security headers
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "X-DNS-Prefetch-Control",
  //           value: "on",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
