import { NavItem } from '../components/navbar/types';

export const navigationConfig: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'landscaping',
    label: 'Landscaping',
    href: '',
    children: [
      { id: 'design', label: 'Design', href: '/landscaping/design' },
      { id: 'decking', label: 'Decking', href: '/landscaping/decking' },
      {
        id: 'fencing',
        label: 'Fencing & Gates',
        href: '/landscaping/fencing-gates',
      },
      {
        id: 'excavation',
        label: 'Excavation & Concrete',
        href: '/landscaping/excavation-concrete',
      },
      {
        id: 'retaining-walls',
        label: 'Retaining Walls',
        href: '/landscaping/retaining-walls',
      },
      {
        id: 'garden-beds',
        label: 'Garden Beds',
        href: '/landscaping/garden-beds',
      },
      {
        id: 'drainage',
        label: 'Drainage & Irrigation',
        href: '/landscaping/drainage-irrigation',
      },
    ],
  },
  {
    id: 'gardening',
    label: 'Gardening',
    href: '',
    children: [
      {
        id: 'lawn-mowing',
        label: 'Lawn Mowing',
        href: '/gardening/lawn-mowing',
      },
      {
        id: 'maintenance',
        label: 'Garden Maintenance',
        href: '/gardening/maintenance',
      },
      {
        id: 'hedge-trimming',
        label: 'Hedge Trimming',
        href: '/gardening/hedge-trimming',
      },
      {
        id: 'clearouts',
        label: 'Seasonal Clearouts',
        href: '/gardening/seasonal-clearouts',
      },
      { id: 'planting', label: 'Planting', href: '/gardening/planting' },
    ],
  },
  { id: 'commercial', label: 'Commercial', href: '/commercial' },
  {
    id: 'exterior-cleaning',
    label: 'Exterior Cleaning',
    href: '/exterior-cleaning',
  },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'blogs', label: 'Blogs', href: '/blogs' },
];
