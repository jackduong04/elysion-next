export type HeroContent = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
  background: string;
};

export type ServiceItem = {
  name: string;
  description: string;
  ctaLabel: string;
  icon?: string;
};

export type ServicesSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceItem[];
};

export type HighlightItem = {
  title: string;
  summary: string;
  sequence: number;
  image?: string;
};

export type HighlightsSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: HighlightItem[];
};
