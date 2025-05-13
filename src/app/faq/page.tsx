"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "What is POP pilates?",
    answer:
      "POP Pilates was created by a famous YouTuber and blogger Cassey Ho, also known as Blogilates, in 2009. POP Pilates poses and moves all originate from classical Pilates and the fundamentals of breathing, core engagement and powerhouse-based movements are shared. However, the emphasis on moving to the beat of POP music is what makes POP Pilates so unique. Each 55 min. class is designed to feel more like a dance class than a typical exercise session, and the result is always super fun!",
  },
  {
    id: 2,
    question: "What is pilates?",
    answer:
      "Pilates is a physical fitness system developed in the early 20th century by Joseph Pilates, after whom it was named. If practiced with consistency, pilates improves flexibility, builds strength, and develops control and endurance throughout the entire body. It emphasizes alignment, breathing, developing a strong core, and improving coordination and balance. Pilates' system allows for different exercises to be modified in range of difficulty from beginner to advanced or to any other level, and also in terms of the instructor and practitioner's specific goals and/or limitations.",
  },
  {
    id: 3,
    question: "How do I join the UBC Pilates Club?",
    answer:
      "You can purchase a membership either online or at one of our classes. To purchase online, see the prices tab above. To purchase at one of our classes, ask one of our execs at the desk when you check in. To participate in a class, everyone is also required to pay the small attendance fee ($3 for members, $6 for non-members) at the door before entering.",
  },
  {
    id: 4,
    question: "What is the difference between yoga and pilates?",
    answer:
      "Pilates: Pilates classes focus on strength, muscle toning, body control, and flexibility, with a main emphasis on core strength. It focuses on strengthening your body while avoiding the constant shortening of muscles which can occur with most weight-lifting. This results in the development of long, lean muscles without added bulk. Yoga: Yoga focuses on flexibility and broad muscle groups. It aims to improve balance, endurance, strength and spirituality, along with some really physical movement. Classes can range from feeling gentle and nourishing to challenging and sweaty.",
  },
  {
    id: 5,
    question: "When are your classes?",
    answer:
      "Check our calendar page to see the time and location of our next class. You can also click here to sign up for our bi-weekly newsletter which includes information about upcoming classes, events and more!",
  },
  {
    id: 6,
    question: "If I'm not a member can I still attend classes?",
    answer:
      "Of course! We welcome all drop ins, and each class costs only $6 for non-members.",
  },
];


export default function FaqPage() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-[#224e70] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
              onClick={() => handleToggle(item.id)}
            >
              <h3 className="font-bold text-lg">{item.question}</h3>
              <span className="text-navy text-xl">
                {openItemId === item.id ? "−" : "+"}
              </span>
            </button>
            {openItemId === item.id && (
              <div className="px-5 pb-5 text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
