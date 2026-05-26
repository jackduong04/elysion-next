# Elysion Google Ads Landing Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build two conversion-focused Google Ads landing pages — `/lp/garden-maintenance/` and `/lp/decking/` — that turn paid traffic into "Get a Free Quote" submissions, on-brand with elysion.co.nz.

**Architecture:** Dedicated data-driven LP component set in `app/components/lp/` (shared by both pages), each route a thin file wiring content data → components. Site chrome (NavBar/Footer/floating Contact modal) is suppressed on `/lp/*` via the existing `usePathname` conditional-render pattern; each LP renders its own logo-only header + sticky mobile Call button. Form posts to web3forms and pushes GTM dataLayer events.

**Tech Stack:** Next.js 16 App Router (`output: 'export'`, `trailingSlash: true`), React 19, Tailwind v4, react-hook-form + zod, `next/image`, GTM (`GTM-KMQRPMK2`).

**Testing note:** No test runner exists in this repo and the brief doesn't ask for one (YAGNI). Per-task verification is `npx tsc --noEmit` (types) + `npm run lint` (eslint). UI behaviour is verified in **Task 20** by dogfooding both pages at 375px + desktop via the gstack `/browse` skill, plus a final `npm run build`. Commit after each task.

**Reference spec:** `docs/superpowers/specs/2026-05-25-elysion-google-ads-landing-pages-design.md`

---

## File Structure

**Create:**
- `app/lib/tracking.ts` — `pushDataLayer` helper (GTM events)
- `app/components/lp/types.ts` — content types for all LP sections
- `app/components/lp/StickyCallButton.tsx`
- `app/components/lp/LpHeader.tsx`
- `app/components/lp/LpHero.tsx`
- `app/components/lp/LpFeatureList.tsx`
- `app/components/lp/LpBenefits.tsx`
- `app/components/lp/LpProof.tsx`
- `app/components/lp/LpProcess.tsx`
- `app/components/lp/LpPricing.tsx`
- `app/components/lp/LpQuoteForm.tsx`
- `app/components/lp/LpFaq.tsx`
- `app/components/lp/LpFinalCta.tsx`
- `app/components/lp/index.ts` — barrel export
- `app/components/navbar/ConditionalNavBar.tsx`
- `app/components/forms/ConditionalContactForm.tsx`
- `app/data/pages-content/lp/garden-maintenance.ts`
- `app/data/pages-content/lp/decking.ts`
- `app/lp/garden-maintenance/page.tsx`
- `app/lp/decking/page.tsx`

**Modify:**
- `app/components/footer/ConditionalFooter.tsx` — also hide on `/lp/*`
- `app/layout.tsx` — use `ConditionalNavBar` + `ConditionalContactForm`

**Shared types live in** `app/components/lp/types.ts`; **shared tracking in** `app/lib/tracking.ts`. Content (copy) is fully separated into `app/data/pages-content/lp/*`.

---

## Task 1: Suppress site chrome on `/lp/*` routes

**Files:**
- Modify: `app/components/footer/ConditionalFooter.tsx`
- Create: `app/components/navbar/ConditionalNavBar.tsx`
- Create: `app/components/forms/ConditionalContactForm.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Extend ConditionalFooter to hide on LP routes**

Replace the body of `app/components/footer/ConditionalFooter.tsx` with:

```tsx
'use client';

// Node modules
import { usePathname } from 'next/navigation';

// Components
import { Footer } from './Footer';

export const ConditionalFooter = () => {
  const pathname = usePathname();

  // No footer on the About page or on conversion landing pages
  if (pathname === '/about/' || pathname.startsWith('/lp/')) {
    return null;
  }

  return <Footer />;
};
```

- [ ] **Step 2: Create ConditionalNavBar**

Create `app/components/navbar/ConditionalNavBar.tsx`:

```tsx
'use client';

// Node modules
import { usePathname } from 'next/navigation';

// Components
import { NavBar } from './NavBar';

export const ConditionalNavBar = () => {
  const pathname = usePathname();

  // Landing pages render their own logo-only header (LpHeader)
  if (pathname.startsWith('/lp/')) {
    return null;
  }

  return <NavBar />;
};
```

- [ ] **Step 3: Create ConditionalContactForm**

Create `app/components/forms/ConditionalContactForm.tsx`:

```tsx
'use client';

// Node modules
import { usePathname } from 'next/navigation';

// Components
import { ContactForm } from './ContactForm';

export const ConditionalContactForm = () => {
  const pathname = usePathname();

  // The floating Contact modal is suppressed on landing pages so it does not
  // collide with the LP sticky Call button.
  if (pathname.startsWith('/lp/')) {
    return null;
  }

  return <ContactForm />;
};
```

- [ ] **Step 4: Wire the conditional wrappers into the root layout**

In `app/layout.tsx`, update the imports (lines ~8-10):

```tsx
import { ConditionalNavBar } from './components/navbar/ConditionalNavBar';
import { ConditionalContactForm } from './components/forms/ConditionalContactForm';
import { ConditionalFooter } from './components/footer/ConditionalFooter';
```

(Remove the now-unused `NavBar` and `ContactForm` imports.) Then update the body JSX:

```tsx
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <ConditionalNavBar />
        {children}
        <ConditionalFooter />
        <ConditionalContactForm />
      </body>
```

- [ ] **Step 5: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add app/components/footer/ConditionalFooter.tsx app/components/navbar/ConditionalNavBar.tsx app/components/forms/ConditionalContactForm.tsx app/layout.tsx
git commit -m "feat(lp): suppress site chrome on /lp/* routes"
```

