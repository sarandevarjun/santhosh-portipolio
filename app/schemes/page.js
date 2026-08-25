import { strapiFetch } from "@/lib/strapi/client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const revalidate = 0;

const STATUS_COLORS = {
  pending:    { bg: "#fff8e1", color: "#C8910A", label: "நிலுவையில்" },
  approved:   { bg: "#f0fff4", color: "#16a34a", label: "அங்கீகரிக்கப்பட்டது" },
  processing: { bg: "#eff6ff", color: "#1d4ed8", label: "செயலாக்கத்தில்" },
  rejected:   { bg: "#fff0f0", color: "#990500", label: "நிராகரிக்கப்பட்டது" },
};

const CAT_EMOJIS = {
  education:   "📚", health: "🏥", agriculture: "🌾",
  housing:     "🏠", employment: "💼", women: "👩", other: "📋",
};

async function getSchemes() {
  try {
    const json = await strapiFetch("/schemes?sort=createdAt:desc&pagination[pageSize]=50");
    return (json.data ?? []).map((s) => ({
      id:           s.id,
      schemeName:   s.schemeName || "",
      schemeCategory: s.schemeCategory || "other",
      schemeStatus: s.schemeStatus || "pending",
      description:  s.description || "",
    }));
  } catch (e) { return []; }
}

export default async function SchemesPage() {
  const schemes = await getSchemes();
  const approved = schemes.filter(s => s.schemeStatus === "approved").length;

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "#f8f4ff" }}>
        <div style={{ background: "linear-gradient(135deg, #16a34a, #064e3b)", padding: "48px 24px", textAlign: "center" }}>
          <p style={{ color: "#FFDD00", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", marginBottom: "8px" }}>
            மக்கள் நல திட்டங்கள்
          </p>
          <h1 style={{ color: "white", fontSize: "clamp(28px,5vw,44px)", fontWeight: 900, marginBottom: "12px" }}>
            நல திட்டங்கள்
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}>
            தோகைமலை கிழக்கு ஒன்றியம் — மக்கள் நல சேவைகள்
          </p>
          <div style={{ display: "flex", gap: "32px", justifyContent: "center", marginTop: "20px" }}>
            <div>
              <p style={{ color: "#FFDD00", fontSize: "28px", fontWeight: 900 }}>{schemes.length}</p>
              <p style={{ color: "rgba(255,221,0,0.6)", fontSize: "11px" }}>மொத்த திட்டங்கள்</p>
            </div>
            <div>
              <p style={{ color: "#FFDD00", fontSize: "28px", fontWeight: 900 }}>{approved}</p>
              <p style={{ color: "rgba(255,221,0,0.6)", fontSize: "11px" }}>அங்கீகரிக்கப்பட்டவை</p>
            </div>
          </div>
        </div>
        <div style={{ height: "4px", background: "#FFDD00" }} />

        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 24px" }}>
          {schemes.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <p style={{ fontSize: "48px" }}>🏦</p>
              <p style={{ color: "#aaa", marginTop: "16px" }}>திட்டங்கள் இல்லை</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "20px" }}>
              {schemes.map((s) => {
                const st = STATUS_COLORS[s.schemeStatus] || STATUS_COLORS.pending;
                return (
                  <div key={s.id} style={{
                    background: "white", borderRadius: "16px", overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    borderLeft: `4px solid ${st.color}`
                  }}>
                    <div style={{ padding: "20px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                        <span style={{ fontSize: "28px" }}>{CAT_EMOJIS[s.schemeCategory] || "📋"}</span>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: "15px", fontWeight: 800, color: "#1a1a1a", marginBottom: "4px" }}>
                            {s.schemeName}
                          </h3>
                          <span style={{
                            display: "inline-block", background: st.bg, color: st.color,
                            padding: "2px 10px", borderRadius: "12px",
                            fontSize: "11px", fontWeight: 700
                          }}>
                            {st.label}
                          </span>
                        </div>
                      </div>
                      {s.description && (
                        <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.6 }}>{s.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTA */}
          <div style={{
            marginTop: "48px", background: "#990500", borderRadius: "20px",
            padding: "32px", textAlign: "center"
          }}>
            <h3 style={{ color: "#FFDD00", fontSize: "22px", fontWeight: 900, marginBottom: "8px" }}>
              🏦 திட்டங்களுக்கு விண்ணப்பிக்க
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "20px" }}>
              நல திட்டங்களுக்கு விண்ணப்பிக்க உங்கள் வார்டு ஒருங்கிணைப்பாளரை தொடர்பு கொள்ளுங்கள்
            </p>
            <a href="/contact" style={{
              display: "inline-block", background: "#FFDD00", color: "#990500",
              padding: "12px 28px", borderRadius: "12px", fontWeight: 900,
              fontSize: "15px", textDecoration: "none"
            }}>
              தொடர்பு கொள்ளுங்கள் →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
