export type ServiceDetail = {
  description: string;
  image?: string;
  video?: string;
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
  href: string;
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

const CARPENTRY_HREF = '/pages/landscaping/carpentry#services';
const FOUNDATION_HREF = '/pages/landscaping/foundation#services';
const MAINTENANCE_HREF = '/pages/gardening/maintenance#services';
const SOFTSCAPING_HREF = '/pages/gardening/soft-scaping#services';
const DESIGN_HREF = '/pages/design#services';
const COMMERCIAL_HREF = '/pages/commercial#services';

export const categories: Record<string, Category> = {
  landscaping: {
    id: 'landscaping',
    label: 'Landscaping',
    serviceSlugs: [
      'decking',
      'fence-gate',
      'planter-box',
      'timber-retaining-wall',
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
      'remove-prep',
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
    href: CARPENTRY_HREF,
    card: {
      description: 'Decks designed to be lived on.',
      ctaLabel: 'Carpentry',
    },
    detail: {
      description: `We design and build timber decking that extends living spaces outdoors, 
        constructed by licensed professionals for durability, compliance, and everyday use.`,
      image: '/images/home-pg/gallery-img/kumeu02.webp',
    },
  },
  'fence-gate': {
    slug: 'fence-gate',
    name: 'Fences & Gates',
    categoryId: 'landscaping',
    href: CARPENTRY_HREF,
    card: {
      description: 'Professionally built fences and gates in Auckland.',
      ctaLabel: 'Carpentry',
    },
    detail: {
      description: `Our fencing and gate service delivers clean, durable structures 
        that define boundaries and improve privacy, built with attention to 
        detail and proportion.`,
      image: '/images/carpentry-pg/warkworth01.webp',
    },
  },
  'planter-box': {
    slug: 'planter-box',
    name: 'Planter Boxes',
    categoryId: 'landscaping',
    href: CARPENTRY_HREF,
    card: {
      description: 'Custom-built planter boxes for Auckland gardens.',
      ctaLabel: 'Carpentry',
    },
    detail: {
      description: `We build well-constructed timber planter boxes designed 
        for durability, drainage, and long-term use.`,
      image: '/images/home-pg/gallery-img/henderson01.webp',
    },
  },
  'timber-retaining-wall': {
    slug: 'timber-retaining-wall',
    name: 'Timber Retaining Walls',
    categoryId: 'landscaping',
    href: CARPENTRY_HREF,
    card: {
      description: 'Licensed timber retaining wall construction.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `Our retaining wall construction services are delivered by 
        licensed professionals, considering loads, drainage, and ground 
        conditions for long-term performance.`,
      image: '/images/carpentry-pg/kumeu03.webp',
    },
  },
  'concrete-pad-driveway': {
    slug: 'concrete-pad-driveway',
    name: 'Concrete Pads & Driveways',
    categoryId: 'landscaping',
    href: FOUNDATION_HREF,
    card: {
      description: 'Solid surfaces, properly prepared.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `We construct concrete pads and driveways with careful preparation 
        and attention to detail, ensuring clean finishes and good drainage.`,
      image: '/images/foundation-pg/epsom02.webp',
    },
  },
  'drainage-groundwork': {
    slug: 'drainage-groundwork',
    name: 'Drainage & Groundworks',
    categoryId: 'landscaping',
    href: FOUNDATION_HREF,
    card: {
      description: 'Effective drainage and groundworks across Auckland.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `Our drainage and groundworks service manages water, levels, 
        and ground conditions to support long-term site performance.`,
      image: '/images/foundation-pg/epsom01.webp',
    },
  },
  'paving-footpath': {
    slug: 'paving-footpath',
    name: 'Paving & Footpaths',
    categoryId: 'landscaping',
    href: FOUNDATION_HREF,
    card: {
      description: 'Reliable paving and footpaths in Auckland.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `We create clean, functional paved surfaces and 
        footpaths that improve access, flow, and presentation.`,
      image: '/images/foundation-pg/kumeu06.webp',
    },
  },
  'concrete-retaining-wall': {
    slug: 'concrete-retaining-wall',
    name: 'Concrete Block Retaining Walls',
    categoryId: 'landscaping',
    href: FOUNDATION_HREF,
    card: {
      description: 'Solid retaining walls, built to perform.',
      ctaLabel: 'Foundation',
    },
    detail: {
      description: `We build concrete block retaining walls that provide 
        strength and stability while sitting cleanly within the landscape.`,
      image: '/images/foundation-pg/kumeu05.webp',
    },
  },

  // GARDENING
  'lawn-care': {
    slug: 'lawn-care',
    name: 'Lawn Care',
    categoryId: 'gardening',
    href: MAINTENANCE_HREF,
    card: {
      description: 'Professional lawn care services across Auckland.',
      ctaLabel: 'Maintenance',
    },
    detail: {
      description: `Our Auckland lawn care service focuses on regular mowing, 
        edging, and seasonal attention to keep lawns healthy and presentable year-round. 
        By maintaining correct cutting heights and consistent scheduling, we help 
        lawns remain resilient, tidy, and easy to manage in Auckland conditions.`,
      image: '/images/maintenance-pg/whenuapai01.webp',
    },
  },
  'hedge-trimming': {
    slug: 'hedge-trimming',
    name: 'Hedge Trimming',
    categoryId: 'gardening',
    href: MAINTENANCE_HREF,
    card: {
      description: 'Neat, balanced hedges that frame your garden.',
      ctaLabel: 'Maintenance',
    },
    detail: {
      description: `We provide careful hedge trimming services across Auckland, helping gardens 
        stay tidy and well defined without overcutting. Each trim is timed and shaped to suit 
        the plant and the surrounding landscape.`,
      video: '/videos/hedge-trimming.mp4',
    },
  },
  'ongoing-maintenance': {
    slug: 'ongoing-maintenance',
    name: 'Ongoing Maintenance',
    categoryId: 'gardening',
    href: MAINTENANCE_HREF,
    card: {
      description: 'Set-and-forget garden maintenance in Auckland.',
      ctaLabel: 'Maintenance',
    },
    detail: {
      description: `We deliver reliable, ongoing garden maintenance services across Auckland, 
        taking care of pruning,  tidying, and general upkeep so your garden remains 
        presentable with minimal involvement from you.`,
      image: '/images/maintenance-pg/dairy-flat02.webp',
    },
  },
  'seasonal-clear-out': {
    slug: 'seasonal-clear-out',
    name: 'Seasonal Clear-outs',
    categoryId: 'gardening',
    href: MAINTENANCE_HREF,
    card: {
      description: 'Seasonal garden clear-outs across Auckland.',
      ctaLabel: 'Maintenance',
    },
    detail: {
      description: `Our Auckland garden clear-out service focuses on removing 
        built-up growth, debris, and tired planting to reset gardens for the season ahead, 
        restoring structure and improving presentation.`,
      image: '/images/maintenance-pg/henderson02.webp',
    },
  },
  'remove-prep': {
    slug: 'remove-prep',
    name: 'Removal & Preparation',
    categoryId: 'gardening',
    href: SOFTSCAPING_HREF,
    card: {
      description: 'Preparing gardens for what comes next.',
      ctaLabel: 'Soft-scaping',
    },
    detail: {
      description: `We approach removal and preparation with care and restraint,
        clearing tired elements while preserving what can be retained to set a strong
        foundation for new landscaping works.`,
      video: '/videos/removal-prep.mp4',
    },
  },
  planting: {
    slug: 'planting',
    name: 'Planting',
    categoryId: 'gardening',
    href: SOFTSCAPING_HREF,
    card: {
      description: 'Planting that brings landscapes to life.',
      ctaLabel: 'Soft-scaping',
    },
    detail: {
      description: `We approach planting as a defining stage of the landscape, 
        carefully positioning plants to create rhythm, structure, 
        and longevity so gardens improve with time.`,
      video: '/videos/planting.mp4',
    },
  },
  'soil-conditioning': {
    slug: 'soil-conditioning',
    name: 'Soil Conditioning',
    categoryId: 'gardening',
    href: SOFTSCAPING_HREF,
    card: {
      description: 'Soil preparation tailored to Auckland conditions.',
      ctaLabel: 'Soft-scaping',
    },
    detail: {
      description: `Our Auckland soil conditioning service improves soil structure, 
        drainage, and nutrients to support strong root development and resilient planting.`,
      image: '/images/softscaping-pg/kumeu04.webp',
    },
  },
  mulching: {
    slug: 'mulching',
    name: 'Mulching & Finishing',
    categoryId: 'gardening',
    href: SOFTSCAPING_HREF,
    card: {
      description:
        'Professional mulching and finishing for Auckland landscapes.',
      ctaLabel: 'Soft-scaping',
    },
    detail: {
      description: `Our mulching and finishing service completes garden installations by 
        improving moisture retention, suppressing weeds, and unifying the overall 
        look of the landscape.`,
      image: '/images/softscaping-pg/silverdale02.webp',
    },
  },

  // DESIGN
  'landscape-design': {
    slug: 'landscape-design',
    name: 'Full Landscape Design',
    categoryId: 'design',
    href: DESIGN_HREF,
    card: {
      description: 'Complete landscape design services across Auckland.',
      ctaLabel: 'Design',
    },
    detail: {
      description: `Our full landscape design service provides a clear, considered vision 
        from concept through to detailed plans, balancing aesthetics and long-term function.`,
      image: '/images/design-pg/full-design.webp',
    },
  },
  'concept-render': {
    slug: 'concept-render',
    name: 'Concept Renders',
    categoryId: 'design',
    href: DESIGN_HREF,
    card: {
      description: 'Seeing the landscape take shape.',
      ctaLabel: 'Design',
    },
    detail: {
      description: `We produce concept renders that communicate the feel and intent of 
        a design clearly, helping clients visualise projects before construction.`,
      image: '/images/design-pg/renders.webp',
    },
  },
  'planting-plan': {
    slug: 'planting-plan',
    name: 'Planting Plans',
    categoryId: 'design',
    href: DESIGN_HREF,
    card: {
      description: 'Planting plans guided by site and season.',
      ctaLabel: 'Design',
    },
    detail: {
      description: `Our planting plans consider soil, aspect, and climate to 
        support healthy establishment and resilient planting schemes.`,
      image: '/images/design-pg/planting-plan.webp',
    },
  },
  'drawing-consent': {
    slug: 'drawing-consent',
    name: 'Structural Drawings & Consented Work',
    categoryId: 'design',
    href: DESIGN_HREF,
    card: {
      description: 'Design and documentation, properly resolved.',
      ctaLabel: 'Design',
    },
    detail: {
      description: `We provide structural drawings and consent-ready documentation 
        to ensure projects are planned accurately and approved with confidence.`,
      image: '/images/design-pg/structural.webp',
    },
  },

  // COMMERCIAL
  'commercial-landscaping': {
    slug: 'commercial-landscaping',
    name: 'Commercial Landscaping',
    categoryId: 'commercial',
    href: COMMERCIAL_HREF,
    card: {
      description:
        'Professional commercial landscaping services across Auckland.',
      ctaLabel: 'Commercial',
    },
    detail: {
      description: `We support businesses and managed properties with structured, 
        presentable outdoor environments built for durability and consistency.`,
      image: '/images/commercial-pg/silverdale02.webp',
    },
  },
  'ground-maintenance': {
    slug: 'ground-maintenance',
    name: 'Ongoing Grounds Maintenance',
    categoryId: 'commercial',
    href: COMMERCIAL_HREF,
    card: {
      description:
        'Reliable grounds maintenance for Auckland commercial sites.',
      ctaLabel: 'Commercial',
    },
    detail: {
      description: `Our ongoing grounds maintenance service provides consistent care 
        to keep commercial landscapes tidy, safe, and well presented.`,
      image: '/images/commercial-pg/northcote01.webp',
    },
  },
  'pressure-washing': {
    slug: 'pressure-washing',
    name: 'Pressure Washing & Building Washing',
    categoryId: 'commercial',
    href: COMMERCIAL_HREF,
    card: {
      description:
        'Professional pressure and building washing services across Auckland.',
      ctaLabel: 'Commercial',
    },
    detail: {
      description: `We restore exterior surfaces safely and effectively, 
        removing grime while protecting materials and surrounding landscaping.`,
      image: '/images/commercial-pg/pressure-washing.webp',
    },
  },
  'landscape-enhance': {
    slug: 'landscape-enhance',
    name: 'Landscape Enhancement Plans',
    categoryId: 'commercial',
    href: COMMERCIAL_HREF,
    card: {
      description:
        'Strategic landscaping enhancement plans for Auckland sites.',
      ctaLabel: 'Commercial',
    },
    detail: {
      description: `Our enhancement plans provide a clear roadmap for 
        staged improvements, prioritising long-term value and practical implementation.`,
      image: '/images/commercial-pg/remuera01.webp',
    },
  },
};
