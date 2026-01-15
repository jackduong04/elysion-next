# Data Model: Center-Snapping Focus Carousel

## Entities

### Carousel Item
- Fields: `id` (string), `imageSrc` (string path to public asset), `alt` (string), `caption` (optional string), `order` (number)
- Relationships: ordered list within a carousel instance
- Rules: `imageSrc` must resolve to `public/images/project-img/`; `id` unique per carousel; `order` defines navigation sequence

### Navigation Controls
- Fields: `currentIndex` (number), `count` (number), `canPrev` (boolean), `canNext` (boolean)
- Relationships: references Carousel Item order
- Rules: `currentIndex` kept in range `[0, count-1]`; updates dots and button disabled states

### Autoplay State
- Fields: `enabled` (boolean), `intervalMs` (number), `stoppedByUser` (boolean), `prefersReducedMotion` (boolean)
- Relationships: drives progression of `currentIndex`
- Rules: Autoplay disabled when `prefersReducedMotion` is true; `stoppedByUser` permanently halts autoplay; interval consistent when enabled

## State Transitions
- Manual navigation (scroll/click/dot/button/keyboard) updates `currentIndex`, sets focus item, and sets `stoppedByUser = true`.
- Autoplay tick increments `currentIndex` modulo `count` only when `enabled` is true and `stoppedByUser` is false.
- Hover/focus over carousel temporarily pauses autoplay without toggling `stoppedByUser`; resume when hover/focus ends if not stopped.
