# Tasks: Navbar Enhancement

**Input**: Design documents from `/specs/001-enhance-navbar/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare reusable navbar workspace and shared config locations.

- [X] T001 Create `app/components/navbar/` folder structure for shared navbar component files.
- [X] T002 [P] Create `app/data/navigation.ts` to host static nav config matching contracts/navigation-config.md.
- [X] T003 [P] Add `app/components/navbar/types.ts` for NavItem/SubNavItem types reused across stories.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared styling hooks and base layout integration for all stories.

- [X] T004 Reserve the Navbar mount point in `app/layout.tsx` (no placeholder render); actual import/render happens once the component is built in T010.
- [X] T005 [P] Document Tailwind tokens (spacing, colors, typography) to reuse in navbar in `specs/001-enhance-navbar/quickstart.md` if not already listed.
- [X] T006 [P] Set up navbar base CSS utilities (transparent header, transition durations ≤300ms) in `app/globals.css` or component-level styles.

---

## Phase 3: User Story 1 - First-impression navbar transition (Priority: P1) MVP

**Goal**: Tall transparent navbar on load with light elements that shrinks on scroll, hides brand name, and switches to standard colors.

**Independent Test**: On desktop, load page at top, see tall transparent navbar with logo+name; scroll slightly to see compact state with brand name hidden, logo scaled down, and standard colors without layout shift.

### Implementation for User Story 1

- [X] T007 [P] [US1] Implement Navbar base component structure (header/nav, brand logo+name, nav list placeholder, Cart button) in `app/components/navbar/Navbar.tsx`.
- [X] T008 [US1] Implement scroll state hook/class toggle to switch between tall/transparent and compact/solid states in `app/components/navbar/Navbar.tsx`.
- [X] T009 [P] [US1] Apply Tailwind styling for initial tall transparent state and compact scrolled state (light-to-standard color swap, height/spacing transitions) in `app/components/navbar/Navbar.tsx`.
- [X] T010 [US1] Wire Navbar into `app/layout.tsx` replacing placeholder to ensure site-wide reuse.

**Checkpoint**: P1 navbar renders tall/transparent on load and transitions smoothly on scroll.

---

## Phase 4: User Story 2 - Desktop navigation with dropdowns (Priority: P2)

**Goal**: Desktop hover/focus dropdowns for Landscaping and Gardening with correct sublinks and smooth close behavior.

**Independent Test**: On desktop width, hover/focus Landscaping/Gardening to see correct submenu items; menus close on leave/blur or link selection; other top-level links keep layout stable.

### Implementation for User Story 2

- [X] T011 [P] [US2] Render top-level nav items from `app/data/navigation.ts` in `app/components/navbar/Navbar.tsx` with centered alignment.
- [X] T012 [US2] Implement hover/focus dropdown behavior for Landscaping and Gardening (open on hover/focus, close on leave/blur) in `app/components/navbar/Navbar.tsx`.
- [X] T013 [P] [US2] Style desktop dropdown panels (spacing, background, shadow, transitions ≤300ms) using Tailwind in `app/components/navbar/Navbar.tsx`.
- [X] T014 [US2] Add accessibility attributes (`aria-expanded`, keyboard focus handling, Escape/blur close) for dropdown triggers and items in `app/components/navbar/Navbar.tsx`.

**Checkpoint**: P2 desktop dropdowns are functional, styled, and accessible.

---

## Phase 5: User Story 3 - Mobile/tablet menu toggle (Priority: P3)

**Goal**: Toggle button near Cart reveals stacked nav links; Landscaping/Gardening act as tap-to-expand accordions; menu closes on outside/toggle/link selection.

**Independent Test**: On tablet/mobile widths, menu is hidden by default; toggle opens stacked links; Landscaping/Gardening accordions reveal sublinks; menu closes via toggle or link tap; header alignment preserved.

### Implementation for User Story 3

- [X] T015 [US3] Implement menu toggle button beside Cart and default hidden stacked menu for small breakpoints in `app/components/navbar/Navbar.tsx`.
- [X] T016 [P] [US3] Implement accordion behavior for Landscaping/Gardening within stacked menu (aria-expanded, smooth open/close) in `app/components/navbar/Navbar.tsx`.
- [X] T017 [P] [US3] Style stacked menu for tablet/mobile (spacing, separators, transitions) using Tailwind in `app/components/navbar/Navbar.tsx`.
- [X] T018 [US3] Add close behaviors for stacked menu on link selection, toggle, or outside click/blur in `app/components/navbar/Navbar.tsx`.

**Checkpoint**: P3 mobile/tablet nav toggle and accordions function and close correctly.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, accessibility, and documentation updates across stories.

- [X] T019 [P] Document manual responsive QA steps (desktop/tablet/mobile, scroll transition, dropdowns, accordions) in `specs/001-enhance-navbar/quickstart.md`.
- [X] T020 [P] Verify contrast and focus-visible states against existing palette in `app/components/navbar/Navbar.tsx` and adjust Tailwind classes as needed.
- [X] T021 [P] Optimize transition values to eliminate jitter and confirm no layout shift in `app/components/navbar/Navbar.tsx`.
- [X] T022 Align navbar spacing/padding with existing theme tokens in `app/globals.css` or `app/components/navbar/Navbar.tsx`.

---

## Dependencies & Execution Order

- Phases must run in order: Setup → Foundational → US1 (P1) → US2 (P2) → US3 (P3) → Polish.
- User stories are independent once Foundational is complete; US1 should complete before US2/US3 to lock scroll/structure.
- Tasks marked [P] can run in parallel when file paths do not conflict.

### User Story Dependencies

- **US1**: Depends on Phase 2 completion.
- **US2**: Depends on Phase 2 and US1 structure/styling.
- **US3**: Depends on Phase 2 and US1 structure; can proceed in parallel with US2 after US1.

### Parallel Execution Examples

- During Setup: T002 and T003 in parallel.
- US2: T011 and T013 in parallel after T011 scaffold; T012/T014 sequential for behavior/accessibility.
- US3: T016 and T017 in parallel after T015 toggle exists.

---

## Implementation Strategy

- MVP: Deliver US1 after Setup+Foundational to lock scroll behavior and reusable header.
- Incremental: Add US2 desktop dropdowns next, then US3 mobile toggle/accordions.
- Validation: After each story’s checkpoint, run manual QA per quickstart; ensure no automated tests are added.
