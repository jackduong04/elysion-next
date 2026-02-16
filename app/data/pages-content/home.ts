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

const repo = process.env.NEXT_PUBLIC_BASE_PATH;

export const homepageContent: HomepageContent = {
  hero: {
    eyebrow: 'Elysion Auckland',
    title: 'Where timeless design meets everyday life.',
    subtitle:
      'We design, build, and care for gardens that feel established from day one. ' +
      'Warm textures, clean lines, and thoughtful maintenance - all handled seamlessly.',
    cta: {
      label: 'Start your journey',
      href: '#services',
    },
    background: `${repo}/images/hedge-in-sky.png`,
  },
  servicesSection: {
    eyebrow: 'Services',
    title: 'Gardens designed to be lived in.',
    description:
      'We offer a complete suite of landscaping, gardening, design, and commercial services, ' +
      'delivered with an eye for detail and a respect for timeless form.',
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
        'Our garden finally feels like part of our home, not just something outside the windows.',
      author: 'Emily Foster, Auckland',
    },
    {
      quote:
        'Elysion understood the feeling we wanted, not just the layout. ' +
        'The space has real warmth to it now.',
      author: 'Daniel Wright, Auckland',
    },
    {
      quote:
        "It's rare to find a team that blends design sensitivity with " +
        'long-term care so seamlessly.',
      author: 'Laura Kim, Auckland',
    },
  ],
  highlightsSection: {
    eyebrow: 'Why Elysion?',
    title: 'Quietly different by design.',
    description:
      'A refined approach to landscaping, grounded in longevity and care.',
    highlights: [
      {
        title: 'Designed around real life',
        summary:
          'Our gardens are built to be used, enjoyed, and lived in every day.',
        sequence: 1,
      },
      {
        title: 'Long-term mindset',
        summary: 'We plan for how landscapes mature, not just how they start.',
        sequence: 2,
      },
      {
        title: 'Trusted execution',
        summary: 'Clear communication, careful work, and no unnecessary fuss.',
        sequence: 3,
      },
    ],
  },
  gallerySection: {
    eyebrow: 'Our Work',
    title: 'Landscapes shaped to be lived in.',
    description:
      'A selection of gardens and outdoor spaces designed to feel settled, ' +
      'balanced, and quietly timeless.',
    items: [
      {
        id: 'garden-path',
        imageSrc: `${repo}/images/project-img/stock2.jpg`,
        alt: 'Stone garden path framed by dense greenery and shrubs.',
        caption: 'Guided paths with layered greenery.',
      },
      {
        id: 'terrace-seating',
        imageSrc: `${repo}/images/project-img/stock1.jpg`,
        alt: 'Terraced patio with modern seating and trimmed hedges.',
        caption: 'Structured seating that still feels organic.',
      },
      {
        id: 'fire-pit-lounge',
        imageSrc: `${repo}/images/project-img/stock3.jpg`,
        alt: 'Outdoor lounge with a central fire pit and surrounding chairs.',
        caption: 'Evening gathering spaces with warmth.',
      },
      {
        id: 'stone-steps',
        imageSrc: `${repo}/images/project-img/stock4.jpg`,
        alt: 'Stone steps bordered by manicured plants and walls.',
        caption: 'Elevation changes framed with planting.',
      },
      {
        id: 'deck-overlook',
        imageSrc: `${repo}/images/project-img/stock5.jpg`,
        alt: 'Wooden deck overlooking a lush, planted backyard.',
        caption: 'Wood textures meeting soft plantings.',
      },
    ],
  },
  processSection: {
    eyebrow: 'Our Process',
    title: 'Designed to last.',
    description:
      'A simple, thoughtful process focused on quality, consistency, and long-term care.',
    processes: [
      {
        title: 'Consider',
        description:
          'We take time to understand the site, proportions, materials, and ' +
          'how the space will be used day to day.',
        sequence: 1,
      },
      {
        title: 'Create',
        description:
          'Design and construction are carried out with care, restraint, and ' +
          'attention to detail at every stage.',
        sequence: 2,
      },
      {
        title: 'Sustain',
        description:
          'Ongoing garden care ensures the landscape matures gracefully and ' +
          'continues to improve over time.',
        sequence: 3,
      },
    ],
  },
};
