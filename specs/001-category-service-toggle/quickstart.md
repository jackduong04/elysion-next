# Quickstart: Category-Based Service Selection

1) Add shared service data file (e.g., `app/data/services.ts`) exporting `services` and `categories` per `data-model.md`.
2) Update page data files (`app/data/pages-content/home.ts`, `app/data/pages-content/gardening-children/maintenance.ts`, etc.) to provide `buttons` and `defaultId` referencing shared ids; keep per-page ordering.
3) Create reusable Toggle component under `app/components/` that renders buttons from supplied items with active state and responsive layout.
4) Wire homepage `ServicesSection` to:
   - Read buttons/default from `home.ts`
   - Filter shared services by selected category for cards
   - Show CTA message/link when category defines `cta`
5) Wire service page (gardening maintenance) to:
   - Read service buttons/default from page data
   - Render detail section (paragraph + image) from shared services
   - Fallback to placeholder when detail missing
6) Manual QA (per constitution): verify toggle behavior, active states, CTA links, placeholder handling, and responsive stacking at `sm/md/lg`; ensure no automated tests added.

## Manual QA Notes

- Homepage services:
  - On desktop/tablet/mobile, switch categories (Landscaping, Gardening, Design, Commercial) and confirm cards swap accordingly; Design/Commercial show CTA with working links.
  - Verify active button styling stays visible when resizing.
  - Check toggle response feels immediate (<1s perceived delay) and no stale cards remain after switching.
- Gardening maintenance page:
  - On desktop/tablet/mobile, toggle services (Lawn Mowing, Hedge Trimming, Garden Maintenance, Seasonal Clear-outs) and confirm detail paragraph + image swap; placeholders show if detail missing.
  - Ensure buttons remain keyboard accessible (aria-pressed changes) and layout stacks cleanly on small screens.
