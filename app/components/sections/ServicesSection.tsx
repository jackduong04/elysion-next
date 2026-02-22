'use client';

// Node modules
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

// Data
import { categories, services } from '../../data/services';

// Components
import { ToggleGroup } from './ToggleGroup';

// Types
import type { ServicesSectionContent, ToggleItem } from './types';

type ServicesSectionProps = {
  content: ServicesSectionContent;
  sectionId?: string;
};

type idResolverProps = {
  buttons: ToggleItem[];
  defaultId: string;
};

function idResolver({ buttons, defaultId }: idResolverProps) {
  const initialId =
    buttons.find((button) => button.id === defaultId)?.id ||
    buttons[0]?.id ||
    defaultId;
  return initialId;
}

const repo = process.env.NEXT_PUBLIC_BASE_PATH;

export function HomepageServicesSection({
  content,
  sectionId = 'services',
}: ServicesSectionProps) {
  const { eyebrow, title, description, buttons, defaultId } = content;
  const initialId = idResolver({ buttons, defaultId });
  const [activeId, setActiveId] = useState(initialId);
  const resolvedActiveId = categories[activeId] ? activeId : initialId;

  const activeCategory = useMemo(() => {
    const category =
      categories[resolvedActiveId] ||
      categories[defaultId] ||
      categories[buttons[0]?.id];
    return category;
  }, [resolvedActiveId, defaultId, buttons]);

  const categoryServices = useMemo(() => {
    if (!activeCategory?.serviceSlugs?.length) {
      return [];
    }
    return activeCategory.serviceSlugs
      .map((slug) => services[slug])
      .filter(Boolean);
  }, [activeCategory]);

  const showCTA = !categoryServices.length && activeCategory?.cta;

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

        <div className="mt-10">
          <ToggleGroup
            items={buttons}
            activeId={resolvedActiveId}
            onSelect={setActiveId}
            ariaLabel="Select a service category"
          />
        </div>

        {showCTA ? (
          <div
            className={`
              mt-12 rounded-2xl border border-elysion-sand bg-elysion-sand 
              p-8 shadow-xl
            `}
          >
            <p className="text-base leading-relaxed text-elysion-forest">
              {activeCategory?.cta?.text}
            </p>
            {activeCategory?.cta?.href ? (
              <Link
                href={activeCategory.cta.href}
                className={`
                  mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase
                  tracking-[0.2em] text-elysion-rust underline underline-offset-4
                `}
              >
                Visit page
                <Image
                  src={`${repo}/images/left-click.png`}
                  alt="Visit page"
                  width={20}
                  height={20}
                />
              </Link>
            ) : null}
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {categoryServices.map((service) => (
              <a
                key={service.slug}
                className={`
                  group flex h-full flex-col justify-between rounded-2xl border
                  border-elysion-sand bg-elysion-sand p-6 shadow-xl transition duration-300
                  hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1
                `}
                href={service.href}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-elysion-olive">
                    {service.card.ctaLabel}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-elysion-forest">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-elysion-forest opacity-80">
                    {service.card.description}
                  </p>
                </div>
                <div
                  className={`
                    mt-8 flex items-center justify-between text-xs font-semibold 
                    uppercase tracking-[0.3em] text-elysion-rust
                  `}
                >
                  <span>Explore</span>
                  <Image
                    src={`${repo}/images/left-click.png`}
                    alt="Left click icon"
                    width={24}
                    height={24}
                  />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ServicePageServicesSection({
  content,
  sectionId = 'services',
}: ServicesSectionProps) {
  const { eyebrow, title, description, buttons, defaultId } = content;
  const initialId = idResolver({ buttons, defaultId });
  const [activeServiceId, setActiveServiceId] = useState(initialId);
  const resolvedServiceId = services[activeServiceId]
    ? activeServiceId
    : initialId;

  const activeService = useMemo(() => {
    return (
      services[resolvedServiceId] ||
      services[defaultId] ||
      services[buttons[0]?.id || '']
    );
  }, [resolvedServiceId, defaultId, buttons]);

  const detail = activeService?.detail || {
    description:
      'Details for this service are coming soon. Reach out to our team for specifics.',
    image: `${repo}/images/service-maintenance.png`,
  };

  return (
    <section id={sectionId} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-base font-medium uppercase tracking-[0.3em] text-elysion-olive">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-elysion-forest sm:text-4xl">
              {title}
            </h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-elysion-forest opacity-80">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <ToggleGroup
            items={buttons}
            activeId={resolvedServiceId}
            onSelect={setActiveServiceId}
            ariaLabel="Select a gardening service"
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            className={`
              rounded-2xl border border-elysion-sand bg-elysion-sand
              p-8 shadow-xl flex flex-col justify-between items-end
            `}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-elysion-olive">
                {activeService?.name || 'Service'}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-elysion-forest">
                {activeService?.name || 'Selected service'}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-elysion-forest opacity-90">
                {detail.description}
              </p>
            </div>
            <a
              href="#"
              className={`
                mt-8 items-center rounded-full bg-elysion-forest px-6 py-3 text-sm font-semibold
                uppercase tracking-[0.25em] text-elysion-cream shadow-xl transition duration-300
                hover:-translate-y-0.5 hover:bg-elysion-olive focus-visible:outline-2
                focus-visible:outline-offset-4 focus-visible:outline-elysion-gold
              `}
            >
              Book Now
            </a>
          </div>
          <div
            className={`
              overflow-hidden rounded-2xl border border-elysion-sand 
              bg-elysion-cream shadow-xl
            `}
          >
            {detail.video ? (
              <video
                src={detail.video}
                width={800}
                height={600}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            ) : detail.image ? (
              <Image
                src={detail.image}
                alt={activeService?.name || 'Service detail'}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
