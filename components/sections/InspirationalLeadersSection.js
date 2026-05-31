"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MaroonTitleBar from "@/components/ui/MaroonTitleBar";
import { defaultLeaders } from "@/data/leaders";

export default function InspirationalLeadersSection({
  leaders = defaultLeaders,
  sectionTitle = "கட்சியின் கொள்கை முன்னோடி தலைவர்கள்",
}) {
  return (
    <section className="bg-tvk-yellow px-4 py-16 md:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <MaroonTitleBar className="mb-10 md:mb-12">{sectionTitle}</MaroonTitleBar>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
              },
            },
          }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.nameEn || leader.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
            >
              <div className="gradient-border overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-tvk-maroon to-tvk-dark">
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 2}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-4xl font-black text-tvk-yellow">
                      {leader.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-tvk-maroon/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-3 text-center md:p-4">
                  <p className="text-sm font-bold text-tvk-maroon md:text-base lg:text-lg">
                    {leader.name}
                  </p>
                  <p className="mt-1 text-xs text-tvk-dark/70 md:text-sm">
                    {leader.role}
                  </p>
                  {leader.nameEn && (
                    <p className="mt-1 text-xs text-tvk-dark/50">{leader.nameEn}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
