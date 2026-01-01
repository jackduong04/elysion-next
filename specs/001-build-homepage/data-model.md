# Data Model: Elysion Homepage

## ServiceOffering

- **Description**: Represents a core landscaping capability showcased in the services grid.
- **Fields**:
  - `name` (string, required): Short title such as "Landscape Design" or "Seasonal Maintenance".
  - `description` (string, required): Brief benefit-focused copy.
  - `icon` (string, optional): Path to a texture/icon placeholder to reinforce the nostalgic theme.
  - `cta` (string, optional): Action label like "Explore" or "Request Estimate".
- **Relationships**: None; each card is independent, but consistent spacing/rhythm ties them visually.

## Testimonial

- **Description**: Captures customer feedback used in the reviews section.
- **Fields**:
  - `quote` (string, required): The customer's statement about the service.
  - `author` (string, required): Customer name and title/location.
  - `rating` (number, optional): Star-like signal (1-5) used only for visual embellishment.
  - `context` (string, optional): Project reference or service used.
- **Relationships**: Each testimonial stands alone; recommended to display at least three for credibility.

## ProjectHighlight

- **Description**: Optional gallery or "how it works" step describing a featured project or process phase.
- **Fields**:
  - `title` (string, required): Name of the project/process step.
  - `summary` (string, required): Short narrative or instructions.
  - `image` (string, optional): Placeholder texture or photo axis.
  - `sequence` (number, optional): Order if rendering process steps.
- **Relationships**: Sequence may tie multiple highlights into an ordered story; otherwise, each highlight appears as a grid item with consistent spacing.
