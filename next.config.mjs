/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "a0.muscache.com",
                protocol: "https",
                port: "",
            },
            {
                hostname: "vvbrvusffcjmdqsfnemd.supabase.co",
                protocol: "https",
                port: "",
            },
            {
                hostname: "img.clerk.com",
                protocol: "https",
                port: "",
            },
        ],
    },
};

export default nextConfig;