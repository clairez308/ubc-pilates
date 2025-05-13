"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const classSchedule = [
  {
    id: 1,
    instructor: "Courtney",
    time: "9:30 - 10:30 am",
    day: "Monday",
    location: "Life 26",
  },
  {
    id: 2,
    instructor: "Annette",
    time: "4:30 - 5:30 pm",
    day: "Tuesday",
    location: "Life 26",
  },
  {
    id: 3,
    instructor: "Avishi",
    time: "4 - 5 pm",
    day: "Wednesday",
    location: "Life 26",
  },
  {
    id: 4,
    instructor: "Simren",
    time: "5 - 6 pm",
    day: "Thursday",
    location: "Life 26",
  },
  {
    id: 5,
    instructor: "Mauli",
    time: "5 - 6 pm",
    day: "Friday",
    location: "Life 26",
  },
];

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function CalendarPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-navy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Class Schedule
      </motion.h2>

      {/* Calendar grid */}
      <div className="grid grid-cols-5 gap-1 mb-8">
        {weekdays.map((day) => (
          <div
            key={day}
            className="text-center p-4 font-bold bg-lightyellow text-navy"
          >
            {day}
          </div>
        ))}

        {/* Instructors */}
        {weekdays.map((day) => {
          const classForDay = classSchedule.find((cls) => cls.day === day);
          return (
            <div
              key={`instructor-${day}`}
              className="text-center p-4 flex items-center justify-center bg-[#fefac7] text-navy"
            >
              {classForDay && (
                <div className="flex items-center">
                  <span className="font-medium">{classForDay.instructor}</span>
                </div>
              )}
            </div>
          );
        })}

        {/* Times */}
        {weekdays.map((day) => {
          const classForDay = classSchedule.find((cls) => cls.day === day);
          return (
            <div
              key={`time-${day}`}
              className="text-center p-4 bg-[#fefcd9] text-navy"
            >
              {classForDay && <span>{classForDay.time}</span>}
            </div>
          );
        })}

        {/* Locations */}
        {weekdays.map((day) => {
          const classForDay = classSchedule.find((cls) => cls.day === day);
          return (
            <div
              key={`location-${day}`}
              className="text-center p-4 bg-[#d9f7fa] text-navy"
            >
              {classForDay && <span>{classForDay.location}</span>}
            </div>
          );
        })}
      </div>
      
      {/* Buttons*/}
      <div className="w-full flex justify-center mt-10">
        <motion.div
          className="flex flex-row gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="/prices"
            className="relative overflow-hidden group bg-white text-[#3d98c6] font-medium py-3 px-6 rounded-full border-2 border-[#3d98c6] hover:text-white transition-colors duration-300 w-48 text-center"
          >
            <span className="relative z-10">Purchase a Membership</span>
            <span className="absolute inset-0 bg-[#3d98c6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeyluXoTO7Z26UAcifrruRJBz0HnJsJnm2N-F8vCcCZn2udXQ/viewform"
            className="relative overflow-hidden group bg-white text-[#3d98c6] font-medium py-3 px-6 rounded-full border-2 border-[#3d98c6] hover:text-white transition-colors duration-300 w-48 text-center"
          >
            <span className="relative z-10">Book a Class</span>
            <span className="absolute inset-0 bg-[#3d98c6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}