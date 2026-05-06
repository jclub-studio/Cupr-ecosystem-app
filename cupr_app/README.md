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
