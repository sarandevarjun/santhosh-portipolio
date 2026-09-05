import { strapiFetch } from "@/lib/strapi/client";
import PageLayout from "@/components/layout/PageLayout";

export const revalidate = 0;

const CATS = {
  meeting:  { emoji: "🤝", label: "கூட்டம்",      bg: "#1d4ed8" },
  campaign: { emoji: "📢", label: "பிரச்சாரம்",    bg: "#990500" },
  service:  { emoji: "🙏", label: "மக்கள் சேவை",  bg: "#16a34a" },
  rally:    { emoji: "✊", label: "பேரணி",          bg: "#7c3aed" },
  cultural: { emoji: "🎭", label: "கலாச்சாரம்",    bg: "#C8910A" },
  other:    { emoji: "📋", label: "மற்றவை",         bg: "#54595F" },
};

async function getEvents() {
  try {
    const json = await strapiFetch(
      "/party-events?sort=eventDate:desc&pagination[pageSize]=50&publicationState=preview"
    );
    return (json.data ?? []).map((e) => ({
      id:           e.id,
      documentId:   e.documentId,
      title:        e.title || "",
      description:  e.description || "",
      eventDate:    e.eventDate || "",
      location:     e.location || "",
      category:     e.category || "other",
      ward:         e.ward || "",
      uploadedBy:   e.uploadedBy || "",
      photos:       Array.isArray(e.photos) ? e.photos : [],
      coverPhoto:   e.coverPhoto || "",
      attendeeCount:e.attendeeCount || null,
    }));
  } catch (e) {
    console.error("Events fetch error:", e);
    return [];
  }
}

export default async function EventsPage() {
  const events = await getEvents();
  const totalPhotos = events.reduce((sum, e) => sum + (e.photos?.length || 0), 0);

  return (
    <PageLayout
      title="நிகழ்வு புகைப்பட தொகுப்பு"
      subtitle="தோகைமலை கிழக்கு ஒன்றியம் — கட்சி நிகழ்வுகள் & சேவைகள்"
      stats={[
        { value: events.length, label: "நிகழ்வுகள்" },
        { value: totalPhotos, label: "புகைப்படங்கள்" },
      ]}
      gradient="red"
    >
      {events.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <p style={{ fontSize: "48px" }}>📸</p>
          <p style={{ color: "#aaa", marginTop: "16px", fontSize: "16px" }}>நிகழ்வுகள் இல்லை</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {events.map((event) => {
            const cat = CATS[event.category] || CATS.other;
            const cover = event.coverPhoto || event.photos?.[0] || "";
            return (
              <div
                key={event.id}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ position: "relative", height: "220px", background: "#f5f5f5" }}>
                  {cover ? (
                    <img
                      src={cover}
                      alt={event.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `${cat.bg}22`,
                        fontSize: "64px",
                      }}
                    >
                      {cat.emoji}
                    </div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: cat.bg,
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {cat.emoji} {cat.label}
                  </div>
                  {event.photos?.length > 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "11px",
                      }}
                    >
                      📷 {event.photos.length}
                    </div>
                  )}
                </div>

                <div style={{ padding: "16px" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 800,
                      color: "#1a1a1a",
                      marginBottom: "8px",
                      lineHeight: 1.4,
                    }}
                  >
                    {event.title}
                  </h3>
                  <div style={{ display: "flex", gap: "16px", marginBottom: "8px", flexWrap: "wrap" }}>
                    {event.eventDate && (
                      <span style={{ fontSize: "12px", color: "#990500", fontWeight: 600 }}>
                        📅 {event.eventDate}
                      </span>
                    )}
                    {event.location && (
                      <span style={{ fontSize: "12px", color: "#666" }}>📍 {event.location}</span>
                    )}
                    {event.attendeeCount && (
                      <span style={{ fontSize: "12px", color: "#666" }}>👥 {event.attendeeCount}</span>
                    )}
                  </div>
                  {event.ward && (
                    <span
                      style={{
                        display: "inline-block",
                        background: "#eff6ff",
                        color: "#1d4ed8",
                        padding: "3px 10px",
                        borderRadius: "12px",
                        fontSize: "11px",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      📍 {event.ward}
                    </span>
                  )}
                  {event.description && (
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#555",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {event.description}
                    </p>
                  )}

                  {event.photos?.length > 1 && (
                    <div style={{ display: "flex", gap: "6px", marginTop: "12px", overflowX: "auto" }}>
                      {event.photos.slice(0, 5).map((url, i) => (
                        <img
                          key={i}
                          src={url}
                          alt=""
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            flexShrink: 0,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </PageLayout>
  );
}
