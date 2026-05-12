/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  turbopack: {},
  images: {
    unoptimized: true,
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google Images
      },
      {
        protocol: "https",
        hostname: "placehold.co", // Placeholder images
      },
      {
        protocol: "https",
        hostname: "www.google.com", // Allow Google images if needed (although not recommended)
      },
      {
        protocol: "https",
        hostname: "example.com", // Added for John Doe portfolio images
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash image CDN domain
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", // Pexels image CDN domain
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        dns: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // GitHub Pages requires this for proper routing
  basePath: process.env.NODE_ENV === 'production' ? '/IDSL-1' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/IDSL-1' : '',
};

module.exports = nextConfig;
