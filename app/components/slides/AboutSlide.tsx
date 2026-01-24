'use client';

import { motion } from 'motion/react';
import { SlideContent } from '@/app/data/pages-content/about/about';

interface AboutSlideProps {
  content: SlideContent;
  index: number;
}

export const AboutSlide = ({ content, index }: AboutSlideProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className="flex items-center justify-center min-h-screen w-full snap-start snap-always">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
        }}
        viewport={{ amount: 0.6 }}
        className={`
          relative w-[85vw] h-[75vh] md:w-[80vw] md:h-[80vh] overflow-hidden
          rounded-2xl shadow-2xl bg-elysion-cream flex flex-col md:flex-row items-stretch
        `}
      >
        {/* Content Side */}
        <div
          className={`flex-1 p-8 md:p-16 flex flex-col justify-center gap-6 z-10 ${
            isEven ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-elysion-olive font-medium tracking-widest uppercase text-sm">
              {content.subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl text-elysion-forest mt-2 font-display">
              {content.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-elysion-ink/80 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            {content.description}
          </motion.p>
        </div>

        {/* Image/Placeholder Side */}
        <div
          className={`flex-1 bg-elysion-sand/30 relative overflow-hidden flex items-center justify-center border-t md:border-t-0 ${
            isEven ? 'md:order-2' : 'md:order-1'
          } ${
            isEven
              ? 'md:border-l border-elysion-forest/10'
              : 'md:border-r border-elysion-forest/10'
          }`}
        >
          {/* Decorative Texture */}
          <div className="absolute inset-0 texture-grain opacity-50" />

          <div className="relative z-10 flex flex-col items-center gap-4 text-elysion-forest/40">
            <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-dashed border-elysion-olive/30 rounded-full flex items-center justify-center">
              <span className="text-xs uppercase tracking-tighter text-center px-4">
                {content.imagePlaceholder}
              </span>
            </div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
              Image Placeholder
            </p>
          </div>

          {/* Subtle Accent */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-elysion-olive/5 rounded-tl-full" />
        </div>
      </motion.div>
    </div>
  );
};
