'use client';

import Link from 'next/link';
import Image from 'next/image';
import { pushDataLayer } from '../../lib/tracking';

const repo = process.env.NEXT_PUBLIC_BASE_PATH || '';

type LpHeaderProps = {
  lp: string;
};

export function LpHeader({ lp }: LpHeaderProps) {
  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 border-b border-elysion-cream/10
        bg-elysion-forest shadow-xl
      `}
    >
      <div className="flex w-full items-center justify-between px-6 sm:px-9 2xl:px-12 py-3 2xl:py-4">
        <Link
          href="/"
          className={`
            flex items-center gap-5 focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-elysion-olive
          `}
        >
          <div className="relative w-12 h-12">
            <Image
              src={`${repo}/vectors/elysion_logo_light.svg`}
              alt="Elysion Logo"
              fill
              className="object-contain"
            />
          </div>
          <span
            className={`
              text-lg text-white font-semibold uppercase tracking-[0.3em]
              hidden sm:block
            `}
          >
            Elysion
          </span>
        </Link>

        <a
          href="tel:+642040680173"
          data-event="phone_click"
          data-location="header"
          onClick={() => pushDataLayer('phone_click', { lp, location: 'header' })}
          className={`
            rounded-full px-4 py-2 text-xs font-semibold uppercase
            transition duration-200 text-shadow-lg tracking-[0.25em]
            focus-visible:outline-2 focus-visible:outline-offset-4
            focus-visible:outline-elysion-olive border-2
            border-elysion-cream text-elysion-cream hover:text-elysion-forest
            hover:bg-elysion-cream
          `}
        >
          Call now
        </a>
      </div>
    </header>
  );
}
