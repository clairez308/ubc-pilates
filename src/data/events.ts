export interface ClubEvent {
  title: string;
  /** ISO date (YYYY-MM-DD). This alone decides upcoming vs. past — no flag to set. */
  date: string;
  /** Optional human-readable time/duration, e.g. "7:30 - 8:30 PM" */
  time?: string;
  image: string;
  description: string;
}

// Add new events anywhere in this list — order doesn't matter, the events
// page sorts and groups them automatically. An event shows under "Upcoming
// Events" until its date passes, then it moves itself to "Past Events".
export const events: ClubEvent[] = [
  {
    title: "UBC Pilates x WiDS @ UBC: Galentine’s",
    date: "2026-02-04",
    time: "7:30 - 8:30 PM",
    image: "/group/wids.png",
    description: "Galentine’s Pilates with UBC Pilates x WiDS @ UBC 💗✨",
  },
  {
    title: "LDC x Pilates Club Collab",
    date: "2026-02-02",
    time: "5:00 - 6:00 PM",
    image: "/group/2016.png",
    description:
      "WE HEARD 2016 IS BACK 💿✨ Join us for our 2016s themed Pilates class and dress like it’s a throwback year we all lowkey miss.",
  },
  {
    title: "Pop Up Pilates",
    date: "2026-01-15",
    image: "/group/pop up.png",
    description: "Our first FREE pop-up class of 2026!",
  },
  {
    title: "Sway n' Stretch",
    date: "2026-01-13",
    image: "/group/latin.png",
    description:
      "Latin-themed class in collaboration with UBC Latin Dance Club!",
  },
  {
    title: "Benny Class",
    date: "2025-12-03",
    image: "/group/benny.jpg",
    description: "❄️ UBC Pilates x Benny Winter Wellness Class! ❄️",
  },
  {
    title: "Wicked Themed Class",
    date: "2025-11-26",
    image: "/group/wicked.jpg",
    description: "🧙‍♀️ Something Wicked is Coming… 💚💗",
  },
  {
    title: "Sweet Social x POPPI",
    date: "2025-11-06",
    image: "/group/poppi.jpeg",
    description:
      "☕ Our first Execs & Members Social — a cozy fall evening to relax, mingle, and have some fun after class! 🍂",
  },
  {
    title: "Heal Collab",
    date: "2025-11-03",
    image: "/group/heal.jpeg",
    description: "💜 UBC Pilates x HEAL collab 💜",
  },
  {
    title: "Wednesday Adamms Theme Class",
    date: "2025-10-29",
    time: "5:00 - 6:00 PM",
    image: "/group/wednesday.jpg",
    description:
      "🕸️ Something spooky is coming to the mat… 🦇Join us for a special Wednesday Addams–inspired Pilates class!💀",
  },
  {
    title: "Engi-YOU",
    date: "2025-10-27",
    time: "4:45 - 6:00 PM",
    image: "/group/engi.jpeg",
    description:
      "UBC Pilates x Engi-YOU Collab!! Relaxing mini canvas painting session & Pilates class.",
  },
  {
    title: "Glow N' Flow",
    date: "2025-10-20",
    time: "5:00 - 6:00 PM",
    image: "/group/glow.jpg",
    description:
      "🌙✨ Glow n Flow: Candlelight Pilates ✨🌙 Unwind with a calm, stretchy flow under soft candlelight.",
  },
  {
    title: "Monday Haircare x Pilates",
    date: "2025-10-16",
    time: "5:00 - 7:00 PM",
    image: "/group/monday.jpg",
    description:
      "Join us for a pink-themed Pilates collab with Monday Haircare! Expect good vibes, photo ops, and exclusive goodies.",
  },
  {
    title: "Bunny Pilates",
    date: "2025-09-25",
    time: "12:00 - 3:00 PM (1hr x 3 sessions)",
    image: "/group/bunnies.jpg",
    description:
      "Bunny Pilates is BACK!!! Come flow & stretch with the fluffiest workout buddies ever at the AMS Nest Performance Theatre 🐰✨",
  },
  {
    title: "Clubs Fair",
    date: "2025-09-23",
    time: "Sept 23-24",
    image: "/group/pilates7.jpg",
    description:
      "Get to know UBC Pilates Club! Check out our booth to learn more about the club & how you can participate.",
  },
  {
    title: "UBC Pilates x XISC: International Themed Class",
    date: "2025-03-28",
    image: "/group/pilates8.JPG",
    description:
      "International & Exchange Collab with XISC - music, flags, and candy from around the world.",
  },
  {
    title: "UBC Pilates x Best Buddies: Spring Core & Slime",
    date: "2025-03-20",
    image: "/group/slime.png",
    description: "Best Buddies and UBC Pilates present... Spring Core and Slime!",
  },
  {
    title: "K-POPilates",
    date: "2025-03-18",
    image: "/group/kpop.png",
    description: "KPOP themed class!",
  },
  {
    title: "bunnies x pilates",
    date: "2025-03-17",
    image: "/group/bunny.jpg",
    description:
      "Bunnys and pilates! Join us for a fun-filled class with adorable bunnies to cuddle with after class.",
  },
  {
    title: "UBC Muay Thai x Pilates: Women's History Month Event",
    date: "2025-03-14",
    image: "/group/muaythai.jpeg",
    description: "An evening of muay thai, pilates, and fun chats!",
  },
  {
    title: "UBC Pilates x SISU: Key chain making & Pilates session",
    date: "2025-03-06",
    image: "/group/sisu.png",
    description:
      "Join us for a fun-filled evening of key chain making and pilates session with SISU!",
  },
  {
    title: "Merry Makers Market",
    date: "2024-12-04",
    image: "/group/merrymakers.png",
    description:
      "Merry making with Pilates + shopping discounts from small businesses.",
  },
  {
    title: "UBC Pilates x CSA: XMAS Core + Crafts",
    date: "2024-12-06",
    image: "/group/xmas.png",
    description:
      "O Come All Ye Pilates & CSA Members to our last event of the year: a holiday collab!! There will be a photo booth, hot cocoa, gingerbread, and a core pilates class!",
  },
  {
    title: "Taylor Swift & Lana Del Rey themed class",
    date: "2024-11-29",
    image: "/group/taylor.jpg",
    description:
      "Down on the west coast, we like to to get prepared for the Eras tour as a club! Come to our class early on Friday, November 29 for bracelet making before this tribute class begins! We will be playing music from Taylor and Lana!",
  },
  {
    title: "Short N' Sweet Pilates",
    date: "2024-11-25",
    image: "/group/sabrina.png",
    description:
      "We’ll make you want to fall in love with the short n sweet themed class!!! 💎💎Where art thou?! Life 26! ❤️‍🔥❤️‍🔥",
  },
  {
    title: "UBC Pilates x Get Thrifty: Wellness Event",
    date: "2024-10-18",
    image: "/group/thrift.png",
    description: "Pilates + Thrifting in one event!",
  },
];
