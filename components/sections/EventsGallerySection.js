"use client";
import { motion } from "framer-motion";
import { events as defaultEvents } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";

const defaultSection = {
  eyebrow: "நிகழ்வுகள்",
  title: "அரசியல் & மக்கள் நல நிகழ்வுகள்",
  description: "மாநாடுகள், முகாம்கள், இளைஞர் சந்திப்புகள் — வரவிருக்கும் நிகழ்வுகள்.",
};

const categoryColors = {
  event:   { bg: "#990500", text: "#FFDD00", emoji: "📅" },
  rally:   { bg: "#C8910A", text: "#fff",    emoji: "📢" },
  meeting: { bg: "#1a6b8a", text: "#fff",    emoji: "🤝" },
  default: { bg: "#990500", text: "#FFDD00", emoji: "🚩" },
};

export default function EventsGallerySection({
  events = defaultEvents,
  section = defaultSection,
}) {
  return (
    <section id="events" className="px-4 py-20 md:px-6" style={{ background: "#FFDD00" }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />

        {events.length === 0 ? (
          <div className="text-center py-16 rounded-2xl"
            style={{ background: "white", border: "2px solid #990500" }}>
            <p className="text-5xl mb-3">📅</p>
            <p className="text-xl font-bold" style={{ color: "#990500" }}>
              விரைவில் நிகழ்வுகள் அறிவிக்கப்படும்
            </p>
            <p className="mt-2" style={{ color: "#666" }}>
              கட்சி நிகழ்வுகள் இங்கு காட்டப்படும்
            </p>
            <a href="/events"
              className="inline-block mt-4 px-6 py-2.5 rounded-full font-bold text-white"
              style={{ background: "#990500" }}>
              நிகழ்வுகள் தொகுப்பு →
            </a>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, i) => {
                const cat = categoryColors[event.category] || categoryColors.default;
                const photos = [event.photo1Url, event.photo2Url, event.photo3Url].filter(Boolean);
                const mainPhoto = photos[0];
                const isVideo = mainPhoto?.includes("/video/");

                return (
                  <motion.article
                    key={event.title + i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="overflow-hidden rounded-2xl shadow-xl"
                    style={{ background: "white", border: "2px solid #990500" }}
                  >
                    {/* Photo or banner */}
                    <div className="relative overflow-hidden" style={{ height: "180px" }}>
                      {mainPhoto ? (
                        isVideo ? (
                          <video src={mainPhoto} className="w-full h-full object-cover" muted autoPlay loop playsInline />
                        ) : (
                          <img src={mainPhoto} alt={event.title}
                            className="w-full h-full object-cover object-top" />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #990500, #7a0400)" }}>
                          <span className="text-6xl opacity-40">🚩</span>
                        </div>
                      )}
                      {/* Gradient overlay */}
                      <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(153,5,0,0.7), transparent)" }} />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                        style={{ background: cat.bg, color: cat.text }}>
                        {cat.emoji} {event.category || "நிகழ்வு"}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-sm font-bold" style={{ color: "#990500" }}>
                          {event.date} {event.time ? `· ${event.time}` : ""}
                        </p>
                      </div>
                      {event.place && (
                        <p className="text-xs mb-2 flex items-center gap-1" style={{ color: "#666" }}>
                          <span>📍</span>{event.place}
                        </p>
                      )}
                      <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: "#1a0000" }}>
                        {event.title}
                      </h3>
                      {event.desc && (
                        <p className="text-sm mb-4 line-clamp-2" style={{ color: "#555" }}>
                          {event.desc}
                        </p>
                      )}
                      <a href="/events"
                        className="inline-flex items-center gap-1 font-bold text-sm px-4 py-2 rounded-full text-white transition hover:opacity-90"
                        style={{ background: "#990500" }}>
                        பங்கேற்க →
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* View all button */}
            <div className="text-center mt-10">
              <a href="/events"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-lg shadow-lg transition hover:opacity-90"
                style={{ background: "#990500" }}>
                அனைத்து நிகழ்வுகளும் காண →
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
