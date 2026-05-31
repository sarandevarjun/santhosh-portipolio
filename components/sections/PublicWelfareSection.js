"use client";

import { motion } from "framer-motion";
import { welfareActivities as defaultActivities } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const defaultSection = {
  eyebrow: "மக்கள் நல பணிகள்",
  title: "பொது நல செயல்பாடுகள்",
  description: "மருத்துவம், கல்வி, கிராம வளர்ச்சி — மக்களின் தேவைக்கு ஏற்ப நேரடிச் சேவை.",
};

export default function PublicWelfareSection({
  activities = defaultActivities,
  section = defaultSection,
}) {
  return (
    <section className="bg-tvk-light px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {activities.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.1}>
              <span className="text-sm font-bold text-tvk-maroon">{item.tag}</span>
              <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              <div className="mt-4 flex justify-between text-sm text-tvk-dark/70">
                <span>{item.raised}</span>
                <span>{item.goal}</span>
              </div>
              <motion.div className="mt-3 h-2 overflow-hidden rounded-full bg-tvk-dark/10">
                <motion.div
                  className="h-full rounded-full bg-tvk-maroon"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-bold text-tvk-maroon hover:underline"
              >
                பங்கேற்க விரும்புகிறீர்களா? →
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
