'use client';

// Node modules
import { usePathname } from 'next/navigation';

// Components
import { Footer } from './Footer';

export const ConditionalFooter = () => {
  const pathname = usePathname();

  // No footer on the About page or on conversion landing pages
  if (pathname === '/about/' || pathname.startsWith('/lp/')) {
    return null;
  }

  return <Footer />;
};
