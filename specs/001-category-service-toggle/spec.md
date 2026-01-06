# Feature Specification: Category-Based Service Selection

**Feature Branch**: `001-category-service-toggle`  
**Created**: 2026-01-05  
**Status**: Draft  
**Input**: User description: "category selector - Develop a new feature in the service section where services belong to the same category will be displayed based on the chosen category. These are the services for each category: Under category Landscaping there are Decking, Fencing & Gates, Excavation & Concrete, Retaining Walls, Garden Beds, Drainage & Irrigation; under category Gardening there are Lawn Mowing, Hedge Trimming, Garden Maintenance, Seasonal Clear-outs, Planting. Under the category Design and Commercial, at the moment I don't have services for them yet, so simply tell the user to visit the Design or Commercial page for more information (with a link that they can click on). At the moment, you will find in ServiceSection.tsx that service cards are already being mapped, but they are static data. This feature ensures that when a category is chosen, the corresponding service cards will be displayed (use that card, only the data changes, don't create a new card layout). However when on other service pages that's not homepage, this feature works slightly different. The category buttons, instead of choosing different categories, now we are choosing the actual services (that were mapped out before in homepage), which will display a full description section about that service (maybe in the form of a short paragraph and an image). To be easier to understand, for example, in homepage the buttons are Landscaping, Gardening, Design, and Commercial, and clicking them will show the corresponding service cards. In the maintenance page for example (/app/gardeing/maintenance/page.tsx), the buttons now are actual services: Lawn Mowing, Hedge Trimming, Garden Maintenance, Seasonal Clear-outs (I have listed them earlier), and clicking one of those will affect the service description section (swapping data of each services out). I haven't made the service description section yet, so your job is to set that up as well. There are more service pages on this website other than maintenance page, but you don't have to worry about them because they will be very similar, once you set this up in the maintenance page it will be easy for me to work on other pages later by myself."

## Clarifications

### Session 2026-01-05

- Q: Should service-specific pages reuse existing card data or use dedicated detail content? A: Use dedicated per-service detail content (short paragraph + specific image) separate from card data.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse services by category on homepage (Priority: P1)

Homepage visitors select a category (Landscaping, Gardening, Design, Commercial) to see the relevant services displayed in the service card layout.

**Why this priority**: Core navigation for visitors to understand offerings and select the right service type quickly.

**Independent Test**: On the homepage, select each category in turn and verify the displayed cards or message match the chosen category without affecting other pages.

**Acceptance Scenarios**:

1. **Given** the homepage service section with Landscaping preselected, **When** the visitor selects Gardening, **Then** only Gardening service cards (Lawn Mowing, Hedge Trimming, Garden Maintenance, Seasonal Clear-outs, Planting) are shown.
2. **Given** the homepage service section, **When** the visitor selects Landscaping, **Then** only Landscaping service cards (Decking, Fencing & Gates, Excavation & Concrete, Retaining Walls, Garden Beds, Drainage & Irrigation) are shown with the existing card layout unchanged.

---

### User Story 2 - Handle categories without defined services (Priority: P2)

Homepage visitors selecting Design or Commercial see a clear message with a clickable link to the corresponding page instead of empty space.

**Why this priority**: Prevents dead ends and directs interest to the right information while additional services are unavailable.

**Independent Test**: On the homepage, select Design and Commercial and confirm a CTA message plus working link appears instead of service cards.

**Acceptance Scenarios**:

1. **Given** the homepage service section, **When** the visitor selects Design, **Then** a message appears explaining Design services and provides a clickable link to the Design page.
2. **Given** the homepage service section, **When** the visitor selects Commercial, **Then** a message appears explaining Commercial services and provides a clickable link to the Commercial page.

---

### User Story 3 - Explore service details on a service-specific page (Priority: P2)

Visitors on a service-specific page (e.g., gardening maintenance) select a service button to view a full description and image for that service.

**Why this priority**: Enables deeper understanding of individual services without leaving the page, supporting conversions and inquiries.

**Independent Test**: On the gardening maintenance page, select each service button and verify the description section updates with the corresponding copy and image.

**Acceptance Scenarios**:

1. **Given** the gardening maintenance page, **When** the visitor selects Lawn Mowing, **Then** the service description section shows Lawn Mowing content (paragraph and image) and hides other service descriptions.
2. **Given** the gardening maintenance page, **When** the visitor selects Seasonal Clear-outs after viewing Lawn Mowing, **Then** the description section swaps to Seasonal Clear-outs content without reloading the page.

---

### Edge Cases

- Selecting a category that has no services (Design or Commercial) must always show the CTA message and link instead of blank space or stale cards.
- If service data (description or image) is missing for a service-specific page, display placeholder copy and image so the section is never empty.
- Rapidly toggling categories or services should always leave the latest selection visible with matching content.
- On small screens, selected state must remain clear and the content should stack without clipping buttons or text.
- If an unknown category or service value is encountered, fall back to the default selection without errors.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Homepage service section MUST present category buttons for Landscaping, Gardening, Design, and Commercial with Landscaping preselected on load.
- **FR-002**: Selecting Landscaping MUST display service cards for Decking, Fencing & Gates, Excavation & Concrete, Retaining Walls, Garden Beds, and Drainage & Irrigation using the existing card layout.
- **FR-003**: Selecting Gardening MUST display service cards for Lawn Mowing, Hedge Trimming, Garden Maintenance, Seasonal Clear-outs, and Planting using the existing card layout.
- **FR-004**: Selecting Design or Commercial MUST display a message explaining services are available on their dedicated page and MUST include a working link to that page instead of showing service cards.
- **FR-005**: Category selection on the homepage MUST update content without reloading the page and MUST visibly indicate the active category.
- **FR-006**: Service-specific pages (e.g., gardening maintenance) MUST render buttons for the services relevant to that page (Lawn Mowing, Hedge Trimming, Garden Maintenance, Seasonal Clear-outs) with the first service preselected.
- **FR-007**: Selecting a service on a service-specific page MUST update a dedicated description section to show a short paragraph and image for the chosen service, hiding other service details, using detail data that is separate from the card data.
- **FR-008**: When service detail content is unavailable, the description section MUST show placeholder copy and image to avoid empty states.
- **FR-009**: CTA links presented for Design and Commercial MUST be keyboard accessible and navigable on both desktop and mobile viewports.

### Key Entities

- **Category**: Represents a grouping of services (e.g., Landscaping, Gardening, Design, Commercial); attributes include name, optional description/CTA, and associated services.
- **Service**: Represents an individual offering; attributes include name, category, summary/description, and image asset used in cards or detail sections.

### Assumptions

- Homepage default selection is Landscaping; service-specific pages default to the first service in their list.
- Design and Commercial pages already exist and can be linked from the homepage CTA messages.
- Placeholder copy and imagery are acceptable for services missing long-form content until final assets are provided.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 95% of category selections on the homepage display the matching service list or CTA message within 1 second during manual testing on typical broadband.
- **SC-002**: 100% of homepage category options show either the correct service set or the CTA message/link (no blank or stale content) across desktop, tablet, and mobile breakpoints.
- **SC-003**: On the gardening maintenance page, 95% of service selections update the description section with matching text and image within 1 second without page reload.
- **SC-004**: In usability checks with at least 5 participants, 90% report they can find a relevant service or CTA link without confusion when toggling categories or services.
