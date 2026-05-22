"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  dark = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`gradient-border rounded-2xl p-6 shadow-xl transition-shadow hover:shadow-2xl ${
        dark
          ? "bg-tvk-dark/90 text-white"
          : "glass-card bg-white/70 text-tvk-dark"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
