"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import BannerBackground from "@/components/ui/BannerBackground";

export default function JoinFormSection() {
  return (
    <BannerBackground className="px-4 py-20 text-white md:px-6" tint="strong">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            light
            center={false}
            eyebrow="சேருங்கள்"
            title="மக்கள் நலனில் உங்கள் பங்களிப்பு"
            description="உறுப்பினராகப் பதிவு செய்து, தொகைமலை கிழக்கு ஒன்றியத்தின் வளர்ச்சியில் பங்கேற்குங்கள்."
          />
          <p className="text-2xl font-bold text-tvk-yellow">அழைப்பு: +91 97876 73546</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="முழு பெயர்"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50"
            />
            <input
              type="tel"
              placeholder="தொலைபேசி"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50"
            />
          </div>
          <select className="mt-4 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white">
            <option value="">ஊர் / வாரியம் தேர்வு</option>
            <option>தொகைமலை கிழக்கு</option>
            <option>அருகிலுள்ள கிராமம்</option>
          </select>
          <select className="mt-4 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white">
            <option value="">பங்கேற்பு வகை</option>
            <option>உறுப்பினர்</option>
            <option>தன்னார்வலர்</option>
            <option>இளைஞர் பிரிவு</option>
          </select>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            className="mt-6 w-full rounded-full bg-tvk-yellow py-3.5 font-bold text-tvk-dark"
          >
            பதிவு செய்யுங்கள்
          </motion.button>
        </motion.form>
      </div>
    </BannerBackground>
  );
}
