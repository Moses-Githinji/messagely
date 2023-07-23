/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET: "E3oT3PrtnRFWH4hDWO+uVfsOUsf5eoVAIZ7wvWCDlnU=",
  },
  experimental: {
    appDir: true,
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
