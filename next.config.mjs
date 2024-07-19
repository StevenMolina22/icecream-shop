/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "pocketbase-db-1.fly.dev" },
      { hostname: "pb-little-paper-1278.fly.dev" },
      { hostname: "images.unsplash.com"},
    ],
  },
};

export default nextConfig;
