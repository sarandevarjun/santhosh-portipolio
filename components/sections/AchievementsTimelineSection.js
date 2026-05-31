"use client";

import { motion } from "framer-motion";
import { timeline as defaultTimeline } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import MaroonTitleBar from "@/components/ui/MaroonTitleBar";

const defaultSection = {
  eyebrow: "சாதனைகள்",
  title: "ஒன்றிய சாதனைகள் காலவரிசை",
  description: "மக்கள் நலனில் நாங்கள் நிறைவேற்றிய முக்கிய நிகழ்வுகள்.",
};

export default function AchievementsTimelineSection({
  timeline = defaultTimeline,
  section = defaultSection,
}) {
  return (
    <section id="achievements" className="bg-tvk-yellow px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="relative space-y-8 border-l-4 border-tvk-maroon pl-8">
          {timeline.map((item, i) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[42px] top-1 flex h-5 w-5 rounded-full bg-tvk-maroon ring-4 ring-tvk-yellow" />
              <MaroonTitleBar className="mb-3 !py-2">
                {item.year} — {item.title}
              </MaroonTitleBar>
              <p className="text-center text-tvk-dark/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
