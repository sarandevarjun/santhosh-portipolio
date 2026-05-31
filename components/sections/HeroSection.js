"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero as defaultHero } from "@/data/site-content";
import { siteImages } from "@/data/images";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import BannerBackground from "@/components/ui/BannerBackground";

export default function HeroSection({ hero: heroContent }) {
  const hero = heroContent ?? defaultHero;

  return (
    <BannerBackground
      id="home"
      className="min-h-screen pt-24 text-white"
      tint="medium"
    >
      <ParticlesBackground />
      <motion.div
        className="hero-glow flag-overlay pointer-events-none absolute inset-0"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 pb-20 pt-8 md:flex-row md:items-center md:gap-12 md:px-6 md:pt-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.p
            className="mb-4 inline-block rounded-full border border-tvk-yellow/40 bg-tvk-maroon/40 px-4 py-1.5 text-sm font-semibold text-tvk-yellow backdrop-blur-sm"
            animate={{
              boxShadow: [
                "0 0 0px #ffdd00",
                "0 0 24px #ffdd0044",
                "0 0 0px #ffdd00",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            {hero.slogan}
          </motion.p>

          <h1 className="text-3xl font-black leading-tight text-tvk-yellow drop-shadow-lg md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-tvk-maroon px-8 py-3.5 font-bold text-white shadow-[0_0_30px_rgba(153,5,0,0.5)]"
            >
              {hero.primaryCta}
            </motion.a>
            <motion.a
              href="#welfare"
              whileHover={{ scale: 1.05 }}
              className="rounded-full border-2 border-tvk-yellow bg-black/20 px-8 py-3.5 font-bold text-tvk-yellow backdrop-blur-sm"
            >
              {hero.secondaryCta}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-full max-w-md flex-1 md:max-w-lg"
        >
          <div className="gradient-border overflow-hidden rounded-3xl bg-white/5 p-2 shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-2xl bg-tvk-dark/40">
              <Image
                src={siteImages.cm}
                alt="தமிழக வெற்றிக் கழகம் தலைமை"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tvk-dark/90 via-tvk-maroon/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-lg font-bold text-white drop-shadow-md">
                தமிழக முதலமைச்சர்
                </p>
                <p className="text-sm text-tvk-yellow">தமிழக வெற்றிக் கழகம்</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator flex flex-col items-center pb-8 text-tvk-yellow"
        aria-label="கீழே உருட்டு"
      >
        <span className="mb-2 text-xs uppercase tracking-widest">உருட்டவும்</span>
        <span className="h-10 w-6 rounded-full border-2 border-tvk-yellow/60 p-1">
          <motion.span
            className="mx-auto block h-2 w-1 rounded-full bg-tvk-yellow"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </span>
      </motion.a>
    </BannerBackground>
  );
}
