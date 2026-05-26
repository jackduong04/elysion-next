'use client';

// Node modules
import { usePathname } from 'next/navigation';

// Components
import { ContactForm } from './ContactForm';

export const ConditionalContactForm = () => {
  const pathname = usePathname();

  // The floating Contact modal is suppressed on landing pages so it does not
  // collide with the LP sticky Call button.
  if (pathname.startsWith('/lp/')) {
    return null;
  }

  return <ContactForm />;
};
