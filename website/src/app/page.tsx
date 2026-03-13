import CurvedLoop from "@/components/CurvedLoop";
import ChatBot from "@/components/ChatBot";
import WelcomePing from "@/components/WelcomePing";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickyCallCTA from "@/components/StickyCallCTA";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import TikTokSection from "@/components/TikTokSection";
import SmartResponseSection from "@/components/SmartResponseSection";
import ServiceArea from "@/components/ServiceArea";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <CurvedLoop
          marqueeText="Professional Junk Removal ✦ Free Estimates ✦ Same-Day Service Available ✦ Sandoval Commercial Disposal ✦"
          speed={1.5}
          curveAmount={0}
          direction="left"
          interactive
          banner
        />
      </div>
      <Navbar />
      <main className="pb-28 md:pb-0">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <HowItWorks />
        <WhyChooseUs />
        <ReviewsSection />
        <TikTokSection />
        <SmartResponseSection />
        <ServiceArea />
        <ContactSection />
        <CTASection />
        <Footer />
      <StickyCallCTA />
      </main>
      <ChatBot />
      <WelcomePing />
    </>
  );
}
