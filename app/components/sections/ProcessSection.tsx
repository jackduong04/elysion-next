'use client';

import { useState } from 'react';
import type { ProcessSectionContent } from './types';
import Image from 'next/image';

type ProcessSectionProps = {
  content: ProcessSectionContent;
  sectionId?: string;
};

export function ProcessSection({
  content,
  sectionId = 'process',
}: ProcessSectionProps) {
  const { eyebrow, title, description, processes } = content;
  const [isProcessOpen, setIsProcessOpen] = useState<number | null>(null);

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

        <div className="mt-12 flex flex-col">
          {processes.map((process, index) => {
            const isOpen = isProcessOpen === index;

            return (
              <div
                className={`mb-5 flex items-center gap-10 text-left border rounded-xl border-elysion-sand p-5 transition-all duration-300 cursor-pointer`}
                onClick={() => setIsProcessOpen(isOpen ? null : index)}
                key={process.title}
                aria-expanded={isOpen}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-elysion-rust">
                  {String(process.sequence).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-elysion-forest">
                    {process.title}
                  </h3>
                  <div
                    className={`transition-all duration-300 ${isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}
                  >
                    <p className="text-sm leading-relaxed text-elysion-forest/80">
                      {process.description}
                    </p>
                  </div>
                </div>
                <Image
                  src="/images/left-click.png"
                  alt="Left click icon"
                  width={24}
                  height={24}
                  className="ml-auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
