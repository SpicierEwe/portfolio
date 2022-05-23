/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