---

## Task 2: LP content types

**Files:**
- Create: `app/components/lp/types.ts`

- [ ] **Step 1: Write the types**

Create `app/components/lp/types.ts`:

```ts
export type LpMeta = {
  /** Short identifier used in tracking payloads, e.g. "garden-maintenance" */
  lp: string;
  title: string;
  description: string;
  /** Canonical path, e.g. "/lp/garden-maintenance" */
  canonical: string;
};

export type LpHeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Background image, root-relative (next/image applies basePath) */
  background: string;
  backgroundAlt: string;
};

export type LpFeature = {
  /** Inline SVG icon key resolved by LpFeatureList */
  icon: 'mower' | 'hedge' | 'leaf' | 'plant' | 'tools' | 'timber' | 'composite' | 'pergola';
  title: string;
  description: string;
};

export type LpFeatureListContent = {
  eyebrow: string;
  title: string;
  description: string;
  features: LpFeature[];
};

export type LpBenefit = {
  title: string;
  description: string;
};

export type LpBenefitsContent = {
  eyebrow: string;
  title: string;
  benefits: LpBenefit[];
};

export type LpTestimonial = {
  quote: string;
  author: string;
};

export type LpProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type LpProofContent = {
  eyebrow: string;
  title: string;
  testimonials: LpTestimonial[];
  images: LpProjectImage[];
};

export type LpProcessStep = {
  title: string;
  description: string;
};

export type LpProcessContent = {
  eyebrow: string;
  title: string;
  steps: LpProcessStep[];
};

export type LpPricingContent = {
  eyebrow: string;
  /** e.g. "Most regular maintenance starts from $[X]/visit [CONFIRM WITH JACK]" */
  line: string;
  note: string;
};

export type LpFaqItem = {
  question: string;
  answer: string;
};

export type LpFaqContent = {
  eyebrow: string;
  title: string;
  items: LpFaqItem[];
};

export type LpFinalCtaContent = {
  title: string;
  subtitle: string;
};

export type LpContent = {
  meta: LpMeta;
  hero: LpHeroContent;
  features: LpFeatureListContent;
  benefits: LpBenefitsContent;
  proof: LpProofContent;
  process: LpProcessContent;
  pricing: LpPricingContent;
  faq: LpFaqContent;
  finalCta: LpFinalCtaContent;
};
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/types.ts
git commit -m "feat(lp): add LP content types"
```

---

## Task 3: Tracking helper

**Files:**
- Create: `app/lib/tracking.ts`

- [ ] **Step 1: Write the helper**

Create `app/lib/tracking.ts`:

```ts
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type LpTrackEvent = 'cta_click' | 'phone_click' | 'form_submit';

/**
 * Push an event into the GTM dataLayer (GTM-KMQRPMK2 is loaded in the root
 * layout). Safe to call on the client only; no-ops during SSR/static export.
 */
export function pushDataLayer(
  event: LpTrackEvent,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lib/tracking.ts
git commit -m "feat(lp): add GTM dataLayer tracking helper"
```

---

## Task 4: StickyCallButton

**Files:**
- Create: `app/components/lp/StickyCallButton.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/StickyCallButton.tsx`:

```tsx
'use client';

import { pushDataLayer } from '../../lib/tracking';

type StickyCallButtonProps = {
  lp: string;
};

export function StickyCallButton({ lp }: StickyCallButtonProps) {
  return (
    <a
      href="tel:+642040680173"
      data-event="phone_click"
      data-location="sticky"
      onClick={() => pushDataLayer('phone_click', { lp, location: 'sticky' })}
      className={`
        fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full
        bg-elysion-forest px-5 py-3 text-sm font-semibold uppercase tracking-widest
        text-elysion-cream shadow-xl/30 transition hover:bg-elysion-olive
        active:scale-95 lg:hidden
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        focus-visible:ring-elysion-gold
      `}
      aria-label="Call Elysion Landscaping now"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      Call now
    </a>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/StickyCallButton.tsx
git commit -m "feat(lp): add sticky mobile call button"
```

---

## Task 5: LpHeader

**Files:**
- Create: `app/components/lp/LpHeader.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpHeader.tsx`. Logo-only sticky header on a cream band; single exit (logo → home) plus a phone link.

```tsx
'use client';

import Image from 'next/image';
import { pushDataLayer } from '../../lib/tracking';

type LpHeaderProps = {
  lp: string;
};

export function LpHeader({ lp }: LpHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-elysion-sand/60 bg-elysion-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="/" aria-label="Elysion Landscaping home" className="flex items-center">
          <Image
            src="/vectors/elysion_logo_dark.svg"
            alt="Elysion Landscaping"
            width={150}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </a>
        <a
          href="tel:+642040680173"
          data-event="phone_click"
          data-location="header"
          onClick={() => pushDataLayer('phone_click', { lp, location: 'header' })}
          className="text-sm font-semibold uppercase tracking-widest text-elysion-forest transition hover:text-elysion-olive"
        >
          020 4068 0173
        </a>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpHeader.tsx
git commit -m "feat(lp): add logo-only LP header"
```

---

## Task 6: LpHero

**Files:**
- Create: `app/components/lp/LpHero.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpHero.tsx`. Uses `next/image` `fill` + `priority` for the background (avoids the basePath prefix bug), `hero-overlay` for legibility, primary CTA scrolling to `#quote`, secondary Call CTA.

