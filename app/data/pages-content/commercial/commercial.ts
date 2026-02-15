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

export const commercialContent: ServicePageContent = {
  hero: {
    eyebrow: 'Auckland Commercial Landscaping',
    title: 'Commercial landscaping, managed properly.',
    subtitle:
      'Landscaping, maintenance, and exterior cleaning services delivered ' +
      'reliably for businesses, developments, and managed properties.',
    cta: {
      label: 'View our services',
      href: '/',
    },
    background: `${repo}/images/hedge-in-sky.png`,
  },
  servicesSection: {
    eyebrow: 'Commercial Services',
    title: 'Considered care for commercial environments.',
    description:
      'We support commercial properties with structured landscaping, ongoing maintenance, and exterior cleaning - ' +
      'delivered with consistency and attention to detail.',
    buttons: [
      { id: 'commercial-landscaping', label: 'Commercial Landscaping' },
      { id: 'ground-maintenance', label: 'Ongoing Grounds Maintenance' },
      { id: 'pressure-washing', label: 'Pressure Washing & Building Washing' },
      { id: 'landscape-enhance', label: 'Landscape Enhancement Plans' },
    ],
    defaultId: 'commercial-landscaping',
  },
  highlightsSection: {
    eyebrow: 'Why Elysion?',
    title: 'A dependable partner for commercial sites.',
    description:
      'Consistent service, clear communication, and long-term thinking.',
    highlights: [
      {
        title: 'Reliable delivery',
        summary: 'Scheduled work completed consistently and to plan.',
        sequence: 1,
      },
      {
        title: 'Clear communication',
        summary: 'Straightforward updates and responsive coordination.',
        sequence: 2,
      },
      {
        title: 'Long-term mindset',
        summary: 'We focus on presentation, safety, and asset longevity.',
        sequence: 3,
      },
    ],
  },
};
