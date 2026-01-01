# Research Findings: Elysion Homepage

## Decision: Responsive Hero & Fixed Navigation

- **Decision**: Use a full-viewport hero with a `background-image`/`Next/Image` layered under a warm gradient overlay, paired with a fixed Tailwind `sticky top-0` navigation that stays on top as the user scrolls.
- **Rationale**: This satisfies the requirement for a polished hero, strong visual hierarchy, and constant access to navigation while providing the textured/natural aesthetic through layered imagery and gradients.
- **Alternatives considered**: A centered hero without a gradient felt too flat, and swapping to a parallax scroll introduced overflow risks; the chosen layered approach reduces layout shifts by reserving space for images.

## Decision: Services Grid & Testimonials Layout

- **Decision**: Implement a responsive Tailwind grid (4 columns desktop, 2 columns tablet, 1 column mobile) for service cards with hover motion (+scale, shadow) and accessible text, while testimonials follow a stacked card layout with consistent spacing and subtle animation.
- **Rationale**: The grid preserves readability at each breakpoint and ensures cards can display icons/text while honoring the nostalgic-but-modern mandate via textures.
- **Alternatives considered**: A carousel would complicate accessibility and add JS overhead; the responsive grid keeps the DOM simple and easier to extend later.

## Decision: Manual QA & Review Notes

- **Decision**: Document breakpoint checks (desktop >=1200px, tablet ~768px, mobile <=480px), hover states, spacing notes, and overflow observations per the constitution so reviewers can confirm compliance before merging.
- **Rationale**: Without automated tests, capturing manual steps ensures repeatable validation while aligning with Principle V.
- **Alternatives considered**: Relying solely on developer judgement risks regressions; explicit manual notes reduce ambiguity.

## QA Notes / Visual Decisions

- Hero styling and CTA remain legible across desktop (~1200px), tablet (~768px), and mobile (<=480px) breakpoints without overflow or readability issues.
- Services grid spacing performs as intended, collapsing gracefully while keeping padding consistent and never triggering horizontal scroll.
