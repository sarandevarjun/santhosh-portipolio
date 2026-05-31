"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { visionTabs as defaultTabs } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import MaroonTitleBar from "@/components/ui/MaroonTitleBar";
import BannerBackground from "@/components/ui/BannerBackground";

const defaultSection = {
  eyebrow: "கட்சி பார்வை",
  title: "கட்சி நோக்கம் & சித்தாந்தம்",
  description: "மக்கள் மைய அரசியல் — வெளிப்படைத்தன்மை, நேர்மை மற்றும் சமூக நீதி.",
};

export default function VisionSection({
  tabs = defaultTabs,
  section = defaultSection,
}) {
  const [active, setActive] = useState(0);
  const safeTabs = tabs.length > 0 ? tabs : defaultTabs;

  return (
    <BannerBackground className="px-4 py-20 text-white md:px-6" tint="strong">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          light
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <MaroonTitleBar className="mb-6">{safeTabs[active].title}</MaroonTitleBar>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {safeTabs.map((tab, i) => (
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
            {safeTabs[active].text}
          </motion.p>
        </AnimatePresence>
      </div>
    </BannerBackground>
  );
}
