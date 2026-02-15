// Types
import type {
  HeroContent,
  ServicesSectionContent,
  HighlightsSectionContent,
} from '../../../components/sections';

export type ServicePageContent = {
  hero: HeroContent;
  servicesSection: ServicesSectionContent;
  highlightsSection: HighlightsSectionContent;
};

const repo = process.env.NEXT_PUBLIC_BASE_PATH;

export const softscapingContent: ServicePageContent = {
  hero: {
    eyebrow: 'Soft-scaping in Auckland',
    title: 'Landscapes shaped from the ground up.',
    subtitle:
      'We create layered, living gardens through careful preparation, considered planting, ' +
      'and finishes that feel settled from day one.',
    cta: {
      label: 'Start your project',
      href: '/',
    },
    background: `${repo}/images/hedge-in-sky.png`,
  },
  servicesSection: {
    eyebrow: 'Soft-scaping Services',
    title: 'A considered approach to living landscapes.',
    description:
      'Every soft-scaping project begins with careful preparation, thoughtful planting, ' +
      'and finishes that support longevity and ease of care.',
    buttons: [
      { id: 'planting', label: 'Planting' },
      { id: 'soil-conditioning', label: 'Soil Conditioning' },
      { id: 'mulching', label: 'Mulching & Finishing' },
    ],
    defaultId: 'planting',
  },
  highlightsSection: {
    eyebrow: 'Why Elysion?',
    title: 'Living landscapes, done thoughtfully.',
    description:
      'We create gardens that feel settled from day one and grow better with time.',
    highlights: [
      {
        title: 'Ground-up thinking',
        summary:
          'Preparation and soil conditioning are treated as essential, not optional.',
        sequence: 1,
      },
      {
        title: 'Considered plant selection',
        summary:
          'Plants are chosen for balance, placement, and long-term health.',
        sequence: 2,
      },
      {
        title: 'Calm, cohesive finishes',
        summary: 'Mulching and final detailing bring everything together.',
        sequence: 3,
      },
    ],
  },
};
