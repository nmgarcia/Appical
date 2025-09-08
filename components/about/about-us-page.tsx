import HeroSection from "./hero-section";
import ServicesSection from "./services-section";
import JoinSection from "./join-section";

export default function AboutUsPage() {
  return (
    <div className="relative">
      <HeroSection />
      <div className="relative z-content">
        <ServicesSection />
        <JoinSection />
      </div>
    </div>
  );
}