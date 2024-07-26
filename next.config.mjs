import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeServerReact: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "dogovrrhdhdtxaylejbb.supabase.co",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
