import Link from "next/link";
import { navLinks, contact } from "@/data/site-content";

const LOGO_URL =
  "https://res.cloudinary.com/dhdsiatfx/image/upload/v1786763667/TVK-whatsapp-profile_lqrm3i.png";

const leaders = [
  { name: "திரு. C. ஜோசப் விஜய்", role: "நிறுவனர் & தலைவர்" },
  { name: "திரு. N. ஆனந்த்", role: "பொதுச்செயலாளர்" },
  { name: "திரு. G. பாலசுப்ரமணி", role: "கரூர் கிழக்கு மாவட்ட செயலாளர்" },
  { name: "திரு. M. சந்தோஷ் குமார்", role: "தோகைமலை கிழக்கு ஒன்றிய செயலாளர்" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0d0000" }} className="text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={LOGO_URL} alt="TVK Logo" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-base font-extrabold text-tvk-yellow">TVK</p>
                <p className="text-xs text-white/60">தோகைமலை கிழக்கு ஒன்றியம்</p>
              </div>
            </div>
            <p className="text-sm font-medium italic text-tvk-yellow/90">
              &ldquo;பிறப்பொக்கும் எல்லா உயிர்க்கும்&rdquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              தமிழக வெற்றிக் கழகம் · மக்களோடு மக்கள் நலனுக்காக
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-tvk-yellow">
              விரைவு இணைப்புகள்
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 transition hover:text-tvk-yellow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-tvk-yellow">
              தலைவர்கள்
            </h4>
            <ul className="space-y-3 text-sm">
              {leaders.map((l) => (
                <li key={l.name}>
                  <p className="text-white/80">{l.name}</p>
                  <p className="text-xs text-white/45">{l.role}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-tvk-yellow">
              தொடர்புக்கு
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="leading-relaxed">📍 {contact.office}</li>
              <li>
                <a href={`tel:${contact.phone}`} className="transition hover:text-tvk-yellow">
                  📞 {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition hover:text-tvk-yellow">
                  ✉️ {contact.email}
                </a>
              </li>
              <li>🕒 {contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-tvk-yellow/15 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} TVK Thogaimalai East Union. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
