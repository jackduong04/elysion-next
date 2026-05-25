'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { pushDataLayer } from '../../lib/tracking';

const WEB3FORMS_ACCESS_KEY = 'bc5c9e68-b456-4b56-aadb-63453b520e4c';

const quoteSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .regex(/^[a-zA-Z\s]*$/, {
      message: 'Name should only contain letters and spaces',
    }),
  phone: z.string().regex(/^(?:\+64|0)[2-9][\d\s-]{7,11}$/, {
    message: 'Please enter a valid New Zealand phone number',
  }),
  suburb: z.string().min(2, { message: 'Please enter your suburb' }),
  message: z.string().optional().or(z.literal('')),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

type LpQuoteFormProps = {
  /** Tracking id, e.g. "garden-maintenance" */
  lp: string;
  /** Human-readable source label sent to web3forms, e.g. "Garden Maintenance LP" */
  pageLabel: string;
};

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 bg-elysion-sand/30 border rounded-xl focus:ring-2
   focus:ring-elysion-olive outline-none transition-all placeholder:text-elysion-ink/40
   ${hasError ? 'border-elysion-rust focus:ring-elysion-rust' : 'border-elysion-sand'}`;

const labelClass =
  'block text-sm font-medium text-elysion-forest tracking-wide';
const errorClass = 'text-elysion-rust text-xs mt-1 font-medium italic';

export function LpQuoteForm({ lp, pageLabel }: LpQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle',
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (data: QuoteFormData) => {
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
          page: pageLabel,
          subject: `New quote request — ${pageLabel}`,
          from_name: 'Elysion Landing Page',
          access_key: WEB3FORMS_ACCESS_KEY,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        reset();
        pushDataLayer('form_submit', { lp });
        // TODO: Google Ads conversion — conversion ID/label supplied later.
        // window.gtag?.('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXXXXX' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="scroll-mt-20 bg-elysion-sand/30 py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-6">
        <div className="rounded-2xl bg-elysion-cream p-6 shadow-xl sm:p-10">
          <h2 className="text-3xl font-semibold text-elysion-forest sm:text-4xl">
            Get a free quote
          </h2>
          <p className="mt-2 text-elysion-ink/70">
            Tell us a little about your project and we&apos;ll be in touch.
          </p>

          {submitStatus === 'success' ? (
            <div className="mt-8 rounded-xl border border-elysion-olive bg-elysion-olive/10 p-6 text-center text-elysion-forest">
              <p className="font-medium">
                Thanks — we&apos;ve got your details. Jack will be in touch
                shortly. In a hurry? Call us on{' '}
                <a
                  href="tel:+642040680173"
                  data-event="phone_click"
                  data-location="form_success"
                  onClick={() =>
                    pushDataLayer('phone_click', { lp, location: 'form_success' })
                  }
                  className="font-semibold underline decoration-elysion-olive underline-offset-2"
                >
                  020 4068 0173
                </a>
                .
              </p>
            </div>
          ) : (
            <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-1.5">
                <label htmlFor="lp-name" className={labelClass}>
                  Full name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="lp-name"
                  placeholder="Jane Doe"
                  className={inputClass(Boolean(errors.name))}
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lp-phone" className={labelClass}>
                  Phone number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="lp-phone"
                  placeholder="020 4068 0173"
                  className={inputClass(Boolean(errors.phone))}
                />
                {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lp-suburb" className={labelClass}>
                  Suburb *
                </label>
                <input
                  {...register('suburb')}
                  type="text"
                  id="lp-suburb"
                  placeholder="Silverdale"
                  className={inputClass(Boolean(errors.suburb))}
                />
                {errors.suburb && (
                  <p className={errorClass}>{errors.suburb.message}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lp-message" className={labelClass}>
                  Tell us about your project
                </label>
                <textarea
                  {...register('message')}
                  id="lp-message"
                  rows={4}
                  placeholder="What can we help you with?"
                  className={`${inputClass(false)} resize-none`}
                />
              </div>

              {submitStatus === 'error' && (
                <p className="rounded-xl border border-elysion-rust bg-elysion-rust/10 p-3 text-center text-sm font-medium text-elysion-rust">
                  Something went wrong. Please try again or call us on 020 4068 0173.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full rounded-xl bg-elysion-forest py-4 text-lg font-semibold uppercase
                  tracking-widest text-elysion-cream shadow-md transition-colors
                  hover:bg-elysion-olive disabled:cursor-not-allowed disabled:opacity-50
                `}
              >
                {isSubmitting ? 'Sending...' : 'Get my free quote'}
              </button>
              <p className="text-center text-sm text-elysion-ink/60">
                We&apos;ll get back to you within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
