# Tasks: Center-Snapping Focus Carousel

**Input**: Design documents from `/specs/001-center-snap-carousel/`  
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: Automated tests are deferred per Constitution IV; focus on manual responsive verification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm assets and environment before feature work

- [X] T001 Inventory carousel assets and draft alt text from `public/images/project-img/` for later data entry.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Data and prop shape needed by all stories

- [X] T002 Define carousel items array (ids, src, alt, optional caption) in `app/data/pages-content/home.ts` using project images.
- [X] T003 Wire homepage to pass the carousel items into `app/components/image-gallery/ImageGallery.tsx` via `app/page.tsx` (or related section entrypoint).
- [X] T004 Align `ImageGallery` prop types and default interval values in `app/components/image-gallery/ImageGallery.tsx` with the data shape from `home.ts`.

**Checkpoint**: Foundation ready—user stories can proceed.

---

## Phase 3: User Story 1 - Scroll and snap to focused image (Priority: P1) dYZ_ MVP

**Goal**: Scrolling horizontally snaps nearest item to center and highlights it as the sole focus item.  
**Independent Test**: On desktop, tablet, and mobile, manually scroll the list and confirm the nearest item always snaps centered with focus styling applied after each scroll release.

### Implementation for User Story 1

- [X] T005 [US1] Build scroll-snap carousel layout with semantic containers and Tailwind spacing in `app/components/image-gallery/ImageGallery.tsx`.
- [X] T006 [US1] Implement focused-index detection after scroll/drag end to center the nearest item and persist focus state in `app/components/image-gallery/ImageGallery.tsx`.
- [X] T007 [P] [US1] Apply Framer Motion scale/opacity variants to distinguish focused vs non-focused items in `app/components/image-gallery/ImageGallery.tsx`.

**Checkpoint**: User Story 1 independently verifiable (scroll snapping + focus styling).

---

## Phase 4: User Story 2 - Directly select an item (Priority: P2)

**Goal**: Users can directly pick any item via click/tap or dots to center it and set focus.  
**Independent Test**: Click or tap any non-focused item or dot on each breakpoint; confirm it scrolls smoothly to center, updates focus styling, and highlights the active dot.

### Implementation for User Story 2

- [X] T008 [US2] Enable item click/tap to programmatically scroll the target item to center and set focus in `app/components/image-gallery/ImageGallery.tsx`.
- [X] T009 [P] [US2] Implement dots navigation with active state and scroll-to-item behavior in `app/components/image-gallery/ImageGallery.tsx`.

**Checkpoint**: User Story 2 independently verifiable (direct selection via item tap or dots).

---

## Phase 5: User Story 3 - Controlled navigation and autoplay stop (Priority: P3)

**Goal**: Next/prev controls and keyboard navigation move focus predictably; autoplay advances items until any manual interaction stops it permanently while honoring reduced-motion preferences.  
**Independent Test**: With autoplay running, use any manual navigation (scroll, click, button, keyboard) and confirm autoplay halts immediately and does not resume; controls move focus by one and center the item.

### Implementation for User Story 3

- [X] T010 [US3] Add next/previous controls with disabled logic and smooth center transitions in `app/components/image-gallery/ImageGallery.tsx`.
- [X] T011 [US3] Implement keyboard navigation (arrow keys + focusable controls with aria labels) for the carousel in `app/components/image-gallery/ImageGallery.tsx`.
- [X] T012 [US3] Implement autoplay timer that pauses on hover/focus, disables for prefers-reduced-motion, and stops permanently after any manual navigation in `app/components/image-gallery/ImageGallery.tsx`.

**Checkpoint**: User Story 3 independently verifiable (controls, keyboard, autoplay stop behavior).

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final QA and documentation

- [ ] T013 Document manual responsive QA results (desktop/tablet/mobile, snap/focus states, reduced-motion behavior, autoplay stop) in `specs/001-center-snap-carousel/quickstart.md`.
- [ ] T014 Run manual responsive checks for overflow, spacing, and control hit areas across breakpoints in `app/page.tsx` and `app/components/image-gallery/ImageGallery.tsx`.

---

## Dependencies & Execution Order

- Phases: Setup → Foundational (blocks all stories) → US1 (MVP) → US2 → US3 → Polish.
- User stories remain independently verifiable; later stories build on shared data and layout from Foundational but not on each other’s controls.

## Parallel Opportunities

- Within US1, motion styling (T007) can run in parallel with focus detection (T006) once layout is scaffolded (T005).
- Within US2, dots navigation (T009) can proceed in parallel with item click handling (T008) after US1 state exists.
- Within US3, keyboard support (T011) and control buttons (T010) can proceed in parallel after US1 state; autoplay (T012) follows once manual navigation is stable.

## Implementation Strategy

- MVP First: Complete Setup + Foundational → US1, then pause to validate scroll snap and focus behavior before layering more controls.
- Incremental: Add US2 direct selection, then US3 controls/keyboard/autoplay stop; finish with polish and documentation.
