import type {
  HeroContent,
  HighlightsSectionContent,
  ServicesSectionContent,
} from '../../../components/sections';

export type ServicePageContent = {
  hero: HeroContent;
  servicesSection: ServicesSectionContent;
  highlightsSection: HighlightsSectionContent;
};

export const maintenanceContent: ServicePageContent = {
  hero: {
    eyebrow: 'Elysion Gardening',
    title: '',
    subtitle: '',
    cta: {
      label: 'Explore our services',
      href: '/',
    },
    background: '/images/hedge-in-sky.png',
  },
  servicesSection: {
    eyebrow: 'Services',
    title: 'Seasonal maintenance that keeps every bed balanced.',
    description:
      'Choose a service to see how we care for your garden with steady, intentional upkeep.',
    buttons: [
      { id: 'lawn-mowing', label: 'Lawn Mowing' },
      { id: 'hedge-trimming', label: 'Hedge Trimming' },
      { id: 'garden-maintenance', label: 'Garden Maintenance' },
      { id: 'seasonal-clear-outs', label: 'Seasonal Clear-outs' },
    ],
    defaultId: 'lawn-mowing',
  },
  highlightsSection: {
    eyebrow: 'Process',
    title: '',
    description: '',
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
};
