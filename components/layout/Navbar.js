"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site-content";

const LOGO_URL =
  "https://res.cloudinary.com/dhdsiatfx/image/upload/v1786763667/TVK-whatsapp-profile_lqrm3i.png";

function isLinkActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        solid ? "shadow-lg backdrop-blur-xl" : "bg-transparent"
      }`}
      style={
        solid
          ? { background: "linear-gradient(135deg, rgba(90,2,0,0.96), rgba(17,17,17,0.96))" }
          : undefined
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src={LOGO_URL}
            alt="TVK Logo"
            className="h-11 w-11 rounded-full object-cover md:h-12 md:w-12"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-extrabold text-white">TVK</span>
            <span className="text-[11px] text-white/70">தோகைமலை கிழக்கு ஒன்றியம்</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "text-tvk-yellow"
                    : "text-white/90 hover:bg-white/10 hover:text-tvk-yellow"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-tvk-yellow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-tvk-maroon px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#7a0400] md:inline-block"
        >
          உறுப்பினராக சேருங்கள்
        </Link>

        <button
          type="button"
          className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="மெனு"
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 rounded-full bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 rounded-full bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 rounded-full bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-tvk-dark/98 px-4 py-2 lg:hidden"
          >
            {navLinks.map((link, i) => {
              const active = isLinkActive(pathname, link.href);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium ${
                      active ? "text-tvk-yellow" : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {active && <span className="h-2 w-2 rounded-full bg-tvk-yellow" />}
                  </Link>
                </motion.div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-tvk-maroon px-5 py-3 text-center text-sm font-bold text-white"
            >
              உறுப்பினராக சேருங்கள்
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
