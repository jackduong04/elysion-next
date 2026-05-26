export type LpMeta = {
  /** Short identifier used in tracking payloads, e.g. "garden-maintenance" */
  lp: string;
  title: string;
  description: string;
  /** Canonical path, e.g. "/lp/garden-maintenance" */
  canonical: string;
};

export type LpHeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Background image, root-relative (next/image applies basePath) */
  background: string;
  backgroundAlt: string;
};

export type LpFeature = {
  /** Inline SVG icon key resolved by LpFeatureList */
  icon: 'mower' | 'hedge' | 'leaf' | 'plant' | 'tools' | 'timber' | 'composite' | 'pergola';
  title: string;
  description: string;
};

export type LpFeatureListContent = {
  eyebrow: string;
  title: string;
  description: string;
  features: LpFeature[];
};

export type LpBenefit = {
  title: string;
  description: string;
};

export type LpBenefitsContent = {
  eyebrow: string;
  title: string;
  benefits: LpBenefit[];
};

export type LpTestimonial = {
  quote: string;
  author: string;
};

export type LpProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type LpProofContent = {
  eyebrow: string;
  title: string;
  testimonials: LpTestimonial[];
  images: LpProjectImage[];
};

export type LpProcessStep = {
  title: string;
  description: string;
};

export type LpProcessContent = {
  eyebrow: string;
  title: string;
  steps: LpProcessStep[];
};

export type LpPricingContent = {
  eyebrow: string;
  /** e.g. "Most regular maintenance starts from $[X]/visit [CONFIRM WITH JACK]" */
  line: string;
  note: string;
};

export type LpFaqItem = {
  question: string;
  answer: string;
};

export type LpFaqContent = {
  eyebrow: string;
  title: string;
  items: LpFaqItem[];
};

export type LpFinalCtaContent = {
  title: string;
  subtitle: string;
};

export type LpContent = {
  meta: LpMeta;
  hero: LpHeroContent;
  features: LpFeatureListContent;
  benefits: LpBenefitsContent;
  proof: LpProofContent;
  process: LpProcessContent;
  pricing: LpPricingContent;
  faq: LpFaqContent;
  finalCta: LpFinalCtaContent;
};
