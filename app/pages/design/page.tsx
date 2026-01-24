// Data
import { designContent } from '../../data/pages-content/design/design';

// Components
import { HeroSection, ProcessSection } from '../../components/sections';

export default function DesignPage() {
  const { hero, processSection } = designContent;

  return (
    <main className="bg-elysion-cream text-elysion-ink">
      <HeroSection content={hero} sectionId="hero" />
      <ProcessSection content={processSection} sectionId="process" />
    </main>
  );
}
