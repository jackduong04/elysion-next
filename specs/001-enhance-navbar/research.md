# Research: Navbar Enhancement

**Feature**: 001-enhance-navbar  
**Date**: 2026-01-03  
**Context**: Responsive, reusable navbar in Next.js App Router with Tailwind; no backend or tests; reuse existing palette.

## Findings

### Decision: Scroll shrink via CSS sticky + minimal JS flag
- **Rationale**: `position: sticky` header with a scroll threshold flag avoids layout shift and heavy listeners; toggling a `scrolled` class drives height, color, and logo/name visibility via CSS transitions.
- **Alternatives considered**: 
  - IntersectionObserver on a sentinel (adds complexity for a simple threshold).
  - Pure CSS `:has()` (browser support risk).

### Decision: Nav data modeled as static config
- **Rationale**: Static array of nav items and subitems keeps component reusable across pages and avoids fetching; aligns with front-end-only constraint.
- **Alternatives considered**:
  - Remote CMS/API (out of scope for front-end-only phase).
  - Hardcoded JSX inline (reduces reuse and maintainability).

### Decision: Desktop dropdowns on hover/focus; mobile accordions
- **Rationale**: Matches spec: hover/focus reveal on desktop; tap-to-expand accordions on smaller breakpoints; preserves access without hover reliance.
- **Alternatives considered**:
  - Click-to-open dropdowns on desktop (slower for pointer users).
  - Auto-expanding all sublinks on mobile (clutters vertical space).

### Decision: Transitions kept under 0.3s using Tailwind durations/easing
- **Rationale**: Meets success criteria for smoothness without sluggishness; use Tailwind transition utilities on height/opacity/transform where safe.
- **Alternatives considered**:
  - Longer animations (feel laggy).
  - No transitions (abrupt changes reduce polish).

### Decision: Accessibility patterns for menus
- **Rationale**: Use `nav`, `ul/li`, `button` for toggles; manage focus trapping only within open dropdown/accordion regions; ensure Escape/blur closes menus; aria-expanded/controls on toggles.
- **Alternatives considered**:
  - Div-based menus without semantics (hurts accessibility).
  - Focus traps for entire header (overkill for simple menus).
