"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type DepartmentId =
  | "co-presidents"
  | "finance"
  | "internal"
  | "external"
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
  { id: "internal", name: "Internal", photo: "/team/internal.jpeg" },
  { id: "external", name: "External", photo: "/team/external (2).jpeg" },
  { id: "marketing", name: "Marketing", photo: "/team/marketing.jpeg" },
  { id: "ppy", name: "PPY", photo: "/team/ppy.jpeg" },
  { id: "instructors", name: "Instructors", photo: "/team/pi.jpeg" },
];

const teamMembers: TeamMember[] = [
  {
    name: "Romina Barnes",
    role: "Co-President",
    image: "/team/romina.jpeg",
    department: "co-presidents",
    description:
      "Meet Romina! She is in her second year of neuroscience and is a big fan of Blue Chip's dirty iced matcha latte. If she's not napping, you can catch her outdoors or reading a book.",
  },
  {
    name: "Amany Lakssili",
    role: "Co-President",
    image: "/team/amany.jpeg",
    department: "co-presidents",
    description:
      "My name is Amany, and I am the co-president of UBC pilates club this year! I am in my first year of pharmacy school. I love pilates because it can get me out of my head and is so much fun!",
  },
  {
    name: "Jaylene Chih",
    role: "VP Finance",
    image: "/team/jaylene.jpg",
    department: "finance",
    description: "Jaylene, Year 4, Accounting, pilates is a community where you get to feel good inside and out :)",
  },
  {
    name: "Athene Fox",
    role: "AVP Finance",
    image: "/team/athene.jpg",
    department: "finance",
    description:
      "Hi! I'm Athene, a 3rd-year Cognitive Systems major. I joined because I love making wellness more accessible and affordable while supporting the UBC community!",
  },
  {
    name: "Jaden Gunn",
    role: "VP Internal",
    image: "/team/jaden.jpeg",
    department: "internal",
    description:
      "Hi!! I'm Jaden, I'm a 4th year psych student and this is my 3rd year with the Pilates Club :scream: I originally joined because of the accessibility of classes but fell in love with the community :light_blue_heart: Hope to see you in class!!",
  },
  {
    name: "Anagha Khanna",
    role: "AVP Internal",
    image: "/team/anagha.jpeg",
    department: "internal",
    description: "Hi! My name is Anaghaa, i'm a fourth year student in the UBC-SciencesPo Dual Degree majoring in PPA and IR <3",
  },
  {
    name: "Arisa Miles",
    role: "AVP Internal",
    image: "/team/arisa.jpeg",
    department: "internal",
    description: "Hiii my name is Arisa, and I'm in my third year studying psychology. I joined the club to be part of a supportive community that values fitness and wellbeing. In my free time, I love visiting new places and collecting postcards!",
  },
  {
    name: "Ruby Coleman",
    role: "AVP Internal",
    image: "/team/ruby.jpeg",
    department: "internal",
    description:
      "Hi! I am Ruby, one of the AVP Internals and I am in my 2nd year of Commerce. I am almost always listening to music and I love watching sunsets at the beach!",
  },
  {
    name: "Mahi Agarwal",
    role: "AVP Internal",
    image: "/team/mahi.jpeg",
    department: "internal",
    description:
      "Hi! I’m Mahi, a 2nd year Microbiology student and the AVP Internal for UBC Pilates Club. Pilates is my reset button: challenging, calming, and always worth it. Behind the scenes, I help plan the events and outside of class, you can find me at the bouldering gym, watching a sunset or stuck in a lab 😛 ",
  },
  {
    name: "Yuly Topp",
    role: "VP External",
    image: "/team/yuly.jpeg",
    department: "external",
    description: "I’m the VP of External and a third-year Social Work student. I love how Pilates strengthens both the body and mind. A fun fact about me is that I have a one eyed cat.",
  },
  {
    name: "Armita Bagheri",
    role: "AVP External - Collaborations",
    image: "/team/armita.jpeg",
    department: "external",
    description:
      "Hi! I’m Armita, a third-year Neuroscience student. I got into Pilates in my first year and have loved it ever since. I love having a fun way to stay active, while being part of such a kind community. As part of the External Team, I get to plan exciting collaborative events with other UBC clubs!",
  },
  {
    name: "Aarya Gill",
    role: "AVP External - Collaborations",
    image: "/team/aarya.jpeg",
    department: "external",
    description:
      "I’m Aarya, a second-year Food, Nutrition and Health student at UBC! I’ve always loved Pilates because it’s a fun way to stay active, relieve stress, and prioritize both physical and mental well-being.",
  },
  {
    name: "Jia Mehra",
    role: "AVP External - Sponsorships",
    image: "/team/jia.jpeg",
    department: "external",
    description:
      "Hi! I'm Jia, a third-year Psychology and B+MM student at UBC and your AVP External (Sponsorships) for this year! Pilates Club has given me a real sense of community at UBC.",
  },
  {
    name: "Angel Xu",
    role: "AVP External - Sponsorships",
    image: "/team/angel.jpeg",
    department: "external",
    description: "Hi! I'm Angel, a 4th year Pharmacology major. I joined the club because POP pilates is always such a mood booster, especially being able to work out with a great community! In my free time I love volleyball and binging TV shows :)",
  },
  {
    name: "Annie Wu",
    role: "Co-VP Marketing",
    image: "/team/annie.jpeg",
    department: "marketing",
    description:
      "Heyy! I’m a third-year Psychology student at UBC and currently Co-VP of UBC Pilates Club. I’ve always loved a good pilates workout class and how it makes workouts fun and challenging!",
  },
  {
    name: "Tashi Leung",
    role: "Co-VP Marketing",
    image: "/team/tashi.jpeg",
    department: "marketing",
    description: "",
  },
  {
    name: "Emily Henry",
    role: "Visual Media Director",
    image: "/team/emily.jpeg",
    department: "marketing",
    description: "Name: Emily; Year: 3rd, Media Studies; Why Pilates: I joined Pilates Club as a way to get more involved in the UBC community and to meet new people!",
  },
  {
    name: "Sanchi Shorewala",
    role: "Visual Media Director",
    image: "/team/sanchi.jpeg",
    department: "marketing",
    description:
      "I'm a 3rd year Psych major who loves reading, sketching and cooking up a storm :)) Our UBC Pilates Club community means so much to me; I hope it can mean as much to you!!",
  },
  {
    name: "Elyza Castro",
    role: "Content Creator",
    image: "/team/elyza.jpg",
    department: "marketing",
    description: "My name is Elyza! I am in second year planning to major in marketing at Sauder. I joined the UBC Pilates club ecec team because combines my passion for creating community and my love for pilates/being active!!",
  },
  {
    name: "Nadia Earn",
    role: "Content Creator",
    image: "/team/nadia.jpeg",
    department: "marketing",
    description: "Hi everyone, i'm nadia and I'm a 3rd year in kinesiology. I joined pilates this year because I love to stay active, especially with activities that involve music and creative expression. a fun fact about me is that i'm on ubc’s cheer team! don't be afraid to come say hi if you ever see me on the field or at courtside!",
  },
  {
    name: "Nora Lee",
    role: "Newsletter Director",
    image: "/team/nora.jpeg",
    department: "marketing",
    description:
      "Hi! I'm Nora, I'm a third year psych major and intend to go into clinical psych. I love health and fitness, and when I'm not studying I love to do all kinds of art, sew, hike, and go thrifting!!",
  },
  {
    name: "Claire Zhang",
    role: "Website Director",
    image: "/team/claire.jpeg",
    department: "marketing",
    description: "Hey! I'm Claire, a third-year CS student at UBC; I love dance, pilates, reading, and attending/organizing hackathons!! Looking forward to a great year 😎",
  },
  {
    name: "Hayley Yip",
    role: "Photographer",
    image: "/team/hayley.jpeg",
    department: "marketing",
    description:
      "Hi! I’m Hayley, a 3rd-year Sociology major with a minor in Education. Pilates is my go-to way to clear my mind and feel strong. I'm so excited to help capture all the good vibes this year!",
  },
  {
    name: "Alisa Shpolyansky",
    role: "Photographer",
    image: "/team/alisa.jpeg",
    department: "marketing",
    description:
      "My name is Alisa and I am one of the photographers for UBC Pilates! I’m a second year psych student and it’s my first year in the club.",
  },
  {
    name: "Simren Ahuja",
    role: "PPY Founder & Director + Senior PI",
    image: "/team/simren.JPG",
    department: "ppy",
    description:
      "Hi! I'm Simren, a 4th year neuroscience student. This is my 3rd year with the pilates club!! Super excited to be teaching on campus and leading our school outreach classes!",
  },
  {
    name: "Elva Ly",
    role: "PPY Instructor",
    image: "/team/elva.JPG",
    department: "ppy",
    description: "Heyy my name is Elva and I’m a third-year student in the Integrated Sciences program! I love POP Pilates because working out to the beat of fun music makes me forget how much my muscles are burning!",
  },
  {
    name: "Anjali Jaster",
    role: "PPY Program Coordinator",
    image: "/team/anjali.jpeg",
    department: "ppy",
    description: "My name is Anjali, and I'm a third year majoring in Gender, Race and Social Justice, although I will be moving on to study nursing after I complete this degree! I'm passionate about pilates because it is a form of exercise that is challenging and effective, but it also brings a more unique and creative touch with the utilization of music and choreographed moves.",
  },
  {
    name: "Bella Robles",
    role: "PPY Program Coordinator",
    image: "/team/bella.jpeg",
    department: "ppy",
    description:
      "Hey, my name is Bella and I'm a second-year commerce student! I love pilates because it's a fun way to tone muscles and get abs (they aren't there yet, but give it some time)",
  },
  {
    name: "Adriana Cowan",
    role: "Senior Pilates Instructor",
    image: "/team/adriana.jpeg",
    department: "instructors",
    description:
      "Hi I’m Adriana and I am very excited to be a Senior Pilates Instructor this year! I am pursuing my MASc in Biomedical Engineering. I love pop music, especially Sabrina Carpenter and Taylor Swift.",
  },
  {
    name: "Alina Wang",
    role: "Senior Pilates Instructor",
    image: "/team/alina.jpg",
    department: "instructors",
    description:
      "Hi! I’m Alina, and I’m a huge fan of making health and wellness a priority in everyday life. One of my favourite parts of being a part of the club is being able to connect with other students and empowering them to carve time out of their busy schedules to move their body. Looking forward to another fun year of amazing music and great energy!"
  },
  {
    name: "Maggie Huang",
    role: "Senior Pilates Instructor",
    image: "/team/maggie.jpeg",
    department: "instructors",
    description:
      "Hey! I’m Maggie — a Pilates instructor and currently in my second year of Kinesiology. When I’m not teaching or studying, you’ll probably find me dancing, baking something sweet, or planning a trip.",
  },
  {
    name: "Nanami Kubo",
    role: "Junior Pilates Instructor",
    image: "/team/nanami.jpeg",
    department: "instructors",
    description: "My name is Nanami, im in my fourth year in international relations, I thought Pilates club because I loved our warm, supporting community where we can pursue the same goals together.",
  },
  {
    name: "Rachel Lee",
    role: "Junior Pilates Instructor",
    image: "/team/rachel.jpg",
    department: "instructors",
    description: "Rachel, Year 3, Accounting, Pilates is fun, challenging and relaxing",
  },
  {
    name: "Lillian Mason Coleman",
    role: "Junior Pilates Instructor",
    image: "/team/lilian.jpeg",
    department: "instructors",
    description: "Hiii everyone! My name is Lillian, I'm a 2nd year in Mining Engineering, and I'm from New Brunswick! I started going to Pilates last year because it was a super fun environment and a good break from my studies. I chose to start teaching this year because I wanted to give back to our members what Pilates gave me!",
  },
  {
    name: "Arneet Brar",
    role: "Junior Pilates Instructor",
    image: "/team/arneet.jpeg",
    department: "instructors",
    description: "I'm Arneet and i'm one of the many pilates instructors this year! I'm in my second year majoring in history and love pilates because it provides me both with a way to stay active and a way to meet new people!",
  },
];

