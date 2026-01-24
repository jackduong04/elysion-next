'use client';

import { aboutSlides } from '@/app/data/pages-content/about/about';
import { AboutSlide } from '@/app/components/slides/AboutSlide';

export default function AboutPage() {
  return (
    <main className="bg-elysion-cream min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 texture-grain bg-elysion-forest pointer-events-none opacity-50" />

      {/* Scroll Container */}
      <div
        className="h-screen overflow-y-auto snap-y snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Hide scrollbar for Chrome/Safari */}
        <style jsx global>{`
          .h-screen::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {aboutSlides.map((slide, index) => (
          <AboutSlide key={slide.id} content={slide} index={index} />
        ))}
      </div>

      {/* Optional: Scroll Indicator */}
      <div
        className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
        text-elysion-forest/80 animate-bounce pointer-events-none
      `}
      >
        <span className="text-sm uppercase tracking-widest font-medium">
          Scroll
        </span>
        <div className="w-0.5 h-8 bg-elysion-olive/80" />
      </div>
    </main>
  );
}
