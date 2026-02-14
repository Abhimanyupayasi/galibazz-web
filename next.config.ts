/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.pinimg.com",
      "res.cloudinary.com"
    ],
  },

  async headers() {
    return [
      {
        source: "/sitemap(.*).xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
