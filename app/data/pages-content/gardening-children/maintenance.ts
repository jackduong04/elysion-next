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
};
