# Navigation Config Contract (Static)

**Feature**: 001-enhance-navbar  
**Context**: Front-end only; nav data is a static config consumed by the navbar component. No external API is called in this phase.

## Shape (TypeScript-style)

```ts
type NavItem = {
  id: string;
  label: string;
  href?: string;          // required if no children
  children?: SubNavItem[]; // optional; required for Landscaping/Gardening
};

type SubNavItem = {
  id: string;
  label: string;
  href: string;
};

type NavigationConfig = NavItem[];
```

## Validation Rules

- `label`: non-empty string.
- `href`: required when `children` is empty; optional for accordion-only parents on mobile.
- `children`: when present, must be an array of `SubNavItem`; ordering preserved.
- IDs are unique per item set; use stable keys for React rendering.

## Expected Config (summary)

- Top-level order: Home, Landscaping, Gardening, Commercial, Exterior Cleaning, About, Contact, Blogs.
- Landscaping children: Design; Decking; Fencing & Gates; Excavation & Concrete; Retaining Walls; Garden Beds; Drainage & Irrigation.
- Gardening children: Lawn Mowing; Garden Maintenance; Hedge Trimming; Seasonal Clearouts; Planting.
```
