# Data Model: Category-Based Service Selection

## Entities

### Service
- **slug**: unique identifier (string, kebab-case)
- **name**: display name (string)
- **categoryId**: category slug this service belongs to (string)
- **card**: content for cards (title, optional blurb/summary, image reference)
- **detail**: content for service pages (paragraph text, image reference); falls back to placeholder if absent

### Category
- **id**: unique identifier (string, kebab-case)
- **label**: display label for buttons (string)
- **serviceSlugs**: ordered list of `Service.slug` values for this category (array)
- **cta** (optional): `{ text, href }` when no services should render (e.g., Design, Commercial)

### PageToggleConfig
- **buttons**: ordered array of `{ id, label }` entries that map to category ids (homepage) or service slugs (service pages)
- **defaultId**: id to select on load (string)
- **context**: `"category"` or `"service"` to indicate toggle mode for the page

## Relationships

- Category 1..* Service via `serviceSlugs`; services reference back via `categoryId`.
- PageToggleConfig references Category ids (homepage) or Service slugs (service pages) to drive button rendering and selections.

## Validation & Constraints

- Each `Service.slug` and `Category.id` must be unique and stable across pages.
- `PageToggleConfig.defaultId` must exist in `buttons`.
- Categories that define `cta` should omit `serviceSlugs` from rendering in the homepage grid.
- Missing `detail` content must trigger placeholder copy/image rather than empty UI.
