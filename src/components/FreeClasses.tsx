"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

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
    <section className="relative py-16 sm:py-20 bg-lightyellow border-y-2 border-ink overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-ink text-white text-sm font-bold tracking-wide uppercase py-1 px-4 rounded-full mb-4">
            Free Summer Classes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink mb-6 tracking-tight">
            August Free Classes 2026
          </h2>
          <p className="text-lg text-ink/80 max-w-3xl mx-auto leading-relaxed mb-4">
            We&apos;re kicking off August with{" "}
            <span className="font-bold text-ink">FREE summer classes!</span>{" "}
            Join us in person or online to meet our newest instructors — all
            levels welcome. 💙
          </p>
          <p className="text-base text-ink max-w-3xl mx-auto leading-relaxed font-bold">
            ❗ First come, first served — mats provided for in-person classes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-xl border-2 border-ink shadow-[6px_6px_0_0_#004669] bg-white"
        >
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-aqua text-ink border-b-2 border-ink">
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
                  className={`border-t-2 border-ink/10 ${
                    index % 2 === 0 ? "bg-white" : "bg-cream"
                  }`}
                >
                  <td className="py-4 px-5 text-ink font-bold">
                    {cls.date}
                    <span className="block text-sm font-normal text-ink/60">
                      {cls.day}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-ink">{cls.instructor}</td>
                  <td className="py-4 px-5 text-ink">{cls.time}</td>
                  <td className="py-4 px-5 text-ink">{cls.location}</td>
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
          <Button
            href="https://www.instagram.com/ubcpilatesclub"
            variant="primary"
            ariaLabel="Follow UBC Pilates Club on Instagram for the online class link (opens in new tab)"
            className="min-w-48"
          >
            Follow Us for Updates
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeClasses;
