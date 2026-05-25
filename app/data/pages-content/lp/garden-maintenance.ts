import type { LpContent } from '../../../components/lp/types';

export const gardenMaintenanceContent: LpContent = {
  meta: {
    lp: 'garden-maintenance',
    title: 'Garden Maintenance Auckland | Lawn Mowing & Hedge Trimming',
    description:
      'Reliable garden maintenance across Silverdale and the North Shore — lawn mowing, hedge trimming, and tidy-ups. Get a free quote from Elysion Landscaping.',
    canonical: '/lp/garden-maintenance',
  },
  hero: {
    eyebrow: 'Garden Maintenance',
    title: 'Reliable garden maintenance across Silverdale and the North Shore',
    subtitle:
      'Lawn mowing, hedge trimming, and seasonal tidy-ups — handled on time, every time, by a local Auckland team.',
    background: '/images/maintenance-pg/hedge-trim01.webp',
    backgroundAlt: 'A freshly trimmed tall hedge along a garden border.',
  },
  features: {
    eyebrow: 'What we cover',
    title: 'Everything your garden needs, looked after',
    description:
      'Regular or one-off — we keep your outdoor space tidy, healthy, and easy to enjoy.',
    features: [
      {
        icon: 'mower',
        title: 'Lawn mowing',
        description: 'Regular or one-off mowing, edged and cleaned up properly.',
      },
      {
        icon: 'hedge',
        title: 'Hedge trimming',
        description: 'Crisp, even hedges shaped to keep their form as they grow.',
      },
      {
        icon: 'leaf',
        title: 'Garden tidy-ups',
        description: 'Weeding, pruning, and clearing to reset an overgrown space.',
      },
      {
        icon: 'plant',
        title: 'Planting and beds',
        description: 'Fresh planting and bed care that keeps borders looking full.',
      },
      {
        icon: 'tools',
        title: 'General maintenance',
        description: 'The ongoing odd jobs that keep a garden in good order.',
      },
    ],
  },
  benefits: {
    eyebrow: 'Why Elysion',
    title: "Maintenance you don’t have to think about",
    benefits: [
      {
        title: 'Reliable, on time, every time',
        description:
          'We turn up when we say we will and keep your garden on a steady schedule.',
      },
      {
        title: 'Auckland-owned, locally based',
        description:
          'A local team that knows North Shore gardens, soils, and seasons.',
      },
      {
        title: 'Tidy site, no surprises on the bill',
        description:
          'We leave the site clean and agree the price up front — no nasty add-ons.',
      },
    ],
  },
  proof: {
    eyebrow: 'What our clients say',
    title: 'Trusted by Auckland homeowners',
    testimonials: [
      {
        quote:
          'Our lawns and hedges have never looked better. They just quietly get it done.',
        author: 'Emily F., Silverdale',
      },
      {
        quote:
          'Same friendly team every visit, always on time. Exactly what we wanted.',
        author: 'Daniel W., Albany',
      },
      {
        quote:
          'They tidied up a badly overgrown garden and now keep it perfect year-round.',
        author: 'Laura K., Whenuapai',
      },
    ],
    images: [
      {
        src: '/images/maintenance-pg/dairy-flat01-wide.webp',
        alt: 'Manicured topiary and planted beds at a Dairy Flat home.',
        caption: 'Topiary & beds',
      },
      {
        src: '/images/maintenance-pg/dairy-flat02.webp',
        alt: 'Maintained lawn and planted garden beds.',
        caption: 'Dairy Flat',
      },
      {
        src: '/images/maintenance-pg/henderson02.webp',
        alt: 'Tidy lawn bordered by clipped plantings.',
        caption: 'Henderson',
      },
      {
        src: '/images/maintenance-pg/whenuapai01.webp',
        alt: 'Well-kept garden with mown lawn.',
        caption: 'Whenuapai',
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'Simple from the first call',
    steps: [
      {
        title: 'Get a quote',
        description:
          "Tell us about your garden and we'll send a clear, fair price.",
      },
      {
        title: 'We agree a plan',
        description:
          'Pick a one-off tidy-up or a regular schedule that suits you.',
      },
      {
        title: 'We turn up and do it',
        description:
          'Our team arrives on time, does the work, and leaves it tidy.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Transparent pricing',
    line: 'Fair, upfront pricing with no surprises',
    note: "Every garden is different, so we price each job on its own. Get a free quote and we'll give you a clear number to work with — no obligation.",
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        question: 'How much is a one-off tidy-up?',
        answer:
          'It depends on the size and condition of the garden. Send us a few details for a quick, no-obligation quote — most one-off tidy-ups are priced after a short look at the space.',
      },
      {
        question: 'Do you do recurring maintenance contracts?',
        answer:
          'Yes. We offer weekly, fortnightly, and monthly schedules, as well as one-off visits. You can adjust or pause your schedule whenever you need.',
      },
      {
        question: 'What areas do you cover?',
        answer:
          "We cover Silverdale, the wider North Shore, and greater Auckland. If you're nearby, just ask and we'll let you know.",
      },
      {
        question: 'Are you insured?',
        answer:
          "Yes — Elysion Landscaping is fully insured, so you're covered for the work we carry out on your property.",
      },
    ],
  },
  finalCta: {
    title: 'Ready for a tidier garden?',
    subtitle:
      'Get a free quote today and let a reliable local team take garden maintenance off your plate.',
  },
};
