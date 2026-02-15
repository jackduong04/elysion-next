// Data
import { softscapingContent } from '../../../data/pages-content/gardening-children/soft-scaping';

// Components
import {
  HeroSection,
  ServicePageServicesSection,
  HighlightsSection,
} from '../../../components/sections';

export default function GardeningMaintenancePage() {
  const { hero, servicesSection, highlightsSection } = softscapingContent;

  return (
    <main className="bg-elysion-cream text-elysion-ink">
      <HeroSection content={hero} sectionId="hero" />
      <ServicePageServicesSection
        content={servicesSection}
        sectionId="services"
      />
      <HighlightsSection content={highlightsSection} sectionId="highlights" />
    </main>
  );
}
