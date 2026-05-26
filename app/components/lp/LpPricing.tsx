import type { LpPricingContent } from './types';

type LpPricingProps = {
  content: LpPricingContent;
};

export function LpPricing({ content }: LpPricingProps) {
  const { eyebrow, line, note } = content;

  return (
    <section className="bg-elysion-cream py-14">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <p className="mt-4 text-2xl font-semibold text-elysion-forest sm:text-3xl">
          {line}
        </p>
        <p className="mt-3 text-sm text-elysion-ink/60">{note}</p>
      </div>
    </section>
  );
}
