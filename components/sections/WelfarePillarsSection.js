"use client";

import { welfarePillars as defaultPillars } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const defaultSection = {
  eyebrow: "மக்கள் சேவை",
  title: "கட்சி நோக்கம் & மக்கள் நல திட்டங்கள்",
  description:
    "கிராம வளர்ச்சி முதல் இளைஞர் மேம்பாடு வரை — எட்டு முக்கிய துறைகளில் நாங்கள் செயல்படுகிறோம்.",
};

export default function WelfarePillarsSection({
  pillars = defaultPillars,
  section = defaultSection,
}) {
  return (
    <section id="welfare" className="bg-tvk-yellow px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.05}>
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-tvk-maroon">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tvk-dark/75">
                {item.text}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
