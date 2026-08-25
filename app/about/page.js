import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "எங்களை பற்றி | TVK தோகைமலை கிழக்கு ஒன்றியம்",
};

export default function AboutPage() {
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

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "#f8f4ff" }}>
        {/* Hero */}
        <div style={{
          background: "linear-gradient(135deg, #990500, #5a0200)",
          padding: "60px 24px", textAlign: "center"
        }}>
          <p style={{ color: "#FFDD00", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", marginBottom: "12px" }}>
            தமிழக வெற்றிக் கழகம்
          </p>
          <h1 style={{ color: "white", fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, marginBottom: "16px" }}>
            தோகைமலை கிழக்கு ஒன்றியம்
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
            கரூர் மாவட்டம் — மக்களோடு மக்கள் நலனுக்காக
          </p>
          <div style={{ marginTop: "24px" }}>
            <p style={{
              display: "inline-block", color: "#FFDD00", fontSize: "18px",
              fontWeight: 700, fontStyle: "italic",
              borderTop: "1px solid rgba(255,221,0,0.3)",
              borderBottom: "1px solid rgba(255,221,0,0.3)",
              padding: "8px 24px"
            }}>
              "பிறப்பொக்கும் எல்லா உயிர்க்கும்"
            </p>
          </div>
        </div>
        <div style={{ height: "4px", background: "#FFDD00" }} />

        {/* About section */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px" }}>
          <div style={{
            background: "white", borderRadius: "20px", padding: "32px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "40px"
          }}>
            <h2 style={{ color: "#990500", fontSize: "24px", fontWeight: 900, marginBottom: "16px" }}>
              🏛️ எங்களை பற்றி
            </h2>
            <p style={{ color: "#444", lineHeight: 1.9, fontSize: "15px", marginBottom: "16px" }}>
              தமிழக வெற்றிக் கழகத்தின் (TVK) ஒரு முக்கிய அங்கமான தோகைமலை கிழக்கு ஒன்றியம்,
              கரூர் மாவட்டத்தில் மக்களின் வாழ்வில் நேரடி மாற்றத்தை ஏற்படுத்தும் நோக்கத்துடன் செயல்படுகிறது.
            </p>
            <p style={{ color: "#444", lineHeight: 1.9, fontSize: "15px", marginBottom: "16px" }}>
              எங்கள் ஒன்றியம் இளைஞர்களின் சக்தியை நம்புகிறது. கிராமங்களின் வளர்ச்சியை மையமாகக் கொண்டு,
              பெண்கள் நலன், கல்வி, தொழில்வாய்ப்பு மற்றும் தமிழ் பண்பாட்டைப் பாதுகாக்கும் பணிகளில்
              தொடர்ந்து செயல்படுகிறோம்.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "24px" }}>
              {[
                { n: "280+", l: "உறுப்பினர்கள்" },
                { n: "14",   l: "பூத்கள்" },
                { n: "2",    l: "வார்டுகள்" },
                { n: "42+",  l: "சேவை நிகழ்வுகள்" },
              ].map(({ n, l }) => (
                <div key={l} style={{
                  background: "#fff0f0", borderRadius: "12px",
                  padding: "16px 24px", textAlign: "center", flex: "1", minWidth: "100px"
                }}>
                  <p style={{ fontSize: "28px", fontWeight: 900, color: "#990500" }}>{n}</p>
                  <p style={{ fontSize: "12px", color: "#aaa" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leaders */}
          <h2 style={{ color: "#990500", fontSize: "24px", fontWeight: 900, marginBottom: "24px", textAlign: "center" }}>
            👑 நமது தலைவர்கள்
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            gap: "20px", marginBottom: "48px"
          }}>
            {leaders.map((l) => (
              <div key={l.name} style={{
                background: "white", borderRadius: "16px", padding: "24px",
                textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                borderTop: `4px solid ${l.color}`
              }}>
                <img src={l.img} alt={l.name}
                  style={{ width: "80px", height: "80px", borderRadius: "50%",
                    objectFit: "cover", border: `3px solid ${l.color}`, marginBottom: "12px" }} />
                <p style={{ fontSize: "14px", fontWeight: 800, color: "#1a1a1a", marginBottom: "4px" }}>{l.name}</p>
                <p style={{ fontSize: "11px", color: l.color, fontWeight: 700, marginBottom: "2px" }}>{l.role}</p>
                <p style={{ fontSize: "10px", color: "#aaa" }}>{l.subrole}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <h2 style={{ color: "#990500", fontSize: "24px", fontWeight: 900, marginBottom: "24px", textAlign: "center" }}>
            🎯 எங்கள் கொள்கைகள்
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))",
            gap: "16px", marginBottom: "48px"
          }}>
            {values.map((v) => (
              <div key={v.title} style={{
                background: "white", borderRadius: "12px", padding: "20px",
                textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
              }}>
                <p style={{ fontSize: "36px", marginBottom: "8px" }}>{v.emoji}</p>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#990500", marginBottom: "4px" }}>{v.title}</p>
                <p style={{ fontSize: "11px", color: "#aaa" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
