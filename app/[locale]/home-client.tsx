import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ConstructorPowerSection from "@/components/ConstructorPowerSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <PainPointsSection />
      <ConstructorPowerSection />
      <ShowcaseSection />
      <FeaturesSection />
      <ComparisonSection />
    </main>
  );
};

export default Index;
