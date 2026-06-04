"use client";
import { motion } from "framer-motion";
import { volunteerSteps as defaultSteps } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";

const defaultSection = {
  eyebrow: "உறுப்பினர் / தன்னார்வலர்",
  title: "எப்படி உறுப்பினராக சேர்வது?",
  description: "மூன்று எளிய படிகளில் நீங்களும் மக்கள் சேவையில் பங்கேற்கலாம்.",
};

const stepColors = ["#990500", "#C8910A", "#16a34a"];

export default function VolunteerProcessSection({
  steps = defaultSteps,
  section = defaultSection,
}) {
  return (
    <section className="px-4 py-20 md:px-6"
      style={{ background: "linear-gradient(135deg, #990500 0%, #7a0400 100%)" }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "rgba(255,221,0,0.1)",
                border: "2px solid rgba(255,221,0,0.4)",
              }}
            >
              {/* Step number */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 font-black text-2xl"
                style={{ background: "#FFDD00", color: "#990500" }}>
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#FFDD00" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                {step.desc}
              </p>
              {/* Connector arrow for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10
                  text-2xl" style={{ color: "#FFDD00" }}>
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
