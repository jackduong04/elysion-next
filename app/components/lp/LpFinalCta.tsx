'use client';

import { pushDataLayer } from '../../lib/tracking';
import type { LpFinalCtaContent } from './types';

type LpFinalCtaProps = {
  content: LpFinalCtaContent;
  lp: string;
};

export function LpFinalCta({ content, lp }: LpFinalCtaProps) {
  const { title, subtitle } = content;

  return (
    <section className="bg-elysion-forest py-16 text-center text-elysion-cream sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-elysion-cream/80">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#quote"
            data-event="cta_click"
            data-location="final"
            onClick={() => pushDataLayer('cta_click', { lp, location: 'final' })}
            className={`
              inline-flex items-center justify-center rounded-full bg-elysion-cream
              px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-elysion-forest
              shadow-xl transition hover:-translate-y-0.5 hover:bg-elysion-sand
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+642040680173"
            data-event="phone_click"
            data-location="final"
            onClick={() => pushDataLayer('phone_click', { lp, location: 'final' })}
            className={`
              inline-flex items-center justify-center rounded-full border border-elysion-cream/70
              px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-elysion-cream
              transition hover:bg-elysion-cream/10
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
          >
            Call +64 20 4068 0173
          </a>
        </div>
      </div>
    </section>
  );
}
