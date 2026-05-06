# CŪPR — Universal Data Ecosystem Map

> **Status:** Living document. This map describes the full data architecture that operates within and throughout the CŪPR business model. It is intended as the canonical reference for product, engineering, and strategic decisions.

---

## 1. Ecosystem Overview

CŪPR is a vertically integrated, hardware-anchored, data-driven platform for the premium cannabis market. Three co-dependent pillars generate, consume, and compound a shared proprietary data layer.

```
┌──────────────────────────────────────────────────────────────────────────┐
│                        CŪPR  ECOSYSTEM                                   │
│                                                                          │
│   ┌──────────────┐   ┌──────────────────────┐   ┌───────────────────┐   │
│   │   HARDWARE   │   │   CŪPROs B2B SaaS    │   │  CONSUMER APPS    │   │
│   │  (B2C / IP)  │   │  (Operator Platform) │   │ BudBook · BudBeat │   │
│   └──────┬───────┘   └──────────┬───────────┘   └────────┬──────────┘   │
│          │                      │                        │              │
│          └──────────────┬───────┘                        │              │
│                         ▼                                ▼              │
│              ┌──────────────────────────────────────────────┐           │
│              │         UNIVERSAL DATA LAYER (UDL)           │           │
│              │  First-party · Partner · Third-party · AI    │           │
│              └──────────────────────────────────────────────┘           │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 2. The Three Pillars

### 2A. Hardware (B2C / Proprietary IP)

**Products:** Apache 110, LockBox Ūtility Bong, Blitz 90 series, and patent-pending successor devices.

**Data produced:**
- Device registration events (hardware identity, SKU, batch)
- Session telemetry (if future firmware integration reaches the UDL)
- Purchase / warranty signals

**Data consumed:**
- Consumer preference segments (from BudBook Stash + Journal)
- Accessory compatibility signals for product roadmap

**Routes in cupr_app:** `/proprietary`, `/hardgoods`, `/softgoods`, `/consumables`, `/cupr-brand-app`

---

### 2B. CŪPROs — B2B Operator Platform

**Products:** Hosted website, compliant CMS, AI Studio, social tooling, data intelligence, channel + operational integrations.

**Operator segments:** Dispensaries, smoke shops, headshops, delivery services, brands.

**Data produced:**
- Operator inventory (Retail Inventory Tunnel / Meadow / Nabis / Canix sync)
- Menu + product catalog changes
- Staff interaction logs (floor-staff learning layer via BudBook Pro)
- Compliance-safe marketing touchpoints (social, print, digital ads)

**Data consumed:**
- Consumer behavioral data (BudBook first-party → operator dashboard)
- BudBook Profiles + purchase intent to route demand to operator storefront
- Industry third-party data (Weedmaps, Leafly, Dutchie feeds)

**Channel integrations:** BudBook Profiles, Google, Apple, Snapchat, Yelp, Weedmaps, Leafly, Dutchie, e-comm, in-store pickup, delivery.

**Operational integrations:** Meadow, Nabis, Canix, Flower Co.

**External runtime:** CŪPR.OS App (`https://c-pros-217895678902.us-west1.run.app/`)

**Routes in cupr_app:** `/web`, `/cms`, `/data`

---

### 2C. Consumer Apps — BudBook + BudBeat

#### BudBook

**Description:** Connected cannabis companion — Stash management, session journal, social discovery, in-app shop, budtender/operator Pro tier.

**Data produced:**
- **Stash:** User inventory (hardware, glass, tools, consumables) → feeds BudBeat Class system
- **Journal:** Session logs (device used, strain, terpene profiles, effects, mood, efficacy scores)
- **Social:** Follows, interactions, public/private visibility
- **Shop:** Purchase events, wishlist, referral signals
- **Pro:** Budtender-to-consumer interaction logs, product recommendation events

