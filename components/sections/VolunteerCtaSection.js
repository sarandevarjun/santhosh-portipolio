"use client";

import { motion } from "framer-motion";

const defaultCta = {
  title: "நீங்களும் மாற்றத்தின் பகுதியாக இருக்க விரும்புகிறீர்களா?",
  description:
    "தன்னார்வலராகச் சேர்ந்து, மக்கள் நல பணிகளில் கைகோர்த்து நிற்குங்கள்.",
  button: "தன்னார்வலராக சேருங்கள்",
};

export default function VolunteerCtaSection({ cta = defaultCta }) {
  return (
    <section className="relative overflow-hidden bg-tvk-maroon px-4 py-24 text-center text-white md:px-6">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #ffdd00 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #ffdd00 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, #ffdd00 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-3xl font-black md:text-4xl">{cta.title}</h2>
        <p className="mt-4 text-lg text-white/85">{cta.description}</p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block rounded-full bg-tvk-yellow px-10 py-4 text-lg font-bold text-tvk-dark shadow-xl"
        >
          {cta.button}
        </motion.a>
      </div>
    </section>
  );
}
