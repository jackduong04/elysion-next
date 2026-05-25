import type { JSX } from 'react';
import type { LpFeatureListContent, LpFeature } from './types';

const ICONS: Record<LpFeature['icon'], JSX.Element> = {
  mower: <path d="M3 17h11v-3H6l-2-4H2m12 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm9-7V6h4l2 4" />,
  hedge: <path d="M4 20V10a4 4 0 0 1 8 0 4 4 0 0 1 8 0v10M4 14h16M9 4l3 3 3-3" />,
  leaf: <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Zm0 0c0-3.5 1-8 7-10" />,
  plant: <path d="M12 22V12m0 0C12 8 9 5 5 5c0 4 3 7 7 7Zm0 0c0-4 3-7 7-7 0 4-3 7-7 7Z" />,
  tools: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-7 7L4 21l7-7a4 4 0 0 0 5.4-5.4l-2 2-2.1-2.1 2-2Z" />,
  timber: <path d="M3 5h18v4H3zM3 11h18v4H3zM3 17h18v2H3z" />,
  composite: <path d="M4 4h16v16H4zM4 9h16M4 14h16M9 4v16M14 4v16" />,
  pergola: <path d="M3 8l9-4 9 4M5 8v12M19 8v12M5 12h14M5 16h14" />,
};

type LpFeatureListProps = {
  content: LpFeatureListContent;
};

export function LpFeatureList({ content }: LpFeatureListProps) {
  const { eyebrow, title, description, features } = content;

  return (
    <section className="bg-elysion-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-elysion-forest sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-elysion-ink/70">{description}</p>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex gap-4 rounded-2xl border border-elysion-sand bg-white/40 p-6"
            >
              <span className="shrink-0 text-elysion-olive" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {ICONS[feature.icon]}
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-elysion-forest">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-elysion-ink/70">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
