/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{hostname:"localhost"}, {hostname:"pocketbase-db-1.fly.dev"}],
  }
};

export default nextConfig;
