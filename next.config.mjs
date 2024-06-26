/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dummyjson.com",
      },
    ],
  },
};

export default nextConfig;
