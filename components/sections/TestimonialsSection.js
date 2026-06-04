"use client";
import { testimonials as defaultTestimonials } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const defaultSection = {
  eyebrow: "மக்கள் கருத்து",
  title: "மக்கள் சாட்சியம்",
  description: "எங்கள் சேவையை அனுபவித்த மக்களின் உண்மையான குரல்கள்.",
};

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
  section = defaultSection,
}) {
  return (
    <section id="testimonials" className="px-4 py-20 md:px-6"
      style={{ background: "linear-gradient(135deg, #990500 0%, #7a0400 50%, #990500 100%)" }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,221,0,0.08)",
                border: "1px solid rgba(255,221,0,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Quote mark */}
              <div className="text-4xl font-black mb-3" style={{ color: "#FFDD00", opacity: 0.6 }}>"</div>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.9)" }}>
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4"
                style={{ borderTop: "1px solid rgba(255,221,0,0.2)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                  style={{ background: "#FFDD00", color: "#990500" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold" style={{ color: "#FFDD00" }}>{t.name}</p>
                  <p className="text-sm" style={{ color: "rgba(255,221,0,0.6)" }}>{t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
