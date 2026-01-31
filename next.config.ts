import type { NextConfig } from 'next';

const isProd = true;
const repo = 'elysion-next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;
