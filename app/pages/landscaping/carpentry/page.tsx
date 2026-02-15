// Data
import { carpentryContent } from '../../../data/pages-content/landscaping-children/carpentry';

// Components
import {
  HeroSection,
  ServicePageServicesSection,
  HighlightsSection,
  ProcessSection,
} from '../../../components/sections';

export default function GardeningMaintenancePage() {
  const { hero, servicesSection, highlightsSection, processSection } =
    carpentryContent;

  return (
    <main className="bg-elysion-cream text-elysion-ink">
      <HeroSection content={hero} sectionId="hero" />
      <ServicePageServicesSection
        content={servicesSection}
        sectionId="services"
      />
      <HighlightsSection content={highlightsSection} sectionId="highlights" />
      <ProcessSection content={processSection} sectionId="process" />
    </main>
  );
}
