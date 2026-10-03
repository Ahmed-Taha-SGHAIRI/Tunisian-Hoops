import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Transpile workspace packages
  transpilePackages: ['@tunisian-hoops/shared'],
};

export default nextConfig;
