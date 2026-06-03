"use client";
import { motion } from "framer-motion";
import { news as defaultNews } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";
import MaroonTitleBar from "@/components/ui/MaroonTitleBar";

const defaultSection = {
  eyebrow: "செய்திகள்",
  title: "சமீபத்திய செயல்பாடுகள் & செய்தி புதுப்பிப்புகள்",
};

const categoryConfig = {
  event:       { emoji: "📅", label: "நிகழ்வு",     color: "#990500" },
  rally:       { emoji: "📢", label: "பேரணி",        color: "#C8910A" },
  meeting:     { emoji: "🤝", label: "கூட்டம்",      color: "#1a6b8a" },
  welfare:     { emoji: "❤️", label: "மக்கள் சேவை", color: "#16a34a" },
  achievement: { emoji: "🏆", label: "சாதனை",        color: "#7c3aed" },
  news:        { emoji: "📰", label: "செய்தி",        color: "#374151" },
};

export default function NewsSection({
  news = defaultNews,
  section = defaultSection,
}) {
  return (
    <section id="news" className="bg-tvk-light px-4 py-20 md:px-6">
      <motion.div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => {
            const cat     = categoryConfig[item.category] || categoryConfig.news;
            const photos  = [item.photo1Url, item.photo2Url, item.photo3Url, item.photo4Url, item.photo5Url].filter(Boolean);
            const mainPhoto = photos[0];
            const isVideo   = mainPhoto?.includes("/video/");

            return (
              <motion.article
                key={item.title + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                {/* Photo / Video */}
                <div className="relative overflow-hidden" style={{ height: "200px", background: "#FFF8E1" }}>
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
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        style={{ transitionDuration: "0.4s" }}
                      />
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl">{cat.emoji}</span>
                    </div>
                  )}

                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: cat.color }}
                  >
                    {cat.emoji} {cat.label}
                  </div>

                  {/* Photo count */}
                  {photos.length > 1 && (
                    <div
                      className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-bold text-white"
                      style={{ background: "rgba(0,0,0,0.6)" }}
                    >
                      📷 {photos.length}
                    </div>
                  )}

                  {/* Featured star */}
                  {item.featured && (
                    <div className="absolute bottom-3 right-3 text-xl">⭐</div>
                  )}
                </div>

                {/* Multi-photo grid */}
                {photos.length > 1 && (
                  <div className="grid grid-cols-4 gap-0.5 px-0.5 pb-0.5" style={{ background: "#FFDD00" }}>
                    {photos.slice(1, 4).map((p, pi) => (
                      <div key={pi} className="overflow-hidden" style={{ height: "60px" }}>
                        {p.includes("/video/")
                          ? <video src={p} className="w-full h-full object-cover" muted />
                          : <img src={p} alt="" className="w-full h-full object-cover" />
                        }
                      </div>
                    ))}
                    {photos.length > 4 && (
                      <div
                        className="flex items-center justify-center text-sm font-bold"
                        style={{ height: "60px", background: "#990500", color: "#FFDD00" }}
                      >
                        +{photos.length - 4}
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-base leading-tight mb-2" style={{ color: "#990500" }}>
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs mb-2" style={{ color: "#666" }}>
                    {item.date && <span>📅 {item.date}</span>}
                    {item.location && <span>📍 {item.location}</span>}
                  </div>
                  {item.excerpt && (
                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#444" }}>
                      {item.excerpt}
                    </p>
                  )}
                  {item.attendees && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.attendees.split(",").slice(0, 3).map((a) => (
                        <span
                          key={a}
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: "#FFF8E1", color: "#990500", border: "1px solid #FFDD00" }}
                        >
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
          <div className="text-center py-12 rounded-2xl" style={{ background: "#FFF8E1" }}>
            <p className="text-2xl mb-2">📰</p>
            <p className="font-semibold" style={{ color: "#990500" }}>
              விரைவில் செய்திகள் வெளியிடப்படும்
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
