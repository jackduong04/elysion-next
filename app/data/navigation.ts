// Types
import type { NavItem } from '../components/navbar/types';

export const navigationConfig: NavItem[] = [
  {
    id: 'landscaping',
    label: 'Landscaping',
    children: [
      { id: 'carpentry', label: 'Carpentry', href: '/pages/landscaping/carpentry' },
      {
        id: 'foundation',
        label: 'Foundation',
        href: '/pages/landscaping/foundation',
      },
    ],
  },
  {
    id: 'gardening',
    label: 'Gardening',
    children: [
      {
        id: 'soft-scaping',
        label: 'Soft-scaping',
        href: '/pages/gardening/soft-scaping',
      },
      {
        id: 'maintenance',
        label: 'Maintenance',
        href: '/pages/gardening/maintenance',
      },
    ],
  },
  { id: 'commercial', label: 'Commercial', href: '/pages/commercial' },
  { id: 'design', label: 'Design', href: '/pages/design' },
  {
    id: 'exterior-cleaning',
    label: 'Exterior Cleaning',
    href: '/pages/exterior-cleaning',
  },
  { id: 'about', label: 'About', href: '/pages/about' },
  { id: 'contact', label: 'Contact', href: '/pages/contact' },
];
