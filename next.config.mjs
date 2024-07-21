/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.digikala.com",
      },
    ],
  },
};

export default nextConfig;
