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

export const foundationContent: ServicePageContent = {
  hero: {
    eyebrow: 'Landscape Foundations',
    title: 'Getting the groundwork right.',
    subtitle:
      'Calm, methodical foundation and drainage work that ensures ' +
      'outdoor spaces function properly and stand the test of time.',
    cta: {
      label: 'Arrange a consultation',
      href: '#services',
    },
    background: `/images/foundation-pg/orewa01-wide.webp`,
  },
  servicesSection: {
    eyebrow: 'Foundation Services',
    title: 'Thoughtful groundwork for functional landscapes.',
    description:
      'We deliver calm, considered foundation work that supports ' +
      'long-term performance, drainage, and ease of use across the landscape.',
    buttons: [
      { id: 'concrete-pad-driveway', label: 'Concrete Pads & Driveways' },
      { id: 'drainage-groundwork', label: 'Drainage & Groundworks' },
      { id: 'paving-footpath', label: 'Paving & Footpaths' },
      {
        id: 'concrete-retaining-wall',
        label: 'Concrete Block Retaining Walls',
      },
    ],
    defaultId: 'timber-retaining-wall',
  },
  highlightsSection: {
    eyebrow: 'Why Elysion?',
    title: 'Groundwork you can rely on.',
    description: 'Strong landscapes depend on what sits beneath the surface.',
    highlights: [
      {
        title: 'Built for function first',
        summary:
          'Drainage, levels, and surfaces are designed to work properly in real conditions.',
        sequence: 1,
      },
      {
        title: 'Careful sequencing',
        summary: 'Groundworks are planned to support everything that follows.',
        sequence: 2,
      },
      {
        title: 'Long-term mindset',
        summary: 'We prioritise durability, access, and ease of maintenance.',
        sequence: 3,
      },
    ],
  },
  processSection: {
    eyebrow: 'Our Process',
    title: 'Getting the groundwork right.',
    description:
      'A considered approach that prioritises function and longevity.',
    processes: [
      {
        title: 'Understand the site',
        description:
          'Levels, water movement, and usage are carefully considered.',
        sequence: 1,
      },
      {
        title: 'Build with intent',
        description:
          'Foundations, paving, and drainage are executed methodically.',
        sequence: 2,
      },
      {
        title: 'Support what follows',
        description:
          'Finished groundwork provides a reliable base for landscapes and structures.',
        sequence: 3,
      },
    ],
  },
};
