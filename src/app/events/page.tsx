"use client";

import { motion } from "framer-motion";
import React from "react";

const events = [
    {
        title: "Early Bird Energy Themed Class",
        date: "November 18, 2025",
        image: "/group/content1.jpg",
        description:
          "",
        featured: true,
      },
      {
        title: "Wicked Themed Class",
        date: "November 26, 2025",
        image: "/group/content2.jpg",
        description:
          "",
        featured: true,
      },
      {
        title: "Cloudy Themed Class",
        date: "November 28, 2025",
        image: "/group/content3.jpg",
        description:
          "",
        featured: true,
      },
      {
        title: "Benny Class",
        date: "December 3, 2025",
        image: "/group/content4.jpg",
        description:
          "",
        featured: true,
      },
      {
        title: "Winter Themed Class",
        date: "December 4, 2025",
        image: "/group/content5.jpg",
        description:
          "",
        featured: true,
      },
  {
    title: "Sweet Social x POPPI",
    date: "Thursday, November 6, 2025",
    image: "/group/poppi.jpeg",
    description:
      "☕ Our first Execs & Members Social — a cozy fall evening to relax, mingle, and have some fun after class! 🍂",
    featured: false,
  },
  {
    title: "Heal Collab",
    date: "Monday, November 3, 2025",
    image: "/group/heal.jpeg",
    description: "💜 UBC Pilates x HEAL collab 💜",
    featured: false,
  },
  {
    title: "Wednesday Adamms Theme Class",
    date: "Wednesday, October 29, 5-6 PM, 2025",
    image: "/group/wednesday.jpg",
    description:
      "🕸️ Something spooky is coming to the mat… 🦇Join us for a special Wednesday Addams–inspired Pilates class!💀",
    featured: false,
  },
  {
    title: "Engi-YOU",
    date: "Monday, October 27, 4:45 - 6 PM, 2025",
    image: "/group/engi.jpeg",
    description:
      "UBC Pilates x Engi-YOU Collab!! Relaxing mini canvas painting session & Pilates class.",
    featured: false,
  },
  {
    title: "Glow N' Flow",
    date: "Monday, October 20, 5-6 PM, 2025",
    image: "/group/glow.jpg",
    description:
      "🌙✨ Glow n Flow: Candlelight Pilates ✨🌙 Unwind with a calm, stretchy flow under soft candlelight.",
    featured: false,
  },
  {
    title: "Monday Haircare x Pilates",
    date: "Thursday, October 16, 5-7 PM, 2025",
    image: "/group/monday.jpg",
    description:
      "Join us for a pink-themed Pilates collab with Monday Haircare! Expect good vibes, photo ops, and exclusive goodies.",
    featured: false,
  },
  {
    title: "Bunny Pilates",
    date: "Thursday, September 25, 2025; 12-3 PM (1hr x 3 sessions)",
    image: "/group/bunnies.jpg",
    description:
      "Bunny Pilates is BACK!!! Come flow & stretch with the fluffiest workout buddies ever at the AMS Nest Performance Theatre 🐰✨",
    featured: false,
  },
  {
    title: "Clubs Fair",
    date: "September 23-24 2025",
    image: "/group/pilates7.jpg",
    description:
      "Get to know UBC Pilates Club! Check out our booth to learn more about the club & how you can participate.",
    featured: false,
  },
  {
    title: "UBC Pilates x XISC: International Themed Class",
    date: "March 28, 2025",
    image: "/group/pilates8.JPG",
    description:
      "International & Exchange Collab with XISC - music, flags, and candy from around the world.",
    featured: false,
  },
  {
    title: "UBC Pilates x Best Buddies: Spring Core & Slime",
    date: "March 20, 2025",
    image: "/group/slime.png",
    description:
      "Best Buddies and UBC Pilates present... Spring Core and Slime!",
    featured: false,
  },
  {
    title: "K-POPilates",
    date: "March 18, 2025",
    image: "/group/kpop.png",
    description: "KPOP themed class!",
    featured: false,
  },
  {
    title: "bunnies x pilates",
    date: "March 17, 2025",
    image: "/group/bunny.jpg",
    description:
      "Bunnys and pilates! Join us for a fun-filled class with adorable bunnies to cuddle with after class.",
    featured: false,
  },
  {
    title: "UBC Muay Thai x Pilates: Women's History Month Event",
    date: "March 14, 2025",
    image: "/group/muaythai.jpeg",
    description: "An evening of muay thai, pilates, and fun chats!",
    featured: false,
  },
  {
    title: "UBC Pilates x SISU: Key chain making & Pilates session",
    date: "March 6, 2025",
    image: "/group/sisu.png",
    description:
      "Join us for a fun-filled evening of key chain making and pilates session with SISU!",
    featured: false,
  },
  {
    title: "Merry Makers Market",
    date: "December 4, 2024",
    image: "/group/merrymakers.png",
    description:
      "Merry making with Pilates + shopping discounts from small businesses.",
    featured: false,
  },
  {
    title: "UBC Pilates x CSA: XMAS Core + Crafts",
    date: "December 6, 2024",
    image: "/group/xmas.png",
    description:
      "O Come All Ye Pilates & CSA Members to our last event of the year: a holiday collab!! There will be a photo booth, hot cocoa, gingerbread, and a core pilates class!",
    featured: false,
  },
  {
    title: "Taylor Swift & Lana Del Rey themed class",
    date: "November 29, 2024",
    image: "/group/taylor.jpg",
    description:
      "Down on the west coast, we like to to get prepared for the Eras tour as a club! Come to our class early on Friday, November 29 for bracelet making before this tribute class begins! We will be playing music from Taylor and Lana!",
    featured: false,
  },
  {
    title: "Short N' Sweet Pilates",
    date: "November 25, 2024",
    image: "/group/sabrina.png",
    description:
      "We’ll make you want to fall in love with the short n sweet themed class!!! 💎💎Where art thou?! Life 26! ❤️‍🔥❤️‍🔥",
    featured: false,
  },
  {
    title: "UBC Pilates x Get Thrifty: Wellness Event",
    date: "October 18, 2024",
    image: "/group/thrift.png",
    description: "Pilates + Thrifting in one event!",
    featured: false,
  },
];

export default function EventsPage() {
  const featuredEvents = events.filter((event) => event.featured);
  const regularEvents = events.filter((event) => !event.featured);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-[#224e70] mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Events
      </motion.h2>

      {/* Featured Events */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-denim">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
                <div className="w-full h-64 overflow-hidden bg-gray-100">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-denim font-medium mb-4">{event.date}</p>
                <p className="mb-6">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regular Events */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-denim">Past Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {regularEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
                <div className="w-full h-48 overflow-hidden bg-gray-100">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                <p className="text-denim font-medium mb-2">{event.date}</p>
                <p className="text-sm mb-4 line-clamp-3">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
