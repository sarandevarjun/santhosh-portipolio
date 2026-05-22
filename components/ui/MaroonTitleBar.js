"use client";

import { motion } from "framer-motion";

export default function MaroonTitleBar({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`maroon-title-bar rounded-lg px-6 py-4 text-center ${className}`}
    >
      <h3 className="text-lg font-bold text-white md:text-2xl">{children}</h3>
    </motion.div>
  );
}