```tsx
'use client';

import Image from 'next/image';
import { pushDataLayer } from '../../lib/tracking';
import type { LpHeroContent } from './types';

type LpHeroProps = {
  content: LpHeroContent;
  lp: string;
};

export function LpHero({ content, lp }: LpHeroProps) {
  const { eyebrow, title, subtitle, background, backgroundAlt } = content;

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <Image
        src={background}
        alt={backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-elysion-gold">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-elysion-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-elysion-cream/90 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#quote"
            data-event="cta_click"
            data-location="hero"
            onClick={() => pushDataLayer('cta_click', { lp, location: 'hero' })}
            className={`
              inline-flex items-center justify-center rounded-full bg-elysion-forest
              px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-elysion-cream
              shadow-xl transition duration-300 hover:-translate-y-0.5 hover:bg-elysion-olive
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+642040680173"
            data-event="phone_click"
            data-location="hero"
            onClick={() => pushDataLayer('phone_click', { lp, location: 'hero' })}
            className={`
              inline-flex items-center justify-center rounded-full border border-elysion-cream/70
              px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-elysion-cream
              transition duration-300 hover:bg-elysion-cream/10
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
          >
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpHero.tsx
git commit -m "feat(lp): add LP hero with primary + call CTAs"
```

---

## Task 7: LpFeatureList

**Files:**
- Create: `app/components/lp/LpFeatureList.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpFeatureList.tsx`. Renders a labelled icon grid. Icons are inline SVGs keyed by `LpFeature.icon`.

```tsx
import type { JSX } from 'react';
import type { LpFeatureListContent, LpFeature } from './types';

const ICONS: Record<LpFeature['icon'], JSX.Element> = {
  mower: <path d="M3 17h11v-3H6l-2-4H2m12 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm9-7V6h4l2 4" />,
  hedge: <path d="M4 20V10a4 4 0 0 1 8 0 4 4 0 0 1 8 0v10M4 14h16M9 4l3 3 3-3" />,
  leaf: <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Zm0 0c0-3.5 1-8 7-10" />,
  plant: <path d="M12 22V12m0 0C12 8 9 5 5 5c0 4 3 7 7 7Zm0 0c0-4 3-7 7-7 0 4-3 7-7 7Z" />,
  tools: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7L4 21l7-7a4 4 0 0 0 5.4-5.4l-2 2-2.1-2.1 2-2Z" />,
  timber: <path d="M3 5h18v4H3zM3 11h18v4H3zM3 17h18v2H3z" />,
  composite: <path d="M4 4h16v16H4zM4 9h16M4 14h16M9 4v16M14 4v16" />,
  pergola: <path d="M3 8l9-4 9 4M5 8v12M19 8v12M5 12h14M5 16h14" />,
};

type LpFeatureListProps = {
  content: LpFeatureListContent;
};

export function LpFeatureList({ content }: LpFeatureListProps) {
  const { eyebrow, title, description, features } = content;

  return (
    <section className="bg-elysion-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-elysion-forest sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-elysion-ink/70">{description}</p>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex gap-4 rounded-2xl border border-elysion-sand bg-white/40 p-6"
            >
              <span className="shrink-0 text-elysion-olive" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[feature.icon]}
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-elysion-forest">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-elysion-ink/70">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpFeatureList.tsx
git commit -m "feat(lp): add feature/materials list section"
```

---

## Task 8: LpBenefits

**Files:**
- Create: `app/components/lp/LpBenefits.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpBenefits.tsx`. Three "Why Elysion" cards on a forest band.

```tsx
import type { LpBenefitsContent } from './types';

type LpBenefitsProps = {
  content: LpBenefitsContent;
};

export function LpBenefits({ content }: LpBenefitsProps) {
  const { eyebrow, title, benefits } = content;

  return (
    <section className="bg-elysion-forest py-16 text-elysion-cream sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-gold">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-elysion-cream/15 bg-elysion-cream/5 p-7"
            >
              <h3 className="text-xl font-semibold text-elysion-cream">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-elysion-cream/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpBenefits.tsx
git commit -m "feat(lp): add Why Elysion benefits cards"
```

---

## Task 9: LpProof (testimonials + image strip)

**Files:**
- Create: `app/components/lp/LpProof.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpProof.tsx`. Below the fold → images `loading="lazy"`. Uses `next/image` with explicit width/height in a responsive grid.

```tsx
import Image from 'next/image';
import type { LpProofContent } from './types';

type LpProofProps = {
  content: LpProofContent;
};

export function LpProof({ content }: LpProofProps) {
  const { eyebrow, title, testimonials, images } = content;

  return (
    <section className="bg-elysion-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-elysion-forest sm:text-4xl">
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col justify-between rounded-2xl border border-elysion-sand bg-white/40 p-6"
            >
              <blockquote className="text-elysion-ink/80">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold uppercase tracking-wider text-elysion-olive">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {images.map((image) => (
            <figure
              key={image.src}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                loading="lazy"
                sizes="(max-width: 640px) 50vw, 25vw"
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-elysion-ink/55 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-elysion-cream">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpProof.tsx
git commit -m "feat(lp): add testimonials + project image strip"
```

---

## Task 10: LpProcess

**Files:**
- Create: `app/components/lp/LpProcess.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpProcess.tsx`. Numbered steps; works for 3 (Pg1) or 4 (Pg2).

```tsx
import type { LpProcessContent } from './types';

type LpProcessProps = {
  content: LpProcessContent;
};

export function LpProcess({ content }: LpProcessProps) {
  const { eyebrow, title, steps } = content;

  return (
    <section className="bg-elysion-sand/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-elysion-forest sm:text-4xl">
          {title}
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-elysion-sand bg-elysion-cream p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-elysion-forest text-base font-semibold text-elysion-cream">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-elysion-forest">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-elysion-ink/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpProcess.tsx
git commit -m "feat(lp): add process steps section"
```

---

## Task 11: LpPricing

**Files:**
- Create: `app/components/lp/LpPricing.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpPricing.tsx`. Soft transparency band.

```tsx
import type { LpPricingContent } from './types';

type LpPricingProps = {
  content: LpPricingContent;
};

export function LpPricing({ content }: LpPricingProps) {
  const { eyebrow, line, note } = content;

  return (
    <section className="bg-elysion-cream py-14">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <p className="mt-4 text-2xl font-semibold text-elysion-forest sm:text-3xl">
          {line}
        </p>
        <p className="mt-3 text-sm text-elysion-ink/60">{note}</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpPricing.tsx
git commit -m "feat(lp): add indicative pricing band"
```

---

## Task 12: LpQuoteForm

**Files:**
- Create: `app/components/lp/LpQuoteForm.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpQuoteForm.tsx`. Lighter form (name/phone/suburb/optional message), zod + react-hook-form, web3forms POST, GTM `form_submit`, inline success (no redirect), Google Ads conversion placeholder.

```tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { pushDataLayer } from '../../lib/tracking';

const WEB3FORMS_ACCESS_KEY = 'bc5c9e68-b456-4b56-aadb-63453b520e4c';

const quoteSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .regex(/^[a-zA-Z\s]*$/, {
      message: 'Name should only contain letters and spaces',
    }),
  phone: z.string().regex(/^(?:\+64|0)[2-9][\d\s-]{7,11}$/, {
    message: 'Please enter a valid New Zealand phone number',
  }),
  suburb: z.string().min(2, { message: 'Please enter your suburb' }),
  message: z.string().optional().or(z.literal('')),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

type LpQuoteFormProps = {
  /** Tracking id, e.g. "garden-maintenance" */
  lp: string;
  /** Human-readable source label sent to web3forms, e.g. "Garden Maintenance LP" */
  pageLabel: string;
};

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 bg-elysion-sand/30 border rounded-xl focus:ring-2
   focus:ring-elysion-olive outline-none transition-all placeholder:text-elysion-ink/40
   ${hasError ? 'border-elysion-rust focus:ring-elysion-rust' : 'border-elysion-sand'}`;

const labelClass =
  'block text-sm font-medium text-elysion-forest tracking-wide';
const errorClass = 'text-elysion-rust text-xs mt-1 font-medium italic';

export function LpQuoteForm({ lp, pageLabel }: LpQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle',
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          page: pageLabel,
          subject: `New quote request — ${pageLabel}`,
          from_name: 'Elysion Landing Page',
          access_key: WEB3FORMS_ACCESS_KEY,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        reset();
        pushDataLayer('form_submit', { lp });
        // TODO: Google Ads conversion — conversion ID/label supplied later.
        // window.gtag?.('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXX' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="scroll-mt-20 bg-elysion-sand/30 py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="rounded-2xl bg-elysion-cream p-6 shadow-xl sm:p-10">
          <h2 className="text-3xl font-semibold text-elysion-forest sm:text-4xl">
            Get a free quote
          </h2>
          <p className="mt-2 text-elysion-ink/70">
            Tell us a little about your project and we&apos;ll be in touch.
          </p>

          {submitStatus === 'success' ? (
            <div className="mt-8 rounded-xl border border-elysion-olive bg-elysion-olive/10 p-6 text-center text-elysion-forest">
              <p className="font-medium">
                Thanks — we&apos;ve got your details. Jack will be in touch
                shortly. In a hurry? Call us on{' '}
                <a
                  href="tel:+642040680173"
                  data-event="phone_click"
                  data-location="form_success"
                  onClick={() =>
                    pushDataLayer('phone_click', { lp, location: 'form_success' })
                  }
                  className="font-semibold underline decoration-elysion-olive underline-offset-2"
                >
                  020 4068 0173
                </a>
                .
              </p>
            </div>
          ) : (
            <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-1.5">
                <label htmlFor="lp-name" className={labelClass}>
                  Full name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="lp-name"
                  placeholder="Jane Doe"
                  className={inputClass(Boolean(errors.name))}
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lp-phone" className={labelClass}>
                  Phone number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="lp-phone"
                  placeholder="020 4068 0173"
                  className={inputClass(Boolean(errors.phone))}
                />
                {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lp-suburb" className={labelClass}>
                  Suburb *
                </label>
                <input
                  {...register('suburb')}
                  type="text"
                  id="lp-suburb"
                  placeholder="Silverdale"
                  className={inputClass(Boolean(errors.suburb))}
                />
                {errors.suburb && (
                  <p className={errorClass}>{errors.suburb.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lp-message" className={labelClass}>
                  Tell us about your project
                </label>
                <textarea
                  {...register('message')}
                  id="lp-message"
                  rows={4}
                  placeholder="What can we help you with?"
                  className={`${inputClass(false)} resize-none`}
                />
              </div>

              {submitStatus === 'error' && (
                <p className="rounded-xl border border-elysion-rust bg-elysion-rust/10 p-3 text-center text-sm font-medium text-elysion-rust">
                  Something went wrong. Please try again or call us on 020 4068 0173.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full rounded-xl bg-elysion-forest py-4 text-lg font-semibold uppercase
                  tracking-widest text-elysion-cream shadow-md transition-colors
                  hover:bg-elysion-olive disabled:cursor-not-allowed disabled:opacity-50
                `}
              >
                {isSubmitting ? 'Sending...' : 'Get my free quote'}
              </button>
              <p className="text-center text-sm text-elysion-ink/60">
                We&apos;ll get back to you within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpQuoteForm.tsx
git commit -m "feat(lp): add lighter inline quote form with tracking"
```

---

## Task 13: LpFaq

**Files:**
- Create: `app/components/lp/LpFaq.tsx`

- [ ] **Step 1: Write the component**

Create `app/components/lp/LpFaq.tsx`. Native `<details>/<summary>` accordion (no JS dependency, accessible).

```tsx
import type { LpFaqContent } from './types';

type LpFaqProps = {
  content: LpFaqContent;
};

export function LpFaq({ content }: LpFaqProps) {
  const { eyebrow, title, items } = content;

  return (
    <section className="bg-elysion-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-elysion-forest sm:text-4xl">
          {title}
        </h2>

        <div className="mt-8 divide-y divide-elysion-sand border-y border-elysion-sand">
          {items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-elysion-forest">
                {item.question}
                <span className="shrink-0 text-elysion-olive transition group-open:rotate-45" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-elysion-ink/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/components/lp/LpFaq.tsx
git commit -m "feat(lp): add FAQ accordion"
```

---

## Task 14: LpFinalCta + barrel export

**Files:**
- Create: `app/components/lp/LpFinalCta.tsx`
- Create: `app/components/lp/index.ts`

- [ ] **Step 1: Write LpFinalCta**

Create `app/components/lp/LpFinalCta.tsx`. Closing CTA band; primary scrolls to `#quote`, secondary calls.

```tsx
'use client';

import { pushDataLayer } from '../../lib/tracking';
import type { LpFinalCtaContent } from './types';

type LpFinalCtaProps = {
  content: LpFinalCtaContent;
  lp: string;
};

export function LpFinalCta({ content, lp }: LpFinalCtaProps) {
  const { title, subtitle } = content;

  return (
    <section className="bg-elysion-forest py-16 text-center text-elysion-cream sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-elysion-cream/80">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#quote"
            data-event="cta_click"
            data-location="final"
            onClick={() => pushDataLayer('cta_click', { lp, location: 'final' })}
            className={`
              inline-flex items-center justify-center rounded-full bg-elysion-cream
              px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-elysion-forest
              shadow-xl transition hover:-translate-y-0.5 hover:bg-elysion-sand
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+642040680173"
            data-event="phone_click"
            data-location="final"
            onClick={() => pushDataLayer('phone_click', { lp, location: 'final' })}
            className={`
              inline-flex items-center justify-center rounded-full border border-elysion-cream/70
              px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-elysion-cream
              transition hover:bg-elysion-cream/10
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
          >
            Call 020 4068 0173
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write the barrel export**

Create `app/components/lp/index.ts`:

```ts
export { LpHeader } from './LpHeader';
export { LpHero } from './LpHero';
export { LpFeatureList } from './LpFeatureList';
export { LpBenefits } from './LpBenefits';
export { LpProof } from './LpProof';
export { LpProcess } from './LpProcess';
export { LpPricing } from './LpPricing';
export { LpQuoteForm } from './LpQuoteForm';
export { LpFaq } from './LpFaq';
export { LpFinalCta } from './LpFinalCta';
export { StickyCallButton } from './StickyCallButton';
export type {
  LpContent,
  LpMeta,
  LpHeroContent,
  LpFeatureListContent,
  LpFeature,
  LpBenefitsContent,
  LpProofContent,
  LpProcessContent,
  LpPricingContent,
  LpFaqContent,
  LpFinalCtaContent,
} from './types';
```

- [ ] **Step 3: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add app/components/lp/LpFinalCta.tsx app/components/lp/index.ts
git commit -m "feat(lp): add final CTA + barrel export"
```

---

## Task 15: Garden Maintenance content data

**Files:**
- Create: `app/data/pages-content/lp/garden-maintenance.ts`

- [ ] **Step 1: Write the content**

Create `app/data/pages-content/lp/garden-maintenance.ts`:

```ts
import type { LpContent } from '../../../components/lp/types';

export const gardenMaintenanceContent: LpContent = {
  meta: {
    lp: 'garden-maintenance',
    title: 'Garden Maintenance Auckland | Lawn Mowing & Hedge Trimming',
    description:
      'Reliable garden maintenance across Silverdale and the North Shore — lawn mowing, hedge trimming, and tidy-ups. Get a free quote from Elysion Landscaping.',
    canonical: '/lp/garden-maintenance',
  },
  hero: {
    eyebrow: 'Garden Maintenance',
    title: 'Reliable garden maintenance across Silverdale and the North Shore',
    subtitle:
      'Lawn mowing, hedge trimming, and seasonal tidy-ups — handled on time, every time, by a local Auckland team.',
    background: '/images/home-pg/hedge-in-sky.webp',
    backgroundAlt: 'A neatly trimmed hedge against a clear sky.',
  },
  features: {
    eyebrow: 'What we cover',
    title: 'Everything your garden needs, looked after',
    description:
      'Regular or one-off — we keep your outdoor space tidy, healthy, and easy to enjoy.',
    features: [
      {
        icon: 'mower',
        title: 'Lawn mowing',
        description: 'Regular or one-off mowing, edged and cleaned up properly.',
      },
      {
        icon: 'hedge',
        title: 'Hedge trimming',
        description: 'Crisp, even hedges shaped to keep their form as they grow.',
      },
      {
        icon: 'leaf',
        title: 'Garden tidy-ups',
        description: 'Weeding, pruning, and clearing to reset an overgrown space.',
      },
      {
        icon: 'plant',
        title: 'Planting and beds',
        description: 'Fresh planting and bed care that keeps borders looking full.',
      },
      {
        icon: 'tools',
        title: 'General maintenance',
        description: 'The ongoing odd jobs that keep a garden in good order.',
      },
    ],
  },
  benefits: {
    eyebrow: 'Why Elysion',
    title: 'Maintenance you don’t have to think about',
    benefits: [
      {
        title: 'Reliable, on time, every time',
        description:
          'We turn up when we say we will and keep your garden on a steady schedule.',
      },
      {
        title: 'Auckland-owned, locally based',
        description:
          'A local team that knows North Shore gardens, soils, and seasons.',
      },
      {
        title: 'Tidy site, no surprises on the bill',
        description:
          'We leave the site clean and agree the price up front — no nasty add-ons.',
      },
    ],
  },
  proof: {
    eyebrow: 'What our clients say',
    title: 'Trusted by Auckland homeowners',
    testimonials: [
      {
        quote:
          'Our lawns and hedges have never looked better. They just quietly get it done.',
        author: 'Emily F., Silverdale',
      },
      {
        quote:
          'Same friendly team every visit, always on time. Exactly what we wanted.',
        author: 'Daniel W., Albany',
      },
      {
        quote:
          'They tidied up a badly overgrown garden and now keep it perfect year-round.',
        author: 'Laura K., Whenuapai',
      },
    ],
    images: [
      {
        src: '/images/maintenance-pg/hedge-trim01.webp',
        alt: 'Freshly trimmed hedge along a garden path.',
        caption: 'Hedge trimming',
      },
      {
        src: '/images/maintenance-pg/dairy-flat02.webp',
        alt: 'Maintained lawn and planted garden beds.',
        caption: 'Dairy Flat',
      },
      {
        src: '/images/maintenance-pg/henderson02.webp',
        alt: 'Tidy lawn bordered by clipped plantings.',
        caption: 'Henderson',
      },
      {
        src: '/images/maintenance-pg/whenuapai01.webp',
        alt: 'Well-kept garden with mown lawn.',
        caption: 'Whenuapai',
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'Simple from the first call',
    steps: [
      {
        title: 'Get a quote',
        description:
          'Tell us about your garden and we’ll send a clear, fair price.',
      },
      {
        title: 'We agree a plan',
        description:
          'Pick a one-off tidy-up or a regular schedule that suits you.',
      },
      {
        title: 'We turn up and do it',
        description:
          'Our team arrives on time, does the work, and leaves it tidy.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    line: 'Most regular maintenance starts from $[X]/visit',
    note: 'Final pricing depends on garden size and frequency. [CONFIRM WITH JACK]',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        question: 'How much is a one-off tidy-up?',
        answer:
          'It depends on the size and condition of the garden. Send us a few details for a quick, no-obligation quote — most one-off tidy-ups are priced after a short look at the space. [CONFIRM WITH JACK]',
      },
      {
        question: 'Do you do recurring maintenance contracts?',
        answer:
          'Yes. We offer weekly, fortnightly, and monthly schedules, as well as one-off visits. You can adjust or pause your schedule whenever you need.',
      },
      {
        question: 'What areas do you cover?',
        answer:
          'We cover Silverdale, the wider North Shore, and greater Auckland. If you’re nearby, just ask and we’ll let you know.',
      },
      {
        question: 'Are you insured?',
        answer:
          'Yes — Elysion Landscaping is fully insured, so you’re covered for the work we carry out on your property.',
      },
    ],
  },
  finalCta: {
    title: 'Ready for a tidier garden?',
    subtitle:
      'Get a free quote today and let a reliable local team take garden maintenance off your plate.',
  },
};
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/data/pages-content/lp/garden-maintenance.ts
git commit -m "feat(lp): add garden maintenance content"
```

---

## Task 16: Garden Maintenance page + metadata

**Files:**
- Create: `app/lp/garden-maintenance/page.tsx`

- [ ] **Step 1: Write the page**

Create `app/lp/garden-maintenance/page.tsx`. `metadata` sets noindex + canonical; renders LP components in spec order.

```tsx
import type { Metadata } from 'next';

import { gardenMaintenanceContent as content } from '../../data/pages-content/lp/garden-maintenance';
import {
  LpHeader,
  LpHero,
  LpFeatureList,
  LpBenefits,
  LpProof,
  LpProcess,
  LpPricing,
  LpQuoteForm,
  LpFaq,
  LpFinalCta,
  StickyCallButton,
} from '../../components/lp';

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: content.meta.canonical },
  robots: { index: false, follow: true },
};

export default function GardenMaintenanceLandingPage() {
  const { lp } = content.meta;

  return (
    <>
      <LpHeader lp={lp} />
      <main className="bg-elysion-cream text-elysion-ink">
        <LpHero content={content.hero} lp={lp} />
        <LpFeatureList content={content.features} />
        <LpBenefits content={content.benefits} />
        <LpProof content={content.proof} />
        <LpProcess content={content.process} />
        <LpPricing content={content.pricing} />
        <LpQuoteForm lp={lp} pageLabel="Garden Maintenance LP" />
        <LpFaq content={content.faq} />
        <LpFinalCta content={content.finalCta} lp={lp} />
      </main>
      <StickyCallButton lp={lp} />
    </>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lp/garden-maintenance/page.tsx
git commit -m "feat(lp): add garden maintenance landing page"
```

---

## Task 17: Decking content data

**Files:**
- Create: `app/data/pages-content/lp/decking.ts`

- [ ] **Step 1: Write the content**

Create `app/data/pages-content/lp/decking.ts`:

```ts
import type { LpContent } from '../../../components/lp/types';

export const deckingContent: LpContent = {
  meta: {
    lp: 'decking',
    title: 'Deck Builders Auckland | Timber & Composite Decks',
    description:
      'Custom timber and composite decks built across Auckland’s North Shore. Fully insured, structurally sound, on time. Get a free quote from Elysion Landscaping.',
    canonical: '/lp/decking',
  },
  hero: {
    eyebrow: 'Decking',
    title: 'Custom decks built to last, across Auckland’s North Shore',
    subtitle:
      'Timber and composite decks designed and built by a local team — structurally sound, beautifully finished, and delivered on time.',
    background: '/images/carpentry-pg/kumeu01-wide.webp',
    backgroundAlt: 'A custom-built timber deck beside a landscaped garden.',
  },
  features: {
    eyebrow: 'Materials & options',
    title: 'Built your way',
    description:
      'Choose the materials and add-ons that suit how you’ll use the space — we’ll guide you through the trade-offs.',
    features: [
      {
        icon: 'timber',
        title: 'Timber decking',
        description:
          'Premium hardwoods like kwila and vitex for a warm, natural finish.',
      },
      {
        icon: 'composite',
        title: 'Composite decking',
        description:
          'Low-maintenance composite (e.g. Trex) that resists fading and rot.',
      },
      {
        icon: 'pergola',
        title: 'Pergolas & screens',
        description:
          'Add shade, privacy, and shelter with matching pergolas and screens.',
      },
    ],
  },
  benefits: {
    eyebrow: 'Why Elysion',
    title: 'Decks done properly',
    benefits: [
      {
        title: 'Premium build quality',
        description:
          'Careful detailing and quality materials for a deck that ages well.',
      },
      {
        title: 'Fully insured, engineered right',
        description:
          'Structural work done to code, with the consents and engineering sorted.',
      },
      {
        title: 'On-time delivery',
        description:
          'Clear timelines and steady communication from first call to handover.',
      },
    ],
  },
  proof: {
    eyebrow: 'Recent builds',
    title: 'Decks across the North Shore',
    testimonials: [
      {
        quote:
          'Our new deck completely changed how we use the back of the house. Faultless work.',
        author: 'Sarah M., Silverdale',
      },
      {
        quote:
          'They handled the consent and engineering and kept us informed the whole way.',
        author: 'Thomas B., Warkworth',
      },
      {
        quote:
          'Beautiful finish and built rock-solid. Exactly the quality we hoped for.',
        author: 'Rebecca T., Kumeu',
      },
    ],
    images: [
      {
        src: '/images/carpentry-pg/kumeu03.webp',
        alt: 'Timber deck with steps leading to a garden.',
        caption: 'Kumeu',
      },
      {
        src: '/images/carpentry-pg/warkworth01.webp',
        alt: 'Custom deck beside a modern home.',
        caption: 'Warkworth',
      },
      {
        src: '/images/home-pg/gallery-img/silverdale01.webp',
        alt: 'Wooden deck overlooking a lush, planted backyard.',
        caption: 'Silverdale',
      },
      {
        src: '/images/carpentry-pg/kumeu01-wide.webp',
        alt: 'Wide timber deck integrated into a landscaped garden.',
        caption: 'Kumeu',
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'From idea to finished deck',
    steps: [
      {
        title: 'Consultation',
        description:
          'We visit, understand how you’ll use the space, and talk materials.',
      },
      {
        title: 'Design',
        description:
          'We design the deck and handle any consent or engineering needed.',
      },
      {
        title: 'Build',
        description:
          'Our team builds to a clear timeline with quality at every step.',
      },
      {
        title: 'Handover',
        description:
          'We walk you through the finished deck and how to care for it.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    line: 'Most decks start from $[X]/sqm depending on materials',
    note: 'Final pricing depends on materials, size, and site. [CONFIRM WITH JACK]',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        question: 'How long does a deck take?',
        answer:
          'Most residential decks take one to three weeks of on-site work once materials are ready. Larger or elevated decks needing engineering take longer — we’ll give you a clear timeline with your quote. [CONFIRM WITH JACK]',
      },
      {
        question: 'Do I need permits or consent?',
        answer:
          'Some decks need building consent (generally those over a certain height or attached to the house). We assess this early and handle the consent process for you where it’s required.',
      },
      {
        question: 'Which materials should I choose?',
        answer:
          'Timber like kwila and vitex gives a warm, natural look; composite such as Trex is low-maintenance and long-lasting. We’ll talk through budget, upkeep, and style to help you decide.',
      },
      {
        question: 'What warranty do you offer?',
        answer:
          'Our workmanship is guaranteed, and materials carry their manufacturer warranties. We’ll confirm the exact terms in writing with your quote. [CONFIRM WITH JACK]',
      },
    ],
  },
  finalCta: {
    title: 'Ready to build your deck?',
    subtitle:
      'Get a free quote and start planning a deck built to last across Auckland’s North Shore.',
  },
};
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/data/pages-content/lp/decking.ts
git commit -m "feat(lp): add decking content"
```

---

## Task 18: Decking page + metadata

**Files:**
- Create: `app/lp/decking/page.tsx`

- [ ] **Step 1: Write the page**

Create `app/lp/decking/page.tsx`:

```tsx
import type { Metadata } from 'next';

import { deckingContent as content } from '../../data/pages-content/lp/decking';
import {
  LpHeader,
  LpHero,
  LpFeatureList,
  LpBenefits,
  LpProof,
  LpProcess,
  LpPricing,
  LpQuoteForm,
  LpFaq,
  LpFinalCta,
  StickyCallButton,
} from '../../components/lp';

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: content.meta.canonical },
  robots: { index: false, follow: true },
};

export default function DeckingLandingPage() {
  const { lp } = content.meta;

  return (
    <>
      <LpHeader lp={lp} />
      <main className="bg-elysion-cream text-elysion-ink">
        <LpHero content={content.hero} lp={lp} />
        <LpFeatureList content={content.features} />
        <LpBenefits content={content.benefits} />
        <LpProof content={content.proof} />
        <LpProcess content={content.process} />
        <LpPricing content={content.pricing} />
        <LpQuoteForm lp={lp} pageLabel="Decking LP" />
        <LpFaq content={content.faq} />
        <LpFinalCta content={content.finalCta} lp={lp} />
      </main>
      <StickyCallButton lp={lp} />
    </>
  );
}
```

- [ ] **Step 2: Typecheck + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/lp/decking/page.tsx
git commit -m "feat(lp): add decking landing page"
```

---

## Task 19: Full build verification

**Files:** none (verification only)

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: build succeeds; output includes static routes `/lp/garden-maintenance` and `/lp/decking` (exported as `out/lp/garden-maintenance/index.html` and `out/lp/decking/index.html` due to `trailingSlash: true`).

- [ ] **Step 2: Confirm noindex + canonical in exported HTML**

Run:
```bash
grep -o '<meta name="robots"[^>]*>' out/lp/garden-maintenance/index.html
grep -o '<link rel="canonical"[^>]*>' out/lp/garden-maintenance/index.html
```
Expected: `content="noindex, follow"` present; canonical href ends with `/lp/garden-maintenance`.

- [ ] **Step 3: Confirm no `undefined` in image URLs**

Run: `grep -c 'undefined/images' out/lp/garden-maintenance/index.html out/lp/decking/index.html || echo "clean"`
Expected: `clean` (0 matches) — confirms `next/image` basePath handling, no `${repo}` bug.

- [ ] **Step 4: Commit (if build produced tracked changes; otherwise skip)**

```bash
git status --porcelain
# If only out/ (gitignored) changed, nothing to commit.
```

---

## Task 20: Browser dogfood (375px + desktop)

**Files:** none (verification only). Use the gstack `/browse` skill against `npm run dev` (http://localhost:3000).

- [ ] **Step 1: Start the dev server**

Run (background): `npm run dev`
Wait for "Ready" on http://localhost:3000.

- [ ] **Step 2: Garden Maintenance — mobile (375px)**

With `/browse` at 375px width, open `http://localhost:3000/lp/garden-maintenance/` and verify:
- No site NavBar, no Footer, no floating "Contact" modal button.
- `LpHeader` logo + phone visible; sticky "Call now" button visible bottom-right.
- Hero H1 + value prop + both CTAs visible above the fold.
- "Get a Free Quote" hero CTA scrolls to the form (`#quote`).
- All section images render (no broken/`undefined` URLs).

- [ ] **Step 3: Form submission success state**

Fill name="Jane Doe", phone="020 4068 0173", suburb="Silverdale", submit. Verify the inline success message appears (no redirect) with the clickable phone number. In the browser console, confirm `window.dataLayer` contains a `form_submit` entry. (Test submit is fine; web3forms records it.)

- [ ] **Step 4: Tracking events**

Click the hero "Get a Free Quote" and a `tel:` link; in console verify `window.dataLayer` received `cta_click` and `phone_click` entries with `lp` + `location`.

- [ ] **Step 5: Desktop (1280px)**

Resize to 1280px: sticky "Call now" button is hidden (`lg:hidden`); layout grids read correctly; hero is balanced.

- [ ] **Step 6: Decking page spot-check**

Repeat Steps 2 and 5 for `http://localhost:3000/lp/decking/` (4-step process renders, portfolio strip shows, materials section correct).

- [ ] **Step 7: Stop dev server.** No commit (verification only). Report findings; if any check fails, fix in the relevant task's file and re-verify before marking complete.

---

## Self-Review (completed during planning)

**Spec coverage:**
- Page 1 sections 1–9 → Tasks 6,7,8,9,10,11,12,13,14 wired in Task 16. ✓
- Page 2 sections 1–10 → same components wired in Task 18 (4-step process supported by `LpProcess`). ✓
- Form spec (name/phone/suburb/optional message, no email/address, button copy, trust line, web3forms, inline success) → Task 12. ✓
- Tracking (`form_submit`, `phone_click`, `cta_click`, Ads conversion placeholder, `data-*`) → Tasks 3,4,5,6,12,14. ✓
- Mobile-first (375px, sticky call, one-scroll form, next/image lazy) → Tasks 4,6,9 + Task 20. ✓
- SEO meta (noindex/follow, per-page title/desc, canonical) → Tasks 16,18 + verified Task 19. ✓
- Minimal chrome → Task 1. ✓

**Placeholder scan:** Only intentional `[CONFIRM WITH JACK]` / `[CONFIRM IMAGE]` (none needed — chosen images are reasonable fits) and the deferred Ads conversion ID `// TODO`. No accidental TBDs in code steps.

**Type consistency:** `LpContent` shape in Task 2 matches every component prop (Tasks 6–14) and both data files (Tasks 15,17). `pushDataLayer(event, params)` signature consistent across Tasks 4,5,6,12,14. `lp` (id) vs `pageLabel` (web3forms label) used consistently.
