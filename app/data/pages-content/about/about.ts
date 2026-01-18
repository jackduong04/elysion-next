export interface SlideContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder: string;
}

export const aboutSlides: SlideContent[] = [
  {
    id: 'hero',
    title: 'Elysion Landscapes',
    subtitle: 'Nostalgic Artistry, Modern Living',
    description:
      "We don't just plant gardens; we craft living sanctuaries that bridge the gap between human comfort and the wild beauty of nature.",
    imagePlaceholder: 'Hero Landscape',
  },
  {
    id: 'our-story',
    title: 'Rooted in Passion',
    subtitle: 'Small Seeds, Big Dreams',
    description:
      'Founded in 2010, Elysion began as a small project to bring back the "wild gardens" of our childhoods. Today, we are a team of visionaries dedicated to the art of landscaping.',
    imagePlaceholder: 'Founder at Work',
  },
  {
    id: 'values',
    title: 'Quiet Excellence',
    subtitle: 'Our Philosophy',
    description:
      'We believe in intentionality. Every stone placed and every seed sown is a deliberate step towards a more beautiful, sustainable world.',
    imagePlaceholder: 'Stones and Greenery',
  },
  {
    id: 'difference',
    title: 'The Elysion Edge',
    subtitle: 'Why We Stand Out',
    description:
      "While others focus on aesthetics, we focus on atmosphere. We balance the architectural with the organic to create spaces that feel like they've always been there.",
    imagePlaceholder: 'Texture and Light',
  },
  {
    id: 'team',
    title: 'The Hands Behind the Green',
    subtitle: 'Meet Our Experts',
    description:
      'Our team consists of horticulturists, designers, and craftsmen who share a deep respect for the land and a keen eye for detail.',
    imagePlaceholder: 'Team Collaboration',
  },
  {
    id: 'sustainability',
    title: 'Nurturing the Future',
    subtitle: 'Environmental Stewardship',
    description:
      "Sustainability isn't a buzzword for us—it's our foundation. From water-wise irrigation to native planting, we ensure your garden thrives for generations.",
    imagePlaceholder: 'Eco-friendly Garden',
  },
];
