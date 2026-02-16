'use client';

// Node modules
import { usePathname } from 'next/navigation';

// Components
import { Footer } from './Footer';

export const ConditionalFooter = () => {
  const pathname = usePathname();

  // Do not show footer on the About page
  if (pathname === '/pages/about/') {
    return null;
  }

  return <Footer />;
};
