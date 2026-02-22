// Types
import type {
  HeroContent,
  ServicesSectionContent,
  HighlightsSectionContent,
  ProcessSectionContent,
} from '../../../components/sections';

export type ServicePageContent = {
  hero: HeroContent;
  servicesSection: ServicesSectionContent;
  highlightsSection: HighlightsSectionContent;
  processSection: ProcessSectionContent;
};

export const carpentryContent: ServicePageContent = {
  hero: {
    eyebrow: 'Outdoor Carpentry in Auckland',
    title: 'Built for everyday outdoor living.',
    subtitle:
      'Thoughtful timber structures that support how gardens are used - ' +
      'durable, practical, and quietly refined.',
    cta: {
      label: 'Arrange a consultation',
      href: '#services',
    },
    background: `/images/carpentry-pg/kumeu01-wide.webp`,
  },
  servicesSection: {
    eyebrow: 'Carpentry Services',
    title: 'Licensed landscape carpentry.',
    description:
      'Our fully licensed carpenters and Licensed Building Practitioners ' +
      'design and build decks, timber retaining walls, fences, gates, and planter boxes ' +
      'with precision, compliance, and care.',
    buttons: [
      { id: 'decking', label: 'Decking' },
      { id: 'fence-gate', label: 'Fences & Gates' },
      { id: 'planter-box', label: 'Planter Boxes' },
      { id: 'timber-retaining-wall', label: 'Timber Retaining Walls' },
    ],
    defaultId: 'decking',
  },
  highlightsSection: {
    eyebrow: 'Why Elysion?',
    title: 'Quiet confidence in every build.',
    description:
      'Thoughtful carpentry that balances structure, use, and longevity.',
    highlights: [
      {
        title: 'Qualified, licensed team',
        summary:
          'Fully licensed carpenters and LBP practitioners across all timber work.',
        sequence: 1,
      },
      {
        title: 'Considered construction',
        summary: 'Proportion, detailing, and placement are carefully planned.',
        sequence: 2,
      },
      {
        title: 'Built to be lived with',
        summary:
          'Structures that support everyday outdoor living, not just aesthetics.',
        sequence: 3,
      },
    ],
  },
  processSection: {
    eyebrow: 'Our Process',
    title: 'Considered construction',
    description: 'A calm, professional approach to landscape carpentry.',
    processes: [
      {
        title: 'Understand the space',
        description:
          'We consider proportion, use, and how the structure supports everyday living.',
        sequence: 1,
      },
      {
        title: 'Construct with intent',
        description:
          'All work is completed by licensed professionals using proven construction methods.',
        sequence: 2,
      },
      {
        title: 'Deliver lasting results',
        description:
          'Finished structures are designed to weather well and perform long-term.',
        sequence: 3,
      },
    ],
  },
};
