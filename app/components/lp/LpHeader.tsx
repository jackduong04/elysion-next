'use client';

import Image from 'next/image';
import Link from 'next/link';
import { pushDataLayer } from '../../lib/tracking';

type LpHeaderProps = {
  lp: string;
};

export function LpHeader({ lp }: LpHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-elysion-sand/60 bg-elysion-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" aria-label="Elysion Landscaping home" className="flex items-center">
          <Image
            src="/vectors/elysion_logo_dark.svg"
            alt="Elysion Landscaping"
            width={150}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <a
          href="tel:+642040680173"
          data-event="phone_click"
          data-location="header"
          onClick={() => pushDataLayer('phone_click', { lp, location: 'header' })}
          className="text-sm font-semibold uppercase tracking-widest text-elysion-forest transition hover:text-elysion-olive"
        >
          +64 20 4068 0173
        </a>
      </div>
    </header>
  );
}
