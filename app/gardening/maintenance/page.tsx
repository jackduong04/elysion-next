'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ToggleGroup } from '../../components/sections/ToggleGroup';
import { services } from '../../data/services';
import { maintenanceContent } from '../../data/pages-content/gardening-children/maintenance';

export default function GardeningMaintenancePage() {
  const { eyebrow, title, description, buttons, defaultId } =
    maintenanceContent;

  const initialId =
    buttons.find((button) => button.id === defaultId)?.id ||
    buttons[0]?.id ||
    defaultId;
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
    image: '/images/service-maintenance.png',
  };

  return (
    <main className="bg-elysion-cream text-elysion-ink">
      <section className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
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
            <div className="rounded-2xl border border-elysion-sand bg-elysion-sand p-8 shadow-xl">
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
            <div className="overflow-hidden rounded-2xl border border-elysion-sand bg-elysion-cream shadow-xl">
              <Image
                src={detail.image}
                alt={activeService?.name || 'Service detail'}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
