---

description: "Task list template for feature implementation"
---

# Tasks: Elysion Homepage

**Input**: Design documents from `/specs/001-build-homepage/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No automated suites requested; focus on manual responsive verification per constitution principles.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `app/`, `public/` at repository root
- The Next.js app uses the app router with `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare shared data and styling that every story builds upon

- [X] T001 [P] Create `app/data/homepageContent.ts` containing the placeholder hero copy/CTA, four service offerings, three testimonials, and optional highlights so all sections consume a single mock dataset aligned with `contracts/homepage-content.md`
- [X] T002 [P] Update `app/globals.css` to define the nostalgic palette (earthy neutrals, muted greens), base typography scale (45–75 character line length), accessible spacing utilities (`p-8`, `gap-6`, `max-w-5xl`), and background textures referenced by later components

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the fixed navigation shell and content placeholders required before story-specific UI is added

- [X] T003 Implement a sticky navigation bar with `sticky top-0`, section anchors (`#hero`, `#services`, `#reviews`, `#highlights`), and accessible labels inside `app/layout.tsx` so the fixed nav stays visible on scroll
- [X] T004 Construct the base `app/page.tsx` structure with `<main>` and empty `section` elements for hero, services, testimonials, and highlights using Tailwind container/gap classes that prevent horizontal overflow at desktop (≥1200px), tablet (~768px), and mobile (≤480px) breakpoints

---

## Phase 3: User Story 1 - Discover Elysion (Priority: P1)

**Goal**: Showcase the brand story via the hero, reinforcing the nostalgic-modern promise before other content
**Independent Test**: Verify at desktop/tablet/mobile that the fixed nav stays visible, the hero fills the viewport without overflow, and the CTA remains legible and focusable

### Tests for User Story 1 (OPTIONAL - only if tests requested)

> Not requested; rely on manual responsive QA per constitution principles.

### Implementation for User Story 1

- [X] T005 [US1] Build the hero section in `app/page.tsx` using `homepageContent.hero`, layering a fullscreen background image/gradient, bold headings, and CTA while ensuring the overlay maintains >=4.5:1 contrast
- [X] T006 [US1] Enhance hero and nav links in `app/page.tsx`/`app/layout.tsx` with accessible focus states, hover/tap motion, and anchor IDs that align with nav labels so the CTA and section links feel intentional on every breakpoint

**Checkpoint**: Hero and navigation should be polished, responsive, and immediately verifiable independently

---

## Phase 4: User Story 2 - Evaluate Services (Priority: P2)

**Goal**: Surface Elysion’s offerings via a responsive services grid that encourages exploration without overwhelming the layout
**Independent Test**: Inspect the services grid at desktop/tablet/mobile to confirm four cards, consistent spacing, and hover motion without horizontal scroll

### Tests for User Story 2 (OPTIONAL - only if tests requested)

> Not requested; manual verification only.

### Implementation for User Story 2

- [X] T007 [US2] Render at least four service cards in `app/page.tsx` using `homepageContent.services`, applying a responsive grid (`grid-cols-4`, `md:grid-cols-2`, `sm:grid-cols-1`) and proper padding so spacing stays consistent across breakpoints
- [X] T008 [US2] Apply hover/focus motion (scale, shadow) and accessible text for each card in `app/page.tsx`, keeping Tailwind tokens (`transition`, `duration-300`, `shadow-lg`) to highlight polish while ensuring no overflow

**Checkpoint**: The services grid should match the nostalgic aesthetic, remain readable, and work independently of other stories

---

## Phase 5: User Story 3 - Build Trust & Storytelling (Priority: P3)

**Goal**: Provide credibility via testimonials and optional featured work/process imagery that feels timeless and modern
**Independent Test**: Scroll to the reviews/process sections, ensuring at least three testimonial cards plus the highlight block stay visible with contrast ratios ≥4.5:1 and maintain balanced spacing on all breakpoints

### Tests for User Story 3 (OPTIONAL - only if tests requested)

> Not requested; manual QA steps cover this story.

### Implementation for User Story 3

- [X] T009 [US3] Render three testimonial cards in `app/page.tsx` driven by `homepageContent.testimonials`, applying subtle animation classes (e.g., `transition`, `duration-500`, `transform hover:-translate-y-1`) and ensuring cards wrap gracefully for long quotes without overflow
- [X] T010 [US3] Add the featured work/process block in `app/page.tsx` using `homepageContent.highlights`, balancing imagery/text, including optional sequence numbers, and ensuring the layout stacks vertically on mobile while retaining texture on desktop

**Checkpoint**: Testimonials and highlights should reinforce trust, feel accessible, and be independently testable

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Document and finalize responsive verification before handoff

- [X] T011 Conduct a constitution-aligned responsive review (desktop >=1200px, tablet ~768px, mobile <=480px) and record the manual checks/hover observations in `specs/001-build-homepage/quickstart.md`
- [X] T012 Update `specs/001-build-homepage/research.md` with any QA notes or visual decisions uncovered during manual review so future contributors know why specific Tailwind tokens were chosen

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Feeds mock data + palette tokens (T001/T002) and must finish before any UI touches the hero/services/testimonials
- **Foundational (Phase 2)**: Depends on Phase 1 data + styles and blocks all story work because nav/section anchors and the base layout need to exist first
- **User Stories (Phase 3+)**: Each story builds on the base layout but is otherwise independent; they can proceed in priority order (US3 follows US2 but does not require its completion)
- **Polish (Phase N)**: Depends on all stories presenting stable content

### User Story Dependencies

- **User Story 1 (P1)**: Can start once Phase 2 is complete - no dependencies on other stories
- **User Story 2 (P2)**: Can start after Phase 2 - services layout references data but not hero/testimonials
- **User Story 3 (P3)**: Starts after Phase 2 - testimonials/highlights are independent from stories 1/2

### Within Each User Story

- Models/data first (`app/data/homepageContent.ts`)
- Layout and section markup next (`app/page.tsx`, `app/layout.tsx`)
- Core implementation before interactions/animations
- Story complete before moving to the next priority story

### Parallel Opportunities

- `T001` and `T002` target different files (`app/data/homepageContent.ts` vs `app/globals.css`) and can run in parallel.
- Story-specific sections (`T005`/`T006`, `T007`/`T008`, `T009`/`T010`) touch the same file, so they should flow sequentially within their phase.

---

## Parallel Example: User Story 1

```bash
# Work hero layout + CTA together
Task: "Build the hero section in app/page.tsx"
Task: "Enhance hero/nav interactive states in app/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2 to prepare data, styles, nav, and layout placeholders
2. Implement User Story 1 (hero + fixed navigation)
3. **STOP and VALIDATE**: Manually verify hero behavior at desktop/tablet/mobile before adding more sections

### Incremental Delivery

1. Complete Setup + Foundational phases → base platform ready
2. Deliver User Story 1 → hero/nav experience
3. Add User Story 2 → services grid with spacing/hovers
4. Add User Story 3 → testimonials/highlights
5. Each story delivers a standalone, testable increment

### Parallel Team Strategy

1. Setup + foundational work done together
2. Developer A: User Story 1 hero/nav
3. Developer B: User Story 2 services grid
4. Developer C: User Story 3 testimonials/highlights
5. Polish tasks finalize manual QA and documentation
