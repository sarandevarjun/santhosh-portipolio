"use client";

import { motion } from "framer-motion";
import { events } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import BannerImagePanel from "@/components/ui/BannerImagePanel";

export default function EventsGallerySection() {
  return (
    <section id="events" className="bg-tvk-yellow px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="நிகழ்வுகள்"
          title="அரசியல் & மக்கள் நல நிகழ்வுகள்"
          description="மாநாடுகள், முகாம்கள், இளைஞர் சந்திப்புகள் — வரவிருக்கும் நிகழ்வுகள்."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <BannerImagePanel className="h-40 w-full">
                <span className="text-5xl">🚩</span>
              </BannerImagePanel>
              <div className="p-6">
                <p className="text-sm font-bold text-tvk-maroon">
                  {event.date} · {event.time}
                </p>
                <p className="text-xs text-tvk-dark/60">{event.place}</p>
                <h3 className="mt-3 text-lg font-bold">{event.title}</h3>
                <p className="mt-2 text-sm text-tvk-dark/75">{event.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-block font-bold text-tvk-maroon"
                >
                  பங்கேற்க + →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
