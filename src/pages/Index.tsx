import PageTransition from "@/components/PageTransition";
import HeroSection from "@/components/landing/HeroSection";
import ServicesOverview from "@/components/landing/ServicesOverview";
import WhyZavix from "@/components/landing/WhyZavix";
import FeaturedProjects from "@/components/landing/FeaturedProjects";
import Testimonials from "@/components/landing/Testimonials";
import TechStack from "@/components/landing/TechStack";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <PageTransition>
      <HeroSection />
      <ServicesOverview />
      <WhyZavix />
      <FeaturedProjects />
      <Testimonials />
      <TechStack />
      <CTASection />
    </PageTransition>
  );
};

export default Index;
