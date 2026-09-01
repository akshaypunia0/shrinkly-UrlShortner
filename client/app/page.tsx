import { BenefitsSection } from "./components/BenefitsSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <HeroSection />
      <HowItWorks />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
