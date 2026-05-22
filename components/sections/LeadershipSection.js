"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

// Leadership data with images and correct designations
const leadershipData = [
  {
    name: "திரு. புஸ்ஸி என். ஆனந்த்",
    nameEn: "Bussy N. Anand",
    role: "பொதுச் செயலாளர்",
    designation: "General Secretary",
    ministerRole: "கிராமப்புற வளர்ச்சி மற்றும் நீர்வளத்துறை அமைச்சர்",
    ministerRoleEn: "Minister for Rural Development and Water Resources",
    fullTitle: "மதிப்பிற்க்குரிய பொதுச்செயலாளர், MLA",
    description: "தமிழக வெற்றிக் கழகத்தின் பொதுச் செயலாளராகவும், கிராமப்புற வளர்ச்சி மற்றும் நீர்வளத்துறை அமைச்சராகவும் பணியாற்றுகிறார். சட்டமன்ற உறுப்பினரான இவர், கட்சியின் அனைத்து உறுப்பினர்களையும் ஒருங்கிணைக்கும் திறமையான ஒருங்கிணைப்பாளராக விளங்குகிறார்.",
    description2: "",
    image: "/images/union-leaders/bussy-anand.jpeg",
    isGeneralSecretary: true
  },
  {
    name: "திரு. ஜி. பாலசுப்பிரமணி",
    nameEn: "G. Balasubramani",
    role: "கரூர் கிழக்கு மாவட்ட செயலாளர்",
    designation: "Karur East District Party Secretary",
    description: "தமிழக வெற்றிக் கழகத்தின் கரூர் கிழக்கு மாவட்டத்தின் முதன்மை தலைவர். மக்கள் நலன், சமூக நீதி மற்றும் கட்சி வளர்ச்சியில் அயராது உழைக்கும் தளபதி.",
    image: "/images/union-leaders/Bala-karur-east-union-leader.jpeg",
    isGeneralSecretary: false
  },
  {
    name: "திரு. சந்தோஷ் குமார்",
    nameEn: "Santhosh Kumar",
    role: "தொகைமலை கிழக்கு ஒன்றிய தலைமை பொறுப்பாளர்",
    designation: "Thogaimalai East Union Chief Coordinator",
    description: "இளைஞர் முன்னெடுப்பு மற்றும் கிராம வளர்ச்சியில் முன்னணியில் செயல்படும் பொறுப்பாளர்.",
    image: "/images/union-leaders/santhosh-thogaimalai-east-union-leader.jpeg",
    isGeneralSecretary: false
  }
];

export default function LeadershipSection() {
  return (
    <section className="bg-tvk-light px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="தலைமை"
          title="ஒன்றிய தலைமை & பொறுப்பாளர்கள்"
          description="மதிப்பிற்க்குரிய பொதுச்செயலாளர் மற்றும் கிராமப்புற வளர்ச்சி & நீர்வளத்துறை அமைச்சர் தலைமையில், மக்கள் நலனில் அர்ப்பணிப்புடன் செயல்படும் தலைமைக் குழு."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {leadershipData.map((leader, i) => (
            <motion.div
              key={leader.nameEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group overflow-hidden rounded-2xl bg-white text-center shadow-xl transition-all duration-300 hover:shadow-2xl ${
                leader.isGeneralSecretary ? "ring-2 ring-tvk-maroon/30" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-tvk-maroon to-tvk-dark">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={i === 0}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-tvk-dark/80 via-tvk-dark/20 to-transparent" />
                
                {/* General Secretary & Minister Badge */}
                {leader.isGeneralSecretary && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-tvk-maroon to-tvk-dark text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    ⭐ பொதுச் செயலாளர்
                  </div>
                )}
                
                {/* Minister Badge for Anand */}
                {leader.isGeneralSecretary && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-lg">
                    🏛️ அமைச்சர்
                  </div>
                )}
                
                {/* Designation Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tvk-maroon/95 to-transparent p-3 pb-4 text-center backdrop-blur-sm">
                  <p className="text-xs font-semibold text-white/90">
                    {leader.isGeneralSecretary ? leader.fullTitle : leader.designation}
                  </p>
                  {leader.isGeneralSecretary && (
                    <p className="text-[10px] font-medium text-white/70 mt-0.5">
                      {leader.ministerRole}
                    </p>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-tvk-maroon">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-tvk-dark/70">{leader.role}</p>
                
                {/* Minister Role Display */}
                {leader.isGeneralSecretary && (
                  <div className="mt-2 inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-[10px] font-semibold">
                    {leader.ministerRole}
                  </div>
                )}
                
                {/* Description */}
                <p className="mt-3 text-xs text-tvk-dark/50 leading-relaxed">
                  {leader.description}
                </p>
                
                {/* Second description for General Secretary */}
                {leader.isGeneralSecretary && leader.description2 && (
                  <p className="mt-2 text-xs text-tvk-dark/50 leading-relaxed">
                    {leader.description2}
                  </p>
                )}
                
                {/* Decorative line */}
                <div className="mx-auto mt-4 h-0.5 w-12 bg-tvk-maroon/30 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}