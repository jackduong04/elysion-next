import type { LpContent } from '../../../components/lp/types';

export const deckingContent: LpContent = {
  meta: {
    lp: 'decking',
    title: 'Deck Builders Auckland | Timber & Composite Decks',
    description:
      "Custom timber and composite decks built across Auckland's North Shore. Fully insured, structurally sound, on time. Get a free quote from Elysion Landscaping.",
    canonical: '/lp/decking',
  },
  hero: {
    eyebrow: 'Decking',
    title: "Custom decks built to last, across Auckland's North Shore",
    subtitle:
      'Timber and composite decks designed and built by a local team — structurally sound, beautifully finished, and delivered on time.',
    background: '/images/carpentry-pg/kumeu01-wide.webp',
    backgroundAlt: 'A custom-built timber deck beside a landscaped garden.',
  },
  features: {
    eyebrow: 'Materials & options',
    title: 'Built your way',
    description:
      "Choose the materials and add-ons that suit how you'll use the space — we'll guide you through the trade-offs.",
    features: [
      {
        icon: 'timber',
        title: 'Timber decking',
        description: 'Premium hardwoods like kwila and vitex for a warm, natural finish.',
      },
      {
        icon: 'composite',
        title: 'Composite decking',
        description: 'Low-maintenance composite (e.g. Trex) that resists fading and rot.',
      },
      {
        icon: 'pergola',
        title: 'Pergolas & screens',
        description: 'Add shade, privacy, and shelter with matching pergolas and screens.',
      },
    ],
  },
  benefits: {
    eyebrow: 'Why Elysion',
    title: 'Decks done properly',
    benefits: [
      {
        title: 'Premium build quality',
        description: 'Careful detailing and quality materials for a deck that ages well.',
      },
      {
        title: 'Fully insured, engineered right',
        description:
          'Structural work done to code, with the consents and engineering sorted.',
      },
      {
        title: 'On-time delivery',
        description: 'Clear timelines and steady communication from first call to handover.',
      },
    ],
  },
  proof: {
    eyebrow: 'Recent builds',
    title: 'Decks across the North Shore',
    testimonials: [
      {
        quote:
          'Our new deck completely changed how we use the back of the house. Faultless work.',
        author: 'Sarah M., Silverdale',
      },
      {
        quote:
          'They handled the consent and engineering and kept us informed the whole way.',
        author: 'Thomas B., Warkworth',
      },
      {
        quote: 'Beautiful finish and built rock-solid. Exactly the quality we hoped for.',
        author: 'Rebecca T., Kumeu',
      },
    ],
    images: [
      {
        src: '/images/carpentry-pg/kumeu03.webp',
        alt: 'Timber deck with steps leading to a garden.',
        caption: 'Kumeu',
      },
      {
        src: '/images/carpentry-pg/warkworth01.webp',
        alt: 'Custom deck beside a modern home.',
        caption: 'Warkworth',
      },
      {
        src: '/images/home-pg/gallery-img/silverdale01.webp',
        alt: 'Wooden deck overlooking a lush, planted backyard.',
        caption: 'Silverdale',
      },
      {
        // [CONFIRM IMAGE] Reuses the hero background (kumeu01-wide). Swap for a
        // distinct deck photo before launch — repo currently has no other.
        src: '/images/carpentry-pg/kumeu01-wide.webp',
        alt: 'Wide timber deck integrated into a landscaped garden.',
        caption: 'Kumeu',
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'From idea to finished deck',
    steps: [
      {
        title: 'Consultation',
        description: "We visit, understand how you'll use the space, and talk materials.",
      },
      {
        title: 'Design',
        description: 'We design the deck and handle any consent or engineering needed.',
      },
      {
        title: 'Build',
        description: 'Our team builds to a clear timeline with quality at every step.',
      },
      {
        title: 'Handover',
        description: 'We walk you through the finished deck and how to care for it.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    line: 'Most decks start from $[X]/sqm depending on materials',
    note: 'Final pricing depends on materials, size, and site. [CONFIRM WITH JACK]',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        question: 'How long does a deck take?',
        answer:
          "Most residential decks take one to three weeks of on-site work once materials are ready. Larger or elevated decks needing engineering take longer — we'll give you a clear timeline with your quote. [CONFIRM WITH JACK]",
      },
      {
        question: 'Do I need permits or consent?',
        answer:
          "Some decks need building consent (generally those over a certain height or attached to the house). We assess this early and handle the consent process for you where it's required.",
      },
      {
        question: 'Which materials should I choose?',
        answer:
          "Timber like kwila and vitex gives a warm, natural look; composite such as Trex is low-maintenance and long-lasting. We'll talk through budget, upkeep, and style to help you decide.",
      },
      {
        question: 'What warranty do you offer?',
        answer:
          "Our workmanship is guaranteed, and materials carry their manufacturer warranties. We'll confirm the exact terms in writing with your quote. [CONFIRM WITH JACK]",
      },
    ],
  },
  finalCta: {
    title: 'Ready to build your deck?',
    subtitle:
      "Get a free quote and start planning a deck built to last across Auckland's North Shore.",
  },
};