**Data consumed:**
- Strain/product catalog (dispensary + partner feeds)
- Operator proximity + stock availability (CŪPROs inventory tunnel)
- Terpene + efficacy profiles (third-party + proprietary research layer)

**Entity types** (`types/budbook.ts`):
| Entity | Key Fields |
|--------|-----------|
| `User` | profile, preferences, linked accounts |
| `Product` | strain, terpene profile (`TerpeneProfile`), type, effects |
| `Session` | device, product, duration, efficacy scores, mood, notes |
| `InventoryItem` | product ref, quantity, acquisition date, condition |
| `Accessory` | category, condition, hardware id |
| `Dispensary` | name, location, menu ref |

**Routes in cupr_app:** `/budbook?tab=intro|journal|social|shop|pro`, `/budbook-app` (embedded SPA via rewrite)

**Mock API layer:** `GET /api/apps/null/entities/{User,Product,Session,UserInventory,Dispensary,Accessory}`, `GET /api/apps/public/prod/public-settings/by-id/null`

---

#### BudBeat

**Description:** Live freestyle performance platform — group video sessions, synchronized beats, media library, party games, Stash-linked Class system.

**Data produced:**
- Session events (room created, participants, duration, beat used, game played)
- Performance metadata (rounds, scoring, MVP votes)
- Class display events (which Stash configuration shown to room peers)
- Beat provenance (AI-generated, user-uploaded, YouTube-sourced, community library)

