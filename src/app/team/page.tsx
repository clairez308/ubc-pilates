"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  {
    name: "Simren Ahuja",
    role: "Co-President",
    image: "/team/simren.avif",
    description:
      "Meet Simren! The illustrious Junior Pilates Instructor is in her second year of neuroscience and has to have the NYT Games on her phone, since daily wordle is a must. She is most looking forward to being part of such a warm and supportive community and for all the exciting themed classes and collaborations this year! Chatime on campus is home to her regular order of bubble tea. “I hope to see you guys at our classes in the fall!”",
  },
  {
    name: "Vivian Tuan",
    role: "Co-President",
    image: "/team/vivian.avif",
    description: "Meet Vivian, this club’s incredible VP External, whom you may occasionally catch playing Infinite Stairs on her phone. She is in her third year of psychology and cannot wait to begin pilates with the girlies! Vivian is quite the Blue Chip fan, as well. Here is one for the fruit lovers: “My favourite fruits are cherry tomatoes, guava and Granny Smiths!”",
  },
  {
    name: "Romina Barnes",
    role: "Junior Pilates Instructor",
    image: "/team/romina.jpg",
    description: "Meet Romina! This Junior Pilates Instructor is in her second year of neuroscience and is a big fan of Blue Chip's dirty iced matcha latte. If she's not napping, then you can catch her spending time outdoors or cozied up reading a book. She can't wait to get creative with the playlists for the classes and hope to have fun with everyone soon!",
  },
  {
    name: "Giulia Chindea",
    role: "Junior Pilates Instructor",
    image: "/team/giulia.jpg",
    description: "Hi, my name is Giulia! I'm a second year microbio student from Toronto. I love staying active, whether it’s going for a run, doing pilates, or hiking That said, I’m also always down to chill with a good book or binge sitcoms, How I Met Your Mother is a classic! I’m super excited to meet everyone next year and can’t wait for all the fun ahead!",
  },
  {
    name: "Maggie Huang",
    role: "Junior Pilates Instructor",
    image: "/team/maggie.jpg",
    description: "Hey! I’m Maggie — a Junior Pilates instructor and currently in my second year of Kinesiology. I’m super passionate about movement and love sharing that through Pilates. When I’m not teaching or studying, you’ll probably find me dancing, baking something sweet, planning a trip (or going on a spontaneous one), or just enjoying a good adventure. Can’t wait to keep learning, growing, and helping others feel strong and confident through Pilates!",
  },
  {
    name: "Maya Juliette Ga",
    role: "Junior Pilates Instructor",
    image: "/team/maya.avif",
    description: "Hey everyone! My name is Maya and I’m going into my fourth year studying Psychology. This will be my third year with the club, but first year as a Junior Pilates Instructor. I’m so excited to be a part of this wonderful and new team, and excited for all the amazing events they’re planning. I hope to see you at one of my classes this year!!",
  },
  {
    name: "Alina Wang",
    role: "Junior Pilates Instructor",
    image: "/team/alina.jpeg",
    description: "Hi everyone! I’m a 2nd year Junior Pilates Instructor and I hope you enjoy and benefit from it during the school year as much as I do. Looking forward to meeting you in the fall!",
  },
  {
    name: "Adriana Cowan",
    role: "Junior Pilates Instructor",
    image: "/team/adriana.jpeg",
    description: "Hi I’m Adriana and I am very excited to be a Junior Pilates Instructor this year! I have been a student at UBC since 2019, graduating with my BASc in Electrical Engineering in 2023 and I am currently pursuing my MASc in Biomedical Engineering. I love pop music, my current favourite artists include Sabrina Carpenter and Taylor Swift. In the winter you can find me on the slopes and in the summer on the beach. I have always enjoyed Pilates, I am looking forward to fun and energetic classes this term! ",
  },
  {
    name: "Lauren Finlay",
    role: "VP Marketing",
    image: "/team/lauren.avif",
    description: "Maya is a ",
  },
  {
    name: "Sofia Ahmadiyar",
    role: "Communications Director",
    image: "/team/sofia.avif",
    description: "Maya is a ",
  },
  {
    name: "Nanami Kubo",
    role: "Social Media Manager",
    image: "/team/nanami.avif",
    description: "Maya is a ",
  },
  {
    name: "Michelle Yang",
    role: "Content Creator",
    image: "/team/michelle.avif",
    description: "Maya is a ",
  },
  {
    name: "Sanchi Shorewala",
    role: "Content Creator",
    image: "/team/sanchi.avif",
    description: "Maya is a ",
  },
  {
    name: "Vivian Tuan",
    role: "VP External",
    image: "/team/vivian.avif",
    description: "Maya is a ",
  },
  {
    name: "Toko Fukushima",
    role: "AVP - Sponsorship",
    image: "/team/toko.avif",
    description: "Maya is a ",
  },
  {
    name: "Yuly Topp",
    role: "AVP - Collaborations",
    image: "/team/yuly.avif",
    description: "Maya is a ",
  },
  {
    name: "Alessia Rowland",
    role: "VP Internal",
    image: "/team/alessia.avif",
    description: "Maya is a ",
  },
  {
    name: "Jiya Binning",
    role: "AVP - Internal",
    image: "/team/jiya.avif",
    description: "Maya is a ",
  },
  {
    name: "Lillian Xu",
    role: "AVP - Internal",
    image: "/team/lillian.avif",
    description: "Maya is a ",
  },
  {
    name: "Samia Singh",
    role: "VP Finance",
    image: "/team/samia.avif",
    description: "Maya is a ",
  },
  {
    name: "Elaina Fung",
    role: "AVP - Finance",
    image: "/team/elaina.avif",
    description: "Maya is a ",
  },
];

export default function TeamPage() {
  //   const [hoveredCard, setHoveredCard] = useState(null);

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
      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
      </div> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <FlipCard key={idx} member={member} />
        ))}
      </div>
    </div>
  );
}
type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

function FlipCard({ member }: { member: TeamMember }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className={`relative w-full h-60 transition-transform duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-[#cbeafc] rounded-2xl shadow-lg p-4 text-center flex flex-col justify-center items-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-[#ddfcf7] mb-4"
          />
          <h3 className="text-lg font-semibold text-[#224e70]">
            {member.name}
          </h3>
          <p className="text-[#224e70] text-sm">{member.role}</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-denim mb-2">
            {member.name}
          </h3>
          <p className="text-sm text-gray-700">{member.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
