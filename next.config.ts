import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/treatments/", permanent: true },
      { source: "/heath-info", destination: "/symptoms/", permanent: true },
      { source: "/privacy", destination: "/privacy-policy/", permanent: true },
      { source: "/legal-notice", destination: "/medical-disclaimer/", permanent: true },
      { source: "/digital-v-cards", destination: "/contact/", permanent: true },
      {
        source: "/blog-single-page-layout/advancements-in-cardiac-surgery",
        destination: "/treatments/minimally-invasive-surgery/",
        permanent: true,
      },
      {
        source: "/blog-single-page-layout/complex-cardiac-surgeries-to-complete-recovery",
        destination: "/treatments/bypass-surgery/",
        permanent: true,
      },
      {
        source: "/blog-single-page-layout/heart-health-counseling",
        destination: "/treatments/check-ups-second-opinion/",
        permanent: true,
      },
      {
        source: "/blog-single-page-layout/how-lifestyle-choices-impact-your-heart-health",
        destination: "/symptoms/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/:path*.md",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },
};

export default nextConfig;
