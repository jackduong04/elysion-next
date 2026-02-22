// Types
import type {
  HeroContent,
  ServicesSectionContent,
} from '../../../components/sections';

export type ServicePageContent = {
  hero: HeroContent;
  servicesSection: ServicesSectionContent;
};

export const maintenanceContent: ServicePageContent = {
  hero: {
    eyebrow: 'Garden Maintenance in Auckland',
    title: 'Easy gardens, season after season.',
    subtitle:
      'Thoughtful, ongoing garden maintenance for Auckland homes - ' +
      'reliable care that keeps gardens healthy and effortless year-round.',
    cta: {
      label: 'Arrange maintenance',
      href: '#services',
    },
    background: `/images/maintenance-pg/dairy-flat01-wide.webp`,
  },
  servicesSection: {
    eyebrow: 'Maintenance Services',
    title: 'Reliable maintenance, done properly.',
    description:
      'We handle lawns, hedges, ongoing garden care, and seasonal tidy-ups ' +
      'with attention to detail and respect for how gardens grow and change.',
    buttons: [
      { id: 'lawn-care', label: 'Lawn Care' },
      { id: 'hedge-trimming', label: 'Hedge Trimming' },
      { id: 'ongoing-maintenance', label: 'Ongoing Maintenance' },
      { id: 'seasonal-clear-out', label: 'Seasonal Clear-outs' },
    ],
    defaultId: 'lawn-care',
  },
};
