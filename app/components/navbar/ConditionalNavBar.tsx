'use client';

// Node modules
import { usePathname } from 'next/navigation';

// Components
import { NavBar } from './NavBar';

export const ConditionalNavBar = () => {
  const pathname = usePathname();

  // Landing pages render their own logo-only header (LpHeader)
  if (pathname.startsWith('/lp/')) {
    return null;
  }

  return <NavBar />;
};
