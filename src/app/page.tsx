import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { Metrics } from "@/components/sections/Metrics";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Services />
        <Process />
        <WhyUs />
        <TechStack />
        <Testimonials />
        <Metrics />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
