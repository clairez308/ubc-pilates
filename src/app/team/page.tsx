"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TEAM_PHOTO = "/team/marketing.JPG";

type DepartmentId =
  | "co-presidents"
  | "finance"
  | "internal"
  | "collabs"
  | "sponsorships"
  | "marketing"
  | "ppy"
  | "instructors";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
  department: DepartmentId;
};

const departments: { id: DepartmentId; name: string; photo: string }[] = [
  { id: "co-presidents", name: "Co-Presidents", photo: "/team/presidents.jpeg" },
  { id: "finance", name: "Finance", photo: "/team/finance.jpeg" },
  { id: "internal", name: "Internal", photo: TEAM_PHOTO },
  { id: "collabs", name: "Collabs", photo: TEAM_PHOTO },
  { id: "sponsorships", name: "Sponsorships", photo: TEAM_PHOTO },
  { id: "marketing", name: "Marketing", photo: TEAM_PHOTO },
  { id: "ppy", name: "PPY", photo: TEAM_PHOTO },
  { id: "instructors", name: "Instructors", photo: TEAM_PHOTO },
];

const teamMembers: TeamMember[] = [
  {
    name: "Simren Ahuja",
    role: "Co-President",
    image: "/team/simren.jpg",
    department: "co-presidents",
    description:
      "My name is Simren, a 3rd year neuroscience student and the co-president of the UBC Pilates Club this year! Outside of school, I love going to concerts, eating, and crocheting! I am super excited to continue bringing affordable, accessible, and fun pilates classes and events to the UBC community.",
  },
  {
    name: "Mauli Sood",
    role: "Senior Pilates Instructor",
    image: "/team/mauli.jpg",
    department: "instructors",
    description:
      "Hello! I am a Senior Pilates instructor and currently in my third year at Sauder. This would be my 2nd year in the club and I will soon be a certified instructor as well. I love studying at cafes, walking at the beach, and chocolate cupcakes! I am really excited to invite all you back to my classes this year:)",
  },
  {
    name: "Romina Barnes",
    role: "Junior Pilates Instructor",
    image: "/team/romina.jpg",
    department: "instructors",
    description:
      "Meet Romina! This Junior Pilates Instructor is in her second year of neuroscience and is a big fan of Blue Chip's dirty iced matcha latte. If she's not napping, then you can catch her spending time outdoors or cozied up reading a book. She can't wait to get creative with the playlists for the classes and hope to have fun with everyone soon!",
  },
  {
    name: "Giulia Chindea",
    role: "Junior Pilates Instructor",
    image: "/team/giulia.jpg",
    department: "instructors",
    description:
      "Hi, my name is Giulia! I'm a second year microbio student from Toronto. I love staying active, whether it’s going for a run, doing pilates, or hiking That said, I’m also always down to chill with a good book or binge sitcoms, How I Met Your Mother is a classic! I’m super excited to meet everyone next year and can’t wait for all the fun ahead!",
  },
  {
    name: "Maggie Huang",
    role: "Junior Pilates Instructor",
    image: "/team/maggie.jpg",
    department: "instructors",
    description:
      "Hey! I’m Maggie — a Junior Pilates instructor and currently in my second year of Kinesiology. I’m super passionate about movement and love sharing that through Pilates. When I’m not teaching or studying, you’ll probably find me dancing, baking something sweet, planning a trip (or going on a spontaneous one), or just enjoying a good adventure. Can’t wait for this year!",
  },
  {
    name: "Maya Juliette Ga",
    role: "Junior Pilates Instructor & VP Internal",
    image: "/team/maya.jpg",
    department: "internal",
    description:
      "Hey everyone! My name is Maya and I’m going into my fourth year studying Psychology. This will be my third year with the club, but first year as a Junior Pilates Instructor. I’m so excited to be a part of this wonderful and new team, and excited for all the amazing events they’re planning. I hope to see you at one of my classes this year!!",
  },
  {
    name: "Alina Wang",
    role: "Junior Pilates Instructor",
    image: "/team/alina.jpg",
    department: "instructors",
    description:
      "Hi everyone! I’m a 2nd year Junior Pilates Instructor and I hope you enjoy and benefit from it during the school year as much as I do. Looking forward to meeting you in the fall!",
  },
  {
    name: "Adriana Cowan",
    role: "Junior Pilates Instructor",
    image: "/team/adriana.jpg",
    department: "instructors",
    description:
      "Hi I’m Adriana and I am very excited to be a Junior Pilates Instructor this year! I have been a student at UBC since 2019, graduating with my BASc in Electrical Engineering in 2023 and I am currently pursuing my MASc in Biomedical Engineering. I love pop music, my current favourite artists include Sabrina Carpenter and Taylor Swift. I have always enjoyed Pilates, I am looking forward to classes this term! ",
  },
  {
    name: "Kira Gaebel",
    role: "VP Marketing",
    image: "/team/kira.jpg",
    department: "marketing",
    description: "Hi, my name is Kira and I’m in my fourth year studying marketing. I started doing Pilates in my first year at UBC, and it has been such an important way for me to stay active and balanced throughout university. I joined UBC Pilates in May 2025, and this community has quickly become something very special and close to my heart.",
  },
  {
    name: "Annie Wu",
    role: "Visual Media Director",
    image: "/team/annie.jpg",
    department: "marketing",
    description: "Heyy! I’m a third-year Psychology student at UBC and currently the Visual Media Director for UBC Pilates Club. I’ve always loved a good pilates workout class and how it makes workouts fun and challenging! ",
  },
  {
    name: "Sanchi Shorewala",
    role: "Visual Media Director",
    image: "/team/sanchi.jpg",
    department: "marketing",
    description: "I'm a 3rd year Psych major who loves reading, sketching and cooking up a storm :)) Our UBC Pilates Club community means so much to me; I have made so many friends and memories that I will cherish forever, & I hope it can mean as much to you!!",
  },
  {
    name: "Jaden Gunn",
    role: "Social Media Director",
    image: "/team/jaden.avif",
    department: "marketing",
    description: "Hi! My name's Jaden, I'm going into my third year as psychology major. I'm so excited to be back with the club this year as a Social Media Director. Get ready for lots of trendy TikToks and even more fun content on our IG. Hit me up with any new food reccs and I'll see you in class!! ",
  },
  {
    name: "Nanami Kubo",
    role: "Social Media Director",
    image: "/team/nanami.jpg",
    department: "marketing",
    description: "Nanami is a third year student majoring in IR! In her free time, she enjoys going on walks, grabbing coffee, and baking some sweet treats. Excited for a wonderful year ahead <3",
  },
  {
    name: "Sofia Ahmadiyar",
    role: "Newsletter Director",
    image: "/team/sofia.jpg",
    department: "marketing",
    description: "I’m a third year poli sci/philosophy student! I loveeeeeeeee this team, and I love how accessible and modifiable Pilates can be so that everyone can partake! I enjoy exploring new grocery stores and talking about the weather",
  },
  {
    name: "Claire Zhang",
    role: "Website Director",
    image: "/team/claire.jpg",
    department: "marketing",
    description: "Hey! I'm Claire, a second-year CS student at UBC; I love dance, pilates, reading, and attending/organizing hackathons!! Looking forward to a great year 😎",
  },
  {
    name: "Yuly Topp",
    role: "VP External",
    image: "/team/yuly.jpg",
    department: "sponsorships",
    description: "I’m the VP of External and a third-year Social Work student. I love how Pilates strengthens both the body and mind. A fun fact about me is that I have a one eyed cat.",
  },
  {
    name: "Armita Bagheri",
    role: "AVP External - Sponsorship",
    image: "/team/armita.jpg",
    department: "sponsorships",
    description: "Hi everyone, I'm Armita and I’m an AVP External for Sponsorships at the UBC Pilates Club! I’m going into my second year, majoring in neuroscience. Some of my favourite hobbies are playing the piano, playing volleyball, and of course doing pilates!!",
  },
  {
    name: "Toko Fukushima",
    role: "AVP External - Sponsorship",
    image: "/team/toko.jpg",
    department: "sponsorships",
    description: "Hi! I’m Toko from Tokyo (not a pun lmao) This is my second year of being AVP External for Sponsorship! I’m excited to collaborate with many wonderful companies this year for UBC pilates (;",
  },
  {
    name: "Jia Mehra",
    role: "AVP External - Collaborations",
    image: "/team/jia.jpg",
    department: "collabs",
    description: "Hey everyone, I'm Jia! I’m in my 2nd year, majoring in Psychology + in the B+MM program. This is my first year with the club and I’m so excited to be a part of it! Pilates helps me feel calm and re-centered, and I can’t wait for all the fun events and community this year. Outside of class, you’ll most likely find me singing, thrifting, or grabbing a strawberry matcha!",
  },
  {
    name: "Tia Dandona",
    role: "AVP External - Collaborations",
    image: "/team/tia.jpg",
    department: "collabs",
    description: "Hi! I am Tia, the AVP External, Collabs for 2025-26! I am a third year at Sauder studying finance. I love fitness, going to the gym and absolutely love how Pilates is such a transforming activity!",
  },
  {
    name: "Grace Kim",
    role: "AVP Internal",
    image: "/team/grace.jpg",
    department: "internal",
    description: "Hi! My name is Grace and I'm the AVP Internal :) I am in my 3rd year, majoring in Integrated Sciences. I love doing pilates because it always makes me feel refreshed afterwards! In addition to pilates I enjoy doing spin classes and other workout classes on campus as it is such a great stress reliever. I'm very excited for this school year and the upcoming pilates classes!",
  },
  {
    name: "Pia",
    role: "AVP Internal",
    image: "/team/pia.jpg",
    department: "internal",
    description: "",
  },
  {
    name: "Lyle Lo",
    role: "VP Finance",
    image: "/team/lyle.jpg",
    department: "finance",
    description: "I compete in Long & Triple Jump for UBC!",
  },
  {
    name: "Elaina Fung",
    role: "AVP - Finance",
    image: "/team/elaina.jpg",
    department: "finance",
    description: "Hey! I'm the AVP Finance and I'm currently in my second year of Commerce with a minor in Law and Society. I love rainy days and books. I'm so excited to start a new year with the Pilates club and am looking forward to seeing everyone! ",
  },
];

