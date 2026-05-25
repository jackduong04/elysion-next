import type { LpBenefitsContent } from './types';

type LpBenefitsProps = {
  content: LpBenefitsContent;
};

export function LpBenefits({ content }: LpBenefitsProps) {
  const { eyebrow, title, benefits } = content;

  return (
    <section className="bg-elysion-forest py-16 text-elysion-cream sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-gold">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-elysion-cream/15 bg-elysion-cream/5 p-7"
            >
              <h3 className="text-xl font-semibold text-elysion-cream">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-elysion-cream/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
