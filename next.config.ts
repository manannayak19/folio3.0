import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co", // For Spotify Album Art
      },
      {
        protocol: "https",
        hostname: "open.spotifycdn.com", // For Spotify Icons
      },
    ],
  },
};

export default nextConfig;