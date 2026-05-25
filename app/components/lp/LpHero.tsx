'use client';

import Image from 'next/image';
import { pushDataLayer } from '../../lib/tracking';
import type { LpHeroContent } from './types';

type LpHeroProps = {
  content: LpHeroContent;
  lp: string;
};

export function LpHero({ content, lp }: LpHeroProps) {
  const { eyebrow, title, subtitle, background, backgroundAlt } = content;

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <Image
        src={background}
        alt={backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 lp-hero-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-elysion-gold">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-elysion-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-elysion-cream/90 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#quote"
            data-event="cta_click"
            data-location="hero"
            onClick={() => pushDataLayer('cta_click', { lp, location: 'hero' })}
            className={`
              inline-flex items-center justify-center rounded-full bg-elysion-forest
              px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-elysion-cream
              shadow-xl transition duration-300 hover:-translate-y-0.5 hover:bg-elysion-olive
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+642040680173"
            data-event="phone_click"
            data-location="hero"
            onClick={() => pushDataLayer('phone_click', { lp, location: 'hero' })}
            className={`
              inline-flex items-center justify-center rounded-full border border-elysion-cream/70
              px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-elysion-cream
              transition duration-300 hover:bg-elysion-cream/10
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
          >
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
