# Elysion Google Ads Landing Pages — Design Spec

**Date:** 2026-05-25
**Status:** Approved (design); pending spec review
**Author:** Long Nguyen (with Claude)

## Goal

Build two service-specific, conversion-focused landing pages for paid Google Ads traffic:

1. **Garden Maintenance** — `/lp/garden-maintenance/`
2. **Decking** — `/lp/decking/`

Each page converts paid visitors into "Get a Free Quote" form submissions. Pages must feel on-brand with elysion.co.nz but be single-goal and tightly focused on conversion.

## Brand & Voice

- **Tokens** (Tailwind v4 `@theme` in `app/globals.css`): `elysion-cream #f4efe4`, `elysion-sand #e1d5bf`, `elysion-olive #6f7a55`, `elysion-forest #113017`, `elysion-ink #2c2b27`, `elysion-rust #a86449`, `elysion-gold #c6ab6e`.
- **Fonts:** Playfair Display (`--font-display`, headings) + Work Sans (`--font-body`).
- **Voice:** Calm, considered, premium, real-life focused. Landing-page voice is slightly more direct/outcome-focused than the main site (visitors arrived from a transactional search), but **no hard-sell** ("ACT NOW", "LIMITED TIME"). Premium-but-clear.

## Decisions (confirmed with user)

1. **Minimal conversion chrome** on LP routes: logo-only header, no footer, suppress the global floating Contact modal (replaced by sticky Call button). Reduces exit points.
2. **Form submits to web3forms** (reuse existing access key `bc5c9e68-b456-4b56-aadb-63453b520e4c`) so Jack receives real leads from day one. Still fires GA4/Ads tracking + inline success.
3. **Reuse existing photos**; flag loose fits with `[CONFIRM IMAGE]`.

## Architecture

### Routing
Project is Next.js App Router with `output: 'export'`, `trailingSlash: true`, `basePath` from `NEXT_PUBLIC_BASE_PATH` (`next.config.ts`). Routes become static folders:

- `app/lp/garden-maintenance/page.tsx`
- `app/lp/decking/page.tsx`

Each route file is thin: imports content data + renders LP section components (mirrors existing `app/<service>/page.tsx` pattern). Each exports a `metadata` object.

### Minimal chrome (conditional rendering)
Root `app/layout.tsx` renders `NavBar` + `ConditionalFooter` + the global `ContactForm` modal on every route. We follow the established `usePathname` pattern (as in `ConditionalFooter`) to hide them on `/lp/*`:

- **`ConditionalFooter`** — extend to also return `null` when `pathname.startsWith('/lp/')`.
- **`ConditionalNavBar`** — new wrapper around `NavBar`; returns `null` on `/lp/*`. `app/layout.tsx` renders `<ConditionalNavBar />` instead of `<NavBar />`.
- **`ConditionalContactForm`** — new wrapper around the global `ContactForm` modal; returns `null` on `/lp/*` (prevents the floating "Contact" button colliding with the sticky Call button).

Each LP page renders its own `LpHeader` (logo-only) + `StickyCallButton`.

Rationale: nested route-group layouts in App Router *nest inside* the root layout — they cannot remove `NavBar`/`Footer`/`ContactForm` that the root `<body>` renders. Conditional rendering by pathname is the existing, proven pattern in this codebase.

### New components — `app/components/lp/`
Shared by both pages, driven by content data. Typed via `app/components/lp/types.ts`.

| Component | Purpose | Notes |
|---|---|---|
| `LpHeader` | Logo-only sticky header | Single exit (logo → home). Uses `next/image` for logo (`vectors/elysion_logo_dark.svg` or light over a band). |
| `LpHero` | Hero: eyebrow, H1, one-sentence value prop, **primary CTA** (scroll to `#quote`), **secondary Call CTA** (`tel:`) | `next/image` `fill` + `priority` background; `hero-overlay` for legibility. Above the fold at 375px. |
| `LpFeatureList` | Pg1 "Services covered" / Pg2 "Materials & options" | Icon (inline SVG) or thumbnail + label + short blurb. |
| `LpBenefits` | 3 "Why Elysion" cards | Card grid. |
| `LpProof` | 3 short testimonials + 3–4 project image strip | Images `loading="lazy"`. |
| `LpProcess` | 3–4 numbered steps | Pg1: Get a quote → We agree a plan → We turn up and do it. Pg2: Consultation → Design → Build → Handover. |
| `LpPricing` | Soft transparency line | Placeholder amount marked `[CONFIRM WITH JACK]`. |
| `LpQuoteForm` | Lighter inline quote form | See Form section. Anchor target `#quote`. |
| `LpFaq` | 4–5 Q&A accordion | Native `<details>/<summary>` (no JS dependency, accessible). |
| `LpFinalCta` | Closing CTA band | Primary CTA (scroll to form) + Call CTA. |
| `StickyCallButton` | Mobile-only sticky call button, bottom-right | `tel:` link; hidden on `lg+`. Fires `phone_click`. |

