import type { LpFaqContent } from './types';

type LpFaqProps = {
  content: LpFaqContent;
};

export function LpFaq({ content }: LpFaqProps) {
  const { eyebrow, title, items } = content;

  return (
    <section className="bg-elysion-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-elysion-forest sm:text-4xl">
          {title}
        </h2>

        <div className="mt-8 divide-y divide-elysion-sand border-y border-elysion-sand">
          {items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-elysion-forest">
                {item.question}
                <span className="shrink-0 text-elysion-olive transition group-open:rotate-45" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-elysion-ink/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
