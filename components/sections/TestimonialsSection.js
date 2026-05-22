"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import BannerBackground from "@/components/ui/BannerBackground";

export default function TestimonialsSection() {
  return (
    <BannerBackground className="px-4 py-20 md:px-6" tint="medium">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow="மக்கள் கருத்து"
          title="மக்கள் சாட்சியம்"
          description="எங்கள் சேவையை அனுபவித்த மக்களின் உண்மையான குரல்கள்."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <GlassCard key={t.name} delay={i * 0.1} dark>
              <p className="text-lg leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tvk-maroon text-lg font-bold text-tvk-yellow">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-bold text-tvk-yellow">{t.name}</p>
                  <p className="text-sm text-white/60">{t.org}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </BannerBackground>
  );
}
