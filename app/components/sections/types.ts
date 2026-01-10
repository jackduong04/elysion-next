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

export type ToggleItem = {
  id: string;
  label: string;
};

export type ServicesSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  buttons: ToggleItem[];
  defaultId: string;
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

export type ProcessItem = {
  title: string;
  description: string;
  sequence: number;
  image?: string;
};

export type ProcessSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  processes: ProcessItem[];
};
