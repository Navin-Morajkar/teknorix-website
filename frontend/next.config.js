/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','13.233.214.226','www.teknorix.com'], // Add more domains if needed
  },
}

module.exports = nextConfig;