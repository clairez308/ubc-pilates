"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const classSchedule = [
  {
    id: 1,
    instructor: "Maya & Giulia",
    time: "5:00 - 6:00 pm",
    day: "Monday",
    location: "Life 26",
  },
  {
    id: 2,
    instructor: "Alina & Adriana",
    time: "5:00 - 6:00 pm",
    day: "Tuesday",
    location: "Life 26",
  },
  {
    id: 3,
    instructor: "Maggie",
    time: "7:30 - 8:30 pm",
    day: "Wednesday",
    location: "Performance Theatre",
  },
  {
    id: 4,
    instructor: "Mauli",
    time: "4:00 - 5:00 pm",
    day: "Thursday",
    location: "NEST 2301",
  },
  {
    id: 5,
    instructor: "Romina",
    time: "4:30 - 5:30 pm",
    day: "Friday",
    location: "NEST 2301",
  },
];

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function CalendarPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 bg-cream">
      <motion.h1
        className="font-heading text-4xl text-center mb-5 text-ink tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Class Schedule
      </motion.h1>
      <motion.p
          className="text-sm text-center text-ink/60 italic max-w-3xl mb-8 mx-auto mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          All classes & physical membership cards are first come first serve.
        </motion.p>

      {/* Calendar grid */}
      <div className="grid grid-cols-5 divide-x-2 divide-y-2 divide-ink border-2 border-ink rounded-xl overflow-hidden mb-8 shadow-[4px_4px_0_0_#004669]">
        {weekdays.map((day, i) => (
          <motion.div
            key={day}
            className="text-center p-4 font-bold bg-aqua text-ink"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {day}
          </motion.div>
        ))}

        {/* Instructors */}
        {weekdays.map((day, i) => {
          const classForDay = classSchedule.find((cls) => cls.day === day);
          return (
            <motion.div
              key={`instructor-${day}`}
              className="text-center p-4 flex items-center justify-center bg-white text-ink hover:bg-lightyellow/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.1 }}
            >
              {classForDay && (
                <span className="font-bold text-sm sm:text-base">
                  {classForDay.instructor}
                </span>
              )}
            </motion.div>
          );
        })}

        {/* Times */}
        {weekdays.map((day, i) => {
          const classForDay = classSchedule.find((cls) => cls.day === day);
          return (
            <motion.div
              key={`time-${day}`}
              className="text-center p-4 bg-cream text-ink hover:bg-lightyellow/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.15 }}
            >
              {classForDay && (
                <span className="text-sm sm:text-base">{classForDay.time}</span>
              )}
            </motion.div>
          );
        })}

        {/* Locations */}
        {weekdays.map((day, i) => {
          const classForDay = classSchedule.find((cls) => cls.day === day);
          return (
            <motion.div
              key={`location-${day}`}
              className="text-center p-4 bg-white text-ink hover:bg-lightyellow/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
            >
              {classForDay && (
                <span className="text-sm sm:text-base">{classForDay.location}</span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Buttons*/}
      <div className="w-full flex justify-center mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button href="/prices" variant="primary" className="whitespace-nowrap">
            Purchase a Membership
          </Button>
        </motion.div>
      </div>
    </div>
  );
}