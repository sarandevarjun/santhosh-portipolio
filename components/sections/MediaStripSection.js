"use client";

import { motion } from "framer-motion";
import { mediaBlocks } from "@/data/site-content";
import MaroonTitleBar from "@/components/ui/MaroonTitleBar";
import BannerImagePanel from "@/components/ui/BannerImagePanel";
import Image from "next/image";
import { siteImages } from "@/data/images";

export default function MediaStripSection() {
  return (
    <section className="bg-tvk-yellow px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl space-y-6">
        {mediaBlocks.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-lg sm:flex-row"
          >
            <div className="flex-1 text-center sm:text-left">
              <p className="text-3xl font-black tracking-tight text-tvk-maroon md:text-4xl">
                {block.title}
              </p>
              <p className="mt-1 text-sm text-tvk-dark/70">{block.subtitle}</p>
            </div>
            {i === 0 ? (
              <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:w-48">
                <Image
                  src={siteImages.cm}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                />
                <div className="absolute inset-0 bg-tvk-maroon/40" />
              </div>
            ) : (
              <BannerImagePanel className="h-32 w-full shrink-0 rounded-xl sm:w-48">
                <span className="text-5xl">🎬</span>
              </BannerImagePanel>
            )}
          </motion.div>
        ))}

        <MaroonTitleBar className="mt-10">
          தமிழக வெற்றிக் கழகம் — மக்களோடு, மக்கள் நலனுக்காக
        </MaroonTitleBar>
      </div>
    </section>
  );
}
