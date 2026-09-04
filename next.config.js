/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  images: {
    unoptimized: true,
    remotePatterns: [
      { 
        protocol: 'https', 
        hostname: 'avatars.githubusercontent.com', 
        pathname: '/**' 
      },
      // Agar aur domains hain toh add karo
      { 
        protocol: 'https', 
        hostname: '*.cloudinary.com', 
        pathname: '/**' 
      },
    ],
  },

  // Database packages
  serverExternalPackages: ['mongodb', 'mongoose'],

  // Environment variables - Vercel ke liye
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    CORS_ORIGINS: process.env.CORS_ORIGINS || '*',
  },

  // Webpack config for development
  webpack(config, { dev, isServer }) {
    if (dev) {
      config.watchOptions = {
        poll: 2000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next'],
      };
    }
    
    // Fix for MongoDB connection issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        path: false,
      };
    }
    
    return config;
  },

  // Reduce memory usage
  onDemandEntries: {
    maxInactiveAge: 10000,
    pagesBufferLength: 2,
  },

  // CORS Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "Content-Security-Policy", value: "frame-ancestors *;" },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
          { key: "Access-Control-Allow-Credentials", value: "true" },
        ],
      },
    ];
  },

  // Vercel specific optimizations
  swcMinify: true,
  compress: true,
  generateEtags: true,
};

module.exports = nextConfig;