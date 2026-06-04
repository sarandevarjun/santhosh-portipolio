import { strapiFetch, isStrapiEnabled } from "@/lib/strapi/client";

const categoryConfig = {
  event:       { emoji: "📅", label: "நிகழ்வு",     bg: "#990500", text: "#fff" },
  rally:       { emoji: "📢", label: "பேரணி",        bg: "#C8910A", text: "#fff" },
  meeting:     { emoji: "🤝", label: "கூட்டம்",      bg: "#1a6b8a", text: "#fff" },
  welfare:     { emoji: "❤️", label: "மக்கள் சேவை", bg: "#16a34a", text: "#fff" },
  achievement: { emoji: "🏆", label: "சாதனை",        bg: "#7c3aed", text: "#fff" },
  news:        { emoji: "📰", label: "செய்தி",        bg: "#374151", text: "#fff" },
};

async function getEvents() {
  if (!isStrapiEnabled()) return [];
  try {
    const json = await strapiFetch("/news-articles?sort=date:desc&pagination[pageSize]=50");
    return (json.data ?? []).map((item) => ({
      id:          item.id,
      title:       item.title       || "",
      excerpt:     item.excerpt     || "",
      date:        item.date        || "",
      category:    item.category    || "event",
      location:    item.location    || "",
      attendees:   item.attendees   || "",
      featured:    item.featured    || false,
      photo1Url:   item.photo1Url   || "",
      photo2Url:   item.photo2Url   || "",
      photo3Url:   item.photo3Url   || "",
      photo4Url:   item.photo4Url   || "",
      photo5Url:   item.photo5Url   || "",
    }));
  } catch (e) {
    console.error("getEvents error:", e);
    return [];
  }
}

export const revalidate = 0;

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen" style={{ background: "#FFFDE7" }}>

      {/* ── HEADER ── */}
      <div style={{ background: "linear-gradient(135deg, #990500, #6B0000)" }} className="px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold tracking-widest mb-3" style={{ color: "#FFDD00" }}>
            தமிழக வெற்றிக் கழகம் · தோகைமலை கிழக்கு ஒன்றியம்
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#FFDD00" }}>
            நிகழ்வுகள் தொகுப்பு
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,221,0,0.8)" }}>
            மக்கள் நல நிகழ்வுகள் · பேரணிகள் · கூட்டங்கள் · சேவை முகாம்கள்
          </p>
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black" style={{ color: "#FFDD00" }}>{events.length}+</div>
              <div className="text-sm" style={{ color: "rgba(255,221,0,0.7)" }}>மொத்த நிகழ்வுகள்</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black" style={{ color: "#FFDD00" }}>
                {events.filter(e => e.featured).length}
              </div>
              <div className="text-sm" style={{ color: "rgba(255,221,0,0.7)" }}>சிறப்பு நிகழ்வுகள்</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black" style={{ color: "#FFDD00" }}>
                {[...new Set(events.map(e => e.category))].length}
              </div>
              <div className="text-sm" style={{ color: "rgba(255,221,0,0.7)" }}>வகைகள்</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STRIPE ── */}
      <div style={{ height: "6px", background: "repeating-linear-gradient(90deg,#FFDD00 0,#FFDD00 30px,#990500 30px,#990500 60px)" }} />

      {/* ── EVENTS GRID ── */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">

        {events.length === 0 ? (
          <div className="text-center py-20 rounded-2xl bg-white shadow-sm">
            <p className="text-5xl mb-4">📅</p>
            <p className="text-xl font-bold" style={{ color: "#990500" }}>விரைவில் நிகழ்வுகள் சேர்க்கப்படும்</p>
            <p className="text-gray-500 mt-2">கட்சி நிகழ்வுகள் இங்கு காட்டப்படும்</p>
          </div>
        ) : (
          <>
            {/* Featured events first */}
            {events.filter(e => e.featured).length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-black mb-6 flex items-center gap-2" style={{ color: "#990500" }}>
                  ⭐ சிறப்பு நிகழ்வுகள்
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {events.filter(e => e.featured).map((event) => (
                    <EventCard key={event.id} event={event} featured />
                  ))}
                </div>
              </div>
            )}

            {/* All events */}
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2" style={{ color: "#990500" }}>
              📋 அனைத்து நிகழ்வுகள்
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── BACK LINK ── */}
      <div className="text-center pb-12">
        <a href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all hover:opacity-90"
          style={{ background: "#990500" }}>
          ← முகப்பு பக்கத்திற்கு திரும்பு
        </a>
      </div>
    </main>
  );
}

function EventCard({ event, featured = false }) {
  const cat     = categoryConfig[event.category] || categoryConfig.event;
  const photos  = [event.photo1Url, event.photo2Url, event.photo3Url, event.photo4Url, event.photo5Url].filter(Boolean);
  const main    = photos[0];
  const isVideo = main?.includes("/video/");

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
      {/* Main photo */}
      <div className="relative overflow-hidden bg-tvk-yellow"
        style={{ aspectRatio: featured ? "16/7" : "16/9" }}>
        {main ? (
          isVideo ? (
            <video src={main} className="w-full h-full object-cover" muted autoPlay loop playsInline />
          ) : (
            <img src={main} alt={event.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-7xl opacity-40">{cat.emoji}</span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shadow"
          style={{ background: cat.bg, color: cat.text }}>
          {cat.emoji} {cat.label}
        </div>

        {/* Photo count */}
        {photos.length > 1 && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-black/60 text-white">
            📷 {photos.length}
          </div>
        )}

        {/* Featured */}
        {event.featured && (
          <div className="absolute top-10 right-3 text-xl drop-shadow">⭐</div>
        )}

        {/* Date */}
        {event.date && (
          <div className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/50 px-2 py-0.5 rounded-full">
            📅 {event.date}
          </div>
        )}

        {/* Location */}
        {event.location && (
          <div className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-black/50 px-2 py-0.5 rounded-full">
            📍 {event.location}
          </div>
        )}
      </div>

      {/* Extra photos strip */}
      {photos.length > 1 && (
        <div className="grid gap-0.5 p-0.5"
          style={{ gridTemplateColumns: `repeat(${Math.min(photos.length - 1, 4)}, 1fr)`, background: "#FFDD00" }}>
          {photos.slice(1, 5).map((p, pi) => (
            <div key={pi} className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
              {p.includes("/video/")
                ? <video src={p} className="w-full h-full object-cover" muted />
                : <img src={p} alt="" className="w-full h-full object-cover object-top" />
              }
              {pi === 3 && photos.length > 5 && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-sm">
                  +{photos.length - 4}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-base leading-snug mb-2 line-clamp-2" style={{ color: "#990500" }}>
          {event.title}
        </h3>
        {event.excerpt && (
          <p className="text-sm text-gray-600 line-clamp-3 mb-3">{event.excerpt}</p>
        )}
        {event.attendees && (
          <div className="flex flex-wrap gap-1.5">
            {event.attendees.split(",").slice(0, 3).map((a, i) => (
              <span key={i} className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ background: "#FFF8E1", color: "#990500", border: "1px solid #FFDD00" }}>
                {a.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
