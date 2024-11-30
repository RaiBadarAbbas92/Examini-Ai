import Image from "next/image";
import dynamic from 'next/dynamic';

// Dynamically import components
const HeroSection = dynamic(() => import("./components/Landing Page/hero"));
const Features = dynamic(() => import("./components/Landing Page/feature")); 
const HowItWorks = dynamic(() => import("./components/Landing Page/work"));
const RoleToggle = dynamic(() => import("./components/Landing Page/toggle"));
const InteractiveDemo = dynamic(() => import("./components/Landing Page/video"));
const MissionSection = dynamic(() => import("./components/Landing Page/MissionSection"));
const FAQSection = dynamic(() => import("./components/Landing Page/Faqs"));
const CTASection = dynamic(() => import("./components/Landing Page/cta"));
const Footer = dynamic(() => import("./components/Landing Page/footer"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <MissionSection />
      <HowItWorks />
      <RoleToggle />
      <InteractiveDemo />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
