import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { OfferingsSection } from "@/components/OfferingsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <OfferingsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
