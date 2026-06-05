"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const PHONE = "+91 97876 73546";

const WARDS = [
  { id: 12, name: "குளித்தலை நகர் வார்டு 1" },
  { id: 14, name: "தோகைமலை சாலை வார்டு" },
  { id: 16, name: "குளித்தலை நகர் வார்டு 2" },
  { id: 18, name: "அய்யூர் கிராம வார்டு" },
  { id: 20, name: "நொச்சியம் வார்டு" },
];

const defaultSection = {
  eyebrow: "சேருங்கள்",
  title: "மக்கள் நலனில் உங்கள் பங்களிப்பு",
  description: "உறுப்பினராகப் பதிவு செய்து, தோகைமலை கிழக்கு ஒன்றியத்தின் வளர்ச்சியில் பங்கேற்குங்கள்.",
};

export default function JoinFormSection({ section = defaultSection }) {
  const [form, setForm] = useState({
    name: "", phone: "", age: "", profession: "",
    areaName: "", wardId: "", interest: "",
  });
  const [status,  setStatus]  = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("error");
      setMessage("பெயர் மற்றும் தொலைபேசி எண் கட்டாயம் தேவை.");
      return;
    }
    if (form.phone.length < 10) {
      setStatus("error");
      setMessage("சரியான தொலைபேசி எண் உள்ளிடவும்.");
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
          age:                Number(form.age) || null,
          profession:         form.profession.trim() || null,
          areaName:           form.areaName.trim() || null,
          wardId:             form.wardId ? Number(form.wardId) : null,
          partyPosition:      "party_worker",
          role:               "worker",
          approvalStatus:     "pending",
          registrationSource: "portal",
          joinDate:           new Date().toISOString().split("T")[0],
          notes:              form.interest ? `ஆர்வம்: ${form.interest}` : null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "பதிவு தோல்வியடைந்தது");
      setStatus("success");
      setMessage("உங்கள் பதிவு வெற்றிகரமாக சமர்பிக்கப்பட்டது! நிர்வாகி விரைவில் தொடர்பு கொள்வார்.");
      setForm({ name: "", phone: "", age: "", profession: "", areaName: "", wardId: "", interest: "" });
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "பதிவு தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்.");
    }
  };

  return (
    <section className="px-4 py-20 md:px-6" style={{ background: "#FFF8E1" }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left info */}
          <div>
            <SectionHeading
              center={false}
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
            />
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 mt-5 text-2xl font-black"
              style={{ color: "#990500" }}>
              📞 {PHONE}
            </a>
            <div className="mt-6 space-y-3">
              {[
                { icon: "✅", text: "இலவச உறுப்பினர் பதிவு" },
                { icon: "📱", text: "பதிவு செய்த பிறகு நிர்வாகி தொடர்பு கொள்வார்" },
                { icon: "🔒", text: "உங்கள் தகவல்கள் பாதுகாப்பானது" },
                { icon: "🌐", text: "தோகைமலை கிழக்கு ஒன்றியம் · கரூர் மாவட்டம்" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium" style={{ color: "#333" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 md:p-8 space-y-4"
            style={{ background: "white", border: "2px solid #990500" }}
          >
            <h3 className="text-xl font-bold text-center mb-2" style={{ color: "#990500" }}>
              உறுப்பினர் பதிவு படிவம்
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>
                  முழு பெயர் *
                </label>
                <input type="text" name="name" value={form.name}
                  onChange={handleChange} required
                  placeholder="உங்கள் முழு பெயர்"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }} />
              </div>
              <div>
                <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>
                  தொலைபேசி *
                </label>
                <input type="tel" name="phone" value={form.phone}
                  onChange={handleChange} required maxLength={10}
                  placeholder="10 இலக்க எண்"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>வயது</label>
                <input type="number" name="age" value={form.age}
                  onChange={handleChange} min={18} max={100}
                  placeholder="வயது"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }} />
              </div>
              <div>
                <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>தொழில்</label>
                <input type="text" name="profession" value={form.profession}
                  onChange={handleChange}
                  placeholder="விவசாயி / ஆசிரியர்..."
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                  style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }} />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>
                கிராமம் / பகுதி
              </label>
              <input type="text" name="areaName" value={form.areaName}
                onChange={handleChange}
                placeholder="உங்கள் கிராமம் அல்லது பகுதி பெயர்"
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }} />
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>
                வார்டு தேர்வு
              </label>
              <select name="wardId" value={form.wardId} onChange={handleChange}
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }}>
                <option value="">வார்டு தேர்வு செய்யவும்</option>
                {WARDS.map(w => (
                  <option key={w.id} value={w.id}>{w.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>
                பங்கேற்பு ஆர்வம்
              </label>
              <select name="interest" value={form.interest} onChange={handleChange}
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                style={{ border: "2px solid #FFDD00", background: "#FFFDE7" }}>
                <option value="">பங்கேற்பு வகை தேர்வு</option>
                <option value="உறுப்பினர்">உறுப்பினர்</option>
                <option value="தன்னார்வலர்">தன்னார்வலர்</option>
                <option value="இளைஞர் பிரிவு">இளைஞர் பிரிவு</option>
                <option value="மகளிரணி">மகளிரணி</option>
                <option value="பூத் கமிட்டி">பூத் கமிட்டி</option>
              </select>
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
                🎉 {message}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              className="w-full rounded-full py-3.5 font-bold text-white flex items-center justify-center gap-2"
              style={{ background: status === "loading" ? "#C8910A" : "#990500" }}
            >
              {status === "loading" ? "⏳ பதிவு செய்கிறது..." : "✅ பதிவு செய்யுங்கள்"}
            </motion.button>

            <p className="text-xs text-center" style={{ color: "#888" }}>
              பதிவு செய்த பிறகு நிர்வாகி விரைவில் தொடர்பு கொள்வார்
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
