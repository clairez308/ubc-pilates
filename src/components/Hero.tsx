"use client";

import { motion } from "framer-motion";
// import React, {useEffect, useState} from "react";
import Link from "next/link";
import Stack from "./Stack";
const retreatImages = [
  { id: 1, img: "/retreat/retreat1.jpeg" },
  { id: 2, img: "/retreat/retreat2.jpeg" },
  { id: 3, img: "/retreat/retreat3.jpeg" },
  { id: 4, img: "/retreat/retreat4.jpeg" },
  { id: 5, img: "/retreat/retreat5.jpeg" },
];

const Hero = () => {
  return (
    <>
      <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
        {/* Main Hero Section */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-16 pb-12">
              {/* Hero Content */}
              <div className="text-center mb-16">
                <div className="flex justify-center items-start gap-8 mb-8 flex-wrap">
                  {/* Left photo frame - ADD YOUR PHOTO HERE */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, rotate: -8 }}
                    animate={{ opacity: 1, x: 0, rotate: -6 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block"
                  >
                    <div className="bg-white p-4 rounded-2xl shadow-xl transform -rotate-6 border-4 border-cyan-200">
                      <div className="w-48 h-48 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src="/group/pilates5.jpg"
                          alt="Pilates class"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Main Heading and Subheading */}
                  <div className="flex-1 max-w-2xl">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r text-[#4EC1DA] leading-tight drop-shadow-lg">
                      UBC
                      <br />
                      Pilates Club
                    </h1>
                    <h2 className="text-xl md:text-2xl text-navy max-w-2xl mx-auto mb-8">
                      POP Pilates classes designed for students, by students
                    </h2>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                      <Link
                        href="/calendar"
                        aria-label="View UBC Pilates class schedule"
                      >
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-[#a1f3ed] to-[#3880c8] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 min-w-48"
                        >
                          View Classes
                        </motion.button>
                      </Link>
                      <Link
                        href="/prices"
                        aria-label="View UBC Pilates membership pricing"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-navy font-bold py-4 px-8 rounded-full text-lg border-2 border-cyan-500 hover:bg-cyan-50 transition-all duration-300 min-w-48"
                        >
                          Membership Options
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>
                  {/* Right photo frame - ADD YOUR PHOTO HERE */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 8 }}
                    animate={{ opacity: 1, x: 0, rotate: 6 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block"
                  >
                    <div className="bg-white p-4 rounded-2xl shadow-xl transform rotate-6 border-4 border-cyan-200">
                      <div className="w-48 h-48 bg-gradient-to-br from-pink-200 to-purple-300 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src="/group/pilates4.jpg"
                          alt="Pilates class"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="relative py-20 bg-[#e0f4ff] rounded-t-3xl shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
                Why UBC students love it here
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🧘",
                  title: "Student-Focused Classes",
                  description:
                    "Pilates classes designed to fit into your busy schedules!",
                  color: "bg-[#e0f4ff]",
                },
                {
                  icon: "💵",
                  title: "Affordable Rates",
                  description: "Budget-friendly classes for active students",
                  color: "bg-[#e0f4ff]",
                },
                {
                  icon: "👥",
                  title: "UBC Community",
                  description:
                    "Connect with other pilates enthusiasts and build friendships 💙",
                  color: "bg-[#e0f4ff]",
                },
                {
                  icon: "🌍",
                  title: "Inclusive Environment",
                  description:
                    "Accessible pilates classes for all experience levels at UBC!",
                  color: "bg-[#e0f4ff]",
                },
              ].map((feature, index) => (
                <motion.article
                  key={index}
                  className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-[#e0f4ff]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className={`h-20 w-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl ${feature.color}`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-[#333333]">
                    {feature.title}
                  </h3>
                  <p className="text-center text-[#3d98c6]">
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        {/* <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl md:text-5xl font-black text-navy mb-4">
              UBC Pilates Community in Action
            </h2>
          </div>
        </section> */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-4xl font-black text-navy mb-4">
              UBC Pilates Community in Action
            </h2>
            <div className="flex justify-center">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cardDimensions={{ width: 300, height: 300 }}
                cardsData={retreatImages}
              />
            </div>
            <p className="mt-6 text-cyan-700 text-lg">
              Swipe through moments from our unforgettable retreat!
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-skyblue via-denim to-skyblue"></div>
          <div className="absolute inset-0 bg-black/10"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Start Your Pilates Journey?
            </h2>
            <p className="text-xl md:text-1xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join UBC Pilates Club for a class and experience the benefits of
              pilates with fellow students!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/prices"
                aria-label="Sign up for UBC Pilates Club membership"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-cyan-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 min-w-48"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Hero;
