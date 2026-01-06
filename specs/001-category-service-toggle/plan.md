# Implementation Plan: Category-Based Service Selection

**Branch**: `001-category-service-toggle` | **Date**: 2026-01-05 | **Spec**: specs/001-category-service-toggle/spec.md  
**Input**: Feature specification from `/specs/001-category-service-toggle/spec.md`

## Summary

Implement category/service toggles that pull button labels from per-page data files, render category-specific service cards on the homepage, and show per-service detail sections on service pages. Centralize all service data in a shared file for reuse, add a reusable category/service button component, and keep UI aligned with the existing Next.js + Tailwind theme.

## Technical Context

**Language/Version**: TypeScript (Next.js App Router, current project version)  
**Primary Dependencies**: Next.js, React, Tailwind CSS (as configured)  
**Storage**: N/A (static in-repo data files)  
**Testing**: Manual responsive verification per constitution (no automated tests)  
**Target Platform**: Web (desktop, tablet, mobile)  
**Project Type**: Web frontend (single Next.js app)  
**Performance Goals**: Category/service toggle updates render within ~1s on broadband across breakpoints  
**Constraints**: Front-end only; reuse existing card layout; follow Tailwind spacing/typography tokens; no new styling engines  
**Scale/Scope**: Marketing site pages; small concurrent usage; limited service catalog

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Principle I: Plan responsive behavior for desktop/tablet/mobile; use Tailwind breakpoints (e.g., `sm`, `md`, `lg`) to avoid overflow and keep buttons/sections stacked on narrow screens.  
- Principles II & III: Use semantic containers (`section`, `div`, `button`, `ul/li`) with Tailwind utilities for spacing/typography; keep card layout unchanged while updating data.  
- Principle IV: Front-end only with static data; no backend or automated tests introduced.  
- Principle V: Document manual review steps covering category/service toggles and responsive stacking at `sm/md/lg`, verifying active states, CTA links, and placeholder handling.

## Project Structure

### Documentation (this feature)

```text
specs/001-category-service-toggle/
├─ plan.md          # This file
├─ research.md      # Phase 0 output
├─ data-model.md    # Phase 1 output
├─ quickstart.md    # Phase 1 output
└─ contracts/       # Phase 1 output
```

### Source Code (repository root)

```text
app/
├─ components/
│  ├─ sections/          # ServicesSection and related UI
│  └─ navbar/
├─ data/pages-content/   # Per-page content data (home, gardening-children, landscaping-children)
├─ gardening/            # Service-specific pages (e.g., maintenance)
└─ landscaping/          # Other service pages
```

**Structure Decision**: Single Next.js frontend; data sourced from `app/data/pages-content`, shared service data file to be added under `app/data/` (or nested) with a reusable button component under `app/components/`.

## Complexity Tracking

No constitutional violations anticipated; no additional complexity justifications required.

## Phase 0: Outline & Research

- Extract unknowns from Technical Context: none flagged; defaults chosen.  
- Research tasks executed (see `research.md`): centralized service data file, page data drives button labels, reusable toggle component, CTA handling for Design/Commercial, placeholder strategy.  
- Outcome: All clarifications resolved; proceed to Phase 1.

## Phase 1: Design & Contracts

### Data Model
- Define shared `Service` entity keyed by slug with `name`, `category`, `card` content (title, optional blurb, image), and `detail` content (paragraph, image).  
- Define `Category` entity with `id`, `label`, optional CTA (text + href) and list of `serviceSlugs`.  
- Define per-page toggle config (`PageToggleConfig`) carrying button order/default and mapping to `Category` or `Service` slugs, sourced from page data files under `app/data/pages-content/`.

### UI/Interaction Contracts
- Reusable Toggle component accepts items `{id, label, active}` plus onSelect handler; supports horizontal layout on desktop, stacked on small screens; exposes aria-pressed for accessibility.  
- Homepage: toggles categories; shows card grid fed by filtered services; shows CTA block when category has no services.  
- Service page (e.g., gardening/maintenance): toggles services; shows detail section (paragraph + image) for active service.

### Constitution Check (post-design)
- Responsive: document Tailwind breakpoints for toggle stack and grid adjustments (`sm`, `md`, `lg`).  
- Semantics & Tailwind: use `section`, `header`, `ul/li`, `button`, `article`; rely on existing card classes; keep typography/spacing via Tailwind utilities.  
- Front-end only: all data from static TS files; no network; no automated tests.  
- Manual review plan: verify toggles, active states, CTA links, placeholder behavior on desktop/tablet/mobile.

## Phase 2: Planning Notes

- Implementation sequencing:  
  1) Add shared service data file.  
  2) Update page data files to reference shared service/category labels and button order/default.  
  3) Build reusable Toggle component.  
  4) Wire homepage ServicesSection to use page data + shared services.  
  5) Add service detail section and toggle behavior to gardening maintenance page using shared data.  
  6) Manual QA per constitution.

- Artifacts to produce:  
  - `data-model.md`  
  - `contracts/` docs (UI/data contracts)  
  - `quickstart.md`
