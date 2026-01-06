# Tasks: Category-Based Service Selection

**Input**: Design documents from `/specs/001-category-service-toggle/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Manual responsive checks only (constitution defers automated tests).

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm environment and planning artifacts are in place.

- [X] T001 Ensure working branch `001-category-service-toggle` is checked out (repo root)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared data and UI building blocks used by all stories.

- [X] T002 Create shared service catalog defining categories/services in `app/data/services.ts`
- [X] T003 Add reusable toggle/button component for categories/services in `app/components/sections/ToggleGroup.tsx`
- [X] T004 Wire base exports/types for shared service data and toggle props in `app/components/sections/types.ts` (or new types file colocated)

**Checkpoint**: Foundation ready — user stories can proceed.

---

## Phase 3: User Story 1 - Browse services by category on homepage (Priority: P1)

**Goal**: Category buttons on homepage load services per category using shared data.

**Independent Test**: On homepage, switch categories and see matching cards update without reload; active state visible; CTA shown only when category has none.

### Implementation for User Story 1

- [X] T005 [US1] Map homepage toggle buttons from page data (`app/data/pages-content/home.ts`) to category ids/default
- [X] T006 [US1] Feed ServicesSection with shared services filtered by active category in `app/components/sections/ServicesSection.tsx`
- [X] T007 [US1] Preserve existing card layout while swapping category data in `app/components/sections/ServicesSection.tsx`
- [X] T008 [US1] Add manual responsive/behavioral notes for homepage toggle and cards in `specs/001-category-service-toggle/quickstart.md`

---

## Phase 4: User Story 2 - Handle categories without defined services (Priority: P2)

**Goal**: Design/Commercial selections show CTA message + link instead of cards.

**Independent Test**: Selecting Design or Commercial shows message and working link; no stale cards remain.

### Implementation for User Story 2

- [X] T009 [US2] Add CTA metadata for Design/Commercial in shared data `app/data/services.ts`
- [X] T010 [US2] Render CTA block (message + link) when category has CTA in `app/components/sections/ServicesSection.tsx`
- [X] T011 [US2] Ensure keyboard/ARIA accessibility for CTA link/button state in `app/components/sections/ServicesSection.tsx`

---

## Phase 5: User Story 3 - Explore service details on service-specific page (Priority: P2)

**Goal**: Service pages (e.g., gardening maintenance) use service buttons to show detail paragraph + image per service.

**Independent Test**: On `app/gardening/maintenance/page.tsx`, selecting each service swaps detail section content; placeholders appear if missing; no reload.

### Implementation for User Story 3

- [X] T012 [US3] Expose service button config (labels/default) from `app/data/pages-content/gardening-children/maintenance.ts`
- [X] T013 [US3] Render service detail section (paragraph + image) driven by shared services in `app/gardening/maintenance/page.tsx`
- [X] T014 [US3] Add placeholder copy/image fallback when detail missing in `app/gardening/maintenance/page.tsx`
- [X] T015 [US3] Apply responsive stacking and active state styles for service buttons/detail in `app/gardening/maintenance/page.tsx`

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final alignment and docs.

- [X] T016 [P] Update navigation/content references if new category/service labels appear in `app/data/navigation.ts`
- [X] T017 [P] Document manual QA matrix (desktop/tablet/mobile) and active-state checks in `specs/001-category-service-toggle/quickstart.md`
- [X] T018 Review for consistency with Tailwind theme (spacing/typography) across toggles and detail sections in `app/components/sections/` and `app/gardening/maintenance/page.tsx`

---

## Dependencies & Execution Order

- Phase order: Setup → Foundational → US1 (P1) → US2 (P2) → US3 (P2) → Polish.
- Story dependencies: US1 builds on foundation; US2 depends on shared data and ServicesSection from US1; US3 depends on shared data and toggle component from foundation.
- Parallel opportunities: T002/T003 can run in parallel; within stories, UI wiring tasks touching different files can parallelize when data contracts are stable.

## Parallel Execution Examples

- After T002/T003 complete: T005 and T009 can proceed in parallel (homepage vs CTA data) since they touch different concerns.
- For US3: T012 (data file) can run in parallel with T013/T015 once shared services are defined; T014 can happen alongside T013 if placeholders are standard.

## Implementation Strategy

- MVP: Deliver US1 (homepage category toggles) after foundation, then validate manually per acceptance criteria.
- Incremental: Add US2 CTA handling, then US3 service-page detail toggles; finish with polish tasks.
