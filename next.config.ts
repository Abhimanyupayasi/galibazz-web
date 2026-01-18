/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.pinimg.com"
    ],
  },

  async headers() {
    return [
      {
        // Applies to sitemap.xml and sitemap2.xml
        source: "/sitemap(.*).xml",
        headers: [
          {
            key: "Content-Encoding",
            value: "identity",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