**Data consumed:**
- BudBook Class data (read-only pull of user's Stash configuration)
- BudBook identity (profile, creative persona, freestyle history)
- Media library (AI beats, user uploads, YouTube, Apple Music, community library)

**Class system data flow:**
```
BudBook Stash (async, permanent) ──► Class constructed in BudBook
                                         │
                               Pre-session lobby
                                         │
                                ▼ Read-only pull ▼
                        BudBeat Player Icon (live video overlay)
                        Hover → frosted-glass Stash reveal panel
```

**Subapp:** Separate Next.js app (`Freestyle App/budbeat`, port 3002), proxied via `next.config.ts` rewrite at `/budbeat-app`.

**Routes in cupr_app (marketing):** `/budbeat?tab=video|media|games|integration`, `/budbeat-app` (proxied SPA)

---

## 3. Universal Data Layer (UDL)

The UDL is the cross-pillar intelligence engine. It aggregates, segments, and routes data signals into compounding value for all three pillars.

### 3A. Data Source Taxonomy

| Layer | Source | Examples | Owned by CŪPR |
|-------|--------|----------|---------------|
| **Proprietary First-Party** | BudBook user actions, operator activity in CŪPROs, hardware registrations | Journal entries, Stash inventory, session telemetry | ✅ Full |
| **Operator First-Party** | Dispensary POS + inventory via CŪPROs | Meadow, Nabis, Canix, Dutchie | ✅ Licensed from operator |
| **Partner / Channel** | Platform feeds with contractual data share | Weedmaps, Leafly, Apple Music, YouTube | ⚠️ Contractual |
| **Third-Party Industry** | Market intelligence, compliance data | Pricing indices, state compliance APIs | ❌ Purchased / public |
| **AI-Generated** | Gemini-powered content, beat generation, recommendations | AI Studio content, AI beat prompts, product descriptions | ✅ Full (output) |
| **End-User Behavioral** | Aggregated anonymized signals from consumer actions | Strain preference trends, session time distributions | ✅ Aggregated/anonymized |

---

### 3B. Core Data Entities (Canonical)

```
User ──────────────────────────────────────────────────────────┐
│ profile, preferences, linked accounts (Apple Music, YouTube) │
│                                                              │
├── Stash (UserInventory)                                      │
│   └── InventoryItem → links to Accessory or Product         │
│                                                              │
├── Class (BudBeat concept)                                    │
│   └── curated subset of Stash items                         │
│                                                              │
├── Journal                                                    │
│   └── Session → Product, Device, EfficacyScores, mood       │
│                                                              │
├── Social                                                     │
│   └── follows, interactions, public profile                  │
│                                                              │
└── BudBeat Performance History                               │
    └── room events, beats used, game results, Class shown     │

Product ───────────────────────────────────────────────────────┐
│ strain, type, terpene profile, effects                       │
│ sourced from: Dispensary catalog, user input, third-party    │

Session (Journal) ────────────────────────────────────────────┐
│ user, product, device, duration, notes, efficacy scores      │
│ BudBeat room ref (when session is a live room)               │

Dispensary ────────────────────────────────────────────────────┐
│ name, location, platform (CŪPROs), menu items                │
│ links to: Products, Operator account                         │

Operator (CŪPROs) ────────────────────────────────────────────┐
│ account, integrated channels, inventory feed, staff          │
│ links to: Dispensary, Product catalog, CMS content           │

BudBeat Room ─────────────────────────────────────────────────┐
│ host, participants, beat, duration, rounds, game results     │
│ links to: User (×N), Session, Class (×N)                    │

Hardware ─────────────────────────────────────────────────────┐
│ SKU, series, batch, registration, warranty state            │
│ links to: User (owner), Accessory (device type)             │
```

---

### 3C. Key Data Flows

#### Flow 1: Consumer → Operator (Demand Routing)
```
User browses BudBook Shop
    ↓ product interest signal
UDL aggregates intent
    ↓ routes to nearest CŪPROs operator with stock
Dispensary receives demand signal
    ↓ in-store pickup / delivery / BudBook Shop purchase
Operator conversion data feeds back to UDL
```

#### Flow 2: Stash → BudBeat (Live Identity)
```
User builds Stash in BudBook (async)
    ↓ constructs Class from Stash items
BudBeat lobby: Class selection from pre-built options
    ↓ read-only pull at session start
Live room: Class icon under video feed
    ↓ hover reveals Stash gear panel (frosted glass)
Peers see setup without interrupting session
```

#### Flow 3: Session Journal → Product Intelligence
```
User logs Journal entry post-session
    ↓ efficacy scores, mood, terpene correlation
UDL aggregates anonymized efficacy signals
    ↓ enriches Product terpene profiles
Feeds back to: Dispensary product recommendations,
               BudBook feed relevance ranking,
               CŪPR hardware product roadmap
```

#### Flow 4: Operator Inventory → Consumer Discovery
```
CŪPROs operator syncs inventory (Meadow / Nabis / Canix)
    ↓ product catalog normalized in UDL
BudBook Shop + Dispensary directory updated
    ↓ user searches for strain or product
Operator storefront surfaced with real-time availability
```

#### Flow 5: AI Studio → Multi-channel Content
```
Operator triggers AI content in CŪPROs AI Studio (Gemini)
    ↓ generates compliant marketing copy + creative assets
CMS distributes to: social, digital ads, print-on-demand
    ↓ content performance metrics captured
UDL uses engagement data to refine future content scoring
```

---

### 3D. Data Monetization Surface

| Product | Revenue Model | Data Input | Data Output |
|---------|--------------|-----------|-------------|
| CŪPROs SaaS subscriptions | Recurring B2B fee | Operator activity | Operator dashboard intel |
| CŪPROs Data Intelligence tier | Premium B2B fee | Aggregated consumer + market data | Operator-facing insights |
| BudBook Pro tier | Consumer subscription | Budtender interactions, floor staff | Enhanced discovery, loyalty |
| BudBook Shop | GMV % commission | Purchase intent, inventory feed | Conversion data |
| CŪPR Hardware | Direct sales | Registration, telemetry | Product roadmap signals |
| AI-generated media | Bundled in CŪPROs | Content requests + engagement | AI model fine-tuning |
| BudBeat Premium | Consumer subscription (future) | Session events, beats, games | Social graph, creative graph |

---

## 4. Network Effects Map

```
More Consumer Users (BudBook/BudBeat)
    ↓ more session + preference data
Better Product Intelligence
    ↓ higher dispensary conversion rates
More Operators adopt CŪPROs
    ↓ larger inventory catalog available to consumers
More Consumer Discovery Value
    ↓ more consumer users join
```

```
More CŪPR Hardware in Market
    ↓ more device registrations → hardware identity anchors in UDL
More authenticated, high-intent user sessions
    ↓ stronger first-party behavioral signal vs. anonymous competitors
Better targeting & personalization
    ↓ higher BudBook engagement, more CŪPROs operator demand routing
```

---

## 5. Open Architectural Gaps / Roadmap Items

| Gap | Current State | Target State |
|-----|--------------|-------------|
| `seo.ts` missing `/budbeat` entry | No sitemap entry, no `<title>` for BudBeat route | Add `budbeat` key to `ROUTE_METADATA` + `metadataFor('budbeat')` in `page.tsx` |
| `BudBeat` entity types | No `types/budbeat.ts` exists | Define `Room`, `Round`, `BeatSource`, `GameResult` entities |
| BudBeat mock API layer | No mock API for BudBeat rooms | Add `GET /api/apps/null/entities/Room` etc. mirroring BudBook pattern |
| Hardware telemetry | No firmware/device data pipeline described | Define device SDK events and UDL ingestion endpoint |
| UDL persistence layer | Fully in-memory / mock | Real database + event stream (e.g. Postgres + Kafka/Inngest) |
| BudBeat–BudBook data bridge | Architecture documented but no live integration code | Implement Class pull endpoint in BudBook, consumed by BudBeat lobby |
| Operator analytics dashboard | Described in `/data` marketing page | Build out as CŪPROs Data product within CŪPR.OS |
| AI beat generation | Described in BudBeat Media tab | Integrate generative audio API (Suno/Udio/ElevenLabs) with prompt-to-beat pipeline |
| Apple Music Sing integration | UI placeholder in MediaTab | Implement MusicKit JS + Apple Music Sing vocal reduction in BudBeat SPA |

---

## 6. Technology Stack Reference

| Layer | Technology | Location |
|-------|-----------|----------|
| Marketing + shell | Next.js 15 (App Router) | `cupr_app/` |
| BudBeat SPA | Next.js 16 (separate app) | `Freestyle App/budbeat/` |
| BudBook SPA | Base44-scaffolded React | `cupr_app/public/budbook-app/` |
| Proxy/rewrites | `next.config.ts` rewrites | `cupr_app/next.config.ts` |
| Mock API | Next.js route handlers | `cupr_app/app/api/` |
| AI content | Google Gemini | `GEMINI_API_KEY`, AI Studio in CŪPROs |
| B2B runtime | Cloud Run | `https://c-pros-217895678902.us-west1.run.app/` |
| Tunnel (dev) | Cloudflare Tunnel | `cloudflared`, `CUPR_TUNNEL_DEV_HOSTNAME` |
| Styling | Tailwind CSS + motion/react | `cupr_app/` |

---

## 7. Immediate Action Items

1. **Add `budbeat` to `seo.ts`** — give the BudBeat route proper metadata and sitemap inclusion.
2. **Create `types/budbeat.ts`** — formalize `Room`, `Round`, `BeatSource`, `GameResult`, `Class` entity shapes.
3. **BudBeat mock API** — mirror the BudBook mock layer so BudBeat SPA can run in demo mode.
4. **Class pull endpoint** — define the read-only BudBook → BudBeat Class API contract.
5. **Hardware entity model** — add `Hardware`, `DeviceRegistration` to the UDL entity map.
6. **Operator data dashboard** — scope the Data Intelligence tier as a CŪPROs CŪPR.OS module.

---

*Last updated: 2026-05-06. Maintained by: CŪPR Engineering / Product.*
