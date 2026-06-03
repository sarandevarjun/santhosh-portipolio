"use client";
import { motion } from "framer-motion";
import { news as defaultNews } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";

const defaultSection = {
  eyebrow: "செய்திகள்",
  title: "சமீபத்திய செயல்பாடுகள் & செய்தி புதுப்பிப்புகள்",
};

const categoryConfig = {
  event:       { emoji: "📅", label: "நிகழ்வு",     bg: "#990500", text: "#fff" },
  rally:       { emoji: "📢", label: "பேரணி",        bg: "#C8910A", text: "#fff" },
  meeting:     { emoji: "🤝", label: "கூட்டம்",      bg: "#1a6b8a", text: "#fff" },
  welfare:     { emoji: "❤️", label: "மக்கள் சேவை", bg: "#16a34a", text: "#fff" },
  achievement: { emoji: "🏆", label: "சாதனை",        bg: "#7c3aed", text: "#fff" },
  news:        { emoji: "📰", label: "செய்தி",        bg: "#374151", text: "#fff" },
};

export default function NewsSection({
  news = defaultNews,
  section = defaultSection,
}) {
  return (
    <section id="news" className="bg-tvk-light px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => {
            const cat       = categoryConfig[item.category] || categoryConfig.news;
            const photos    = [item.photo1Url, item.photo2Url, item.photo3Url, item.photo4Url, item.photo5Url].filter(Boolean);
            const mainPhoto = photos[0];
            const isVideo   = mainPhoto?.includes("/video/");

            return (
              <motion.article
                key={item.title + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* ── MAIN PHOTO ── */}
                <div className="relative overflow-hidden bg-tvk-yellow"
                  style={{ aspectRatio: "16/9" }}>
                  {mainPhoto ? (
                    isVideo ? (
                      <video
                        src={mainPhoto}
                        className="w-full h-full object-cover"
                        muted autoPlay loop playsInline
                      />
                    ) : (
                      <img
                        src={mainPhoto}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-7xl opacity-50">{cat.emoji}</span>
                    </div>
                  )}

                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category badge — top left */}
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shadow-md"
                    style={{ background: cat.bg, color: cat.text }}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </div>

                  {/* Photo count — top right */}
                  {photos.length > 1 && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-black/60 text-white">
                      <span>📷</span>
                      <span>{photos.length}</span>
                    </div>
                  )}

                  {/* Featured star — bottom right */}
                  {item.featured && (
                    <div className="absolute bottom-3 right-3 text-xl drop-shadow-lg">⭐</div>
                  )}

                  {/* Date — bottom left */}
                  {item.date && (
                    <div className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/50 px-2 py-0.5 rounded-full">
                      📅 {item.date}
                    </div>
                  )}
                </div>

                {/* ── EXTRA PHOTOS STRIP ── */}
                {photos.length > 1 && (
                  <div
                    className="grid gap-0.5 p-0.5"
                    style={{
                      gridTemplateColumns: `repeat(${Math.min(photos.length - 1, 4)}, 1fr)`,
                      background: "#FFDD00",
                    }}
                  >
                    {photos.slice(1, 5).map((p, pi) => (
                      <div key={pi} className="relative overflow-hidden bg-gray-100"
                        style={{ aspectRatio: "1/1" }}>
                        {p.includes("/video/") ? (
                          <video src={p} className="w-full h-full object-cover" muted />
                        ) : (
                          <img src={p} alt="" className="w-full h-full object-cover object-top" />
                        )}
                        {/* +N overlay for 5th+ photos */}
                        {pi === 3 && photos.length > 5 && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-sm">
                            +{photos.length - 4}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* ── CONTENT ── */}
                <div className="p-4">
                  <h3 className="font-bold text-base leading-snug mb-2 line-clamp-2"
                    style={{ color: "#990500" }}>
                    {item.title}
                  </h3>

                  {item.location && (
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <span>📍</span>
                      <span>{item.location}</span>
                    </p>
                  )}

                  {item.excerpt && (
                    <p className="text-sm leading-relaxed text-gray-600 line-clamp-3 mb-3">
                      {item.excerpt}
                    </p>
                  )}

                  {/* Attendee tags */}
                  {item.attendees && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.attendees.split(",").slice(0, 3).map((a, ai) => (
                        <span key={ai}
                          className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                          style={{ background: "#FFF8E1", color: "#990500", border: "1px solid #FFDD00" }}>
                          {a.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {news.length === 0 && (
          <div className="text-center py-16 rounded-2xl" style={{ background: "#FFF8E1" }}>
            <p className="text-4xl mb-3">📰</p>
            <p className="font-semibold text-lg" style={{ color: "#990500" }}>
              விரைவில் செய்திகள் வெளியிடப்படும்
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
