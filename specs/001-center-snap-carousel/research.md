# Research: Center-Snapping Focus Carousel

## Decisions

- **Decision**: Use Framer Motion for smooth scale/opacity transitions while keeping Tailwind for layout and spacing.  
  **Rationale**: Framer Motion is already installed and offers performant spring-based animation control; avoids custom CSS keyframes and keeps animations declarative.  
  **Alternatives considered**: Pure CSS transitions (less control over motion curves); no animation (would miss clarity on focus change).

- **Decision**: Source carousel items from `app/data/pages-content/home.ts` using the five images under `public/images/project-img/`.  
  **Rationale**: Aligns with Constitution IV (front-end only) and keeps data co-located with existing page content.  
  **Alternatives considered**: Fetching from API (out of scope); embedding inline arrays inside the component (harder to manage content).

- **Decision**: Honor prefers-reduced-motion by disabling autoplay entirely and minimizing motion scaling; pause autoplay on hover/focus; stop permanently after manual interaction.  
  **Rationale**: Meets accessibility expectations and matches clarified FR-007 behavior.  
  **Alternatives considered**: Always-on autoplay (conflicts with accessibility); user-toggled autoplay (added UI complexity without requirement).

- **Decision**: Implement scroll snapping via CSS scroll-snap with JS-assisted focus detection to ensure the nearest item centers and is scaled.  
  **Rationale**: Native scroll-snap provides performant snapping; JS only resolves focus index and controlled navigation.  
  **Alternatives considered**: Fully manual scroll positioning via JS (more error-prone); third-party carousel library (unnecessary dependency).

- **Decision**: Keyboard support using arrow keys and focusable controls with aria labels for index/total.  
  **Rationale**: Satisfies accessibility requirement and ensures parity with click/scroll.  
  **Alternatives considered**: Rely solely on tab order (insufficient control mapping); custom key map beyond arrows (unneeded).
