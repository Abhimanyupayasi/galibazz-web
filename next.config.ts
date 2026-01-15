/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.pinimg.com"   // ← add this
    ],
  },
};

module.exports = nextConfig;
