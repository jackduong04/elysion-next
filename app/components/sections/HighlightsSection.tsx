// Types
import type { HighlightsSectionContent } from './types';

type HighlightsSectionProps = {
  content: HighlightsSectionContent;
  sectionId?: string;
};

export function HighlightsSection({
  content,
  sectionId = 'highlights',
}: HighlightsSectionProps) {
  const { eyebrow, title, description, highlights } = content;

  return (
    <section id={sectionId} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-base font-medium uppercase tracking-[0.3em] text-elysion-olive">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-elysion-forest sm:text-4xl">
              {title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-elysion-forest opacity-80">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className={`
                flex h-full flex-col justify-between rounded-2xl border border-elysion-sand
                bg-elysion-cream p-6 shadow-xl transition duration-300 hover:-translate-y-1
              `}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-elysion-rust">
                  {String(highlight.sequence).padStart(2, '0')}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-elysion-forest">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-elysion-forest/80">
                  {highlight.summary}
                </p>
              </div>
              {/* <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-elysion-olive">
                <span>View details</span>
                <Image
                  src="/images/left-click.png"
                  alt="Left click icon"
                  width={24}
                  height={24}
                />
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
