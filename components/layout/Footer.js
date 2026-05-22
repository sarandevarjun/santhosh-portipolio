import BannerBackground from "@/components/ui/BannerBackground";

export default function Footer() {
  return (
    <BannerBackground className="px-4 py-10 text-center text-white/80 md:px-6" tint="strong">
      <footer className="mx-auto max-w-7xl">
        <img src="/images/logo.png" alt="TVK Logo" className="mx-auto mb-4 h-12 w-auto" />
        <p className="text-lg font-bold text-tvk-yellow">TVK தோகைமலை கிழக்கு ஒன்றியம்</p>
        <p className="mt-2 text-sm">தமிழக வெற்றிக் கழகம் · மக்களோடு மக்கள் நலனுக்காக</p>
        <p className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} TVK Thogaimalai East Union. All rights reserved.
        </p>
      </footer>
    </BannerBackground>
  );
}
