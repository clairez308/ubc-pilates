"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Maya Juliette Ga",
    role: "Co-President",
    image: "/team/maya.avif",
  },
  {
    name: "Jaden Gunn",
    role: "Co-President",
    image: "/team/jaden.avif",
  },
  {
    name: "Courtney Cheung",
    role: "Senior Pilates Instructor",
    image: "/team/courtney.avif",
  },
  {
    name: "Calista Evangeline",
    role: "Senior Pilates Instructor",
    image: "/team/calista.avif",
  },
  {
    name: "Mauli Sood",
    role: "Junior Pilates Instructor",
    image: "/team/mauli.avif",
  },
  {
    name: "Avishi Gupta",
    role: "Junior Pilates Instructor",
    image: "/team/avishi.avif",
  },
  {
    name: "Annette Wun",
    role: "Junior Pilates Instructor",
    image: "/team/annette.avif",
  },
  {
    name: "Simren Ahuja",
    role: "Junior Pilates Instructor",
    image: "/team/simren.avif",
  },
  {
    name: "Lauren Finlay",
    role: "VP Marketing",
    image: "/team/lauren.avif",
  },
  {
    name: "Sofia Ahmadiyar",
    role: "Communications Director",
    image: "/team/sofia.avif",
  },
  {
    name: "Nanami Kubo",
    role: "Social Media Manager",
    image: "/team/nanami.avif",
  },
  {
    name: "Michelle Yang",
    role: "Content Creator",
    image: "/team/michelle.avif",
  },
  {
    name: "Sanchi Shorewala",
    role: "Content Creator",
    image: "/team/sanchi.avif",
  },
  {
    name: "Vivian Tuan",
    role: "VP External",
    image: "/team/vivian.avif",
  },
  {
    name: "Toko Fukushima",
    role: "AVP - Sponsorship",
    image: "/team/toko.avif",
  },
  {
    name: "Yuly Topp",
    role: "AVP - Collaborations",
    image: "/team/yuly.avif",
  },
  {
    name: "Alessia Rowland",
    role: "VP Internal",
    image: "/team/alessia.avif",
  },
  {
    name: "Jiya Binning",
    role: "AVP - Internal",
    image: "/team/jiya.avif",
  },
  {
    name: "Lillian Xu",
    role: "AVP - Internal",
    image: "/team/lillian.avif",
  },
  {
    name: "Samia Singh",
    role: "VP Finance",
    image: "/team/samia.avif",
  },
  {
    name: "Elaina Fung",
    role: "AVP - Finance",
    image: "/team/elaina.avif",
  },
];

export default function TeamPage() {
  return (
      <div className="max-w-6xl mx-auto py-16 px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-[#224e70] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-[#cbeafc] rounded-2xl shadow-lg p-4 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-[#ddfcf7]"
              />
              <h3 className="text-xl font-semibold text-[#224e70]">
                {member.name}
              </h3>
              <p className="text-[#224e70] text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
  );
}
