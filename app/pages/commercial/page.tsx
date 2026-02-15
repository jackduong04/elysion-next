// Data
import { commercialContent } from '../../data/pages-content/commercial/commercial';

// Components
import {
  HeroSection,
  ServicePageServicesSection,
  HighlightsSection,
} from '../../components/sections';

export default function DesignPage() {
  const { hero, servicesSection, highlightsSection } = commercialContent;

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
