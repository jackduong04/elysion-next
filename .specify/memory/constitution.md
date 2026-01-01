<!--
Sync Impact Report
Version change: Unspecified template -> 1.0.0
Modified principles:
- placeholders -> I. Intentional Responsiveness
- placeholders -> II. Tailwind-Driven Semantics
- placeholders -> III. Readable Typography & Spacing
- placeholders -> IV. Front-End-Only Focus
- placeholders -> V. Documentation & Progressive Review
Added sections: Implementation Constraints; Development Workflow
Removed sections: None
Templates requiring updates (✅ updated / ⚠ pending):
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
- ⚠ .specify/templates/commands/ (directory missing; review when commands exist)
Follow-up TODOs: TODO(RATIFICATION_DATE): Confirm the initial adoption date for this constitution.
-->

# Elysion Next Constitution

## Core Principles

### I. Intentional Responsiveness
Every screen must feel deliberate. Desktop layouts may layer content, but the UI must collapse to a single-column
vertical stack on tablets and phones. Tight spacing or clipped content is unacceptable. Each container must
maintain breathing room, readable typography, and no horizontal overflow from mobile up to desktop breakpoints.
Every deliverable includes a short note describing how the layout adapts and which Tailwind breakpoints guard
overflow.

### II. Tailwind-Driven Semantics
Compose UI with Next.js structural components and Tailwind utility classes while keeping styles co-located with
markup. Prefer semantic tags (`main`, `section`, `article`, `p`) and descriptive `aria` attributes over custom
CSS. Tailwind tokens carry spacing, color, and typography decisions so the system stays cohesive and reusable
without inventing bespoke styling systems.

### III. Readable Typography & Spacing
Typography and spacing decisions are non-negotiable. Headers, body copy, and captions share a consistent scale,
maintain accessible contrast, and respect 45-75 character line lengths on mobile. Spacing between sections
follows a predictable rhythm so that no block feels cramped, even when viewports shrink to narrow phones.

### IV. Front-End-Only Focus
This project stays strictly front-end: there is no authentication, no databases, and no backend services to
integrate. Mock or static data may surface for layout purposes, but business logic remains in the browser layer.
Automated unit and integration tests are deferred until the UI baseline is stable. Do not introduce tests in
this phase; document the manual verification steps and responsive checks in their place.

### V. Documentation & Progressive Review
Every change ships with a brief note on why layouts or typography decisions exist and how responsiveness was
validated. Document the target breakpoints, describe the manual QA steps, and capture any trade-offs before
marking work complete. Ongoing documentation keeps future contributors aligned with the responsive intent and
avoids regressions.

## Implementation Constraints

- The stack is Next.js with Tailwind as configured today. Avoid adding new CSS processors or runtime styling
  engines unless a constitutional exception is documented.
- Layout compositions must start from Tailwind containers, flex, and grid utilities so spacing tokens remain
  consistent. Avoid absolute positioning that could trigger overflow on narrow screens.
- All content either stays static or relies on mocked fixtures; do not wire up APIs, authentication, or data
  persistence yet.
- Across desktop, tablet, and mobile breakpoints the layout must retain vertical hierarchy, comfortable padding,
  and no horizontal scroll. Take advantage of Tailwind breakpoints to adjust spacing and font sizes intentionally.
- Automated testing is off the table at this stage; instead, document the manual review matrix that covers the
  required breakpoints and explain how responsive integrity is maintained.

## Development Workflow

Start every cycle with a plan that references this constitution: name the principle(s) being honored, describe the
responsive story, and list the manual checks that prove compliance. Implement features in `app/` while calling out
which Tailwind tokens anchor spacing and typography. Capture screenshots or recordings when possible to demonstrate
behavior on desktop, tablet, and mobile widths.

Before merging, a reviewer inspects the responsive notes, loads the UI at the documented breakpoints, and confirms
there is no unexpected overflow or cramped section. Every pull request mentions the manual QA steps taken, references
the relevant principle(s), and highlights any trade-offs so future iterations stay aligned.

## Governance

This constitution supersedes ad-hoc decisions. Amendments require proposing the change in a document, collecting
at least two peer reviews (e.g., product and design), and updating this constitution plus the related templates
before merging. The amendment must name which principles changed, describe the rationale, and record the resulting
version bump.

Versioning follows semantic rules: MAJOR bumps accompany breaking governance or principle redefinitions.
MINOR bumps cover new sections or materially expanded explanations. PATCH bumps cover clarifications and wording
tweaks. Every update must explicitly state the bump reason in the accompanying pull request.

Compliance reviews happen on each deliverable: confirm the responsive narrative, describe how typography and spacing
expectations were met, and ensure no automated tests were added prematurely. Tag the review notes with the principle
numbers (I-V) that were exercised.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2026-01-01
