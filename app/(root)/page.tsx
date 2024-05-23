import FeaturedWorkSection from './sections/featured-work-section';
import HeroSection from './sections/hero-section';
import RecomendationsSection from './sections/recomendations-section';
import VenturesSection from './sections/ventures-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <RecomendationsSection />
      <VenturesSection />
    </>
  );
}
