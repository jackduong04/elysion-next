# Data Model: Navbar Enhancement

**Feature**: 001-enhance-navbar  
**Date**: 2026-01-03

## Entities

### NavItem
- **Attributes**: `id` (string key), `label` (string), `href` (string | null when accordion-only), `children` (array<SubNavItem> | empty).
- **Relationships**: Parent of zero or more `SubNavItem`.
- **Validation**: `label` required; `href` required when `children` empty; ordering preserved as defined.

### SubNavItem
- **Attributes**: `id` (string key), `label` (string), `href` (string).
- **Relationships**: Belongs to one `NavItem`.
- **Validation**: `label` and `href` required; ordering preserved as defined.

### NavbarState
- **Attributes**: `isScrolled` (boolean), `isMobileMenuOpen` (boolean), `openDropdown` (string | null for desktop hover/focus), `openAccordion` (string | null for mobile accordion).
- **Relationships**: Tracks UI state applied to NavItem/SubNavItem rendering.
- **Validation**: `isScrolled` driven by scroll threshold; only one of `openDropdown` or `openAccordion` active per breakpoint.

## Notes
- Nav configuration is static/local; no persistence or remote fetching.
- Accordion parents (Landscaping, Gardening) may omit `href` to keep the parent non-navigational on mobile.
