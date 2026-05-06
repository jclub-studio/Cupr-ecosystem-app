# CŪPR App

CŪPR is a unified hardware + B2B SaaS + consumer app ecosystem for cannabis retail and smoke shops. This Next.js application serves as the marketing and product showcase for the CŪPR ecosystem.

## The CŪPR Ecosystem

- **CŪPROs** - Compliance-native B2B SaaS platform for dispensaries and smoke shops
- **Hardware IP** - Premium consumer devices (Lockbox/Apache 110 lineage)
- **BudBook** - Training/enablement platform + consumer app with journal, social, and shop features

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables (copy `.env.example` to `.env.local` and configure):
   - `GEMINI_API_KEY` - Required for Gemini AI API calls
   - `APP_URL` - The URL where the app is hosted
   - `BUDBEAT_APP_ORIGIN` - (Optional) Remote BudBeat shell origin
   - `DISABLE_HMR` - (Optional) Set to "true" to disable Hot Module Replacement

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cloudflare Tunnel (public URL for local dev)

Expose **cupr_app** on port **3000** with a single tunnel: `/budbook-app` is static from this repo, and `/budbeat-app` is reverse-proxied to BudBeat on **3002** (see `next.config.ts`).

1. Install: `brew install cloudflared`
2. Run BudBeat: `cd "../Freestyle App/budbeat" && npm run dev`
3. Run cupr_app: `cd cupr_app && npm run dev`
4. Quick tunnel (ephemeral URL each run): `cloudflared tunnel --url http://127.0.0.1:3000`
5. Set `APP_URL` in `.env` to the printed `https://*.trycloudflare.com` URL for correct self-links.
6. For a stable hostname, use a [named tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/) and set `CUPR_TUNNEL_DEV_HOSTNAME` in `.env` to that hostname (in addition to `*.trycloudflare.com` in `allowedDevOrigins`).

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Remove `.next` build directory

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React
