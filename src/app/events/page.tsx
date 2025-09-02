"use client";

import { motion } from "framer-motion";
import React from "react";

const events = [
  {
    id: 1,
    title: "UBC Pilates x XISC: International Themed Class",
    date: "March 28, 2025",
    image: "/group/pilates4.jpg",
    description: "International & Exchange Collab with XISC - music, flags, and candy from around the world.",
    featured: false,
  },
  {
    id: 2,
    title: "FIESTA",
    date: "March 27, 2025",
    image: "/group/pilates2.jpg",
    description: "An evening of pilates with a touch of fiesta, salsa, quinceañera, baila.",
    featured: false,
  },
  {
    id: 3,
    title: "UBC Pilates x Best Buddies: Spring Core & Slime",
    date: "March 20, 2025",
    image: "/group/slime.png",
    description: "Best Buddies and UBC Pilates present... Spring Core and Slime!",
    featured: false,
  },
  {
    id: 4,
    title: "K-POPilates",
    date: "March 18, 2025",
    image: "/group/kpop.png",
    description: "KPOP themed class!",
    featured: false,
  },
  {
    id: 5,
    title: "bunnies x pilates",
    date: "March 17, 2025",
    image: "/group/bunny.jpg",
    description: "Bunnys and pilates! Join us for a fun-filled class with adorable bunnies to cuddle with after class.",
    featured: false,
  },
  {
    id: 6,
    title: "UBC Muay Thai x Pilates: Women's History Month Event",
    date: "March 14, 2025",
    image: "/group/muaythai.jpeg",
    description: "An evening of muay thai, pilates, and fun chats!",
    featured: false,
  },
  {
    id: 7,
    title: "UBC Pilates x SISU: Key chain making & Pilates session",
    date: "March 6, 2025",
    image: "/group/sisu.png",
    description: "Join us for a fun-filled evening of key chain making and pilates session with SISU!",
    featured: false,
  },
  {
    id: 8,
    title: "Merry Makers Market",
    date: "December 4, 2024",
    image: "/group/merrymakers.png",
    description: "Merry making with Pilates + shopping discounts from small businesses.",
    featured: false,
  },
  {
    id: 9,
    title: "UBC Pilates x CSA: XMAS Core + Crafts",
    date: "December 6, 2024",
    image: "/group/xmas.png",
    description: "O Come All Ye Pilates & CSA Members to our last event of the year: a holiday collab!! There will be a photo booth, hot cocoa, gingerbread, and a core pilates class!",
    featured: false,
  },
  {
    id: 10,
    title: "Taylor Swift & Lana Del Rey themed class",
    date: "November 29, 2024",
    image: "/group/taylor.jpg",
    description: "Down on the west coast, we like to to get prepared for the Eras tour as a club! Come to our class early on Friday, November 29 for bracelet making before this tribute class begins! We will be playing music from Taylor and Lana!",
    featured: false,
  },
  {
    id: 11,
    title: "Short N' Sweet Pilates",
    date: "November 25, 2024",
    image: "/group/sabrina.png",
    description: "We’ll make you want to fall in love with the short n sweet themed class!!! 💎💎Where art thou?! Life 26! ❤️‍🔥❤️‍🔥",
    featured: false,
  },
  {
    id: 12,
    title: "UBC Pilates x Get Thrifty: Wellness Event",
    date: "October 18, 2024",
    image: "/group/thrift.png",
    description: "Pilates + Thrifting in one event!",
    featured: false,
  },
  {
    id: 13,
    title: "Clubs Fair",
    date: "September 23-24 2025",
    image: "/group/pilates5.jpg",
    description: "Get to know UBC Pilates Club! Check out our booth to learn more about the club & how you can participate.",
    featured: true,
  },
  {
    id: 14,
    title: "TBD",
    date: "2025",
    image: "/group/pilates1.jpg",
    description: "TBD",
    featured: true,
  },
];

export default function EventsPage() {
  const featuredEvents = events.filter(event => event.featured);
  const regularEvents = events.filter(event => !event.featured);

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
          {featuredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-64 object-cover"
              />
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
          {regularEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-64 object-cover"
              />
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