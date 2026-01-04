import { NavItem } from '../components/navbar/types';

export const navigationConfig: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'landscaping',
    label: 'Landscaping',
    children: [
      { id: 'carpentry', label: 'Carpentry', href: '/landscaping/carpentry' },
      {
        id: 'foundation',
        label: 'Foundation',
        href: '/landscaping/foundation',
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
        href: '/gardening/soft-scaping',
      },
      {
        id: 'maintenance',
        label: 'Maintenance',
        href: '/gardening/maintenance',
      },
    ],
  },
  { id: 'commercial', label: 'Commercial', href: '/commercial' },
  { id: 'design', label: 'Design', href: '/design' },
  {
    id: 'exterior-cleaning',
    label: 'Exterior Cleaning',
    href: '/exterior-cleaning',
  },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];
