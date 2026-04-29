import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Elysion Landscaping',
  description:
    'Our standard terms and conditions for landscaping and garden services.',
};

export default function ToSPage() {
  return (
    <main className="bg-elysion-cream pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header Section */}
        <header className="mb-16 border-b border-elysion-sand pb-10">
          <p className="text-elysion-olive text-sm font-medium uppercase tracking-[0.4em] mb-4">
            Legal
          </p>
          <h1 className="text-5xl md:text-6xl font-semibold text-elysion-forest leading-tight">
            Terms of Service
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
              1. Agreement to Terms
            </h2>
            <p className="mb-4">
              By requesting a quote, booking our services, or allowing us to
              enter your property, you (&quot;Client&quot;, &quot;you&quot;)
              agree to be bound by these Terms of Service (&quot;Terms&quot;)
              with Elysion Limited (&quot;Company&quot;, &quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;). If you are acting on behalf of a
              business or entity, you warrant that you have authority to bind
              that entity.
            </p>
            <p>
              These Terms apply to all landscaping, gardening, lawn care,
              hardscaping, tree work, irrigation, and related trade services
              provided by us in the Auckland region and elsewhere in New
              Zealand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              2. Quotes & Estimates
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Written estimates </strong> are valid for{' '}
                <strong>30 days </strong> from the date of issue unless
                otherwise stated.
              </li>
              <li>
                <strong>Fixed price vs estimate: </strong> Unless clearly marked
                as &quot;fixed price&quot;, any estimate is a guide only. Final
                invoice will reflect actual time, materials, and plant costs.
              </li>
              <li>
                <strong>Hidden conditions: </strong> If during work we encounter
                conditions not visible during quoting (e.g., underground
                concrete, tree roots, poor drainage, asbestos, hazardous
                materials, unmapped utilities), we will stop work and provide a{' '}
                <strong>variation quote</strong>. No additional work will
                proceed without your written approval (email or text
                acceptable).
              </li>
              <li>
                <strong>Change orders: </strong> Any additional work requested
                by you after the original scope is agreed will be invoiced
                separately.
              </li>
            </ul>
          </section>

          <section className="border-l-4 border-elysion-olive pl-6 py-2">
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              3. Construction Contracts Act 2002 (CCA)
            </h2>
            <p className="mb-4 font-medium">
              Important: Landscaping work that includes paving, retaining walls,
              fences, decks, irrigation systems, or any structural or site-work
              is classified as &quot;construction work&quot; under the CCA. This
              gives us important rights and imposes obligations on you.
            </p>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Payment claims: </strong> All our invoices for
                construction work are <strong>payment claims </strong> under the
                CCA. Each invoice will state the work done, amount claimed, due
                date, and that it is a payment claim.
              </li>
              <li>
                <strong>Payment schedules: </strong> If you dispute any amount,
                you must provide us a <strong>written payment schedule </strong>{' '}
                within <strong>20 working days </strong> (or shorter if
                specified on the invoice) stating which amount you dispute and
                why. If you do not provide a payment schedule, you will be
                liable to pay the full claimed amount even if you have a genuine
                dispute (&quot;pay now, argue later&quot;).
              </li>
              <li>
                <strong>Suspension of work: </strong> If you fail to pay any
                undisputed amount by the due date, we may suspend all work
                without penalty until payment is received. We may also charge
                interest at <strong>10% per annum </strong> on overdue amounts.
              </li>
              <li>
                <strong>Adjudication: </strong> Any dispute under the CCA may be
                referred to adjudication under the Act.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              4. Consumer Guarantees Act 1993 & Fair Trading Act 1986
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Residential clients: </strong> If you are an individual
                acquiring services primarily for personal, domestic, or
                household use, the{' '}
                <strong>Consumer Guarantees Act applies in full</strong>.
                Nothing in these Terms excludes, restricts, or modifies the CGA.
              </li>
              <li>
                <strong>Business clients: </strong> If you are acquiring
                services for the purposes of a business (including rental
                properties, commercial premises, or development),{' '}
                <strong>the CGA does not apply</strong>. You agree that the
                guarantees under the CGA are excluded to the fullest extent
                permitted by law.
              </li>
              <li>
                <strong>Fair Trading Act: </strong> We comply with the Fair
                Trading Act 1986. We will not mislead or deceive you. You also
                agree not to engage in misleading or deceptive conduct in
                dealing with us.
              </li>
            </ul>
          </section>

          <section className="bg-elysion-forest text-elysion-cream p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-elysion-gold mb-6">
              5. Payment Terms
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-gold">
              <li>
                <strong>Deposits: </strong> A deposit of up to 50% may be
                required for large material purchases (e.g., pavers, sleepers,
                special-order plants) or custom designs. Deposits are
                non-refundable once materials have been ordered.
              </li>
              <li>
                <strong>Payment due date: </strong> Payment in full is due{' '}
                <strong>14 days </strong> from the date of invoice for
                residential clients, and <strong>20 working days </strong> for
                commercial/government clients, unless otherwise agreed in
                writing.
              </li>
              <li>
                <strong>Payment methods: </strong> Bank transfer, credit card
                (surcharge may apply), or cash. We do not store credit card
                details.
              </li>
              <li>
                <strong>Late payment interest: </strong> Overdue invoices will
                accrue interest at <strong>2% per month </strong> (or the
                maximum allowed under the Interest on Money Claims Act 2016 -
                currently 10% per annum).
              </li>
              <li>
                <strong>Debt collection: </strong> If we refer an overdue
                invoice to a collection agency or solicitor, you agree to pay
                all reasonable recovery costs (including debt collector fees and
                legal costs on a solicitor-client basis).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              6. Your Responsibilities (Client)
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Provide access: </strong> Unlocked gates, clear
                driveway, and a working outdoor water tap (unless otherwise
                discussed). A rescheduling fee may apply if our crew cannot
                access the site.
              </li>
              <li>
                <strong>Mark utilities: </strong> Contact{' '}
                <strong>Before You Dig NZ </strong> (call 0800 248 344 or
                online) to locate underground cables, gas, water, and fibre
                before any digging, post-hole sinking, or tree removal. We are
                not liable for damage to unmarked utilities.
              </li>
              <li>
                <strong>Disclose hazards: </strong> Tell us in writing before
                work starts about any known hazards: asbestos, dangerous or
                unstable trees, buried rubble, broken glass, dog faeces, wasp
                nests, poison ivy/tutu, chemical spills, or unmarked
                water/electrical lines.
              </li>
              <li>
                <strong>Secure pets & children: </strong> Keep pets inside or
                secured away from work areas. Keep children away from machinery.
                We are not liable for injury to unsupervised pets or children on
                the work site.
              </li>
              <li>
                <strong>Provide correct information: </strong> Any
                misrepresentation that leads to incorrect quoting or safety
                risks may result in additional charges.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              7. Scheduling, Weather & Delays
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Weather dependence: </strong> Landscaping work can be
                delayed by rain, high winds, frost, or extreme heat. We will
                reschedule at no cost to you. If you ask us to work in unsafe
                conditions (e.g., lightning), we may refuse.
              </li>
              <li>
                <strong>Notices: </strong> We will endeavour to notify you of
                any delay at least 24 hours in advance by phone or text. Time is
                not of the essence unless expressly stated in writing.
              </li>
              <li>
                <strong>Material delays: </strong> If specific plants, pavers,
                or timber are out of stock from our suppliers, we will offer
                alternatives or reschedule. We are not liable for
                supplier-caused delays.
              </li>
            </ul>
          </section>

          <section className="bg-elysion-olive/10 p-8 rounded-2xl border border-elysion-olive/20">
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              8. Specific Trade Clauses
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Lawn mowing: </strong> We do not rake grass clippings
                unless quoted. We are not responsible for pre-existing lawn
                issues (bald patches, weeds, thatch). We will not mow when grass
                is so wet that it causes rutting.
              </li>
              <li>
                <strong>Tree work: </strong> We carry public liability insurance
                for falling branches, but we are not liable for invisible root
                damage to neighbouring properties or underground services. Stump
                grinding removes stump to below ground level but leaves major
                lateral roots.
              </li>
              <li>
                <strong>Paving & retaining walls: </strong> Minor settling (up
                to 5mm) due to freeze-thaw or normal ground movement is not a
                defect. Weep holes required for solid retaining walls - failure
                to maintain them is your responsibility.
              </li>
              <li>
                <strong>Planting: </strong> We do not guarantee plants against
                pests, disease, drought, or neglect. We will provide written
                care instructions if requested.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              9. Cancellation & Rescheduling
            </h2>
            <p className="mb-4">
              <strong>By you: </strong> Cancellations with{' '}
              <strong>less than 24 hours&apos; notice </strong> (excluding
              weekends and public holidays) may incur a fee. Cancellations for
              custom-order materials (e.g., named plants, special pavers) may
              require reimbursement of material cost if already purchased.
            </p>
            <p>
              <strong>By us: </strong> We may cancel due to weather, safety, or
              illness without penalty. We will reschedule as soon as
              practicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              10. Limitation of Liability
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>Total liability: </strong> Our total aggregate liability
                to you for any claim (whether in contract, tort, or statute)
                arising out of or relating to these services shall not exceed
                the total amount you have paid us for those specific services.
              </li>
              <li>
                <strong>Consequential loss: </strong> We are not liable for
                indirect or consequential loss, including but not limited to:
                loss of enjoyment, loss of rental income, damage to unmarked
                underground sprinklers, failure of new lawns due to your
                watering habits, or damage to fences/gates left open by you.
              </li>
              <li>
                <strong>Exceptions: </strong> Nothing in this clause limits our
                liability for personal injury or death caused by our negligence,
                or any liability that cannot be excluded by law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              11. Health & Safety at Work Act 2015 (HSWA)
            </h2>
            <p>
              We are a PCBU (Person Conducting a Business or Undertaking). We
              will take all reasonably practicable steps to keep our workers and
              your family safe. You also have duties: you must inform us of any
              hazards you are aware of and not direct us to work in an unsafe
              manner. Failure to do so may result in immediate cessation of work
              and charges for wasted time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-6">
              12. Dispute Resolution
            </h2>
            <ul className="space-y-4 list-disc pl-5 marker:text-elysion-olive">
              <li>
                <strong>First step: </strong> Contact us directly - most
                disputes can be resolved informally. We will respond within 5
                working days.
              </li>
              <li>
                <strong>Disputes Tribunal: </strong> For claims under{' '}
                <strong>$30,000 </strong> (residential) or{' '}
                <strong>$20,000 </strong> (business), either party may refer the
                dispute to the <strong>Disputes Tribunal of New Zealand</strong>
                . You waive the right to a jury trial for such claims.
              </li>
              <li>
                <strong>District Court: </strong> Claims above the
                Tribunal&apos;s limit will be heard in the{' '}
                <strong>Auckland District Court</strong>.
              </li>
              <li>
                <strong>Construction Contracts Adjudication: </strong> For
                disputes relating to construction work (under CCA), either party
                may apply for adjudication under the Act instead of the Disputes
                Tribunal.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              13. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of{' '}
              <strong>New Zealand</strong>. The parties submit to the exclusive
              jurisdiction of the courts of New Zealand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-elysion-forest mb-4">
              14. Entire Agreement
            </h2>
            <p>
              These Terms (together with any written quote or scope of work)
              constitute the entire agreement between us. Any variations must be
              in writing signed by both parties.
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
