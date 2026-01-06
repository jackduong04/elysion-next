import { ToggleItem } from '../../../components/sections';

export type MaintenancePageContent = {
  eyebrow: string;
  title: string;
  description: string;
  buttons: ToggleItem[];
  defaultId: string;
};

export const maintenanceContent: MaintenancePageContent = {
  eyebrow: 'Gardening',
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
};
