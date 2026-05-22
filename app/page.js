import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import HeroSection from "@/components/sections/HeroSection";
import InspirationalLeadersSection from "@/components/sections/InspirationalLeadersSection";
import IntroSection from "@/components/sections/IntroSection";
import WelfarePillarsSection from "@/components/sections/WelfarePillarsSection";
import VisionSection from "@/components/sections/VisionSection";
import DistrictStrengthSection from "@/components/sections/DistrictStrengthSection";
import PublicWelfareSection from "@/components/sections/PublicWelfareSection";
import AchievementsTimelineSection from "@/components/sections/AchievementsTimelineSection";
import VolunteerProcessSection from "@/components/sections/VolunteerProcessSection";
import JoinFormSection from "@/components/sections/JoinFormSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import EventsGallerySection from "@/components/sections/EventsGallerySection";
import MediaStripSection from "@/components/sections/MediaStripSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VolunteerCtaSection from "@/components/sections/VolunteerCtaSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <InspirationalLeadersSection />
        <IntroSection />
        <WelfarePillarsSection />
        <VisionSection />
        <DistrictStrengthSection />
        <PublicWelfareSection />
        <AchievementsTimelineSection />
        <VolunteerProcessSection />
        <JoinFormSection />
        <LeadershipSection />
        <EventsGallerySection />
        <MediaStripSection />
        <TestimonialsSection />
        <VolunteerCtaSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
