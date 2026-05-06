import type {NextConfig} from 'next';

/** Remote BudBeat shell; set in production. Local dev defaults to the usual Vite port when unset. */
const budbeatOrigin =
  process.env.BUDBEAT_APP_ORIGIN?.replace(/\/$/, '') ||
  (process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3002' : '');

if (process.env.NODE_ENV === 'production' && !process.env.BUDBEAT_APP_ORIGIN) {
  console.warn(
    '[cupr_app] WARNING: BUDBEAT_APP_ORIGIN is not set in production. ' +
    'Routes under /budbeat-app/* will return 404. Set this variable to the BudBeat app origin.',
  );
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    // SVGs in `/public/proprietary/*.svg` are author-controlled illustrations that we serve
    // through `next/image`; the strict CSP below blocks scripts inside the SVG.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  transpilePackages: ['motion'],
  async rewrites() {
    const budbookStatic = [
      {
        source: '/budbook-app/:path*',
        destination: '/budbook-app/index.html',
      },
      {
        source: '/budbook-app',
        destination: '/budbook-app/index.html',
      },
    ] as const;

    if (!budbeatOrigin) {
      return [...budbookStatic];
    }

    return [
      ...budbookStatic,
      {
        source: '/budbeat-app/:path*',
        destination: `${budbeatOrigin}/budbeat-app/:path*`,
      },
      {
        source: '/budbeat-app',
        destination: `${budbeatOrigin}/budbeat-app`,
      },
    ];
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // File watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