### Content data — `app/data/pages-content/lp/`
- `garden-maintenance.ts`
- `decking.ts`

Each exports a typed content object (hero, features, benefits, proof + testimonials, process, pricing, faq, meta). Content separated from components, matching existing `pages-content` convention. Image `src` values are root-relative (e.g. `/images/...`) — see Images note.

## Page 1 — Garden Maintenance (`/lp/garden-maintenance/`)

**Target keywords:** lawn mowing auckland, hedge trimming silverdale, garden maintenance north shore, regular/weekly lawn mowing, garden tidy-up auckland.

**Sections, in order:**
1. **Hero** — H1: *"Reliable garden maintenance across Silverdale and the North Shore"*; one-sentence value prop; primary CTA "Get a Free Quote" (→ `#quote`); secondary "Call now" (`tel:+642040680173`); warm well-maintained-garden bg.
2. **Services covered** — Lawn mowing (regular or one-off); Hedge trimming; Garden tidy-ups; Planting and beds; General maintenance.
3. **Why Elysion** — 3 cards: "Reliable, on time, every time"; "Auckland-owned, locally based"; "Tidy site, no surprises on the bill".
4. **Social proof** — 3 short testimonials (placeholder copy ok) + 3–4 completed-job image strip.
5. **Process** — Get a quote → We agree a plan → We turn up and do it.
6. **Pricing** — *"Most regular maintenance starts from $[X]/visit"* `[CONFIRM WITH JACK]`.
7. **Form** — see Form section.
8. **FAQ** — "How much is a one-off tidy-up?"; "Do you do recurring maintenance contracts?"; "What areas do you cover?"; "Are you insured?".
9. **Final CTA** + sticky mobile call button.

**Images (reuse):** hero `home-pg/hedge-in-sky.webp`; strip `maintenance-pg/hedge-trim01.webp`, `maintenance-pg/dairy-flat02.webp`, `maintenance-pg/henderson02.webp`, `maintenance-pg/whenuapai01.webp`.

## Page 2 — Decking (`/lp/decking/`)

**Target keywords:** deck builders auckland, deck builders silverdale, timber deck builder auckland, decking installation north shore, composite decking installer.

**Sections, in order:**
1. **Hero** — H1: *"Custom decks built to last, across Auckland's North Shore"*; value prop; primary CTA + secondary Call CTA.
2. **Materials & options** — Timber (kwila, vitex); Composite (Trex); Pergolas / screens add-ons.
3. **Why Elysion** — premium build quality; fully insured; structural engineering done right; on-time delivery.
4. **Portfolio** — 4–6 deck project images with location captions (e.g. "Silverdale", "Warkworth", "Kumeu"). `[CONFIRM IMAGE]` where the existing photo isn't clearly a deck.
5. **Process** — Consultation → Design → Build → Handover.
6. **Testimonials** — 3 deck-specific testimonials (placeholder).
7. **Indicative pricing** — *"Most decks start from $[X]/sqm depending on materials"* `[CONFIRM WITH JACK]`.
8. **Form** — see Form section.
9. **FAQ** — "How long does a deck take?"; "Do I need permits/consent?"; "Which materials should I choose?"; "What warranty do you offer?".
10. **Final CTA** + sticky mobile call button.

**Images (reuse):** hero `carpentry-pg/kumeu01-wide.webp`; portfolio `carpentry-pg/kumeu03.webp`, `carpentry-pg/warkworth01.webp`, `home-pg/gallery-img/silverdale01.webp` (deck overlook). Mark any non-deck reuse `[CONFIRM IMAGE]`.

## Form spec (`LpQuoteForm`, both pages)

Lighter "Get a Free Quote" — intentional friction reduction vs. the homepage `ContactForm`. **No email, no address.**

| Field | Required | Notes |
|---|---|---|
| Full name | yes | min 2 chars, letters/spaces (match `ContactForm` rule) |
| Phone number | yes | NZ format regex `^(?:\+64|0)[2-9][\d\s-]{7,11}$` (match `ContactForm`) |
| Suburb | yes | free text — qualifies geo + starts the quote conversation |
| Tell us about your project | no | textarea |

