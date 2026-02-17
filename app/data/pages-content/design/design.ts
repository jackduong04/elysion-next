// Types
import type {
  HeroContent,
  ServicesSectionContent,
  HighlightsSectionContent,
  ProcessSectionContent,
} from '../../../components/sections';

export type ServicePageContent = {
  hero: HeroContent;
  servicesSection: ServicesSectionContent;
  highlightsSection: HighlightsSectionContent;
  processSection: ProcessSectionContent;
};

const repo = process.env.NEXT_PUBLIC_BASE_PATH;

export const designContent: ServicePageContent = {
  hero: {
    eyebrow: 'Landscape Design Auckland',
    title: 'Where ideas become enduring spaces.',
    subtitle:
      'We design landscapes with warmth and restraint - ' +
      'guided by proportion, materiality, and how spaces are lived in every day.',
    cta: {
      label: 'Start designing',
      href: '#services',
    },
    background: `${repo}/images/hedge-in-sky.png`,
  },
  servicesSection: {
    eyebrow: 'Design Services',
    title: 'Complete landscape design, start to finish.',
    description:
      'From initial concepts to detailed drawings and planting plans, ' +
      'our design services provide clarity, direction, and confidence before anything is built.',
    buttons: [
      { id: 'landscape-design', label: 'Full Landscape Design' },
      { id: 'concept-render', label: 'Concept Renders' },
      { id: 'planting-plan', label: 'Planting Plans' },
      { id: 'drawing-consent', label: 'Structural Drawings & Consented Work' },
    ],
    defaultId: 'landscape-design',
  },
  highlightsSection: {
    eyebrow: 'Why Elysion?',
    title: 'Design with purpose.',
    description: 'Good design brings clarity long before construction begins.',
    highlights: [
      {
        title: 'Design-led thinking',
        summary:
          'Every project begins with understanding space, proportion, and how it will be used.',
        sequence: 1,
      },
      {
        title: 'Built with reality in mind',
        summary:
          'Our designs are practical, buildable, and grounded in experience.',
        sequence: 2,
      },
      {
        title: 'Long-term focus',
        summary:
          'We design for how landscapes evolve, not just how they look on day one.',
        sequence: 3,
      },
    ],
  },
  processSection: {
    eyebrow: 'Our Process',
    title: 'From idea to clear direction.',
    description:
      'A considered design process that brings clarity before construction begins.',
    processes: [
      {
        title: 'Understand the brief',
        description:
          'We explore how the space will be used, your priorities, and the site’s constraints.',
        sequence: 1,
        image: `${repo}/images/project-img/stock1.jpg`,
      },
      {
        title: 'Develop the design',
        description:
          'Concepts, layouts, and planting ideas are refined into a cohesive direction.',
        sequence: 2,
        image: `${repo}/images/project-img/stock2.jpg`,
      },
      {
        title: 'Resolve the details',
        description:
          'Final drawings, planting plans, and technical documentation prepare ' +
          'the project for build.',
        sequence: 3,
        image: `${repo}/images/project-img/stock3.jpg`,
      },
    ],
  },
};