const pastTeams: { year: string; members: { name: string; role: string }[] }[] = [
  {
    year: "2025–2026",
    members: [
      { name: "Simren Ahuja", role: "Co-President" },
      { name: "Mauli Sood", role: "Senior Pilates Instructor" },
      { name: "Romina Barnes", role: "Junior Pilates Instructor" },
      { name: "Giulia Chindea", role: "Junior Pilates Instructor" },
      { name: "Maggie Huang", role: "Junior Pilates Instructor" },
      { name: "Maya Juliette Ga", role: "Junior Pilates Instructor & VP Internal" },
      { name: "Alina Wang", role: "Junior Pilates Instructor" },
      { name: "Adriana Cowan", role: "Junior Pilates Instructor" },
      { name: "Kira Gaebel", role: "VP Marketing" },
      { name: "Annie Wu", role: "Visual Media Director" },
      { name: "Sanchi Shorewala", role: "Visual Media Director" },
      { name: "Jaden Gunn", role: "Social Media Director" },
      { name: "Nanami Kubo", role: "Social Media Director" },
      { name: "Sofia Ahmadiyar", role: "Newsletter Director" },
      { name: "Claire Zhang", role: "Website Director" },
      { name: "Yuly Topp", role: "VP External" },
      { name: "Armita Bagheri", role: "AVP External - Sponsorship" },
      { name: "Toko Fukushima", role: "AVP External - Sponsorship" },
      { name: "Jia Mehra", role: "AVP External - Collaborations" },
      { name: "Tia Dandona", role: "AVP External - Collaborations" },
      { name: "Grace Kim", role: "AVP Internal" },
      { name: "Pia", role: "AVP Internal" },
      { name: "Lyle Lo", role: "VP Finance" },
      { name: "Elaina Fung", role: "AVP Finance" },
    ],
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
        Meet Our 2026/2027 Team
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

      <section className="mt-20">
        <h2 className="font-heading text-3xl text-center text-ink mb-8 tracking-tight">
          Past Teams
        </h2>
        {pastTeams.map((team) => (
          <div
            key={team.year}
            className="bg-white rounded-xl border-2 border-ink p-6 mb-6"
            style={{ boxShadow: "4px 4px 0 0 #004669" }}
          >
            <h3 className="font-heading text-xl text-ink mb-4 border-b-2 border-ink/15 pb-2">
              {team.year}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm">
              {team.members.map((member) => (
                <li key={member.name}>
                  <span className="font-bold text-ink">{member.name}</span>
                  <span className="text-ink/60"> · {member.role}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
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
