import { siteImages } from "@/data/images";

/**
 * Full-bleed banner image with maroon/dark tint for cinematic sections.
 */
export default function BannerBackground({
  children,
  className = "",
  tint = "strong",
  id,
}) {
  const tintClasses = {
    strong:
      "bg-gradient-to-br from-tvk-dark/95 via-tvk-maroon/88 to-tvk-dark/92",
    medium:
      "bg-gradient-to-br from-tvk-dark/90 via-tvk-maroon/75 to-tvk-dark/88",
    light:
      "bg-gradient-to-b from-tvk-dark/80 via-tvk-maroon/65 to-tvk-dark/85",
  };

  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteImages.banner})` }}
        aria-hidden
      /> */}
      <div
        className={`absolute inset-0 ${tintClasses[tint] || tintClasses.strong}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,221,0,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
