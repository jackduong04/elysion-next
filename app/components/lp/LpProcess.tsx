import type { LpProcessContent } from './types';

type LpProcessProps = {
  content: LpProcessContent;
};

export function LpProcess({ content }: LpProcessProps) {
  const { eyebrow, title, steps } = content;

  return (
    <section className="bg-elysion-sand/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-elysion-forest sm:text-4xl">
          {title}
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-elysion-sand bg-elysion-cream p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-elysion-forest text-base font-semibold text-elysion-cream">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-elysion-forest">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-elysion-ink/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
