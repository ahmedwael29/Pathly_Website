import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import FeaturesSection from "@/components/features-section";
import CtaSection from "@/components/cta-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CtaSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
