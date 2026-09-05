import PageLayout from "@/components/layout/PageLayout";
import { navLinks } from "@/data/site-content";

export const metadata = {
  title: "தொடர்புக்கு | TVK தோகைமலை கிழக்கு ஒன்றியம்",
};

const contacts = [
  {
    name: "முதலைப்பட்டி M. சந்தோஷ் குமார் B.E",
    role: "தோகைமலை கிழக்கு ஒன்றிய செயலாளர்",
    phone: "+91 97876 73546",
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

const officeInfo = [
  { icon: "📍", label: "முகவரி", value: "தோகைமலை கிழக்கு ஒன்றியம், கரூர் மாவட்டம், தமிழ்நாடு" },
  { icon: "🌐", label: "இணையதளம்", value: "tvk-thogaimalai-east.vercel.app" },
  { icon: "💻", label: "Web CRM", value: "political-crm-delta.vercel.app" },
  { icon: "🏛️", label: "கட்சி", value: "தமிழக வெற்றிக் கழகம் (TVK)" },
];

export default function ContactPage() {
  return (
    <PageLayout
      title="தொடர்புக்கு"
      subtitle="தோகைமலை கிழக்கு ஒன்றியம் — கரூர் மாவட்டம்"
      gradient="blue"
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Contact cards */}
        <div style={{ display: "grid", gap: "20px", marginBottom: "40px" }}>
          {contacts.map((c) => (
            <div
              key={c.name}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderLeft: `4px solid ${c.color}`,
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: `${c.color}22`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  flexShrink: 0,
                }}
              >
                {c.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#1a1a1a", marginBottom: "4px" }}>
                  {c.name}
                </h3>
                <p style={{ fontSize: "12px", color: c.color, fontWeight: 700, marginBottom: "4px" }}>
                  {c.role}
                </p>
                <p style={{ fontSize: "12px", color: "#aaa" }}>📍 {c.area}</p>
              </div>
              <a
                href={`tel:${c.phone}`}
                style={{
                  background: c.color,
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                📞 அழைக்க
              </a>
            </div>
          ))}
        </div>

        {/* Office info */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            marginBottom: "24px",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#990500", marginBottom: "20px" }}>
            🏛️ அலுவலக தகவல்
          </h3>
          {officeInfo.map(({ icon, label, value }) => (
            <div
              key={label}
              style={{
                display: "flex",
                gap: "12px",
                paddingBottom: "12px",
                marginBottom: "12px",
                borderBottom: "1px solid #f5f5f5",
              }}
            >
              <span style={{ fontSize: "20px", width: "28px" }}>{icon}</span>
              <div>
                <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "2px" }}>{label}</p>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join TVK CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, #990500, #5a0200)",
            borderRadius: "20px",
            padding: "32px",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <h3 style={{ color: "#FFDD00", fontSize: "22px", fontWeight: 900, marginBottom: "8px" }}>
            🤝 TVK-வில் இணையுங்கள்
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "20px" }}>
            மக்கள் நலனுக்காக பயணிக்கும் இந்த இயக்கத்தில் நீங்களும் உறுப்பினராகச் சேருங்கள்
          </p>
          <a
            href={`tel:${contacts[0].phone}`}
            style={{
              display: "inline-block",
              background: "#FFDD00",
              color: "#990500",
              padding: "12px 28px",
              borderRadius: "12px",
              fontWeight: 900,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            உறுப்பினராக சேருங்கள் →
          </a>
        </div>

        {/* Quick links */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            marginBottom: "24px",
          }}
        >
          <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#990500", marginBottom: "16px" }}>
            🔗 விரைவு இணைப்புகள்
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  background: "#f8f4ff",
                  color: "#990500",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Slogan */}
        <div style={{ background: "#990500", borderRadius: "16px", padding: "28px", textAlign: "center" }}>
          <p style={{ color: "#FFDD00", fontSize: "20px", fontWeight: 900, fontStyle: "italic", marginBottom: "8px" }}>
            &ldquo;பிறப்பொக்கும் எல்லா உயிர்க்கும்&rdquo;
          </p>
          <p style={{ color: "rgba(255,221,0,0.6)", fontSize: "13px" }}>
            தமிழக வெற்றிக் கழகம் · தோகைமலை கிழக்கு ஒன்றியம்
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
