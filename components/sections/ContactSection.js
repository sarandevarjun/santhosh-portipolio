"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { contact as defaultContact } from "@/data/site-content";
import SectionHeading from "@/components/ui/SectionHeading";

const defaultSection = {
  eyebrow: "தொடர்புக்கு",
  title: "அலுவலகம் & தொடர்பு விவரங்கள்",
  description: "உங்கள் கருத்து, பங்கேற்பு அல்லது உதவிக்காக எங்களைத் தொடர்பு கொள்ளுங்கள்.",
};

export default function ContactSection({
  contact = defaultContact,
  section = defaultSection,
}) {
  const phone = "+91 97876 73546";

  const [form,    setForm]    = useState({ name: "", phone: "", message: "" });
  const [status,  setStatus]  = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus("error");
      setMessage("அனைத்து புலங்களையும் நிரப்பவும்.");
      return;
    }
    try {
      setStatus("loading");
      const res = await fetch("/api/register-member", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:               form.name.trim(),
          phone:              form.phone.trim(),
          notes:              form.message.trim(),
          partyPosition:      "party_worker",
          role:               "worker",
          approvalStatus:     "pending",
          registrationSource: "portal",
          joinDate:           new Date().toISOString().split("T")[0],
        }),
      });
      const data = await res.json();
      if (!res.ok && res.status !== 409) throw new Error(data.error || "தோல்வியடைந்தது");
      setStatus("success");
      setMessage("✅ உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! நிர்வாகி விரைவில் தொடர்பு கொள்வார்.");
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்.");
    }
  };

  return (
    <section id="contact" className="px-4 py-20 md:px-6" style={{ background: "#FFDD00" }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "white", border: "2px solid #990500" }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: "#990500" }}>
              📍 அலுவலக முகவரி
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: "#333" }}>
              {contact.office || "TVK தோகைமலை கிழக்கு ஒன்றிய அலுவலகம், குளித்தலை, கரூர் - 639120"}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#FFF8E1" }}>
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#666" }}>தொலைபேசி</p>
                  <a href={`tel:${phone}`} className="font-bold text-lg" style={{ color: "#990500" }}>
                    {phone}
                  </a>
                </div>
              </div>

              {contact.email && (
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#FFF8E1" }}>
                  <span className="text-xl">✉️</span>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "#666" }}>மின்னஞ்சல்</p>
                    <a href={`mailto:${contact.email}`} className="font-bold" style={{ color: "#990500" }}>
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#FFF8E1" }}>
                <span className="text-xl">🕐</span>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#666" }}>அலுவலக நேரம்</p>
                  <p className="font-medium" style={{ color: "#333" }}>
                    {contact.hours || "திங்கள் - சனி: காலை 9:00 - மாலை 6:00"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            {contact.social?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {contact.social.map((s) => (
                  <a key={s.label} href={s.href}
                    className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ background: "#990500" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 md:p-8 space-y-4"
            style={{ background: "white", border: "2px solid #990500" }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: "#990500" }}>
              💬 செய்தி அனுப்புங்கள்
            </h3>

            <div>
              <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>
                பெயர் *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                placeholder="உங்கள் பெயர்"
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }}
              />
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>
                தொலைபேசி *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                placeholder="10 இலக்க எண்"
                maxLength={10}
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }}
              />
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>
                செய்தி *
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="உங்கள் கருத்து அல்லது கேள்வி..."
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
                style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }}
              />
            </div>

            {status === "error" && (
              <div className="rounded-xl px-4 py-3 text-sm font-medium"
                style={{ background: "#FFF0F0", border: "1px solid #990500", color: "#990500" }}>
                ❌ {message}
              </div>
            )}
            {status === "success" && (
              <div className="rounded-xl px-4 py-3 text-sm font-medium"
                style={{ background: "#F0FFF0", border: "1px solid #16a34a", color: "#15803d" }}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full py-3.5 font-bold text-white transition hover:opacity-90"
              style={{ background: status === "loading" ? "#C8910A" : "#990500" }}
            >
              {status === "loading" ? "அனுப்புகிறது..." : "✅ அனுப்பு"}
            </button>

            <p className="text-xs text-center" style={{ color: "#888" }}>
              உங்கள் தகவல்கள் பாதுகாப்பானது
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
