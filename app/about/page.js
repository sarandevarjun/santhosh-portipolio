import PageLayout from "@/components/layout/PageLayout";

export const metadata = {
  title: "எங்களை பற்றி | TVK தோகைமலை கிழக்கு ஒன்றியம்",
};

const leaders = [
  {
    name: "திரு. C. ஜோசப் விஜய்",
    role: "மாண்புமிகு தமிழ்நாடு முதலமைச்சர்",
    subrole: "நிறுவனர் & தலைவர்",
    img: "https://res.cloudinary.com/dhdsiatfx/image/upload/v1786506451/Vijay-CM_x5dxbq.png",
    color: "#990500",
  },
  {
    name: "மாண்புமிகு திரு. N. ஆனந்த்",
    role: "பொதுச்செயலாளர்",
    subrole: "மாண்புமிகு அமைச்சர்",
    img: "https://res.cloudinary.com/dhdsiatfx/image/upload/v1786506448/anand_usfboq.jpg",
    color: "#1d4ed8",
  },
  {
    name: "திரு. G. பாலசுப்ரமணி",
    role: "கரூர் கிழக்கு மாவட்ட செயலாளர்",
    subrole: "மாவட்ட செயலாளர்",
    img: "https://res.cloudinary.com/dhdsiatfx/image/upload/v1786506449/Bala-Anna_kwddz5.jpg",
    color: "#16a34a",
  },
  {
    name: "முதலைப்பட்டி M. சந்தோஷ் குமார் B.E",
    role: "தோகைமலை கிழக்கு ஒன்றிய செயலாளர்",
    subrole: "ஒன்றிய செயலாளர்",
    img: "https://res.cloudinary.com/dhdsiatfx/image/upload/v1786506454/Santhosh-anna-new_ecvj3r.jpg",
    color: "#C8910A",
  },
];

const values = [
  { emoji: "⚖️", title: "சமத்துவம்", desc: "அனைவருக்கும் சம உரிமை" },
  { emoji: "🌾", title: "விவசாயம்", desc: "விவசாயிகள் நலன் பாதுகாப்பு" },
  { emoji: "📚", title: "கல்வி", desc: "கல்வி மேம்பாடு மற்றும் வாய்ப்பு" },
  { emoji: "👩", title: "மகளிர்", desc: "பெண்கள் அதிகாரமயமாக்கல்" },
  { emoji: "🌱", title: "சுற்றுச்சூழல்", desc: "பசுமை தமிழ்நாடு" },
  { emoji: "🏘️", title: "கிராம வளர்ச்சி", desc: "கிராம முன்னேற்றம்" },
];

export default function AboutPage() {
  return (
    <PageLayout
      title="தோகைமலை கிழக்கு ஒன்றியம்"
      subtitle="கரூர் மாவட்டம் — மக்களோடு மக்கள் நலனுக்காக"
      stats={[
        { value: "280+", label: "உறுப்பினர்கள்" },
        { value: "14", label: "பூத்கள்" },
        { value: "2", label: "வார்டுகள்" },
        { value: "42+", label: "சேவை நிகழ்வுகள்" },
      ]}
      gradient="red"
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p
            style={{
              display: "inline-block",
              color: "#990500",
              fontSize: "17px",
              fontWeight: 700,
              fontStyle: "italic",
              borderTop: "1px solid rgba(153,5,0,0.2)",
              borderBottom: "1px solid rgba(153,5,0,0.2)",
              padding: "8px 24px",
            }}
          >
            &ldquo;பிறப்பொக்கும் எல்லா உயிர்க்கும்&rdquo;
          </p>
        </div>

        {/* About text */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ color: "#990500", fontSize: "24px", fontWeight: 900, marginBottom: "16px" }}>
            🏛️ எங்களை பற்றி
          </h2>
          <p style={{ color: "#444", lineHeight: 1.9, fontSize: "15px", marginBottom: "16px" }}>
            தமிழக வெற்றிக் கழகத்தின் (TVK) ஒரு முக்கிய அங்கமான தோகைமலை கிழக்கு ஒன்றியம், கரூர்
            மாவட்டத்தில் மக்களின் வாழ்வில் நேரடி மாற்றத்தை ஏற்படுத்தும் நோக்கத்துடன் செயல்படுகிறது.
          </p>
          <p style={{ color: "#444", lineHeight: 1.9, fontSize: "15px" }}>
            எங்கள் ஒன்றியம் இளைஞர்களின் சக்தியை நம்புகிறது. கிராமங்களின் வளர்ச்சியை மையமாகக் கொண்டு,
            பெண்கள் நலன், கல்வி, தொழில்வாய்ப்பு மற்றும் தமிழ் பண்பாட்டைப் பாதுகாக்கும் பணிகளில்
            தொடர்ந்து செயல்படுகிறோம்.
          </p>
        </div>

        {/* Leaders */}
        <h2
          style={{
            color: "#990500",
            fontSize: "24px",
            fontWeight: 900,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          👑 நமது தலைவர்கள்
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          {leaders.map((l) => (
            <div
              key={l.name}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                borderTop: `4px solid ${l.color}`,
              }}
            >
              <img
                src={l.img}
                alt={l.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `3px solid ${l.color}`,
                  marginBottom: "12px",
                }}
              />
              <p style={{ fontSize: "14px", fontWeight: 800, color: "#1a1a1a", marginBottom: "4px" }}>
                {l.name}
              </p>
              <p style={{ fontSize: "11px", color: l.color, fontWeight: 700, marginBottom: "2px" }}>
                {l.role}
              </p>
              <p style={{ fontSize: "10px", color: "#aaa" }}>{l.subrole}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <h2
          style={{
            color: "#990500",
            fontSize: "24px",
            fontWeight: 900,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          🎯 எங்கள் கொள்கைகள்
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <p style={{ fontSize: "36px", marginBottom: "8px" }}>{v.emoji}</p>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#990500", marginBottom: "4px" }}>
                {v.title}
              </p>
              <p style={{ fontSize: "11px", color: "#aaa" }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, #990500, #5a0200)",
            borderRadius: "20px",
            padding: "36px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#FFDD00", fontSize: "22px", fontWeight: 900, marginBottom: "8px" }}>
            🤝 எங்களுடன் இணையுங்கள்
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "20px" }}>
            மக்கள் நலனுக்காக பயணிக்கும் இந்த இயக்கத்தில் நீங்களும் ஒரு பங்காளராகுங்கள்
          </p>
          <a
            href="/contact"
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
            தொடர்பு கொள்ளுங்கள் →
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
