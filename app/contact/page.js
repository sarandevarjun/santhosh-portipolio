import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "தொடர்புக்கு | TVK தோகைமலை கிழக்கு ஒன்றியம்",
};

export default function ContactPage() {
  const contacts = [
    {
      name: "முதலைப்பட்டி M. சந்தோஷ் குமார் B.E",
      role: "தோகைமலை கிழக்கு ஒன்றிய செயலாளர்",
      phone: "+91 XXXXX XXXXX",
      area: "ஒன்றியம் அலுவலகம்",
      color: "#990500",
      emoji: "👤",
    },
    {
      name: "வார்டு 1 — நெய்தலூர் காலனி",
      role: "வார்டு ஒருங்கிணைப்பாளர்",
      phone: "+91 XXXXX XXXXX",
      area: "நெய்தலூர் காலனி",
      color: "#1d4ed8",
      emoji: "📍",
    },
    {
      name: "வார்டு 2 — பனையூர்",
      role: "வார்டு ஒருங்கிணைப்பாளர்",
      phone: "+91 XXXXX XXXXX",
      area: "பனையூர்",
      color: "#16a34a",
      emoji: "📍",
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "#f8f4ff" }}>
        <div style={{ background: "linear-gradient(135deg, #990500, #5a0200)", padding: "48px 24px", textAlign: "center" }}>
          <p style={{ color: "#FFDD00", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", marginBottom: "8px" }}>
            தொடர்பு கொள்ளுங்கள்
          </p>
          <h1 style={{ color: "white", fontSize: "clamp(28px,5vw,44px)", fontWeight: 900 }}>
            தொடர்புக்கு
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", marginTop: "8px" }}>
            தோகைமலை கிழக்கு ஒன்றியம் — கரூர் மாவட்டம்
          </p>
        </div>
        <div style={{ height: "4px", background: "#FFDD00" }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px" }}>
          {/* Contact cards */}
          <div style={{ display: "grid", gap: "20px", marginBottom: "40px" }}>
            {contacts.map((c) => (
              <div key={c.name} style={{
                background: "white", borderRadius: "16px", padding: "24px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                display: "flex", alignItems: "center", gap: "16px",
                borderLeft: `4px solid ${c.color}`
              }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%",
                  background: `${c.color}22`, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "24px", flexShrink: 0
                }}>
                  {c.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#1a1a1a", marginBottom: "4px" }}>{c.name}</h3>
                  <p style={{ fontSize: "12px", color: c.color, fontWeight: 700, marginBottom: "4px" }}>{c.role}</p>
                  <p style={{ fontSize: "12px", color: "#aaa" }}>📍 {c.area}</p>
                </div>
                <a href={`tel:${c.phone}`} style={{
                  background: c.color, color: "white", padding: "10px 16px",
                  borderRadius: "10px", fontSize: "13px", fontWeight: 700,
                  textDecoration: "none", whiteSpace: "nowrap"
                }}>
                  📞 அழைக்க
                </a>
              </div>
            ))}
          </div>

          {/* Office info */}
          <div style={{
            background: "white", borderRadius: "16px", padding: "28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "24px"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#990500", marginBottom: "20px" }}>
              🏛️ அலுவலக தகவல்
            </h3>
            {[
              { icon: "📍", label: "முகவரி", value: "தோகைமலை கிழக்கு ஒன்றியம், கரூர் மாவட்டம், தமிழ்நாடு" },
              { icon: "🌐", label: "இணையதளம்", value: "tvk-thogaimalai-east.vercel.app" },
              { icon: "💻", label: "Web CRM", value: "political-crm-delta.vercel.app" },
              { icon: "🏛️", label: "கட்சி", value: "தமிழக வெற்றிக் கழகம் (TVK)" },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{
                display: "flex", gap: "12px", paddingBottom: "12px",
                marginBottom: "12px", borderBottom: "1px solid #f5f5f5"
              }}>
                <span style={{ fontSize: "20px", width: "28px" }}>{icon}</span>
                <div>
                  <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "2px" }}>{label}</p>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan */}
          <div style={{
            background: "#990500", borderRadius: "16px", padding: "28px",
            textAlign: "center"
          }}>
            <p style={{ color: "#FFDD00", fontSize: "20px", fontWeight: 900, fontStyle: "italic", marginBottom: "8px" }}>
              "பிறப்பொக்கும் எல்லா உயிர்க்கும்"
            </p>
            <p style={{ color: "rgba(255,221,0,0.6)", fontSize: "13px" }}>
              தமிழக வெற்றிக் கழகம் · தோகைமலை கிழக்கு ஒன்றியம்
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
