import {
  HeroSection,
  HighlightsSection,
  HomepageServicesSection,
} from './components/sections';
import { homepageContent } from './data/pages-content/home';

export default function Home() {
  const { hero, servicesSection, testimonials, highlightsSection } =
    homepageContent;

  return (
    <main className="bg-elysion-cream text-elysion-ink">
      <HeroSection content={hero} sectionId="hero" />

      <HomepageServicesSection content={servicesSection} sectionId="services" />

      <section id="reviews" className="scroll-mt-24 bg-elysion-forest py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-base uppercase tracking-[0.3em] text-elysion-gold">
                Reviews
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-elysion-cream sm:text-4xl">
                Quiet confidence from our clients.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-elysion-cream opacity-80">
              We design with care, and the results show in the lived-in stories
              our clients share season after season.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className={`
                  flex h-full flex-col justify-between rounded-2xl border border-elysion-olive bg-[rgba(246,241,231,0.08)]
                  p-6 text-elysion-cream shadow-xl transition duration-500 hover:-translate-y-1
                `}
              >
                <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                <div className="mt-6 flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-elysion-gold">
                  <span>{testimonial.author}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HighlightsSection content={highlightsSection} sectionId="highlights" />
    </main>
  );
}
