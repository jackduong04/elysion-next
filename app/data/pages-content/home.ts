// Types
import type {
  HeroContent,
  HighlightsSectionContent,
  ServicesSectionContent,
  ProcessSectionContent,
} from '../../components/sections';

type GalleryItem = {
  id: string;
  imageSrc: string;
  alt: string;
  caption?: string;
};

type GallerySectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: GalleryItem[];
};

type Testimonial = {
  quote: string;
  author: string;
};

type HomepageContent = {
  hero: HeroContent;
  servicesSection: ServicesSectionContent;
  testimonials: Testimonial[];
  highlightsSection: HighlightsSectionContent;
  processSection: ProcessSectionContent;
  gallerySection: GallerySectionContent;
};

export const homepageContent: HomepageContent = {
  hero: {
    eyebrow: 'Elysion Auckland',
    title: 'Elysion, timeless landscapes for modern living.',
    subtitle:
      'We shape warm, lived-in outdoor spaces with old-world texture and clean, contemporary lines. From seasonal stewardship to full garden design, every detail is intentional.',
    cta: {
      label: 'Explore our services',
      href: '#services',
    },
    background: '/images/hedge-in-sky.png',
  },
  servicesSection: {
    eyebrow: 'Services',
    title: 'Cultivated offerings for every season.',
    description:
      'Each service blends old-world materiality with contemporary clarity, ensuring your landscape feels grounded and effortless year-round.',
    buttons: [
      { id: 'landscaping', label: 'Landscaping' },
      { id: 'gardening', label: 'Gardening' },
      { id: 'design', label: 'Design' },
      { id: 'commercial', label: 'Commercial' },
    ],
    defaultId: 'landscaping',
  },
  testimonials: [
    {
      quote:
        'Elysion turned our yard into a layered retreat. Every season feels curated.',
      author: 'Marin Wells, Beacon Hill',
    },
    {
      quote:
        'The team balanced modern lines with classic planting. It feels timeless.',
      author: 'Rafael Ortiz, South End',
    },
    {
      quote:
        'Maintenance is meticulous and calm. The garden looks better every month.',
      author: 'Priya Patel, Back Bay',
    },
  ],
  highlightsSection: {
    eyebrow: 'Why choose us?',
    title: 'A calm, collaborative path to renewal.',
    description:
      'We combine listening, design craft, and steady stewardship so the landscape grows alongside you.',
    highlights: [
      {
        title: 'Listening Walkthrough',
        summary:
          'We map light, soil, and movement on site to understand the soul of the space.',
        sequence: 1,
      },
      {
        title: 'Textured Planting Plan',
        summary:
          'Layered perennials, shrubs, and evergreens keep the garden rich in every season.',
        sequence: 2,
      },
      {
        title: 'Steady Stewardship',
        summary:
          'Ongoing care keeps the landscape balanced, healthy, and effortless to enjoy.',
        sequence: 3,
      },
    ],
  },
  gallerySection: {
    eyebrow: 'Portfolio',
    title: 'A centered glimpse at recent landscapes.',
    description:
      'Scroll, tap, or use the controls to explore how we pair texture and structure across varied spaces.',
    items: [
      {
        id: 'garden-path',
        imageSrc: '/images/project-img/stock2.jpg',
        alt: 'Stone garden path framed by dense greenery and shrubs.',
        caption: 'Guided paths with layered greenery.',
      },
      {
        id: 'terrace-seating',
        imageSrc: '/images/project-img/stock1.jpg',
        alt: 'Terraced patio with modern seating and trimmed hedges.',
        caption: 'Structured seating that still feels organic.',
      },
      {
        id: 'fire-pit-lounge',
        imageSrc: '/images/project-img/stock3.jpg',
        alt: 'Outdoor lounge with a central fire pit and surrounding chairs.',
        caption: 'Evening gathering spaces with warmth.',
      },
      {
        id: 'stone-steps',
        imageSrc: '/images/project-img/stock4.jpg',
        alt: 'Stone steps bordered by manicured plants and walls.',
        caption: 'Elevation changes framed with planting.',
      },
      {
        id: 'deck-overlook',
        imageSrc: '/images/project-img/stock5.jpg',
        alt: 'Wooden deck overlooking a lush, planted backyard.',
        caption: 'Wood textures meeting soft plantings.',
      },
    ],
  },
  processSection: {
    eyebrow: 'Process',
    title: 'A calm, collaborative path to renewal.',
    description:
      'We combine listening, design craft, and steady stewardship so the landscape grows alongside you.',
    processes: [
      {
        title: 'Listening Walkthrough',
        description:
          'We map light, soil, and movement on site to understand the soul of the space.',
        sequence: 1,
      },
      {
        title: 'Textured Planting Plan',
        description:
          'Layered perennials, shrubs, and evergreens keep the garden rich in every season.',
        sequence: 2,
      },
      {
        title: 'Steady Stewardship',
        description:
          'Ongoing care keeps the landscape balanced, healthy, and effortless to enjoy.',
        sequence: 3,
      },
    ],
  },
};