- **Submit button:** "Get my free quote" (→ "Sending…" while submitting).
- **Trust line under button:** *"We'll get back to you within 24 hours."*
- **Stack:** react-hook-form + zod + `@hookform/resolvers/zod` (same as `ContactForm`); reuse `elysion-sand`/`elysion-forest` field styling.
- **Submission:** POST to `https://api.web3forms.com/submit` with `{ name, phone, suburb, message, page, subject, from_name, access_key }`. `page` identifies source (e.g. `"Garden Maintenance LP"` / `"Decking LP"`).
- **Success (no redirect, inline):** *"Thanks — we've got your details. Jack will be in touch shortly. In a hurry? Call us on 020 4068 0173."* (phone is a `tel:` link → fires `phone_click`).
- **Error:** inline retry message (match `ContactForm` error styling).

## Tracking

`app/lib/tracking.ts` exports `pushDataLayer(event: string, params?: Record<string, unknown>)` → guarded `window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event, ...params })`. GTM (`GTM-KMQRPMK2`) is already live in `app/layout.tsx`, so events flow through GTM. Also add `data-event="..."` attributes as a fallback selector for GTM triggers.

Events:
- **`cta_click`** — each "Get a free quote" scroll-to-form button (NOT the submit). Params: `{ lp, location: 'hero'|'final'|... }`.
- **`phone_click`** — every `tel:` link (hero, sticky button, header, success message). Params: `{ lp, location }`.
- **`form_submit`** — on successful submission. Params: `{ lp }`.
- **Google Ads conversion** — placeholder commented block in the submit success path:
  ```js
  // TODO: Google Ads conversion — conversion ID/label supplied later
  // gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXX' });
  ```

## Mobile-first

- Design/validate at **375px** first.
- Hero above the fold on mobile; form reachable in one scroll (in-page anchor `#quote`; hero/final CTAs scroll to it).
- **Sticky Call button** bottom-right, mobile-only (`hidden lg:...`). Does not overlap form submit area awkwardly.
- `next/image` for all photos: hero `fill` + `priority`; below-fold `loading="lazy"`.

## SEO meta (both pages)

Per-page `metadata` export overrides the layout default:
- `robots: { index: false, follow: true }` → renders `<meta name="robots" content="noindex, follow">`. LPs must not compete with organic.
- `title` + `description` specific to each page (passable, not organic-optimised).
- `alternates: { canonical: '/lp/garden-maintenance' }` (and `/lp/decking`) — canonical points to the LP itself.

## Images note (basePath gotcha)

`next/image` automatically applies `basePath` to string `src` values starting with `/`. Therefore LP image `src` values are written **root-relative without** the manual `${repo}` prefix used elsewhere for raw `<img>`/CSS `url()`. Using `next/image` (incl. `fill` for the hero) avoids the `NEXT_PUBLIC_BASE_PATH`-undefined prefix bug entirely. No raw `${repo}` concatenation in LP components.

## Out of scope / YAGNI

- No new backend/API route (web3forms handles delivery).
- No CMS/content editor — content is in TS data files.
- No A/B testing framework.
- No new images sourced — reuse + `[CONFIRM IMAGE]` flags.
- Real Google Ads conversion ID is deferred (placeholder + TODO).

## Verification

- `next build` succeeds; `eslint` clean.
- Dogfood both pages at 375px and desktop via gstack `/browse` against the dev server:
  - Hero + value prop + both CTAs visible above fold (375px).
  - Form: validation errors, successful submit → inline success state (no redirect), trust line present.
  - Sticky Call button visible on mobile, hidden on desktop; `tel:` correct.
  - `dataLayer` receives `cta_click`, `phone_click`, `form_submit` (check console).
  - No NavBar/Footer/floating Contact modal on LP routes.
  - `<meta name="robots" content="noindex, follow">` + canonical present in head.

## Reference files

- Theme: `app/globals.css`; layout/GTM/metadata: `app/layout.tsx`.
- Existing form to mirror: `app/components/forms/ContactForm.tsx`.
- Conditional-render pattern: `app/components/footer/ConditionalFooter.tsx`.
- Data/section pattern: `app/data/pages-content/home.ts`, `app/components/sections/*`.
- Config: `next.config.ts` (`output: 'export'`, `basePath`, `images.unoptimized`).
- Phone: `+642040680173` / display `020 4068 0173`.
