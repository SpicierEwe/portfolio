/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "play-lh.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
