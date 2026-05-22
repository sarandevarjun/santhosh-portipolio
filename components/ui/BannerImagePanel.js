import { siteImages } from "@/data/images";

/** Banner image fill for cards / thumbnails with dark tint */
export default function BannerImagePanel({ className = "", children, tint = "dark" }) {
  const overlay =
    tint === "maroon"
      ? "bg-gradient-to-br from-tvk-maroon/85 via-tvk-dark/80 to-tvk-maroon/90"
      : "bg-gradient-to-br from-tvk-dark/80 via-tvk-maroon/70 to-tvk-dark/85";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteImages.banner})` }}
        aria-hidden
      />
      <div className={`absolute inset-0 ${overlay}`} aria-hidden />
      {children && (
        <div className="relative z-10 flex h-full items-center justify-center">{children}</div>
      )}
    </div>
  );
}
