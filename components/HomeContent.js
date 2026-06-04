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
import EventPhotosGallery from "@/components/sections/EventPhotosGallery";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VolunteerCtaSection from "@/components/sections/VolunteerCtaSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomeContent({
  hero,
  leaders,
  leadersSectionTitle,
  stats,
  welfarePillars,
  visionTabs,
  districts,
  welfareActivities,
  achievements,
  volunteerSteps,
  leadershipMembers,
  events,
  mediaBlocks,
  testimonials,
  volunteerCta,
  news,
  contact,
  mediaClosingTitle,
  sections,
}) {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection hero={hero} />
        <InspirationalLeadersSection
          leaders={leaders}
          sectionTitle={leadersSectionTitle}
        />
        <IntroSection stats={stats} section={sections.intro} />
        <WelfarePillarsSection
          pillars={welfarePillars}
          section={sections.welfare}
        />
        <VisionSection tabs={visionTabs} section={sections.vision} />
        <DistrictStrengthSection
          districts={districts}
          section={sections.district}
        />
        <PublicWelfareSection
          activities={welfareActivities}
          section={sections.activities}
        />
        <AchievementsTimelineSection
          timeline={achievements}
          section={sections.achievements}
        />
        <VolunteerProcessSection
          steps={volunteerSteps}
          section={sections.volunteer}
        />
        <JoinFormSection section={sections.join} />
        <LeadershipSection
          members={leadershipMembers}
          section={sections.leadership}
        />
        <EventsGallerySection events={events} section={sections.events} />
        <EventPhotosGallery news={news} closingTitle={mediaClosingTitle} />
        <TestimonialsSection
          testimonials={testimonials}
          section={sections.testimonials}
        />
        <VolunteerCtaSection cta={volunteerCta} />
        <NewsSection news={news} section={sections.news} />
        <ContactSection contact={contact} section={sections.contact} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
