// Types
import type { HeroContent } from './types';

type HeroSectionProps = {
  content: HeroContent;
  sectionId?: string;
};

export function HeroSection({ content, sectionId = 'hero' }: HeroSectionProps) {
  const { eyebrow, title, subtitle, cta, background } = content;

  return (
    <section
      id={sectionId}
      className="relative min-h-screen scroll-mt-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      <div
        className={`
          relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col 
          justify-center px-6 py-24
        `}
      >
        <p className="text-lg font-semibold uppercase tracking-[0.35em] text-elysion-gold">
          {eyebrow}
        </p>
        <h1
          className={`
            mt-4 text-4xl font-semibold leading-tight text-elysion-cream 
            sm:text-5xl lg:text-6xl
          `}
        >
          {title}
        </h1>
        <p
          className={`
            mt-6 max-w-2xl text-base leading-relaxed text-elysion-cream 
            opacity-90 sm:text-lg
          `}
        >
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            className={`
              items-center rounded-full bg-elysion-forest px-6 py-3 text-sm font-semibold
              uppercase tracking-[0.25em] text-elysion-cream shadow-xl transition duration-300
              hover:-translate-y-0.5 hover:bg-elysion-olive focus-visible:outline-2
              focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
            `}
            href={cta.href}
          >
            {cta.label}
          </a>
          <span
            className={`
              text-xs font-medium uppercase tracking-[0.3em] text-elysion-cream 
              opacity-80
            `}
          >
            Serving Greater Auckland
          </span>
        </div>
      </div>
    </section>
  );
}
