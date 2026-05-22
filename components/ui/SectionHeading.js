"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold tracking-wide ${
            light
              ? "bg-white/15 text-tvk-yellow"
              : "bg-tvk-maroon/10 text-tvk-maroon"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl font-bold leading-tight md:text-4xl ${
          light ? "text-white" : "text-tvk-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-3xl text-base leading-relaxed md:text-lg ${
            light ? "text-white/80" : "text-tvk-dark/75"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
