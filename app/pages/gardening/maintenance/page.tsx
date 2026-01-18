// Data
import { maintenanceContent } from '../../../data/pages-content/gardening-children/maintenance';

// Components
import {
  HeroSection,
  HighlightsSection,
  ServicePageServicesSection,
} from '../../../components/sections';

export default function GardeningMaintenancePage() {
  const { hero, servicesSection, highlightsSection } = maintenanceContent;

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
