/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.matmodel.puet.edu.ua",
        port: "",
        pathname: "/photo/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/f1h4h69k7w74/**",
      },
    ],
  },
};

module.exports = nextConfig;
