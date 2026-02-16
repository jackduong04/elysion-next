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
      'fence-gate',
      'planter-box',
      'timer-retaining-wall',
      'concrete-pad-driveway',
      'drainage-groundwork',
      'paving-footpath',
      'concrete-retaining-wall',
    ],
  },
  gardening: {
    id: 'gardening',
    label: 'Gardening',
    serviceSlugs: [
      'lawn-care',
      'hedge-trimming',
      'ongoing-maintenance',
      'seasonal-clear-out',
      'planting',
      'soil-conditioning',
      'mulching',
    ],
  },
  design: {
    id: 'design',
    label: 'Design',
    serviceSlugs: [
      'landscape-design',
      'concept-render',
      'planting-plan',
      'drawing-consent',
    ],
  },
  commercial: {
    id: 'commercial',
    label: 'Commercial',
    serviceSlugs: [
      'commercial-landscaping',
      'ground-maintenance',
      'pressure-washing',
      'landscape-enhance',
    ],
  },
};

export const services: Record<string, Service> = {
  // LANDSCAPING
  decking: {
    slug: 'decking',
    name: 'Decking',
    categoryId: 'landscaping',
    card: {
      description: 'Decks designed to be lived on.',
      ctaLabel: 'Carpentry',
    },
    detail: {
      description: `We design and build timber decking that extends living spaces outdoors, 
        constructed by licensed professionals for durability, compliance, and everyday use.`,
      image: '/images/unavailable.png',
    },
  },
  'fence-gate': {
    slug: 'fence-gate',
    name: 'Fences & Gates',
    categoryId: 'landscaping',
    card: {
      description: 'Professionally built fences and gates in Auckland.',
      ctaLabel: 'Carpentry',
    },
    detail: {
      description: `Our fencing and gate service delivers clean, durable structures 
        that define boundaries and improve privacy, built with attention to 
        detail and proportion.`,
      image: '/images/unavailable.png',
    },
  },
  'planter-box': {
    slug: 'planter-box',
    name: 'Planter Boxes',
    categoryId: 'landscaping',
    card: {
      description: 'Custom-built planter boxes for Auckland gardens.',
      ctaLabel: 'Carpentry',
    },
    detail: {
      description: `We build well-constructed timber planter boxes designed 
        for durability, drainage, and long-term use.`,
      image: '/images/unavailable.png',
    },
  },
  'timber-retaining-wall': {
    slug: 'timber-retaining-wall',
    name: 'Timber Retaining Walls',
    categoryId: 'landscaping',
    card: {
      description: 'Licensed timber retaining wall construction.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `Our retaining wall construction services are delivered by 
        licensed professionals, considering loads, drainage, and ground 
        conditions for long-term performance.`,
      image: '/images/unavailable.png',
    },
  },
  'concrete-pad-driveway': {
    slug: 'concrete-pad-driveway',
    name: 'Concrete Pads & Driveways',
    categoryId: 'landscaping',
    card: {
      description: 'Solid surfaces, properly prepared.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `We construct concrete pads and driveways with careful preparation 
        and attention to detail, ensuring clean finishes and good drainage.`,
      image: '/images/unavailable.png',
    },
  },
  'drainage-groundwork': {
    slug: 'drainage-groundwork',
    name: 'Drainage & Groundworks',
    categoryId: 'landscaping',
    card: {
      description: 'Effective drainage and groundworks across Auckland.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `Our drainage and groundworks service manages water, levels, 
        and ground conditions to support long-term site performance.`,
      image: '/images/unavailable.png',
    },
  },
  'paving-footpath': {
    slug: 'paving-footpath',
    name: 'Paving & Footpaths',
    categoryId: 'landscaping',
    card: {
      description: 'Reliable paving and footpaths in Auckland.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `We create clean, functional paved surfaces and 
        footpaths that improve access, flow, and presentation.`,
      image: '/images/unavailable.png',
    },
  },
  'concrete-retaining-wall': {
    slug: 'concrete-retaining-wall',
    name: 'Concrete Block Retaining Walls',
    categoryId: 'landscaping',
    card: {
      description: 'Solid retaining walls, built to perform.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `We build concrete block retaining walls that provide 
        strength and stability while sitting cleanly within the landscape.`,
      image: '/images/unavailable.png',
    },
  },

  // GARDENING
  'lawn-care': {
    slug: 'lawn-care',
    name: 'Lawn Care',
    categoryId: 'gardening',
    card: {
      description: 'Professional lawn care services across Auckland.',
      ctaLabel: 'Maintenance',
    },
    detail: {
      description: `Our Auckland lawn care service focuses on regular mowing, 
        edging, and seasonal attention to keep lawns healthy and presentable year-round. 
        By maintaining correct cutting heights and consistent scheduling, we help 
        lawns remain resilient, tidy, and easy to manage in Auckland conditions.`,
      image: '/images/unavailable.png',
    },
  },
  'hedge-trimming': {
    slug: 'hedge-trimming',
    name: 'Hedge Trimming',
    categoryId: 'gardening',
    card: {
      description: 'Neat, balanced hedges that frame your garden.',
      ctaLabel: 'Maintenance',
    },
    detail: {
      description: `We provide careful hedge trimming services across Auckland, helping gardens 
        stay tidy and well defined without overcutting. Each trim is timed and shaped to suit 
        the plant and the surrounding landscape.`,
      image: '/images/unavailable.png',
    },
  },
  'ongoing-maintenance': {
    slug: 'ongoing-maintenance',
    name: 'Ongoing Maintenance',
    categoryId: 'gardening',
    card: {
      description: 'Set-and-forget garden maintenance in Auckland.',
      ctaLabel: 'Maintenance',
    },
    detail: {
      description: `We deliver reliable, ongoing garden maintenance services across Auckland, 
        taking care of pruning,  tidying, and general upkeep so your garden remains 
        presentable with minimal involvement from you.`,
      image: '/images/unavailable.png',
    },
  },
  'seasonal-clear-out': {
    slug: 'seasonal-clear-out',
    name: 'Seasonal Clear-outs',
    categoryId: 'gardening',
    card: {
      description: 'Seasonal garden clear-outs across Auckland.',
      ctaLabel: 'Maintenance',
    },
    detail: {
      description: `Our Auckland garden clear-out service focuses on removing 
        built-up growth, debris, and tired planting to reset gardens for the season ahead, 
        restoring structure and improving presentation.`,
      image: '/images/unavailable.png',
    },
  },
  planting: {
    slug: 'planting',
    name: 'Planting',
    categoryId: 'gardening',
    card: {
      description: 'Planting that brings landscapes to life.',
      ctaLabel: 'Soft-scaping',
    },
    detail: {
      description: `We approach planting as a defining stage of the landscape, 
        carefully positioning plants to create rhythm, structure, 
        and longevity so gardens improve with time.`,
      image: '/images/unavailable.png',
    },
  },
  'soil-conditioning': {
    slug: 'soil-conditioning',
    name: 'Soil Conditioning',
    categoryId: 'gardening',
    card: {
      description: 'Soil preparation tailored to Auckland conditions.',
      ctaLabel: 'Soft-scaping',
    },
    detail: {
      description: `Our Auckland soil conditioning service improves soil structure, 
        drainage, and nutrients to support strong root development and resilient planting.`,
      image: '/images/unavailable.png',
    },
  },
  mulching: {
    slug: 'mulching',
    name: 'Mulching & Finishing',
    categoryId: 'gardening',
    card: {
      description:
        'Professional mulching and finishing for Auckland landscapes.',
      ctaLabel: 'Soft-scaping',
    },
    detail: {
      description: `Our mulching and finishing service completes garden installations by 
        improving moisture retention, suppressing weeds, and unifying the overall 
        look of the landscape.`,
      image: '/images/unavailable.png',
    },
  },

  // DESIGN
  'landscape-design': {
    slug: 'landscape-design',
    name: 'Full Landscape Design',
    categoryId: 'design',
    card: {
      description: 'Complete landscape design services across Auckland.',
      ctaLabel: 'Design',
    },
    detail: {
      description: `Our full landscape design service provides a clear, considered vision 
        from concept through to detailed plans, balancing aesthetics and long-term function.`,
      image: '/images/unavailable.png',
    },
  },
  'concept-render': {
    slug: 'concept-render',
    name: 'Concept Renders',
    categoryId: 'design',
    card: {
      description: 'Seeing the landscape take shape.',
      ctaLabel: 'Design',
    },
    detail: {
      description: `We produce concept renders that communicate the feel and intent of 
        a design clearly, helping clients visualise projects before construction.`,
      image: '/images/unavailable.png',
    },
  },
  'planting-plan': {
    slug: 'planting-plan',
    name: 'Planting Plans',
    categoryId: 'design',
    card: {
      description: 'Planting plans guided by site and season.',
      ctaLabel: 'Design',
    },
    detail: {
      description: `Our planting plans consider soil, aspect, and climate to 
        support healthy establishment and resilient planting schemes.`,
      image: '/images/unavailable.png',
    },
  },
  'drawing-consent': {
    slug: 'drawing-consent',
    name: 'Structural Drawings & Consented Work',
    categoryId: 'design',
    card: {
      description: 'Design and documentation, properly resolved.',
      ctaLabel: 'Design',
    },
    detail: {
      description: `We provide structural drawings and consent-ready documentation 
        to ensure projects are planned accurately and approved with confidence.`,
      image: '/images/unavailable.png',
    },
  },

  // COMMERCIAL
  'commercial-landscaping': {
    slug: 'commercial-landscaping',
    name: 'Commercial Landscaping',
    categoryId: 'commercial',
    card: {
      description:
        'Professional commercial landscaping services across Auckland.',
      ctaLabel: 'Commercial',
    },
    detail: {
      description: `We support businesses and managed properties with structured, 
        presentable outdoor environments built for durability and consistency.`,
      image: '/images/unavailable.png',
    },
  },
  'ground-maintenance': {
    slug: 'ground-maintenance',
    name: 'Ongoing Grounds Maintenance',
    categoryId: 'commercial',
    card: {
      description:
        'Reliable grounds maintenance for Auckland commercial sites.',
      ctaLabel: 'Commercial',
    },
    detail: {
      description: `Our ongoing grounds maintenance service provides consistent care 
        to keep commercial landscapes tidy, safe, and well presented.`,
      image: '/images/unavailable.png',
    },
  },
  'pressure-washing': {
    slug: 'pressure-washing',
    name: 'Pressure Washing & Building Washing',
    categoryId: 'commercial',
    card: {
      description:
        'Professional pressure and building washing services across Auckland.',
      ctaLabel: 'Commercial',
    },
    detail: {
      description: `We restore exterior surfaces safely and effectively, 
        removing grime while protecting materials and surrounding landscaping.`,
      image: '/images/unavailable.png',
    },
  },
  'landscape-enhance': {
    slug: 'landscape-enhance',
    name: 'Landscape Enhancement Plans',
    categoryId: 'commercial',
    card: {
      description:
        'Strategic landscaping enhancement plans for Auckland sites.',
      ctaLabel: 'Commercial',
    },
    detail: {
      description: `Our enhancement plans provide a clear roadmap for 
        staged improvements, prioritising long-term value and practical implementation.`,
      image: '/images/unavailable.png',
    },
  },
};
