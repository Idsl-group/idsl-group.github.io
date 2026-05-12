/** @type {import('next').NextConfig} */

const owner = process.env.GITHUB_REPOSITORY_OWNER || "";
const repo =
  typeof process.env.GITHUB_REPOSITORY === "string"
    ? process.env.GITHUB_REPOSITORY.split("/")[1] || ""
    : "";
const isUserPagesRepo =
  Boolean(owner && repo) &&
  repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

/** Optional override, e.g. local test: GITHUB_PAGES_BASE_PATH=/my-repo npm run build */
const explicitPagesBase = (process.env.GITHUB_PAGES_BASE_PATH || "").trim();
let basePath = "";
if (isUserPagesRepo) {
  basePath = "";
} else if (explicitPagesBase && explicitPagesBase !== "/") {
  basePath = explicitPagesBase.startsWith("/")
    ? explicitPagesBase
    : `/${explicitPagesBase}`;
} else if (
  process.env.GITHUB_ACTIONS === "true" &&
  repo &&
  !isUserPagesRepo
) {
  basePath = `/${repo}`;
}

const ghOrigin =
  process.env.GITHUB_ACTIONS === "true" && owner
    ? `https://${owner}.github.io`
    : "";

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  turbopack: {},
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_ORIGIN: ghOrigin,
  },
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
};

module.exports = nextConfig;
