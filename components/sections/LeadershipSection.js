"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { defaultLeadershipMembers } from "@/data/leadership";
import SectionHeading from "@/components/ui/SectionHeading";

const defaultSection = {
  eyebrow: "தலைமை",
  title: "ஒன்றிய தலைமை & பொறுப்பாளர்கள்",
  description:
    "மதிப்பிற்க்குரிய பொதுச்செயலாளர் மற்றும் கிராமப்புற வளர்ச்சி & நீர்வளத்துறை அமைச்சர் தலைமையில், மக்கள் நலனில் அர்ப்பணிப்புடன் செயல்படும் தலைமைக் குழு.",
};

export default function LeadershipSection({
  members = defaultLeadershipMembers,
  section = defaultSection,
}) {
  return (
    <section className="bg-tvk-light px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((leader, i) => (
            <motion.div
              key={leader.nameEn || leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group overflow-hidden rounded-2xl bg-white text-center shadow-xl transition-all duration-300 hover:shadow-2xl ${
                leader.isGeneralSecretary ? "ring-2 ring-tvk-maroon/30" : ""
              }`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-tvk-maroon to-tvk-dark">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tvk-dark/80 via-tvk-dark/20 to-transparent" />

                {leader.isGeneralSecretary && (
                  <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-tvk-maroon to-tvk-dark px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                    ⭐ பொதுச் செயலாளர்
                  </div>
                )}

                {leader.isGeneralSecretary && (
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 px-3 py-1.5 text-[10px] font-bold text-white shadow-lg">
                    🏛️ அமைச்சர்
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tvk-maroon/95 to-transparent p-3 pb-4 text-center backdrop-blur-sm">
                  <p className="text-xs font-semibold text-white/90">
                    {leader.isGeneralSecretary
                      ? leader.fullTitle
                      : leader.designation}
                  </p>
                  {leader.isGeneralSecretary && leader.ministerRole && (
                    <p className="mt-0.5 text-[10px] font-medium text-white/70">
                      {leader.ministerRole}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-tvk-maroon">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-tvk-dark/70">
                  {leader.role}
                </p>

                {leader.isGeneralSecretary && leader.ministerRole && (
                  <div className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-[10px] font-semibold text-amber-800">
                    {leader.ministerRole}
                  </div>
                )}

                {leader.description && (
                  <p className="mt-3 text-xs leading-relaxed text-tvk-dark/50">
                    {leader.description}
                  </p>
                )}

                <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-tvk-maroon/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
