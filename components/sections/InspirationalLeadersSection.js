"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MaroonTitleBar from "@/components/ui/MaroonTitleBar";

// Inspirational leaders data with Tamil names
const inspirationalLeaders = [
  {
    name: "அம்பேத்கர்",
    nameEn: "Ambedkar",
    role: "சமூக நீதி சிற்பி",
    description: "இந்திய அரசியலமைப்பின் தந்தை",
    image: "/images/our-leaders/ambedkar.webp"
  },
  {
    name: "காமராஜர்",
    nameEn: "Kamarajar",
    role: "கல்வியின் தந்தை",
    description: "தமிழ்நாட்டின் முன்னாள் முதலமைச்சர்",
    image: "/images/our-leaders/kamarajar.jpg"
  },
  {
    name: "பெரியார்",
    nameEn: "Periyar",
    role: "சமத்துவப் போராளி",
    description: "சுயமரியாதை இயக்கத்தின் தந்தை",
    image: "/images/our-leaders/periyar.jpg"
  },
  {
    name: "அஞ்சலை அம்மாள்",
    nameEn: "Anjalai Ammal",
    role: "சுதந்திரப் போராட்ட வீராங்கனை",
    description: "விடுதலைப் போராட்ட தியாகி",
    image: "/images/our-leaders/anjalai-ammal.webp"
  },
  {
    name: "வேலு நாச்சியார்",
    nameEn: "Velu Nachiyar",
    role: "வீரத் தமிழ் அரசி",
    description: "கருப்பு வைகறைப் போராளி",
    image: "/images/our-leaders/velu-nachiyar.webp"
  }
];

export default function InspirationalLeadersSection() {
  return (
    <section className="bg-tvk-yellow px-4 py-16 md:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <MaroonTitleBar className="mb-10 md:mb-12">
          கட்சியின் கொள்கை முன்னோடி தலைவர்கள்
        </MaroonTitleBar>

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
                ease: "easeOut"
              } 
            },
          }}
        >
          {inspirationalLeaders.map((leader, index) => (
            <motion.div
              key={leader.nameEn}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
            >
              <div className="gradient-border overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-tvk-maroon to-tvk-dark">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 20vw, 15vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 2}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tvk-maroon/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <motion.div 
                  className="p-3 text-center md:p-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <p className="text-sm font-bold text-tvk-maroon md:text-base lg:text-lg">
                    {leader.name}
                  </p>
                  <p className="mt-1 text-xs text-tvk-dark/70 md:text-sm">
                    {leader.role}
                  </p>
                  {/* Show English name as subtitle */}
                  <p className="mt-1 text-xs text-tvk-dark/50">
                    {leader.nameEn}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}