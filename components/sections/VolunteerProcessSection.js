"use client";

import { volunteerSteps as defaultSteps } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import BannerBackground from "@/components/ui/BannerBackground";

const defaultSection = {
  eyebrow: "உறுப்பினர் / தன்னார்வலர்",
  title: "எப்படி உறுப்பினராக சேர்வது?",
  description: "மூன்று எளிய படிகளில் நீங்களும் மக்கள் சேவையில் பங்கேற்கலாம்.",
};

export default function VolunteerProcessSection({
  steps = defaultSteps,
  section = defaultSection,
}) {
  return (
    <BannerBackground className="px-4 py-20 text-white md:px-6" tint="strong">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <GlassCard key={step.step} delay={i * 0.1} dark>
              <span className="text-4xl font-black text-tvk-yellow">{step.step}</span>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/75">{step.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </BannerBackground>
  );
}
