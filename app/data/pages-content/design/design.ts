// Types
import type {
  HeroContent,
  ProcessSectionContent,
} from '../../../components/sections';

export type ServicePageContent = {
  hero: HeroContent;
  processSection: ProcessSectionContent;
};

const repo = process.env.NEXT_PUBLIC_BASE_PATH;

export const designContent: ServicePageContent = {
  hero: {
    eyebrow: 'Elysion Design',
    title: '',
    subtitle: '',
    cta: {
      label: 'Explore our services',
      href: '/',
    },
    background: `${repo}/images/hedge-in-sky.png`,
  },
  processSection: {
    eyebrow: 'Process',
    title: 'A calm, collaborative path to renewal.',
    description:
      'We combine listening, design craft, and steady stewardship so the landscape grows alongside you.',
    processes: [
      {
        title: 'Listening Walkthrough',
        description:
          'We map light, soil, and movement on site to understand the soul of the space.',
        sequence: 1,
        image: `${repo}/images/project-img/stock1.jpg`,
      },
      {
        title: 'Textured Planting Plan',
        description:
          'Layered perennials, shrubs, and evergreens keep the garden rich in every season.',
        sequence: 2,
        image: `${repo}/images/project-img/stock2.jpg`,
      },
      {
        title: 'Steady Stewardship',
        description:
          'Ongoing care keeps the landscape balanced, healthy, and effortless to enjoy.',
        sequence: 3,
        image: `${repo}/images/project-img/stock3.jpg`,
      },
    ],
  },
};
