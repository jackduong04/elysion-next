'use client';

// Node modules
import { useState, useEffect } from 'react';

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle scroll lock on body when form is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleForm = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Contact Toggle Button */}
      <button
        onClick={toggleForm}
        className={`
          fixed bottom-8 right-8 z-70 px-6 py-3 rounded-full font-semibold uppercase 
          text-sm md:text-base tracking-widest transition-all duration-300 
          shadow-xl/30 hover:scale-105 active:scale-95 border border-elysion-olive 
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-offset-2 focus-visible:ring-elysion-olive ${
            isOpen
              ? 'bg-elysion-rust text-white hidden lg:block'
              : 'bg-elysion-forest/90 text-elysion-cream hover:bg-elysion-olive block'
          }`}
        aria-label={isOpen ? 'Close Contact Form' : 'Open Contact Form'}
      >
        {isOpen ? 'Close' : 'Contact'}
      </button>

      {/* Backdrop and Form Modal */}
      <div
        className={`
          fixed inset-0 z-60 flex items-center justify-center p-4 transition-all 
          duration-500 ease-in-out ${
            isOpen
              ? 'opacity-100 pointer-events-auto visible'
              : 'opacity-0 pointer-events-none invisible'
          }
        `}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-elysion-ink/60"
          onClick={toggleForm}
        />

        {/* Form Container */}
        <div
          className={`
            relative w-full max-w-xl bg-elysion-cream rounded-2xl shadow-2xl
            max-h-[calc(100dvh-2rem)] flex flex-col overflow-hidden 
            transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-8'
            }
          `}
        >
          {/* Close button for all screen sizes */}
          <button
            onClick={toggleForm}
            className={`
              absolute top-5 right-5 z-10 p-2 text-elysion-ink/60 transition
              hover:text-elysion-rust hover:scale-110 duration-200
            `}
            aria-label="Close form"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="relative p-6 md:p-12 overflow-y-auto flex-1">
            <h2 className="text-3xl md:text-4xl font-medium text-elysion-forest mb-2">
              Get in Touch
            </h2>
            <p className="text-elysion-ink/70 mb-8 font-body">
              Tell us about your project and let's create something beautiful
              together.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-elysion-forest tracking-wide"
                  >
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    placeholder="Jane Doe"
                    className={`
                      w-full px-4 py-3 bg-elysion-sand/30 border border-elysion-sand 
                      rounded-xl focus:ring-2 focus:ring-elysion-olive outline-none 
                      transition-all placeholder:text-elysion-ink/40
                    `}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-elysion-forest tracking-wide"
                  >
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className={`
                      w-full px-4 py-3 bg-elysion-sand/30 border border-elysion-sand 
                      rounded-xl focus:ring-2 focus:ring-elysion-olive outline-none 
                      transition-all placeholder:text-elysion-ink/40
                    `}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-elysion-forest tracking-wide"
                >
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="jane@example.com"
                  className={`
                    w-full px-4 py-3 bg-elysion-sand/30 border border-elysion-sand 
                    rounded-xl focus:ring-2 focus:ring-elysion-olive outline-none 
                    transition-all placeholder:text-elysion-ink/40
                  `}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-elysion-forest tracking-wide"
                >
                  Address *
                </label>
                <input
                  required
                  type="text"
                  id="address"
                  placeholder="123 Field Ave, Green Valley"
                  className={`
                    w-full px-4 py-3 bg-elysion-sand/30 border border-elysion-sand 
                    rounded-xl focus:ring-2 focus:ring-elysion-olive outline-none 
                    transition-all placeholder:text-elysion-ink/40
                  `}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-elysion-forest tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What can we help you with?"
                  className={`
                    w-full px-4 py-3 bg-elysion-sand/30 border border-elysion-sand 
                    rounded-xl focus:ring-2 focus:ring-elysion-olive outline-none 
                    transition-all placeholder:text-elysion-ink/40 resize-none
                  `}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className={`
                    w-full py-4 bg-elysion-forest text-elysion-cream 
                    rounded-xl font-semibold text-lg tracking-widest 
                    hover:bg-elysion-olive transition-colors shadow-md uppercase
                  `}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
