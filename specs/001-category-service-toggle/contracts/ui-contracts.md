# UI/Data Contracts: Category-Based Service Selection

## Toggle Component Contract

- **Props**:
  - `items: Array<{ id: string; label: string }>` – ordered button list (categories or services)
  - `activeId: string` – currently selected id
  - `onSelect: (id: string) => void` – click/keyboard handler
  - `variant?: "category" | "service"` – optional styling/aria hint
- **Behavior**:
  - Renders accessible `<button>` elements with `aria-pressed` reflecting `activeId`
  - Supports keyboard focus/activation; no page reloads
  - Responsive: horizontal row on desktop, stacked on small screens via Tailwind breakpoints

## Homepage Rendering Contract

- **Input data**:
  - Page data defines `buttons` (category ids/labels) and `defaultId`
  - Shared services map keyed by `Service.slug` grouped under categories
  - Categories `Design` and `Commercial` may include `cta { text, href }` and no rendered cards
- **Behavior**:
  - On selection, filter services by `categoryId` and render cards with existing card layout
  - When category has `cta`, show message + link instead of cards

## Service Page Rendering Contract (e.g., Gardening Maintenance)

- **Input data**:
  - Page data defines `buttons` (service slugs/labels) and `defaultId`
  - Shared services map provides `detail` content (paragraph + image) per service
- **Behavior**:
  - On selection, swap detail section content to the selected service; hide others
  - If `detail` missing, render placeholder copy/image

## Data Contract (shared services file)

- Export structure:
  - `services: Record<string, Service>` keyed by slug
  - `categories: Record<string, Category>` keyed by category id with `serviceSlugs` or `cta`
- Contract alignment: Matches fields defined in `data-model.md`; page data files reference only ids/labels and optional CTA.
