/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "www.digikala.com",
      },
    ],
  },
};

export default nextConfig;
