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
    ],
  },
};

module.exports = nextConfig;
