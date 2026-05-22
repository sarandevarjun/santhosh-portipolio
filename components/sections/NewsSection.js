"use client";

import { motion } from "framer-motion";
import { news } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import MaroonTitleBar from "@/components/ui/MaroonTitleBar";

export default function NewsSection() {
  return (
    <section id="news" className="bg-tvk-light px-4 py-20 md:px-6">
      <motion.div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="செய்திகள்"
          title="சமீபத்திய செயல்பாடுகள் & செய்தி புதுப்பிப்புகள்"
        />

        <div className="space-y-8">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <MaroonTitleBar className="rounded-none">{item.title}</MaroonTitleBar>
              <div className="grid gap-4 p-6 md:grid-cols-[1fr_2fr] md:items-center">
                <div className="flex h-36 items-center justify-center rounded-xl bg-tvk-yellow">
                  <span className="text-4xl">📰</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-tvk-maroon">{item.date}</p>
                  <p className="mt-2 leading-relaxed text-tvk-dark/80">{item.excerpt}</p>
                  <a href="#contact" className="mt-3 inline-block font-bold text-tvk-maroon">
                    மேலும் அறிய →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
