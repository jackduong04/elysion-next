import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Elysion Landscaping',
  description: 'How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-elysion-cream pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header Section */}
        <header className="mb-16 border-b border-elysion-sand pb-10">
          <p className="text-elysion-olive text-sm font-medium uppercase tracking-[0.4em] mb-4">
            Legal
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold text-elysion-forest leading-tight">
            Privacy Policy
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-elysion-ink/60 italic">
            <p>Last Updated: 29 April 2026</p>
            <p>Elysion Limited</p>
          </div>
        </header>

        {/* Content Section */}
        <div className="space-y-12 text-elysion-ink leading-relaxed">
          <section className="bg-elysion-sand/20 p-8 rounded-2xl border border-elysion-sand/50">
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              Elysion Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              personal information in accordance with the{' '}
              <strong>Privacy Act 2020</strong> and the{' '}
              <strong>13 Information Privacy Principles (IPPs)</strong>.
            </p>
            <p className="mb-4">This policy applies to:</p>
            <ul className="space-y-2 list-disc pl-5 marker:text-elysion-olive">
              <li>
                Visitors to our website{' '}
                <a
                  href="https://elysion.co.nz"
                  className="text-elysion-olive hover:underline"
                >
                  elysion.co.nz
                </a>
              </li>
              <li>
                Clients who request quotes or receive our landscaping services
              </li>
              <li>Suppliers and trade contacts</li>
            </ul>
            <p className="mt-4 font-medium">
              We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              2. What personal information we collect
            </h2>
            <p className="mb-4">We may collect:</p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Identity and contact details: </strong> Name,
                address(es), email address, phone number(s), property access
                codes (stored securely and destroyed after job completion).
              </li>
              <li>
                <strong>Service information: </strong> Scope of work, site
                photographs (taken for quoting, progress updates, or safety
                records), property access arrangements.
              </li>
              <li>
                <strong>Payment information: </strong> Bank account details for
                refunds, credit card details (processed by third-party payment
                gateway - we do not store full card numbers), and invoice
                history.
              </li>
              <li>
                <strong>Technical information: </strong> IP address, browser
                type, referring URLs, pages visited on our website - collected
                via cookies and analytics tools (e.g., Google Analytics).
              </li>
              <li>
                <strong>Communications: </strong> Records of emails, text
                messages (SMS), and phone calls relating to your job.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              3. How we collect your information
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Directly from you: </strong> When you fill out our
                online quote form, email us, call us, or give us a signed work
                order.
              </li>
              <li>
                <strong>From third parties: </strong> With your consent, from
                property managers, real estate agents, or your
                builder/architect.
              </li>
              <li>
                <strong>Automatically: </strong> Via our website cookies and
                server logs.
              </li>
            </ul>
          </section>

          <section className="bg-elysion-olive/10 p-8 rounded-2xl border border-elysion-olive/20">
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              4. How we use your personal information (Purposes)
            </h2>
            <p className="mb-4">
              We use your information only for purposes that a reasonable person
              would expect, including:
            </p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                To provide quotes, schedule work, and perform landscaping
                services.
              </li>
              <li>
                To send appointment reminders, arrival ETAs, and follow-up care
                instructions (via SMS or email).
              </li>
              <li>To process payments and collect overdue accounts.</li>
              <li>
                To comply with legal obligations (e.g., tax records,
                Construction Contracts Act notices).
              </li>
              <li>To improve our website and services.</li>
              <li>To respond to inquiries, complaints, or disputes.</li>
            </ul>
            <p className="mt-6 italic">
              <strong>Marketing: </strong> We will only send you marketing
              emails or texts (e.g., seasonal specials) if you have opted in.
              You can opt out at any time by clicking &quot;unsubscribe&quot; or
              replying &quot;STOP&quot; to a text.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              5. Disclosure of personal information
            </h2>
            <p className="mb-4">
              We do <strong>not</strong> sell your personal information. We may
              share it only in the following circumstances:
            </p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Service providers: </strong> With cloud software
                providers (e.g., Jobber, Xero, Google Workspace), payment
                processors (e.g., Stripe, Windcave), and mapping services
                (Google Maps) - all of whom are contractually required to
                protect your data and comply with NZ Privacy Act.
              </li>
              <li>
                <strong>Legal compliance: </strong> If required by law, a search
                warrant, or a notice from the Privacy Commissioner.
              </li>
              <li>
                <strong>Debt collection: </strong> If an invoice remains unpaid,
                we may share your name, address, and invoice details with a
                licensed debt collection agency or solicitor.
              </li>
              <li>
                <strong>Business transfer: </strong> In the event of a merger,
                acquisition, or sale of our business, your information may be
                transferred to the new owner.
              </li>
            </ul>
            <p className="mt-6">
              We will not disclose your information to overseas parties unless
              they are subject to equivalent privacy safeguards (e.g.,
              Australia&apos;s Privacy Act or EU GDPR). We primarily use
              NZ-based or Australian-based cloud services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              6. Cookies and tracking on our website
            </h2>
            <p className="mb-4">
              Our website uses <strong>cookies</strong> - small text files
              stored on your device - to:
            </p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>Remember your quote request preferences.</li>
              <li>Analyse website traffic via Google Analytics.</li>
              <li>Prevent security risks.</li>
            </ul>
            <p className="mt-4">
              You can disable cookies in your browser settings, but some parts
              of our site (e.g., contact forms) may not function correctly. By
              continuing to use our site, you consent to our use of cookies as
              described.
            </p>
          </section>

          <section className="bg-elysion-forest text-elysion-cream p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-elysion-gold mb-6">
              7. Storage and security
            </h2>
            <p className="mb-4">
              We take reasonable steps to protect your information from
              unauthorised access, loss, or misuse:
            </p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-gold">
              <li>
                Electronic data is stored on password-protected, encrypted
                devices and cloud services with multi-factor authentication.
              </li>
              <li>
                Paper records containing personal information are shredded when
                no longer needed (usually 7 years after last interaction, as
                required by tax law).
              </li>
              <li>
                Access to your information is limited to employees who need it
                to perform their duties.
              </li>
            </ul>
            <p className="mt-6 text-sm opacity-80 italic">
              No data transmission over the internet is 100% secure, but we use
              industry-standard safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              8. Your rights under the Privacy Act 2020
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Access</strong> the personal information we hold about
                you (free of charge, but we may charge a reasonable fee for
                repeated or extensive requests).
              </li>
              <li>
                <strong>Request correction</strong> of any inaccurate or
                incomplete information.
              </li>
              <li>
                <strong>Request deletion</strong> of your information, subject
                to our legal obligations to retain records (e.g., tax invoices
                must be kept for 7 years).
              </li>
              <li>
                <strong>Complain</strong> to the Privacy Commissioner if you
                believe we have breached your privacy.
              </li>
            </ul>
            <p className="mt-6">
              To exercise these rights, contact our Privacy Officer using the
              details below. We will respond within{' '}
              <strong>20 working days</strong> (or sooner if required).
            </p>
          </section>

          <section className="border-l-4 border-elysion-gold pl-6 py-2">
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              9. Data breach notification
            </h2>
            <p className="mb-4">
              Under the Privacy Act 2020, if we have a privacy breach that
              causes (or is likely to cause) serious harm to you, we must:
            </p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>Notify you as soon as practicable.</li>
              <li>
                Notify the <strong>Office of the Privacy Commissioner</strong>{' '}
                (privacy.org.nz).
              </li>
            </ul>
            <p className="mt-4 italic">
              We will investigate all suspected breaches immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              10. Retention period
            </h2>
            <p className="mb-4">
              We keep your personal information for as long as necessary to:
            </p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>Provide services to you.</li>
              <li>
                Comply with legal obligations (e.g., Inland Revenue requires
                7-year retention of invoices).
              </li>
              <li>Defend or pursue legal claims.</li>
            </ul>
            <p className="mt-4">
              After that period, we will securely delete or anonymise your
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              11. Children&apos;s privacy
            </h2>
            <p>
              Our services are intended for property owners and business
              operators aged 18 years or over. We do not knowingly collect
              personal information from children under 16. If you believe we
              have inadvertently collected a child&apos;s data, please contact
              us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              12. Third-party links
            </h2>
            <p>
              Our website may contain links to supplier websites (e.g., stone
              yards, plant nurseries). We are not responsible for the privacy
              practices of those external sites. We encourage you to read their
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              13. Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time (e.g., to
              reflect law changes or new services). The &quot;Last Updated&quot;
              date at the top will indicate changes. If we make a material
              change, we will notify you via email or a notice on our website.
            </p>
          </section>

          {/* Footer Contact Info */}
          <footer className="mt-20 pt-10 border-t border-elysion-sand text-sm text-elysion-ink/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-elysion-forest uppercase tracking-wider mb-2">
                  Business Details
                </p>
                <p>Elysion Limited</p>
                <p>elysion.co.nz</p>
              </div>
              <div>
                <p className="font-semibold text-elysion-forest uppercase tracking-wider mb-2">
                  Contact
                </p>
                <p>jack@elysion.co.nz</p>
                <p>+64 20 4068 0173</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
