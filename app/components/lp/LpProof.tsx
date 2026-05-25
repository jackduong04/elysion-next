import Image from 'next/image';
import type { LpProofContent } from './types';

type LpProofProps = {
  content: LpProofContent;
};

export function LpProof({ content }: LpProofProps) {
  const { eyebrow, title, testimonials, images } = content;

  return (
    <section className="bg-elysion-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-elysion-olive">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-elysion-forest sm:text-4xl">
          {title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col justify-between rounded-2xl border border-elysion-sand bg-white/40 p-6"
            >
              <blockquote className="text-elysion-ink/80">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold uppercase tracking-wider text-elysion-olive">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {images.map((image) => (
            <figure
              key={image.src}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                loading="lazy"
                sizes="(max-width: 640px) 50vw, 25vw"
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-elysion-ink/55 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-elysion-cream">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
