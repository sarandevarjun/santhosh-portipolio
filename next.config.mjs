/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'tvk-backend-production.up.railway.app' },
      { protocol: 'https', hostname: 'tvk-backend-bere.onrender.com' },
      { protocol: 'http',  hostname: 'localhost' },
      { protocol: 'http',  hostname: '152.228.227.51' },
    ],
  },
};
export default nextConfig;
