import {
  HeroContent,
  HighlightsSectionContent,
  ServicesSectionContent,
  ProcessSectionContent,
} from '../../components/sections';

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
        image: '/images/highlight-walkthrough.jpg',
        sequence: 1,
      },
      {
        title: 'Textured Planting Plan',
        summary:
          'Layered perennials, shrubs, and evergreens keep the garden rich in every season.',
        image: '/images/highlight-planting.jpg',
        sequence: 2,
      },
      {
        title: 'Steady Stewardship',
        summary:
          'Ongoing care keeps the landscape balanced, healthy, and effortless to enjoy.',
        image: '/images/highlight-stewardship.jpg',
        sequence: 3,
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
        image: '/images/highlight-walkthrough.jpg',
        sequence: 1,
      },
      {
        title: 'Textured Planting Plan',
        description:
          'Layered perennials, shrubs, and evergreens keep the garden rich in every season.',
        image: '/images/highlight-planting.jpg',
        sequence: 2,
      },
      {
        title: 'Steady Stewardship',
        description:
          'Ongoing care keeps the landscape balanced, healthy, and effortless to enjoy.',
        image: '/images/highlight-stewardship.jpg',
        sequence: 3,
      },
    ],
  },
};
