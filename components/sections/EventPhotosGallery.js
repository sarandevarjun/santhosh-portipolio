"use client";
import { motion } from "framer-motion";

export default function EventPhotosGallery({ news = [], closingTitle = "தமிழக வெற்றிக் கழகம் — மக்களோடு, மக்கள் நலனுக்காக" }) {
  // Collect all photos from all news/events
  const allPhotos = [];
  news.forEach(item => {
    [item.photo1Url, item.photo2Url, item.photo3Url, item.photo4Url, item.photo5Url]
      .filter(Boolean)
      .forEach(url => {
        allPhotos.push({ url, title: item.title, date: item.date, isVideo: url.includes("/video/") });
      });
  });

  if (allPhotos.length === 0) return null;

  return (
    <section className="px-4 py-16 md:px-6" style={{ background: "#FFDD00" }}>
      <div className="mx-auto max-w-7xl">

        {/* Section title */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-3"
            style={{ background: "#990500", color: "#FFDD00" }}>
            📸 நிகழ்வு புகைப்படங்கள்
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#990500" }}>
            நமது செயல்பாடுகள்
          </h2>
          <p className="mt-2" style={{ color: "#5a0000" }}>
            தோகைமலை கிழக்கு ஒன்றியத்தின் நேரடி நிகழ்வு தொகுப்பு
          </p>
        </div>

        {/* Masonry-style photo grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {allPhotos.slice(0, 12).map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid relative overflow-hidden rounded-xl group cursor-pointer"
              style={{ border: "2px solid #990500" }}
            >
              {photo.isVideo ? (
                <video
                  src={photo.url}
                  className="w-full object-cover"
                  muted autoPlay loop playsInline
                />
              ) : (
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                style={{ background: "linear-gradient(transparent, rgba(153,5,0,0.85))" }}>
                <div>
                  <p className="text-xs font-bold line-clamp-2" style={{ color: "#FFDD00" }}>{photo.title}</p>
                  {photo.date && <p className="text-xs" style={{ color: "rgba(255,221,0,0.7)" }}>📅 {photo.date}</p>}
                </div>
              </div>
              {/* Video badge */}
              {photo.isVideo && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "#990500", color: "#FFDD00" }}>
                  🎥
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <a href="/events"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-white text-lg shadow-lg hover:opacity-90 transition"
            style={{ background: "#990500" }}>
            அனைத்து நிகழ்வுகளும் காண →
          </a>
        </div>

        {/* Closing title */}
        <div className="mt-10 py-5 px-6 rounded-2xl text-center font-black text-xl md:text-2xl"
          style={{ background: "#990500", color: "#FFDD00" }}>
          {closingTitle}
        </div>
      </div>
    </section>
  );
}