export default function TeamPage() {
  const [activeId, setActiveId] = useState<DepartmentId | null>(null);

  const activeDepartment = departments.find((d) => d.id === activeId);
  const activeMembers = teamMembers.filter((m) => m.department === activeId);

  const openDepartment = (id: DepartmentId) => {
    setActiveId(id);
    document
      .getElementById("department-panel")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 bg-cream">
      <motion.h1
        className="font-heading text-4xl text-center text-ink mb-10 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Team
      </motion.h1>

      <p className="text-center text-ink/70 mb-6">
        ~Pick a department to meet the crew~
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {departments.map((dept, idx) => {
          const count = teamMembers.filter((m) => m.department === dept.id).length;
          const isActive = dept.id === activeId;
          return (
            <motion.button
              key={dept.id}
              type="button"
              aria-expanded={isActive}
              aria-controls="department-panel"
              onClick={() =>
                isActive ? setActiveId(null) : openDepartment(dept.id)
              }
              whileHover={{ y: -4 }}
              className={`text-left rounded-xl border-2 border-ink p-3 transition-colors duration-200 ${
                isActive ? "bg-lightyellow" : "bg-white"
              }`}
              style={{
                boxShadow: "4px 4px 0 0 #004669",
                rotate: idx % 2 === 0 ? "-1.5deg" : "1.5deg",
              }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden border-2 border-ink mb-3">
                <img
                  src={dept.photo}
                  alt=""
                  className="block w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-lg text-ink leading-tight">
                {dept.name}
              </h3>
              <p className="text-sm text-ink/60">
                {count > 0
                  ? `${count} ${count === 1 ? "member" : "members"}`
                  : "Coming soon"}
              </p>
            </motion.button>
          );
        })}
      </div>

      <div id="department-panel" className="scroll-mt-24">
        <AnimatePresence mode="wait">
          {activeDepartment && (
            <motion.section
              key={activeDepartment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between gap-4 mb-8 border-b-2 border-ink pb-3">
                <h2 className="font-heading text-3xl text-ink tracking-tight">
                  {activeDepartment.name}
                </h2>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="text-sm font-bold text-denim underline underline-offset-4"
                >
                  Close
                </button>
              </div>

              {activeMembers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {activeMembers.map((member) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <FlipCard member={member} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-ink/70 py-12">
                  Members for this department are coming soon.
                </p>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FlipCard({ member }: { member: TeamMember }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="group perspective cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`relative w-full h-60 transition-transform duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className="absolute w-full h-full backface-hidden bg-white rounded-xl border-2 border-ink p-4 text-center flex flex-col justify-center items-center"
          style={{ boxShadow: "4px 4px 0 0 #004669" }}
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-ink mb-4 mx-auto">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-lg font-bold text-ink">{member.name}</h3>
          <p className="text-denim text-sm font-medium">{member.role}</p>
        </div>

        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-skyblue rounded-xl border-2 border-ink p-6 text-center flex flex-col justify-center items-center"
          style={{ boxShadow: "4px 4px 0 0 #004669" }}
        >
          <h3 className="text-lg font-bold text-ink mb-2">{member.name}</h3>
          <p className="text-sm text-ink/70">{member.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
