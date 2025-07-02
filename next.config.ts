/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.jsdelivr.net', 'placehold.co'], // <-- add this line
  },
};

export default nextConfig;
