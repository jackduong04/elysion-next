'use client';

import { pushDataLayer } from '../../lib/tracking';

type StickyCallButtonProps = {
  lp: string;
};

export function StickyCallButton({ lp }: StickyCallButtonProps) {
  return (
    <a
      href="tel:+642040680173"
      data-event="phone_click"
      data-location="sticky"
      onClick={() => pushDataLayer('phone_click', { lp, location: 'sticky' })}
      className={`
        fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full
        bg-elysion-forest px-5 py-3 text-sm font-semibold uppercase tracking-widest
        text-elysion-cream shadow-xl/30 transition hover:bg-elysion-olive
        active:scale-95 lg:hidden
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        focus-visible:ring-elysion-gold
      `}
      aria-label="Call Elysion Landscaping now"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      Call now
    </a>
  );
}
