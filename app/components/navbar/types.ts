export type SubNavItem = {
  id: string;
  label: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
  href?: string;
  children?: SubNavItem[];
};
