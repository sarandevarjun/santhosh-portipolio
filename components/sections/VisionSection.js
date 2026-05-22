"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { visionTabs } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import MaroonTitleBar from "@/components/ui/MaroonTitleBar";
import BannerBackground from "@/components/ui/BannerBackground";

export default function VisionSection() {
  const [active, setActive] = useState(0);

  return (
    <BannerBackground className="px-4 py-20 text-white md:px-6" tint="strong">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          light
          eyebrow="கட்சி பார்வை"
          title="கட்சி நோக்கம் & சித்தாந்தம்"
          description="மக்கள் மைய அரசியல் — வெளிப்படைத்தன்மை, நேர்மை மற்றும் சமூக நீதி."
        />

        <MaroonTitleBar className="mb-6">{visionTabs[active].title}</MaroonTitleBar>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {visionTabs.map((tab, i) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === i
                  ? "bg-tvk-yellow text-tvk-dark"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="text-center text-lg leading-relaxed text-white/85"
          >
            {visionTabs[active].text}
          </motion.p>
        </AnimatePresence>
      </div>
    </BannerBackground>
  );
}
