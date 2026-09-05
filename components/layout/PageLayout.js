import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const GRADIENTS = {
  red: "linear-gradient(135deg, #990500, #5a0200)",
  green: "linear-gradient(135deg, #16a34a, #064e3b)",
  blue: "linear-gradient(135deg, #1d4ed8, #172554)",
};

export default function PageLayout({
  eyebrow = "தமிழக வெற்றிக் கழகம்",
  title,
  subtitle,
  stats = [],
  gradient = "red",
  children,
}) {
  const background = GRADIENTS[gradient] || GRADIENTS.red;

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px", background: "#f8f4ff" }} className="min-h-screen">
        <div style={{ position: "relative", overflow: "hidden", background, padding: "56px 24px 44px" }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-70px",
              right: "-60px",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              background: "rgba(255,221,0,0.08)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: "-90px",
              left: "-50px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
            }}
          />
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            {eyebrow && (
              <p
                style={{
                  color: "#FFDD00",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "2px",
                  marginBottom: "10px",
                }}
              >
                {eyebrow}
              </p>
            )}
            <h1
              style={{
                color: "white",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 900,
                marginBottom: subtitle ? "12px" : 0,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "15px",
                  maxWidth: "620px",
                  margin: "0 auto",
                }}
              >
                {subtitle}
              </p>
            )}
            {stats.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "32px",
                  justifyContent: "center",
                  marginTop: "24px",
                  flexWrap: "wrap",
                }}
              >
                {stats.map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <p style={{ color: "#FFDD00", fontSize: "28px", fontWeight: 900 }}>{s.value}</p>
                    <p style={{ color: "rgba(255,221,0,0.6)", fontSize: "11px" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ height: "4px", background: "#FFDD00" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
