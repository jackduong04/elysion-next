export type ServiceDetail = {
  description: string;
  image: string;
};

export type ServiceCard = {
  description: string;
  ctaLabel: string;
  icon?: string;
};

export type Service = {
  slug: string;
  name: string;
  categoryId: string;
  card: ServiceCard;
  detail?: ServiceDetail;
};

export type Category = {
  id: string;
  label: string;
  serviceSlugs?: string[];
  cta?: {
    text: string;
    href: string;
  };
};

export const categories: Record<string, Category> = {
  landscaping: {
    id: 'landscaping',
    label: 'Landscaping',
    serviceSlugs: [
      'decking',
      'fencing-gates',
      'excavation-concrete',
      'retaining-walls',
      'garden-beds',
      'drainage-irrigation',
    ],
  },
  gardening: {
    id: 'gardening',
    label: 'Gardening',
    serviceSlugs: [
      'lawn-mowing',
      'hedge-trimming',
      'garden-maintenance',
      'seasonal-clear-outs',
      'planting',
    ],
  },
  design: {
    id: 'design',
    label: 'Design',
    cta: {
      text: 'Explore our design approach and past work.',
      href: '/design',
    },
  },
  commercial: {
    id: 'commercial',
    label: 'Commercial',
    cta: {
      text: 'Visit our commercial services page for details.',
      href: '/commercial',
    },
  },
};

export const services: Record<string, Service> = {
  // Landscaping
  decking: {
    slug: 'decking',
    name: 'Decking',
    categoryId: 'landscaping',
    card: {
      description: 'Durable timber and composite decks tailored to your outdoor flow.',
      ctaLabel: 'View decking',
    },
    detail: {
      description:
        'Precision-built decks that extend your living space with weather-ready materials and clean lines.',
      image: '/images/service-maintenance.png',
    },
  },
  'fencing-gates': {
    slug: 'fencing-gates',
    name: 'Fencing & Gates',
    categoryId: 'landscaping',
    card: {
      description: 'Privacy and entry solutions that stay true to the landscape.',
      ctaLabel: 'Explore fencing',
    },
    detail: {
      description:
        'Custom fences and gates that balance security with curb appeal, using long-lasting finishes.',
      image: '/images/service-maintenance.png',
    },
  },
  'excavation-concrete': {
    slug: 'excavation-concrete',
    name: 'Excavation & Concrete',
    categoryId: 'landscaping',
    card: {
      description: 'Site prep, drainage, and concrete work for stable foundations.',
      ctaLabel: 'See groundwork',
    },
    detail: {
      description:
        'Grading, trenching, and concrete pours executed with care to support patios, paths, and walls.',
      image: '/images/service-maintenance.png',
    },
  },
  'retaining-walls': {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    categoryId: 'landscaping',
    card: {
      description: 'Structural and decorative walls that manage slope with style.',
      ctaLabel: 'View walls',
    },
    detail: {
      description:
        'Engineered retaining solutions that stabilize terrain while matching the material language of your space.',
      image: '/images/service-maintenance.png',
    },
  },
  'garden-beds': {
    slug: 'garden-beds',
    name: 'Garden Beds',
    categoryId: 'landscaping',
    card: {
      description: 'Layered beds with healthy soil structure and planting rhythm.',
      ctaLabel: 'View beds',
    },
    detail: {
      description:
        'Raised or in-ground beds built with proper drainage, soil prep, and planting plans for four-season interest.',
      image: '/images/service-maintenance.png',
    },
  },
  'drainage-irrigation': {
    slug: 'drainage-irrigation',
    name: 'Drainage & Irrigation',
    categoryId: 'landscaping',
    card: {
      description: 'Water management to protect your landscape and keep it thriving.',
      ctaLabel: 'See solutions',
    },
    detail: {
      description:
        'Smart drainage and irrigation setups that move water away from structures and hydrate plants efficiently.',
      image: '/images/service-maintenance.png',
    },
  },

  // Gardening
  'lawn-mowing': {
    slug: 'lawn-mowing',
    name: 'Lawn Mowing',
    categoryId: 'gardening',
    card: {
      description: 'Consistent cuts and edging for a clean, healthy lawn.',
      ctaLabel: 'Schedule mow',
    },
    detail: {
      description:
        'Routine mowing, edging, and tidy blow-downs that keep turf balanced and ready for use.',
      image: '/images/service-maintenance.png',
    },
  },
  'hedge-trimming': {
    slug: 'hedge-trimming',
    name: 'Hedge Trimming',
    categoryId: 'gardening',
    card: {
      description: 'Crisp lines and healthy growth for hedges and shrubs.',
      ctaLabel: 'Book trimming',
    },
    detail: {
      description:
        'Seasonal trims that shape hedges, encourage growth, and maintain clean sightlines.',
      image: '/images/service-maintenance.png',
    },
  },
  'garden-maintenance': {
    slug: 'garden-maintenance',
    name: 'Garden Maintenance',
    categoryId: 'gardening',
    card: {
      description: 'Bed care, pruning, and tidy-ups to keep gardens thriving.',
      ctaLabel: 'Plan upkeep',
    },
    detail: {
      description:
        'Comprehensive garden care including pruning, deadheading, soil conditioning, and seasonal resets.',
      image: '/images/service-maintenance.png',
    },
  },
  'seasonal-clear-outs': {
    slug: 'seasonal-clear-outs',
    name: 'Seasonal Clear-outs',
    categoryId: 'gardening',
    card: {
      description: 'Prep and refresh between seasons for a clean start.',
      ctaLabel: 'Book clear-out',
    },
    detail: {
      description:
        'Leaf and debris removal, pruning, and prep that set your garden up for the coming season.',
      image: '/images/service-maintenance.png',
    },
  },
  planting: {
    slug: 'planting',
    name: 'Planting',
    categoryId: 'gardening',
    card: {
      description: 'Thoughtful installs of trees, shrubs, and perennials.',
      ctaLabel: 'Plan planting',
    },
    detail: {
      description:
        'Sourcing and installing plant material with soil prep, spacing, and watering guidance for longevity.',
      image: '/images/service-maintenance.png',
    },
  },
};
