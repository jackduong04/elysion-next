import Image from 'next/image';
import { ServicesSectionContent } from './types';

type ServicesSectionProps = {
  content: ServicesSectionContent;
  sectionId?: string;
};

export function ServicesSection({
  content,
  sectionId = 'services',
}: ServicesSectionProps) {
  const { eyebrow, title, description, services } = content;

  return (
    <section id={sectionId} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.name}
              className={`group flex h-full flex-col justify-between rounded-2xl border border-elysion-sand bg-elysion-sand p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 cursor-pointer`}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-elysion-olive">
                  {service.ctaLabel}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-elysion-forest">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-elysion-forest opacity-80">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-elysion-rust">
                <span>Explore</span>
                <Image
                  src="/images/left-click.png"
                  alt="Left click icon"
                  width={24}
                  height={24}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
