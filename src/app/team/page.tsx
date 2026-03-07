"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  {
    name: "Simren Ahuja",
    role: "Co-President",
    image: "/team/simren.jpg",
    description:
      "My name is Simren, a 3rd year neuroscience student and the co-president of the UBC Pilates Club this year! Outside of school, I love going to concerts, eating, and crocheting! I am super excited to continue bringing affordable, accessible, and fun pilates classes and events to the UBC community.",
  },
  {
    name: "Mauli Sood",
    role: "Senior Pilates Instructor",
    image: "/team/mauli.jpg",
    description:
      "Hello! I am a Senior Pilates instructor and currently in my third year at Sauder. This would be my 2nd year in the club and I will soon be a certified instructor as well. I love studying at cafes, walking at the beach, and chocolate cupcakes! I am really excited to invite all you back to my classes this year:)",
  },
  {
    name: "Romina Barnes",
    role: "Junior Pilates Instructor",
    image: "/team/romina.jpg",
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
    role: "Junior Pilates Instructor & VP Internal",
    image: "/team/maya.jpg",
    description:
      "Hey everyone! My name is Maya and I’m going into my fourth year studying Psychology. This will be my third year with the club, but first year as a Junior Pilates Instructor. I’m so excited to be a part of this wonderful and new team, and excited for all the amazing events they’re planning. I hope to see you at one of my classes this year!!",
  },
  {
    name: "Alina Wang",
    role: "Junior Pilates Instructor",
    image: "/team/alina.jpg",
    description:
      "Hi everyone! I’m a 2nd year Junior Pilates Instructor and I hope you enjoy and benefit from it during the school year as much as I do. Looking forward to meeting you in the fall!",
  },
  {
    name: "Adriana Cowan",
    role: "Junior Pilates Instructor",
    image: "/team/adriana.jpg",
    description:
      "Hi I’m Adriana and I am very excited to be a Junior Pilates Instructor this year! I have been a student at UBC since 2019, graduating with my BASc in Electrical Engineering in 2023 and I am currently pursuing my MASc in Biomedical Engineering. I love pop music, my current favourite artists include Sabrina Carpenter and Taylor Swift. I have always enjoyed Pilates, I am looking forward to classes this term! ",
  },
  {
    name: "Kira Gaebel",
    role: "VP Marketing",
    image: "/team/kira.jpg",
    description: "Hi, my name is Kira and I’m in my fourth year studying marketing. I started doing Pilates in my first year at UBC, and it has been such an important way for me to stay active and balanced throughout university. I joined UBC Pilates in May 2025, and this community has quickly become something very special and close to my heart.",
  },
  {
    name: "Annie Wu",
    role: "Visual Media Director",
    image: "/team/annie.jpg",
    description: "Heyy! I’m a third-year Psychology student at UBC and currently the Visual Media Director for UBC Pilates Club. I’ve always loved a good pilates workout class and how it makes workouts fun and challenging! ",
  },
  {
    name: "Sanchi Shorewala",
    role: "Visual Media Director",
    image: "/team/sanchi.jpg",
    description: "I'm a 3rd year Psych major who loves reading, sketching and cooking up a storm :)) Our UBC Pilates Club community means so much to me; I have made so many friends and memories that I will cherish forever, & I hope it can mean as much to you!!",
  },
  {
    name: "Jaden Gunn",
    role: "Social Media Director",
    image: "/team/jaden.avif",
    description: "Hi! My name's Jaden, I'm going into my third year as psychology major. I'm so excited to be back with the club this year as a Social Media Director. Get ready for lots of trendy TikToks and even more fun content on our IG. Hit me up with any new food reccs and I'll see you in class!! ",
  },
  {
    name: "Nanami Kubo",
    role: "Social Media Director",
    image: "/team/nanami.jpg",
    description: "Nanami is a third year student majoring in IR! In her free time, she enjoys going on walks, grabbing coffee, and baking some sweet treats. Excited for a wonderful year ahead <3",
  },
  {
    name: "Sofia Ahmadiyar",
    role: "Newsletter Director",
    image: "/team/sofia.jpg",
    description: "I’m a third year poli sci/philosophy student! I loveeeeeeeee this team, and I love how accessible and modifiable Pilates can be so that everyone can partake! I enjoy exploring new grocery stores and talking about the weather",
  },
  {
    name: "Claire Zhang",
    role: "Website Director",
    image: "/team/claire.jpg",
    description: "Hey! I'm Claire, a second-year CS student at UBC; I love dance, pilates, reading, and attending/organizing hackathons!! Looking forward to a great year 😎",
  },
  {
    name: "Yuly Topp",
    role: "VP External",
    image: "/team/yuly.jpg",
    description: "I’m the VP of External and a third-year Social Work student. I love how Pilates strengthens both the body and mind. A fun fact about me is that I have a one eyed cat.",
  },
  {
    name: "Armita Bagheri",
    role: "AVP External - Sponsorship",
    image: "/team/armita.jpg",
    description: "Hi everyone, I'm Armita and I’m an AVP External for Sponsorships at the UBC Pilates Club! I’m going into my second year, majoring in neuroscience. Some of my favourite hobbies are playing the piano, playing volleyball, and of course doing pilates!!",
  },
  {
    name: "Toko Fukushima",
    role: "AVP External - Sponsorship",
    image: "/team/toko.jpg",
    description: "Hi! I’m Toko from Tokyo (not a pun lmao) This is my second year of being AVP External for Sponsorship! I’m excited to collaborate with many wonderful companies this year for UBC pilates (;",
  },
  {
    name: "Jia Mehra",
    role: "AVP External - Collaborations",
    image: "/team/jia.jpg",
    description: "Hey everyone, I'm Jia! I’m in my 2nd year, majoring in Psychology + in the B+MM program. This is my first year with the club and I’m so excited to be a part of it! Pilates helps me feel calm and re-centered, and I can’t wait for all the fun events and community this year. Outside of class, you’ll most likely find me singing, thrifting, or grabbing a strawberry matcha!",
  },
  {
    name: "Tia Dandona",
    role: "AVP External - Collaborations",
    image: "/team/tia.jpg",
    description: "Hi! I am Tia, the AVP External, Collabs for 2025-26! I am a third year at Sauder studying finance. I love fitness, going to the gym and absolutely love how Pilates is such a transforming activity!",
  },
  {
    name: "Grace Kim",
    role: "AVP Internal",
    image: "/team/grace.jpg",
    description: "Hi! My name is Grace and I'm the AVP Internal :) I am in my 3rd year, majoring in Integrated Sciences. I love doing pilates because it always makes me feel refreshed afterwards! In addition to pilates I enjoy doing spin classes and other workout classes on campus as it is such a great stress reliever. I'm very excited for this school year and the upcoming pilates classes!",
  },
  {
    name: "Pia",
    role: "AVP Internal",
    image: "/team/pia.jpg",
    description: "",
  },
  {
    name: "Lyle Lo",
    role: "VP Finance",
    image: "/team/lyle.jpg",
    description: "I compete in Long & Triple Jump for UBC!",
  },
  {
    name: "Elaina Fung",
    role: "AVP - Finance",
    image: "/team/elaina.jpg",
    description: "Hey! I'm the AVP Finance and I'm currently in my second year of Commerce with a minor in Law and Society. I love rainy days and books. I'm so excited to start a new year with the Pilates club and am looking forward to seeing everyone! ",
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
