import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import DomainGrid from "@/components/home/DomainGrid";
import FeaturedMentors from "@/components/home/FeaturedMentors";
import TrustedCompanies from "@/components/home/TrustedCompanies";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustedCompanies />

        <Stats />

        <DomainGrid />

        <FeaturedMentors />

        <HowItWorks />

        <Testimonials />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}