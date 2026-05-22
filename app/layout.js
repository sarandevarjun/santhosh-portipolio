import { Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-tamil",
});

export const metadata = {
  title: "TVK தோகைமலை கிழக்கு ஒன்றியம் | தமிழக வெற்றிக் கழகம்",
  description:
    "TVK தோகைமலை கிழக்கு ஒன்றியம் — மக்களோடு மக்கள் நலனுக்காக. இளைஞர் மேம்பாடு, கிராம வளர்ச்சி, பெண்கள் நலன் மற்றும் பொது சேவை.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ta" className={notoTamil.variable}>
      <body className={`${notoTamil.className} antialiased`}>{children}</body>
    </html>
  );
}
