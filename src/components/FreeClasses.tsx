"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const freeClasses = [
  {
    id: 1,
    date: "August 4",
    day: "Tuesday",
    instructor: "Rachel",
    time: "7:30 - 8:30 PM",
    location: "LIFE 26",
  },
  {
    id: 2,
    date: "August 10",
    day: "Monday",
    instructor: "Elva",
    time: "3:30 - 4:30 PM",
    location: "LIFE 26",
  },
  {
    id: 3,
    date: "August 20",
    day: "Thursday",
    instructor: "Lillian",
    time: "11:00 - 12:00 PM",
    location: "Online (Zoom link in our Instagram bio)",
  },
  {
    id: 4,
    date: "August 26",
    day: "Wednesday",
    instructor: "Arneet",
    time: "4:30 - 5:40 PM",
    location: "LIFE 5",
  },
];

const FreeClasses = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-lightyellow/25 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-[#3880c8] text-white text-sm font-bold tracking-wide uppercase py-1 px-4 rounded-full mb-4">
            Free Summer Classes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2a43] mb-6">
            August Free Classes 2026
          </h2>
          <p className="text-lg text-cyan-800 max-w-3xl mx-auto leading-relaxed mb-4">
            We&apos;re kicking off August with{" "}
            <span className="font-semibold text-cyan-900">
              FREE summer classes!
            </span>{" "}
            Join us in person or online to meet our newest instructors — all
            levels welcome. 💙
          </p>
          <p className="text-base text-navy max-w-3xl mx-auto leading-relaxed font-medium">
            ❗ First come, first served — mats provided for in-person classes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl shadow-xl border-4 border-white bg-white"
        >
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#3880c8] text-white">
                <th className="py-4 px-5 font-bold">Date</th>
                <th className="py-4 px-5 font-bold">Instructor</th>
                <th className="py-4 px-5 font-bold">Time</th>
                <th className="py-4 px-5 font-bold">Location</th>
              </tr>
            </thead>
            <tbody>
              {freeClasses.map((cls, index) => (
                <tr
                  key={cls.id}
                  className={index % 2 === 0 ? "bg-lightyellow/50" : "bg-lightyellow/25"}
                >
                  <td className="py-4 px-5 text-navy font-semibold">
                    {cls.date}
                    <span className="block text-sm font-normal text-denim">
                      {cls.day}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-navy">{cls.instructor}</td>
                  <td className="py-4 px-5 text-navy">{cls.time}</td>
                  <td className="py-4 px-5 text-navy">{cls.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <Link
            href="https://www.instagram.com/ubcpilatesclub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow UBC Pilates Club on Instagram for the online class link"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3880c8] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 min-w-48"
            >
              Follow Us for Updates
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeClasses;
