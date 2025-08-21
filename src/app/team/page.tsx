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
    description:
      "Meet Vivian, this club’s incredible VP External, whom you may occasionally catch playing Infinite Stairs on her phone. She is in her third year of psychology and cannot wait to begin pilates with the girlies! Vivian is quite the Blue Chip fan, as well. Here is one for the fruit lovers: “My favourite fruits are cherry tomatoes, guava and Granny Smiths!”",
  },
  {
    name: "Romina Barnes",
    role: "Junior Pilates Instructor",
    image: "/team/romina.JPG",
    description:
      "Meet Romina! This Junior Pilates Instructor is in her second year of neuroscience and is a big fan of Blue Chip's dirty iced matcha latte. If she's not napping, then you can catch her spending time outdoors or cozied up reading a book. She can't wait to get creative with the playlists for the classes and hope to have fun with everyone soon!",
  },
  {
    name: "Giulia Chindea",
    role: "Junior Pilates Instructor",
    image: "/team/giulia.jpg",
    description:
      "Hi, my name is Giulia! I'm a second year microbio student from Toronto. I love staying active, whether it’s going for a run, doing pilates, or hiking That said, I’m also always down to chill with a good book or binge sitcoms, How I Met Your Mother is a classic! I’m super excited to meet everyone next year and can’t wait for all the fun ahead!",
  },
  {
    name: "Maggie Huang",
    role: "Junior Pilates Instructor",
    image: "/team/maggie.jpg",
    description:
      "Hey! I’m Maggie — a Junior Pilates instructor and currently in my second year of Kinesiology. I’m super passionate about movement and love sharing that through Pilates. When I’m not teaching or studying, you’ll probably find me dancing, baking something sweet, planning a trip (or going on a spontaneous one), or just enjoying a good adventure. Can’t wait for this year!",
  },
  {
    name: "Maya Juliette Ga",
    role: "Junior Pilates Instructor",
    image: "/team/maya.avif",
    description:
      "Hey everyone! My name is Maya and I’m going into my fourth year studying Psychology. This will be my third year with the club, but first year as a Junior Pilates Instructor. I’m so excited to be a part of this wonderful and new team, and excited for all the amazing events they’re planning. I hope to see you at one of my classes this year!!",
  },
  {
    name: "Alina Wang",
    role: "Junior Pilates Instructor",
    image: "/team/alina.jpeg",
    description:
      "Hi everyone! I’m a 2nd year Junior Pilates Instructor and I hope you enjoy and benefit from it during the school year as much as I do. Looking forward to meeting you in the fall!",
  },
  {
    name: "Adriana Cowan",
    role: "Junior Pilates Instructor",
    image: "/team/adriana.JPEG",
    description:
      "Hi I’m Adriana and I am very excited to be a Junior Pilates Instructor this year! I have been a student at UBC since 2019, graduating with my BASc in Electrical Engineering in 2023 and I am currently pursuing my MASc in Biomedical Engineering. I love pop music, my current favourite artists include Sabrina Carpenter and Taylor Swift. I have always enjoyed Pilates, I am looking forward to classes this term! ",
  },
  {
    name: "Kira Gaebel",
    role: "VP Marketing",
    image: "/team/kira.avif",
    description: "Kira is a ",
  },
  {
    name: "Annie Wu",
    role: "Visual Media Director",
    image: "/team/annie.avif",
    description: "Annie is a ",
  },
  {
    name: "Sanchi Shorewala",
    role: "Visual Media Director",
    image: "/team/sanchi.avif",
    description: "Sanchi is a ",
  },
  {
    name: "Jaden Gunn",
    role: "Social Media Director",
    image: "/team/jaden.avif",
    description: "Jaden is a ",
  },
  {
    name: "Nanami Kubo",
    role: "Social Media Director",
    image: "/team/nanami.avif",
    description: "Nanami is a ",
  },
  {
    name: "Sofia Ahmadiyar",
    role: "Newsletter Director",
    image: "/team/sofia.avif",
    description: "Sofia is a ",
  },
  {
    name: "Lucas Chan",
    role: "Videographer + Video Editor",
    image: "/team/lucas.avif",
    description: "Lucas is a ",
  },
  {
    name: "Taylor Chow",
    role: "Photographer",
    image: "/team/taylor.avif",
    description: "Taylor is a ",
  },
  {
    name: "Claire Zhang",
    role: "Website Director",
    image: "/team/claire.jpg",
    description: "Claire is a second-year CS student at UBC. In her free time she loves moving with pilates and yoga, reading, and attending/organizing hackathons!! Looking forward to a great year 😎",
  },
  {
    name: "Yuly Topp",
    role: "VP External",
    image: "/team/yuly.avif",
    description: "Yuly is a ",
  },
  {
    name: "Armita Bagheri",
    role: "AVP External - Sponsorship",
    image: "/team/armita.avif",
    description: "Maya is a ",
  },
  {
    name: "Toko Fukushima",
    role: "AVP External - Sponsorship",
    image: "/team/toko.avif",
    description: "Toko is a ",
  },
  {
    name: "Jia Mehra",
    role: "AVP External - Collaborations",
    image: "/team/jia.avif",
    description: "Jia is a ",
  },
  {
    name: "Tia Dandona",
    role: "AVP External - Collaborations",
    image: "/team/tia.avif",
    description: "Tia is a ",
  },
  {
    name: "Fatima Mudassar",
    role: "VP Internal",
    image: "/team/fatima.avif",
    description: "Fatima is a ",
  },
  {
    name: "Grace Kim",
    role: "AVP Internal",
    image: "/team/grace.avif",
    description: "Grace is a ",
  },
  {
    name: "Pia",
    role: "AVP Internal",
    image: "/team/pia.avif",
    description: "Pia is a ",
  },
  {
    name: "Lyle Lo",
    role: "VP Finance",
    image: "/team/lyle.avif",
    description: "Lyle is a ",
  },
  {
    name: "Elaina Fung",
    role: "AVP - Finance",
    image: "/team/elaina.avif",
    description: "Elaina is a ",
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
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-[#ddfcf7] mb-4 mx-auto">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

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
