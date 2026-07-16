/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/products/:id",
        destination: "/shop",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
