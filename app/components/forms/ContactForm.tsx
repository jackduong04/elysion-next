'use client';

// Node modules
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';

// Form Schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .regex(/^[a-zA-Z\s]*$/, {
      message: 'Name should only contain letters and spaces',
    }),
  email: z.email({ message: 'Please enter a valid email address' }),
  phone: z.string().regex(/^(?:\+64|0)[2-9][\d\s-]{7,11}$/, {
    message: 'Please enter a valid New Zealand phone number',
  }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .optional()
    .or(z.literal('')),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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

  // Listen for custom event to open the form
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-form', handleOpen);
    return () => window.removeEventListener('open-contact-form', handleOpen);
  }, []);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSubmitStatus('idle');
      reset();
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          access_key: 'bc5c9e68-b456-4b56-aadb-63453b520e4c',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        reset();
        // Close form after a short delay on success
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Tell us about your project and let&apos;s create something
              beautiful together.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-elysion-forest tracking-wide"
                  >
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    placeholder="Jane Doe"
                    className={`
                      w-full px-4 py-3 bg-elysion-sand/30 border rounded-xl 
                      focus:ring-2 focus:ring-elysion-olive outline-none 
                      transition-all placeholder:text-elysion-ink/40
                      ${errors.name ? 'border-elysion-rust focus:ring-elysion-rust' : 'border-elysion-sand'}
                    `}
                  />
                  {errors.name && (
                    <p className="text-elysion-rust text-xs mt-1 font-medium italic">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-elysion-forest tracking-wide"
                  >
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    placeholder="020 4068 0173"
                    className={`
                      w-full px-4 py-3 bg-elysion-sand/30 border rounded-xl 
                      focus:ring-2 focus:ring-elysion-olive outline-none 
                      transition-all placeholder:text-elysion-ink/40
                      ${errors.phone ? 'border-elysion-rust focus:ring-elysion-rust' : 'border-elysion-sand'}
                    `}
                  />
                  {errors.phone && (
                    <p className="text-elysion-rust text-xs mt-1 font-medium italic">
                      {errors.phone.message}
                    </p>
                  )}
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
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder="jane@example.com"
                  className={`
                    w-full px-4 py-3 bg-elysion-sand/30 border rounded-xl 
                    focus:ring-2 focus:ring-elysion-olive outline-none 
                    transition-all placeholder:text-elysion-ink/40
                    ${errors.email ? 'border-elysion-rust focus:ring-elysion-rust' : 'border-elysion-sand'}
                  `}
                />
                {errors.email && (
                  <p className="text-elysion-rust text-xs mt-1 font-medium italic">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-elysion-forest tracking-wide"
                >
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  placeholder="What can we help you with?"
                  className={`
                    w-full px-4 py-3 bg-elysion-sand/30 border rounded-xl 
                    focus:ring-2 focus:ring-elysion-olive outline-none 
                    transition-all placeholder:text-elysion-ink/40 resize-none
                    ${errors.message ? 'border-elysion-rust focus:ring-elysion-rust' : 'border-elysion-sand'}
                  `}
                />
                {errors.message && (
                  <p className="text-elysion-rust text-xs mt-1 font-medium italic">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-4 relative">
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-elysion-olive/10 text-elysion-forest border border-elysion-olive p-4 rounded-xl text-center font-medium"
                    >
                      Message sent successfully! We&apos;ll be in touch soon.
                    </motion.div>
                  ) : submitStatus === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-elysion-rust/10 text-elysion-rust border border-elysion-rust p-4 rounded-xl text-center font-medium"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  ) : (
                    <button
                      key="submit"
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full py-4 bg-elysion-forest text-elysion-cream 
                        rounded-xl font-semibold text-lg tracking-widest 
                        hover:bg-elysion-olive transition-colors shadow-md uppercase
                        disabled:opacity-50 disabled:cursor-not-allowed
                      `}
                    >
                      {isSubmitting ? 'Sending...' : 'Get a Free Quote'}
                    </button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
