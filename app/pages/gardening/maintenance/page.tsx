// Data
import { maintenanceContent } from '../../../data/pages-content/gardening-children/maintenance';

// Components
import {
  HeroSection,
  ServicePageServicesSection,
} from '../../../components/sections';

export default function GardeningMaintenancePage() {
  const { hero, servicesSection } = maintenanceContent;

  return (
    <main className="bg-elysion-cream text-elysion-ink">
      <HeroSection content={hero} sectionId="hero" />
      <ServicePageServicesSection
        content={servicesSection}
        sectionId="services"
      />
    </main>
  );
}
