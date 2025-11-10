/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // allow next/image to load images from ImageKit host used by the API
    domains: ["ik.imagekit.io"],
    // alternatively, for more control you can use remotePatterns
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'ik.imagekit.io',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;
