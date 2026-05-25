import type { Metadata } from 'next';

import { gardenMaintenanceContent as content } from '../../data/pages-content/lp/garden-maintenance';
import {
  LpHeader,
  LpHero,
  LpFeatureList,
  LpBenefits,
  LpProof,
  LpProcess,
  LpPricing,
  LpQuoteForm,
  LpFaq,
  LpFinalCta,
  StickyCallButton,
} from '../../components/lp';

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: content.meta.canonical },
  robots: { index: false, follow: true },
};

export default function GardenMaintenanceLandingPage() {
  const { lp } = content.meta;

  return (
    <>
      <LpHeader lp={lp} />
      <main className="bg-elysion-cream text-elysion-ink">
        <LpHero content={content.hero} lp={lp} />
        <LpFeatureList content={content.features} />
        <LpBenefits content={content.benefits} />
        <LpProof content={content.proof} />
        <LpProcess content={content.process} />
        <LpPricing content={content.pricing} />
        <LpQuoteForm lp={lp} pageLabel="Garden Maintenance LP" />
        <LpFaq content={content.faq} />
        <LpFinalCta content={content.finalCta} lp={lp} />
      </main>
      <StickyCallButton lp={lp} />
    </>
  );
}
