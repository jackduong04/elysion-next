# Feature Specification: Center-Snapping Focus Carousel

**Feature Branch**: `001-center-snap-carousel`  
**Created**: 2026-01-15  
**Status**: Draft  
**Input**: User description: "horizontal scrolling carousel - Let's create a horizontal scrolling image list (carousel) using Next.js and Tailwind CSS with the following behaviour: Items scroll horizontally, scroll snapping is mandatory, items snap to the center of the viewport. There is always one "focus item", which is the item closest to the center, and it slightly enlarges (scaled up) compared to the rest of the items. When the user scrolls, the nearest item automatically snaps to center, and that item becomes the new focus item. There must be "click-to-focus" feature that scrolls the clicked item to the center and it becomes the focus item. There must be dots navigation as well as next/prev buttons navigation. Implement an autoplay feature that automatically scrolls through the items and this feature should be terminated forever by any manual navigation activity made by user. The outcome is to have a clean, perfomant, and accesible pattern for a center-snapping, focus-based image carousel."

## Clarifications

### Session 2026-01-15

- Q: How should autoplay start and respect accessibility preferences? → A: Autoplay starts on load; pauses on hover/focus; disabled when user prefers reduced motion; stops permanently on manual navigation.

## User Scenarios & Testing *(mandatory)*

> Constitution alignment: Automated unit or integration tests are deferred until the responsive UI baseline is stable. Document repeatable manual checks that cover desktop, tablet, and mobile breakpoints so each story remains independently verifiable.

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
 -->

### User Story 1 - Scroll and snap to focused image (Priority: P1)

A visitor scrolls the carousel horizontally to browse images; the nearest item snaps to center, enlarges slightly, and is visually identified as the single focus item.

**Why this priority**: Delivers the core browsing experience and establishes the focus behavior that all other controls rely on.

**Independent Test**: On desktop, tablet, and mobile, manually scroll the list and confirm the nearest item always snaps centered with focus styling applied after each scroll release.

**Acceptance Scenarios**:

1. **Given** a horizontal carousel with multiple items, **When** the user drags or scrolls and releases near an item, **Then** that nearest item snaps to the center and becomes the sole focus item.
2. **Given** the carousel at rest, **When** the user scrolls quickly through several items, **Then** the final resting item still snaps centered with its scale-up focus style while non-focused items remain unscaled.

---

### User Story 2 - Directly select an item (Priority: P2)

A visitor uses click/tap on an item or dots navigation to jump to a specific image, which scrolls into the center and becomes the focus item.

**Why this priority**: Reduces friction for reaching a specific item without manual scrolling and supports accessible target selection.

**Independent Test**: Click or tap any non-focused item or dot on each breakpoint; confirm it scrolls smoothly to center, updates focus styling, and highlights the active dot.

**Acceptance Scenarios**:

1. **Given** a non-focused item, **When** the user clicks/taps it, **Then** the carousel scrolls to center that item and applies focus styling.
2. **Given** the dots navigation, **When** the user selects a dot, **Then** the corresponding item centers, receives focus styling, and the dot shows active state.

---

### User Story 3 - Controlled navigation and autoplay stop (Priority: P3)

A visitor uses next/prev controls or keyboard navigation to step through items, while optional autoplay advances items until any manual interaction permanently stops autoplay.

**Why this priority**: Ensures predictable navigation for all users and prevents unwanted motion after a manual action, meeting accessibility expectations.

**Independent Test**: Start with autoplay on and observe items advance; then use any manual navigation (scroll, click, button, keyboard). Confirm autoplay halts immediately and does not resume for the rest of the session.

**Acceptance Scenarios**:

1. **Given** the carousel with autoplay running, **When** the user taps Next or presses the right arrow key, **Then** the next item centers, focus styling updates, and autoplay stops permanently.
2. **Given** autoplay paused by a manual action, **When** the user waits without interacting, **Then** no further automatic transitions occur until the page is reloaded.

### Edge Cases

- Carousel contains fewer items than the viewport can show without scrolling; ensure centering still works and focus item is visible.
- Carousel with many items; ensure navigation controls remain responsive and dots remain usable without overcrowding.
- Items of varying aspect ratios; ensure focus scaling does not clip or overflow neighboring items.
- Rapid manual interactions (fast swipes or repeated button presses); ensure snapping logic resolves to a single focus item without jitter.
- Autoplay enabled while the user hovers or focuses controls; ensure no conflicting movement or focus loss.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The carousel MUST present items in a horizontal list with scroll snapping that centers the nearest item on scroll release.
- **FR-002**: The carousel MUST visually indicate a single focus item at all times, including a modest scale-up compared to non-focused items.
- **FR-003**: Manual scrolling MUST always end with the nearest item centered and focused, regardless of scroll speed or distance.
- **FR-004**: Clicking/tapping any item MUST scroll it to center and set it as the focus item with corresponding focus styling.
- **FR-005**: Next and previous controls MUST move focus by exactly one item per activation, center the new item, and update any active indicator states.
- **FR-006**: Dots navigation MUST reflect the total item count, highlight the focused item, and on selection scroll directly to that item and set focus.
- **FR-007**: Autoplay MUST advance items at a consistent interval by default, pause when a user hovers or focuses the carousel, be disabled entirely when the user prefers reduced motion, and stop permanently immediately after any manual navigation (scroll, item click, dot selection, button press, or keyboard action) until the user reloads the page.
- **FR-008**: The carousel MUST support keyboard navigation (e.g., arrow keys or tab + activation) for next/previous and item selection, with visible focus states and screen reader-friendly labels announcing item position.
- **FR-009**: Layout and controls MUST remain usable across desktop, tablet, and mobile breakpoints, preserving readable focus states and reachable hit targets.

### Key Entities *(include if feature involves data)*

- **Carousel Item**: Visual content unit with an image (and optional caption) that can become the focus item; includes metadata for position/ordering.
- **Navigation Controls**: Next/previous buttons and dots representing items; track current active index to update state and accessibility labels.
- **Autoplay State**: Timer-driven progression that tracks whether autoplay is active or permanently stopped due to manual interaction.

### Assumptions

- Images are preloaded or lightweight enough to avoid stutter during snap transitions.
- Item dimensions are consistent enough that scaling the focus item will not cause layout collapse.
- Users may reload the page to re-enable autoplay after it has been stopped by manual interaction.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 95% of manual navigation attempts (scroll, item click, dot, next/prev, keyboard) center the intended item with focus styling within 1 second of action completion.
- **SC-002**: 90% of users report smooth motion (no visible jitter) during snapping and autoplay transitions on modern desktop and mobile devices.
- **SC-003**: When autoplay is running, any manual navigation stops autoplay immediately and no automatic transitions occur during a 30-second observation period afterward without page reload.
- **SC-004**: Keyboard-only users can move from the first to any other item and identify the focused item within 15 seconds across supported breakpoints.
- **SC-005**: Navigation controls (dots and buttons) respond within 0.2 seconds of activation for 95% of interactions during testing sessions.
