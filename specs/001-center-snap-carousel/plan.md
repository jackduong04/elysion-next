# Implementation Plan: Center-Snapping Focus Carousel

**Branch**: `001-center-snap-carousel` | **Date**: 2026-01-15 | **Spec**: specs/001-center-snap-carousel/spec.md  
**Input**: Feature specification from `/specs/001-center-snap-carousel/spec.md`

## Summary

Build a center-snapping, focus-based image carousel that supports scroll snapping, click-to-focus, dots and next/prev navigation, keyboard controls, and autoplay that halts permanently after any manual interaction while honoring reduced-motion preferences; integrate with homepage content using the provided project images and preserve smooth, responsive motion with Tailwind-styled UI.

## Technical Context

**Language/Version**: TypeScript (Next.js App Router)  
**Primary Dependencies**: Next.js, React, Tailwind CSS (configured in repo), Framer Motion for animations  
**Storage**: N/A (static data via in-repo fixtures)  
**Testing**: Manual verification only (per Constitution; no automated tests this phase)  
**Target Platform**: Web (desktop/tablet/mobile)  
**Project Type**: Web frontend (Next.js app directory)  
**Performance Goals**: Smooth scrolling/snapping at a 60fps feel; focus change within ~1s of interaction; control response within 200ms  
**Constraints**: Front-end only; no backend or API calls; respect prefers-reduced-motion; avoid horizontal overflow on small viewports  
**Scale/Scope**: Single carousel on homepage with small static image set (5 images); low concurrency, primarily UX-focused

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Principle I (Intentional Responsiveness): Plan desktop/tablet/mobile behaviors using Tailwind breakpoints `sm`, `md`, `lg` to prevent overflow; carousel snaps and scales while maintaining single-column flow on narrow widths.
- Principles II & III (Tailwind-Driven Semantics, Readable Typography & Spacing): Use semantic `section`, `div`, `figure`, `img`, `button` with Tailwind spacing/typography tokens already in project; avoid custom CSS; keep consistent padding and text styles.
- Principle IV (Front-End-Only Focus): UI only with static data from `app/data/pages-content/home.ts`; no APIs, auth, or persistence; no automated tests added.
- Principle V (Documentation & Progressive Review): Document manual review steps for desktop/tablet/mobile including snap behavior, focus styling, reduced-motion behavior, and autoplay-stop verification.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
ƒ"oƒ"?ƒ"? plan.md              # This file (/speckit.plan command output)
ƒ"oƒ"?ƒ"? research.md          # Phase 0 output (/speckit.plan command)
ƒ"oƒ"?ƒ"? data-model.md        # Phase 1 output (/speckit.plan command)
ƒ"oƒ"?ƒ"? quickstart.md        # Phase 1 output (/speckit.plan command)
ƒ"oƒ"?ƒ"? contracts/           # Phase 1 output (/speckit.plan command)
ƒ""ƒ"?ƒ"? tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
app/
ƒ"oƒ"?ƒ"? components/
ƒ",   ƒ"oƒ"?ƒ"? image-gallery/ImageGallery.tsx
ƒ"oƒ"?ƒ"? data/
ƒ",   ƒ"oƒ"?ƒ"? pages-content/home.ts
ƒ"oƒ"?ƒ"? layout.tsx
ƒ""ƒ"?ƒ"? page.tsx

public/
ƒ""ƒ"?ƒ"? images/project-img/ (carousel assets)

specs/
ƒ""ƒ"?ƒ"? 001-center-snap-carousel/ (planning docs)
```

**Structure Decision**: Single Next.js (App Router) frontend project; feature lives under `app/components/image-gallery` with data in `app/data/pages-content/home.ts` and usage in `app/page.tsx`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
