# Contracts: Homepage Content API (Front-end expectations)

## Endpoint: `GET /content/homepage`

**Purpose**: Supply the static data that drives the hero copy, services grid, testimonials, and featured highlights for the landing page. The front-end can call this during hydration or read the same shape from a local fixture.

### Response Schema (JSON)

```json
{
  "hero": {
    "title": "string",
    "subtitle": "string",
    "cta": {
      "label": "string",
      "href": "string"
    },
    "background": "uri"
  },
  "services": [
    {
      "name": "string",
      "description": "string",
      "icon": "uri",
      "ctaLabel": "string"
    }
  ],
  "testimonials": [
    {
      "quote": "string",
      "author": "string",
      "rating": "number"
    }
  ],
  "highlights": [
    {
      "title": "string",
      "summary": "string",
      "image": "uri",
      "sequence": "number"
    }
  ]
}
```

### Notes

- All URIs can point to optimized static assets under `public/images/` in this phase.
- Ratings are optional and used only for visual cues (no scoring logic).
- Front-end ensures hero/testimonial/highlight sections collapse gracefully even if arrays shrink.
