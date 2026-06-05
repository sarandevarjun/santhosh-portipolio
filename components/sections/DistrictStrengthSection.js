"use client";

import { motion } from "framer-motion";
import { districts as defaultDistricts } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";

const defaultSection = {
  eyebrow: "ஒன்றிய வலிமை",
  title: "மாவட்ட அளவிலான அமைப்பு சக்தி",
  description:
    "தோகைமலை கிழக்கு ஒன்றியம் — கிளைகள், இளைஞர் பிரிவு மற்றும் மக்கள் சேவை வலிமை.",
};

export default function DistrictStrengthSection({
  districts = defaultDistricts,
  section = defaultSection,
}) {
  return (
    <section className="bg-tvk-yellow px-4 py-20 md:px-6">
      <motion.div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <motion.div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            {districts.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-2 flex justify-between text-sm font-bold">
                  <span>{d.name}</span>
                  <span className="text-tvk-maroon">{d.percent}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/60">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-tvk-maroon to-tvk-yellow"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-border flex aspect-video items-center justify-center rounded-2xl bg-tvk-maroon/10"
          >
            <div className="p-8 text-center">
              <p className="text-6xl">🗺️</p>
              <p className="mt-4 text-xl font-bold text-tvk-maroon">
                தோகைமலை · கிழக்கு ஒன்றியம்
              </p>
              <p className="mt-2 text-sm text-tvk-dark/70">
                மாவட்ட வரைபடம் / கிளை வலிமை (விரைவில்)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
