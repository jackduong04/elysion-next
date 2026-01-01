import { homepageContent } from './data/homepageContent';

export default function Home() {
  const { hero, services, testimonials, highlights } = homepageContent;

  return (
    <main className="bg-elysion-cream text-elysion-ink">
      <section
        id="hero"
        className="relative min-h-[calc(100vh-80px)] scroll-mt-24 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.background})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        <div
          className="absolute inset-0 texture-grain opacity-60"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24">
          <p className="text-sm uppercase tracking-[0.35em] text-elysion-gold">
            Elysion Gardens
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-elysion-cream sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-elysion-cream opacity-90 sm:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-3 rounded-full bg-elysion-forest px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-elysion-cream shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-elysion-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--elysion-gold)]"
              href={hero.cta.href}
            >
              {hero.cta.label}
            </a>
            <span className="text-xs uppercase tracking-[0.3em] text-elysion-cream opacity-80">
              Serving Greater Auckland
            </span>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-elysion-olive">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-elysion-forest sm:text-4xl">
                Cultivated offerings for every season.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-elysion-forest opacity-80">
              Each service blends old-world materiality with contemporary
              clarity, ensuring your landscape feels grounded and effortless
              year-round.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.name}
                className="group flex h-full flex-col justify-between rounded-2xl border border-elysion-sand bg-elysion-sand p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-elysion-olive">
                    {service.ctaLabel}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-elysion-forest">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-elysion-forest opacity-80">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-elysion-rust">
                  <span>Explore</span>
                  <span aria-hidden="true">&gt;</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 bg-elysion-forest py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-elysion-gold">
                Reviews
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-elysion-cream sm:text-4xl">
                Quiet confidence from our clients.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-elysion-cream opacity-80">
              We design with care, and the results show in the lived-in stories
              our clients share season after season.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="flex h-full flex-col justify-between rounded-2xl border border-elysion-olive bg-[rgba(246,241,231,0.08)] p-6 text-elysion-cream shadow-soft transition duration-500 hover:-translate-y-1"
              >
                <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                <div className="mt-6 flex items-center justify-between gap-8 text-xs uppercase tracking-[0.3em] text-elysion-gold">
                  <span>{testimonial.author}</span>
                  <span aria-label={`${testimonial.rating} star rating`}>
                    {'*'.repeat(testimonial.rating)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-elysion-olive">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-elysion-forest sm:text-4xl">
                A calm, collaborative path to renewal.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-elysion-forest opacity-80">
              We combine listening, design craft, and steady stewardship so the
              landscape grows alongside you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-elysion-sand bg-elysion-cream p-6 shadow-soft transition duration-300 hover:-translate-y-1"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-elysion-rust">
                    {String(highlight.sequence).padStart(2, '0')}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-elysion-forest">
                    {highlight.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-elysion-forest opacity-80">
                    {highlight.summary}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-elysion-olive">
                  <span>View details</span>
                  <span aria-hidden="true">&gt;</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
