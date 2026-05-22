"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-tvk-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-4 h-16 w-16 rounded-full border-4 border-tvk-yellow border-t-tvk-maroon"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <p className="text-lg font-bold text-tvk-yellow">TVK</p>
          <p className="mt-1 text-sm text-white/70">தோகைமலை கிழக்கு ஒன்றியம்</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
