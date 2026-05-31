"use client";

import { stats as defaultStats } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";

const defaultSection = {
  eyebrow: "எங்களை பற்றி",
  title: "TVK தோகைமலை கிழக்கு ஒன்றியம்",
  description:
    "தமிழக வெற்றிக் கழகத்தின் (TVK) ஒரு முக்கிய அங்கமான தோகைமலை கிழக்கு ஒன்றியம், மக்களின் வாழ்வில் நேரடி மாற்றத்தை ஏற்படுத்தும் நோக்கத்துடன் செயல்படுகிறது.",
  cardText:
    "எங்கள் ஒன்றியம் இளைஞர்களின் சக்தியை நம்புகிறது. கிராமங்களின் வளர்ச்சியை மையமாகக் கொண்டு, பெண்கள் நலன், கல்வி, தொழில்வாய்ப்பு மற்றும் தமிழ் பண்பாட்டைப் பாதுகாக்கும் பணிகளில் தொடர்ந்து செயல்படுகிறோம்.",
};

export default function IntroSection({
  stats = defaultStats,
  section = defaultSection,
}) {
  return (
    <section id="about" className="bg-tvk-light px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <GlassCard>
            <p className="text-base leading-relaxed text-tvk-dark/80">
              {section.cardText}
              {" "}
              மக்களோடு இணைந்து, மக்கள் நலனுக்காக — இதுவே எங்கள் அங்கீகாரம்.
            </p>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <GlassCard key={stat.label} delay={i * 0.08} className="text-center">
                <p className="text-3xl font-black text-tvk-maroon md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-tvk-dark/75">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
