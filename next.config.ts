import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{hostname: "img.pokemondb.net", protocol: "https"}],
  },
};

export default nextConfig;