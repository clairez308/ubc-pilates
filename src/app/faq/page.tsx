"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      "You can purchase a membership either online or at one of our classes. To purchase online, see the prices tab above. To purchase at one of our classes, ask one of our execs at the desk when you check in. To participate in a class, everyone is also required to pay the small attendance fee at the door before entering.",
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
      "Check our calendar page to see the time and location of our next class. You can also sign up for our bi-weekly newsletter which includes information about upcoming classes, events and more (sign up below)!",
  },
  {
    id: 6,
    question: "If I'm not a member can I still attend classes?",
    answer:
      "Of course! We welcome all drop ins - see the Prices page for cost for non-members.",
  },
];

export default function FaqPage() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <motion.h1
        className="font-heading text-4xl text-center text-ink mb-10 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h1>

      {/* FAQ Items */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqItems.map((item, index) => {
          const isOpen = openItemId === item.id;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -2, boxShadow: "6px 6px 0 0 #004669" }}
              style={{ boxShadow: "4px 4px 0 0 #004669" }}
              className="bg-white rounded-xl border-2 border-ink overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center group"
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <h3 className="font-bold text-lg md:text-xl text-ink pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-ink transition-colors ${
                      isOpen ? "bg-ink text-white" : "bg-lightyellow text-ink"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t-2 border-ink/10">
                      <div className="w-16 h-1.5 bg-denim rounded-full mb-4 mt-4"></div>
                      <p className="text-ink/70 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
