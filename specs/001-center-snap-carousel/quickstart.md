# Quickstart: Center-Snapping Focus Carousel

## Prereqs
- Node and npm installed; dependencies already in repo.
- Branch: `001-center-snap-carousel`.

## Steps
1) Install deps (if needed): `npm install`.
2) Start dev server: `npm run dev`.
3) Open: http://localhost:3000/.
4) Navigate to homepage carousel and verify behaviors:
   - Scroll/drag: nearest item snaps to center and scales.
   - Click/tap item or dot: item centers and becomes focused; dots update.
   - Next/Prev buttons and arrow keys: move focus by one.
   - Autoplay: advances on interval until any manual action stops it permanently.
   - Hover/focus pauses autoplay; reduced-motion users see autoplay disabled.
   - No horizontal overflow on mobile; focus styles readable at `sm`, `md`, `lg`.
5) Manual QA notes: capture observations for desktop/tablet/mobile per Constitution Principles I–V.
