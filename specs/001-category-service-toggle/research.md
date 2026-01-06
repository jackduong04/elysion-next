# Research: Category-Based Service Selection

## Decisions

- **Decision**: Centralize all service definitions in a single shared data file (e.g., `app/data/services.ts`) keyed by category and service slug.  
  **Rationale**: Ensures consistent service names, descriptions, and images across homepage cards and service pages; avoids duplication across page data files.  
  **Alternatives considered**: Duplicating service info per page data file (risk of drift); fetching remotely (out of scope per constitution).

- **Decision**: Page-level data files expose the button set (categories on homepage, services on service pages) referencing shared service keys.  
  **Rationale**: Keeps per-page ordering and selection defaults controllable while reusing shared service content.  
  **Alternatives considered**: Hard-coding button labels in components (reduces flexibility; conflicts with requirement to map from data files).

- **Decision**: Reusable toggle component accepts button items with id/label and active state styles aligned to existing Tailwind theme.  
  **Rationale**: Supports homepage categories and service-page service toggles with shared behavior and accessible buttons.  
  **Alternatives considered**: Separate components per page type (duplicated logic, higher maintenance).

- **Decision**: For Design/Commercial, render CTA message + link derived from page data with no empty card grid.  
  **Rationale**: Matches spec requirement and avoids blank states.  
  **Alternatives considered**: Placeholder cards (misleading content), hiding section (loss of guidance).

- **Decision**: Placeholder copy/image used when detail content missing for a service.  
  **Rationale**: Prevents empty sections and aligns with edge-case handling in spec.  
  **Alternatives considered**: Leaving blank or hiding section (poor UX, violates spec).

## Clarifications Resolved

No outstanding clarifications; defaults selected per spec and constitution.
