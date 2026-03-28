'use client';
// Node modules
import { motion } from 'motion/react';
import Image from 'next/image';

// Data
import { SlideContent } from '@/app/data/pages-content/about/about';

interface AboutSlideProps {
  content: SlideContent;
  index: number;
}

const repo = process.env.NEXT_PUBLIC_BASE_PATH;

export const AboutSlide = ({ content, index }: AboutSlideProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className="flex items-center justify-center h-full w-full snap-center snap-always pt-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
        viewport={{ amount: 0.6 }}
        className={`
          relative w-[85vw] h-[70vh] md:w-[80vw] md:h-[80vh] overflow-hidden
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
            className="text-elysion-ink/80 text-base md:text-lg leading-relaxed max-w-xl"
          >
            {content.description}
          </motion.p>
        </div>

        {/* Image Side */}
        <div
          className={`
            flex-1 relative overflow-hidden flex 
            items-center justify-center border-t md:border-t-0 ${
              isEven ? 'md:order-2' : 'md:order-1'
            } ${
              isEven
                ? 'md:border-l border-elysion-forest/10'
                : 'md:border-r border-elysion-forest/10'
            }
          `}
        >
          <Image
            src={`${repo}${content.imageUrl}`}
            alt={content.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />

          {/* Decorative Texture Overlay */}
          <div className="absolute inset-0 texture-grain opacity-20 pointer-events-none" />

          {/* Subtle Accent Overlay */}
          <div
            className={`
              absolute bottom-0 right-0 w-32 h-32 bg-elysion-olive/10 
              rounded-tl-full pointer-events-none
            `}
          />
        </div>
      </motion.div>
    </div>
  );
};
