# Quickstart: Navbar Enhancement

**Feature**: 001-enhance-navbar  
**Branch**: 001-enhance-navbar  
**Goal**: Implement reusable responsive navbar with scroll shrink, desktop dropdowns, and mobile accordions using existing palette and Tailwind.

## Steps

1. **Create component**: Add `app/components/navbar/Navbar.tsx` (and supporting files if needed). Use `header` + `nav` semantics, `position: sticky` with top-0 and z-index to pin the bar.
2. **Config**: Define static nav data (see `contracts/navigation-config.md`) in `app/data/navigation.ts` or co-located with the component. Keep parents for Landscaping/Gardening non-navigational on mobile.
3. **Scroll state**: In the navbar component, track `isScrolled` with a small threshold (e.g., >0) to toggle a `scrolled` class that shrinks height, hides brand name, and swaps colors.
4. **Desktop dropdowns**: Use hover/focus to open dropdown panels for Landscaping and Gardening; close on blur/leave. Ensure focusable links and `aria-expanded` on triggers.
5. **Mobile/tablet toggle**: Add a menu toggle button next to Cart. Default hidden menu; slide/fade open as stacked list. Landscaping/Gardening act as accordions with `aria-expanded` and `button` triggers.
6. **Styling**: Use Tailwind utilities and existing color tokens from `globals.css`. Apply transition duration ≤300ms on height/opacity/transform. Avoid new palette entries.
7. **Integration**: Mount the navbar in `app/layout.tsx` so all pages reuse it.

## Manual QA (no automated tests)

- Desktop: initial tall transparent header with light elements; scroll once to confirm shrink, brand name hides, colors flip to standard; hover/focus dropdowns open with correct items and close on leave/blur.
- Tablet/Mobile: header shows Cart + menu toggle; menu closed by default; toggle opens stacked links; Landscaping/Gardening accordion open/close; selecting a link or tapping outside closes menu.
- Responsive checks: verify no horizontal overflow at common breakpoints (e.g., 640px, 768px, 1024px+); spacing/typography remain readable.
- Accessibility: Tab through links; confirm focus-visible styles; Escape or blur closes open dropdown/accordion; `aria-expanded` updates on toggles.

## Key Tailwind tokens to reuse

- Colors: `text-elysion-cream`, `text-elysion-forest`, `text-elysion-olive`, `text-elysion-rust`, `bg-elysion-cream`, `bg-elysion-forest`, `border-elysion-sand`.
- Spacing: `px-4`, `px-6`, `px-8`, `py-3`, `py-4`, `py-5`, `py-6`, `rounded-full`, `rounded-xl`, `rounded-2xl`.
- Typography: uppercase tracking ranges `tracking-[0.22em]`–`tracking-[0.3em]`, weights at `font-semibold` with `text-xs`/`text-sm`/`text-base`.
- Breakpoints: mobile stack and toggle below `lg`; desktop nav shown at `lg` and above.
