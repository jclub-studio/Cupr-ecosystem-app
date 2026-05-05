import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  transpilePackages: ['motion'],
  async rewrites() {
    return [
      {
        source: '/budbook-app/:path*',
        destination: '/budbook-app/index.html',
      },
      {
        source: '/budbook-app',
        destination: '/budbook-app/index.html',
      },
      {
        source: '/budbeat-app/:path*',
        destination: 'http://localhost:3002/budbeat-app/:path*',
      },
      {
        source: '/budbeat-app',
        destination: 'http://localhost:3002/budbeat-app',
      },
    ];
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
