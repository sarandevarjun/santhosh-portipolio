"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-tvk-yellow px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="தொடர்புக்கு"
          title="அலுவலகம் & தொடர்பு விவரங்கள்"
          description="உங்கள் கருத்து, பங்கேற்பு அல்லது உதவிக்காக எங்களைத் தொடர்பு கொள்ளுங்கள்."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-tvk-maroon">அலுவலக முகவரி</h3>
            <p className="mt-3 text-tvk-dark/80">{contact.office}</p>
            <p className="mt-4">
              <span className="font-bold">தொலைபேசி:</span>{" "}
              <a href={`tel:${contact.phone}`} className="text-tvk-maroon">
                {contact.phone}
              </a>
            </p>
            <p className="mt-2">
              <span className="font-bold">மின்னஞ்சல்:</span>{" "}
              <a href={`mailto:${contact.email}`} className="text-tvk-maroon">
                {contact.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-tvk-dark/70">{contact.hours}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {contact.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full bg-tvk-maroon px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#7a0400]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="பெயர்"
              className="mb-4 w-full rounded-lg border border-tvk-dark/10 bg-white px-4 py-3"
            />
            <input
              type="email"
              placeholder="மின்னஞ்சல்"
              className="mb-4 w-full rounded-lg border border-tvk-dark/10 bg-white px-4 py-3"
            />
            <textarea
              rows={4}
              placeholder="செய்தி"
              className="mb-4 w-full rounded-lg border border-tvk-dark/10 bg-white px-4 py-3"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-tvk-maroon py-3 font-bold text-white"
            >
              அனுப்பு
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex h-64 items-center justify-center rounded-2xl border-2 border-dashed border-tvk-maroon/40 bg-white/50"
        >
          <p className="text-tvk-dark/60">வரைபடம் — விரைவில் சேர்க்கப்படும்</p>
        </motion.div>
      </div>
    </section>
  );
}
