// Data
import { designContent } from '../../data/pages-content/design/design';

// Components
import {
  HeroSection,
  ServicePageServicesSection,
  HighlightsSection,
  ProcessSection,
} from '../../components/sections';
import BookSlider from '@/app/components/flip-book/BookSlider';

export default function DesignPage() {
  const { hero, servicesSection, highlightsSection, processSection } =
    designContent;

  return (
    <main className="bg-elysion-cream text-elysion-ink">
      <HeroSection content={hero} sectionId="hero" />
      <ServicePageServicesSection
        content={servicesSection}
        sectionId="services"
      />
      <HighlightsSection content={highlightsSection} sectionId="highlights" />
      <ProcessSection content={processSection} sectionId="process" />
      <BookSlider />
    </main>
  );
}
