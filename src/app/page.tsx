"use client";
import dynamic from 'next/dynamic';

// Dynamically import components
const HeroSection = dynamic(() => import("./components/Landing Page/hero"), {
  ssr: false
});
const Features = dynamic(() => import("./components/Landing Page/feature"), {
  ssr: false
}); 
const HowItWorks = dynamic(() => import("./components/Landing Page/work"), {
  ssr: false
});
const RoleToggle = dynamic(() => import("./components/Landing Page/toggle"), {
  ssr: false
});
const InteractiveDemo = dynamic(() => import("./components/Landing Page/video"), {
  ssr: false
});
const MissionSection = dynamic(() => import("./components/Landing Page/MissionSection"), {
  ssr: false
});
const FAQSection = dynamic(() => import("./components/Landing Page/Faqs"), {
  ssr: false
});
const CTASection = dynamic(() => import("./components/Landing Page/cta"), {
  ssr: false
});
const Footer = dynamic(() => import("./components/Landing Page/footer"), {
  ssr: false
});

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
